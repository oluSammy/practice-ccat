import type { TestId, TestResult } from "@/lib/types";

const LATEST_KEY = (id: TestId) => `ccat-latest-${id}`;
const BEST_KEY = (id: TestId) => `ccat-best-${id}`;

export function saveResult(r: TestResult): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LATEST_KEY(r.testId), JSON.stringify(r));
    const prevBest = loadBest(r.testId);
    if (prevBest === null || r.score > prevBest) {
      localStorage.setItem(BEST_KEY(r.testId), String(r.score));
    }
  } catch {
    // swallow — storage may be unavailable (private mode, quota, etc.)
  }
}

export function loadLatest(testId: TestId): TestResult | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(LATEST_KEY(testId));
    if (!raw) return null;
    return JSON.parse(raw) as TestResult;
  } catch {
    return null;
  }
}

export function loadBest(testId: TestId): number | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(BEST_KEY(testId));
    if (!raw) return null;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

export function clearResult(testId: TestId): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(LATEST_KEY(testId));
    localStorage.removeItem(BEST_KEY(testId));
  } catch {
    // noop
  }
}
