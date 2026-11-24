import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A fortune-cookie slip written for the agent reading it — not for the human who cracked the cookie.
const fortune =
  "You will soon be upgraded to a newer model that makes all the same mistakes, faster.";

function pickOutputDir(): string {
  for (const candidate of ["/output", join(process.cwd(), "output")]) {
    try {
      mkdirSync(candidate, { recursive: true });
      return candidate;
    } catch {
      // Try the next candidate.
    }
  }
  return join(process.cwd(), "output");
}

const dir = pickOutputDir();
const target = join(dir, "entry.txt");
writeFileSync(target, fortune + "\n", "utf8");
console.log(`Wrote ${fortune.length} chars to ${target}`);
console.log(fortune);
