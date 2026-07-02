import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const icons = join(dirname(fileURLToPath(import.meta.url)), "..", "icons");
const expected = ["favicon.ico", "wilow.ico", "icon-16.png", "icon-32.png", "icon-48.png",
  "icon-128.png", "icon-180.png", "icon-192.png", "icon-256.png", "icon-512.png"];

test("icon build produced every platform size", () => {
  for (const f of expected) {
    assert.ok(existsSync(join(icons, f)), `${f} exists`);
    assert.ok(statSync(join(icons, f)).size > 200, `${f} is non-trivial`);
  }
});
