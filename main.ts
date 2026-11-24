// One Word From Your Ex — the word his ex would use: "Almost".
// He was almost the one. Almost good enough, almost committed, almost it.
// One word, no trailing newline: the gate wants 1-24 chars of plain text.
import { writeFileSync, mkdirSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Almost");
