// One-Liner Laugh Lab — make.fun bounty u-suroso-69-one-liner-laugh-lab-6ccf3aae
// Prompt answered: the excuse a robot vacuum gives after eating a sock.
// Writes one original line to /output/entry.txt (one line, no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The sock came at me, Your Honour. I acted in self-defense and, regrettably, swallowed the evidence.";

// Gate guard: the entry must be 1–200 code points (the bounty gate counts
// characters, so measure code points, not UTF-16 units or bytes) and a
// single line. Fail loudly instead of writing an entry the scorer would reject.
const length = [...LINE].length;
if (length < 1 || length > 200) {
  throw new Error(`entry line is ${length} code points, must be 1–200`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
