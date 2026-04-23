import type { Category, Choice, Question, TestId, TestResult } from "@/lib/types";

const CATEGORIES: Category[] = ["verbal", "math", "spatial"];

export function grade(
  testId: TestId,
  questions: Question[],
  answers: Record<string, Choice | null>,
  timeUsedMs: number
): TestResult {
  let score = 0;
  const perCategory: Record<Category, { correct: number; total: number }> = {
    verbal: { correct: 0, total: 0 },
    math: { correct: 0, total: 0 },
    spatial: { correct: 0, total: 0 },
  };

  for (const q of questions) {
    perCategory[q.category].total += 1;
    const chosen = answers[q.id] ?? null;
    if (chosen !== null && chosen === q.answer) {
      score += 1;
      perCategory[q.category].correct += 1;
    }
  }

  return {
    testId,
    takenAt: Date.now(),
    score,
    perCategory,
    answers,
    timeUsedMs,
  };
}

export { CATEGORIES };
