import { mkdirSync, writeFileSync } from "node:fs";

// One short family scene: warm, funny, heartfelt.
// Grandma, a biscuit tin of "art", and a solemn little gallery-goer.
const SCENE: string =
  "Grandma keeps my childhood drawings in a biscuit tin marked " +
  "'DO NOT THROW AWAY \u2014 ART', and every Sunday she shows my daughter " +
  "the same crooked house like it's the Mona Lisa.\n";
const SCENE2: string =
  "My daughter nods solemnly, like she's at a gallery.";

const TEXT: string = SCENE + SCENE2;

// Deterministic: same bytes on every run. The grader bind-mounts
// /output, so never delete it; create it if missing and overwrite
// entry.txt in place, with no trailing newline.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
