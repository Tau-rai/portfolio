// Renders resume/resume.html to public/taurai-masaire-resume.pdf with headless Chrome.
// Usage: CHROME_PATH="/path/to/chrome" npm run resume
import { execFileSync } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const chrome = process.env.CHROME_PATH;
if (!chrome) {
  console.error("CHROME_PATH is not set. Point it at a Chrome/Chromium binary, e.g.\n  CHROME_PATH=\"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome\" npm run resume");
  process.exit(1);
}

const source = pathToFileURL(resolve("resume/resume.html")).href;
const output = resolve("public/taurai-masaire-resume.pdf");

execFileSync(chrome, [
  "--headless=new",
  "--disable-gpu",
  "--no-pdf-header-footer",
  "--virtual-time-budget=8000",
  `--user-data-dir=${mkdtempSync(join(tmpdir(), "resume-chrome-"))}`,
  `--print-to-pdf=${output}`,
  source,
], { stdio: "inherit" });

console.log(`Résumé written to ${output}`);
