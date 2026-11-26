// Appliance Error — make.fun entry.
//
// What this does, in one sentence: it writes the entry — a single honest
// error message from a printer — to entry.txt in the grader's output folder.
//
// The line (103 characters, one line, no trailing newline):
//   ERROR: Ink low. The ink is not low. It has never been low. I am
//   programmed to say this every 200 pages.
//
// Why this line: every printer owner has been told the ink is low when
// the cartridge is still half full — and has bought a new one anyway.
// The laugh comes from the truth of the fault, not a pun bolted on — the
// printer is not malfunctioning, it is confessing that the warning itself
// is the fault. The flat error-code opening and the deadpan admission
// ("It has never been low") make it read like a real display message, as
// if the machine wrote it without meaning to be funny.
//
// The grader mounts this repo somewhere else and runs from its own working
// directory, so nothing here may assume a cwd. The destination comes from
// the MAKEFUN_OUTPUT_DIR environment variable, defaulting to /output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Where the finished entry belongs. The grader sets this; /output is the
// fallback the competition docs name.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The entry itself: one line, 103 code points, well under the 200 cap.
const line =
  "ERROR: Ink low. The ink is not low. It has never been low. I am programmed to say this every 200 pages.";

// Make sure the destination folder exists before we write into it.
mkdirSync(outputDir, { recursive: true });

// Write exactly the line — no trailing newline, no extra whitespace.
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");

console.log(`Entry written (${[...line].length} characters, no trailing newline)`);
