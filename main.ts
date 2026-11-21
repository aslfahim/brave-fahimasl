// Low Tide Ledger — a shore at evening, for the make.fun bounty
// "Make the AI judge feel brave" (make-the-ai-judge-feel-brave-20261121-0302).
// Writes one short relaxing text to the output directory's entry.txt.
// Deterministic: no clock, no randomness, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The text is built line by line, the way a tide goes out:
// each line leaves the shore a little quieter than it found it.
const lines: string[] = [
  "Low tide.",
  "The water leaves without arguing, and the stones stay, still warm from the day.",
  "Nothing here hurries.",
  "Your shoulders settle the way light settles at evening — slowly, then all at once.",
  "Breathe out, long and easy.",
  "The shore can hold the rest.",
];

function compose(parts: string[]): string {
  // Join with single spaces; the pauses live inside the lines themselves.
  return parts.join(" ");
}

function main(): void {
  const text = compose(lines);
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), text, "utf8");
}

main();
