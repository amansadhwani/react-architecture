#!/usr/bin/env node

import fs from "node:fs";

const commitMsgFile = process.argv[2];
const message = fs.readFileSync(commitMsgFile, "utf8").trim();

// Must start with AS- followed by 1-9 digits.
// Examples:
// AS-1
// AS-25
// AS-1234
const commitRegex = /^AS-\d{1,9}\b/;

if (!commitRegex.test(message)) {
  console.error("\n❌ Invalid commit message.\n");
  console.error("Commit messages must start with:");
  console.error("  AS-1234");
  console.error("\nExamples:");
  console.error("  AS-1234 feat: add login page");
  console.error("  AS-25 fix: handle API timeout");
  console.error("  AS-999 refactor: simplify auth flow\n");
  process.exit(1);
}
