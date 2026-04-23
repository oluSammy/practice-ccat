import type { Question, TestId } from "@/lib/types";
import test1 from "./test1";
import test2 from "./test2";
import test3 from "./test3";
import test4 from "./test4";

export const TESTS: Record<TestId, Question[]> = {
  1: test1,
  2: test2,
  3: test3,
  4: test4,
};

export function getTest(id: TestId): Question[] {
  return TESTS[id];
}

export function isValidTestId(n: number): n is TestId {
  return n === 1 || n === 2 || n === 3 || n === 4;
}
