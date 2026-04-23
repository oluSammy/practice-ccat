export type Category = "verbal" | "math" | "spatial";

export type Choice = "A" | "B" | "C" | "D" | "E";

export interface Option {
  key: Choice;
  /** Used for verbal / math / logic questions. */
  text?: string;
  /** Used for spatial questions — inline SVG markup. */
  svg?: string;
}

export interface Question {
  id: string;
  category: Category;
  /** Prompt text. May be empty for pure spatial questions. */
  prompt: string;
  /** Optional stimulus SVG rendered above the options (spatial figures). */
  figureSvg?: string;
  options: Option[];
  answer: Choice;
  explanation: string;
}

export type TestId = 1 | 2 | 3 | 4;

export interface TestResult {
  testId: TestId;
  takenAt: number;
  score: number;
  perCategory: Record<Category, { correct: number; total: number }>;
  answers: Record<string, Choice | null>;
  timeUsedMs: number;
}
