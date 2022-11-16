# Vitest PR 2330 Reproduction

This is a short reproduction of https://github.com/vitest-dev/vitest/pull/2330

To verify:

1. `npm install`
2. `npm test`

This will fail with "No test files found."

If you change the vitest version to 0.24.3 everything works as expected:

```diff
   "devDependencies": {
-    "vitest": "^0.25.2"
+    "vitest": "0.24.3"
   }
```
