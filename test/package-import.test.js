import test from 'node:test'; import assert from 'node:assert/strict'; import { readFile } from 'node:fs/promises';
test('Angular package exposes public entry point', async () => { const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8')); assert.equal(pkg.name, '@workspace/component-library-angular'); assert.ok(pkg.peerDependencies['@angular/core']); });
