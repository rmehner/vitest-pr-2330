/// <reference types="vitest" />

import { defineConfig } from "vite";
import { join } from "node:path";
import * as url from "node:url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  root: join(__dirname, "app", "javascript"),
  test: {
    dir: join(__dirname, "spec", "javascript"),
  },
});
