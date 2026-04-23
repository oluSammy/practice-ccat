import { TESTS } from "@/lib/questions";
import type { Category, Choice, Question } from "@/lib/types";

const ALLOWED_CHOICES: Choice[] = ["A", "B", "C", "D", "E"];
const EXPECTED_DIST: Record<Category, number> = {
  verbal: 17,
  math: 17,
  spatial: 16,
};

let errors = 0;
const note = (msg: string) => {
  console.error("  ✗", msg);
  errors += 1;
};
const ok = (msg: string) => console.log("  ✓", msg);

const allPrompts = new Map<string, string>(); // prompt → qid
const allIds = new Set<string>();

function validateQuestion(q: Question, ctx: string) {
  if (allIds.has(q.id)) note(`${ctx}: duplicate id ${q.id}`);
  allIds.add(q.id);

  if (!ALLOWED_CHOICES.includes(q.answer)) {
    note(`${q.id}: answer "${q.answer}" is not in A–E`);
  }

  const keys = q.options.map((o) => o.key);
  if (new Set(keys).size !== keys.length) {
    note(`${q.id}: duplicate option keys`);
  }
  if (!keys.includes(q.answer)) {
    note(`${q.id}: answer ${q.answer} not among option keys [${keys.join(",")}]`);
  }
  for (const opt of q.options) {
    if (!opt.text && !opt.svg) {
      note(`${q.id}: option ${opt.key} has neither text nor svg`);
    }
  }
  if (!q.explanation || q.explanation.trim().length < 20) {
    note(`${q.id}: explanation too short (< 20 chars)`);
  }

  // Cross-test duplicate prompt check. Spatial questions are distinguished by
  // their figureSvg, not the prompt text (which is typically a generic instruction
  // like "Which figure does NOT belong?"), so skip them here.
  if (q.category !== "spatial") {
    const p = (q.prompt || "").trim();
    if (p) {
      const prior = allPrompts.get(p);
      if (prior) note(`${q.id}: duplicate prompt text already used in ${prior}`);
      else allPrompts.set(p, q.id);
    }
  }
}

for (const [idStr, qs] of Object.entries(TESTS)) {
  const label = `Test ${idStr}`;
  console.log(`\n${label}`);

  if (qs.length !== 50) note(`${label}: expected 50 questions, got ${qs.length}`);
  else ok(`50 questions`);

  const counts: Record<Category, number> = { verbal: 0, math: 0, spatial: 0 };
  for (const q of qs) {
    counts[q.category] += 1;
    validateQuestion(q, label);
  }
  for (const cat of Object.keys(EXPECTED_DIST) as Category[]) {
    if (counts[cat] !== EXPECTED_DIST[cat]) {
      note(`${label}: expected ${EXPECTED_DIST[cat]} ${cat} questions, got ${counts[cat]}`);
    } else {
      ok(`${counts[cat]} ${cat} questions`);
    }
  }

  // Answer distribution sanity (not an error, just informational)
  const ansDist: Record<Choice, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  for (const q of qs) ansDist[q.answer] += 1;
  console.log(
    `  · answer key distribution: ` +
      (Object.entries(ansDist) as [Choice, number][])
        .map(([k, v]) => `${k}=${v}`)
        .join(" ")
  );
}

console.log("\n" + (errors === 0 ? "✅ All checks passed." : `❌ ${errors} error(s) found.`));
process.exit(errors === 0 ? 0 : 1);
