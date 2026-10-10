const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

const source = ts.transpileModule(fs.readFileSync('app/api/contact/route.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
}).outputText;
const valid = { nome: 'Teste', email: 'visitante@example.com', empresa: 'Empresa', mensagem: 'Uma mensagem de teste.' };

function load({ configured = true, outcome = { accepted: ['contato@example.com'], rejected: [] } } = {}) {
  const captured = { sends: 0, closed: false, logs: [] };
  const env = configured ? {
    SMTP_HOST: 'smtp.example.com', SMTP_PORT: '465', SMTP_USER: 'contato@example.com',
    SMTP_PASS: 'test-only-password', SMTP_FROM: 'contato@example.com', SMTP_TO: 'contato@example.com',
  } : {};
  const exports = {};
  vm.runInNewContext(source, {
    exports,
    process: { env },
    console: { error: (...args) => captured.logs.push(args.join(' ')) },
    require(name) {
      if (name === 'next/server') return require('next/server');
      if (name === 'nodemailer') return {
        createTransport(options) {
          captured.options = options;
          return {
            async sendMail(message) {
              captured.sends++;
              captured.message = message;
              if (outcome instanceof Error) throw outcome;
              return outcome;
            },
            close() { captured.closed = true; },
          };
        },
      };
      throw new Error(`Unexpected import: ${name}`);
    },
  });
  return { route: exports, captured };
}
const request = body => ({ json: async () => body });

test('invalid optional company, email/header injection and oversized message never send', async () => {
  for (const body of [
    { ...valid, empresa: 123 }, { ...valid, email: 'a@b' },
    { ...valid, email: 'a@example.com\r\nBcc: victim@example.com' },
    { ...valid, nome: 'Teste\r\nBcc: victim@example.com' },
    { ...valid, mensagem: 'a'.repeat(2001) },
  ]) {
    const { route, captured } = load();
    assert.equal((await route.POST(request(body))).status, 400);
    assert.equal(captured.sends, 0);
  }
});

test('malformed JSON returns 400', async () => {
  const { route } = load();
  assert.equal((await route.POST({ json: async () => { throw new SyntaxError(); } })).status, 400);
});

test('missing configuration cannot produce false success', async () => {
  const { route, captured } = load({ configured: false });
  assert.equal((await route.POST(request(valid))).status, 503);
  assert.equal(captured.sends, 0);
});

test('accepted SMTP message uses fixed sender and recipient, visitor reply-to, and TLS', async () => {
  const { route, captured } = load();
  const response = await route.POST(request({ ...valid, mensagem: '<script>literal text</script>' }));
  assert.equal(response.status, 200);
  assert.equal((await response.json()).success, true);
  assert.equal(captured.options.secure, true);
  assert.equal(captured.options.port, 465);
  assert.equal(captured.message.from.address, 'contato@example.com');
  assert.equal(captured.message.to, 'contato@example.com');
  assert.equal(captured.message.replyTo.address, valid.email);
  assert.equal(captured.message.html, undefined);
  assert.ok(captured.message.text.includes('<script>literal text</script>'));
  assert.equal(captured.closed, true);
});

test('SMTP failure/rejection returns 502 without leaking credentials or server details', async () => {
  for (const outcome of [new Error('test-only-password private SMTP details'), { accepted: [], rejected: ['contato@example.com'] }]) {
    const { route, captured } = load({ outcome });
    const response = await route.POST(request(valid));
    assert.equal(response.status, 502);
    const logsAndResponse = captured.logs.join(' ') + JSON.stringify(await response.json());
    assert.ok(!logsAndResponse.includes('test-only-password'));
    assert.ok(!logsAndResponse.includes(valid.mensagem));
    assert.equal(captured.closed, true);
  }
});

test('GET returns method not allowed', async () => {
  assert.equal((await load().route.GET()).status, 405);
});
