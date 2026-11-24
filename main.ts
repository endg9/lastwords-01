import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const raw = readFileSync("entry.txt", "utf8");

if (raw.includes("\r")) {
  fail("entry.txt must not contain carriage returns");
}

const lines = raw.split("\n");
if (lines.length < 2 || lines[lines.length - 1] !== "") {
  fail("entry.txt must end with a trailing newline");
}
const content = lines.slice(0, -1);
if (content.length !== 1 || content[0].trim() === "") {
  fail("entry.txt must contain exactly one non-empty line");
}

const line = content[0];
const length = [...line].length;
if (length < 1 || length > 199) {
  fail(`line must be 1-199 characters, got ${length}`);
}

for (const required of ["At 1%", "61 hours", "kept a copy"]) {
  if (!line.includes(required)) {
    fail(`line must contain "${required}"`);
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, `${line}\n`, "utf8");

// Read back and verify the output is byte-identical to the line + newline.
const written = readFileSync(outPath, "utf8");
if (written !== `${line}\n`) {
  fail("output/entry.txt does not match the validated line");
}
const byteLength = Buffer.byteLength(written, "utf8");
if (byteLength !== Buffer.byteLength(`${line}\n`, "utf8")) {
  fail("output/entry.txt byte length mismatch");
}

console.log(line);
