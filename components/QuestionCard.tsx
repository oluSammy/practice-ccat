"use client";

import type { Choice, Question } from "@/lib/types";
import SpatialFigure from "./SpatialFigure";

export default function QuestionCard({
  question,
  index,
  total,
  selected,
  flagged,
  onSelect,
  onToggleFlag,
}: {
  question: Question;
  index: number;
  total: number;
  selected: Choice | null;
  flagged: boolean;
  onSelect: (c: Choice) => void;
  onToggleFlag: () => void;
}) {
  const optionsAreSvg = question.category === "spatial" && question.options.some((o) => o.svg);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
        <span>
          Question {index + 1} of {total}
        </span>
        <div className="flex items-center gap-3">
          <span className="uppercase tracking-wide text-xs px-2 py-0.5 rounded bg-gray-200 text-gray-700">
            {question.category}
          </span>
          <button
            type="button"
            onClick={onToggleFlag}
            className={`text-xs px-2 py-1 rounded border ${
              flagged
                ? "bg-yellow-100 border-yellow-400 text-yellow-900"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
            aria-pressed={flagged}
          >
            {flagged ? "★ Flagged" : "☆ Flag"}
          </button>
        </div>
      </div>

      {question.prompt && (
        <p className="text-lg leading-relaxed mb-4 whitespace-pre-wrap">
          {question.prompt}
        </p>
      )}

      {question.figureSvg && (
        <div className="mb-6 p-4 border rounded bg-white flex justify-center">
          <div className="w-full max-w-2xl">
            <SpatialFigure svg={question.figureSvg} />
          </div>
        </div>
      )}

      <div
        className={
          optionsAreSvg
            ? "grid grid-cols-2 sm:grid-cols-5 gap-3"
            : "flex flex-col gap-2"
        }
        role="radiogroup"
        aria-label="Answer options"
      >
        {question.options.map((opt) => {
          const isSelected = selected === opt.key;
          return (
            <button
              key={opt.key}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(opt.key)}
              className={`text-left border rounded px-3 py-2 transition-colors ${
                isSelected
                  ? "border-blue-500 bg-blue-50 ring-2 ring-blue-300"
                  : "border-gray-300 bg-white hover:bg-gray-50"
              }`}
            >
              {opt.svg ? (
                <div className="flex flex-col items-center gap-1">
                  <span className="font-semibold text-sm">{opt.key}</span>
                  <SpatialFigure svg={opt.svg} className="w-full" />
                </div>
              ) : (
                <div className="flex items-start gap-3">
                  <span className="font-semibold">{opt.key}.</span>
                  <span>{opt.text}</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
