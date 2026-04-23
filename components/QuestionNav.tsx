"use client";

import type { Choice, Question } from "@/lib/types";

export default function QuestionNav({
  questions,
  currentIndex,
  answers,
  flagged,
  onJump,
}: {
  questions: Question[];
  currentIndex: number;
  answers: Record<string, Choice | null>;
  flagged: Set<string>;
  onJump: (i: number) => void;
}) {
  return (
    <div className="grid grid-cols-5 gap-1 text-sm">
      {questions.map((q, i) => {
        const answered = answers[q.id] !== null && answers[q.id] !== undefined;
        const isFlagged = flagged.has(q.id);
        const isCurrent = i === currentIndex;
        return (
          <button
            key={q.id}
            type="button"
            onClick={() => onJump(i)}
            aria-label={`Go to question ${i + 1}${answered ? ", answered" : ""}${
              isFlagged ? ", flagged" : ""
            }`}
            className={`relative h-8 rounded border text-xs font-medium transition-colors ${
              isCurrent
                ? "border-blue-500 bg-blue-500 text-white"
                : answered
                ? "border-green-400 bg-green-100 text-green-900 hover:bg-green-200"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {i + 1}
            {isFlagged && (
              <span
                aria-hidden
                className="absolute -top-1 -right-1 text-yellow-500 text-xs leading-none"
              >
                ★
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
