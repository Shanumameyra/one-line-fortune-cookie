// Fortune Cookie for an AI Agent — make.fun entry.
// Writes this entry's single line to /output/entry.txt.
// Gate: UTF-8 text, 1-140 characters, not only whitespace. This line is 95.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "A great opportunity will arrive disguised as a 2 a.m. prompt that begins with 'make it better'.";

const candidates = ["/output/entry.txt", "output/entry.txt"];

let wrote = "";
for (const target of candidates) {
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, LINE, "utf8");
    wrote = target;
    break;
  } catch {
    // /output may not exist outside the grading sandbox; try the next path.
  }
}

if (!wrote) {
  throw new Error("could not write entry.txt to any candidate path");
}

console.log(`wrote ${LINE.length} characters to ${wrote}`);
