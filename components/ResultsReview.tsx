"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Choice, Question, TestId, TestResult } from "@/lib/types";
import { loadLatest } from "@/lib/storage";
import SpatialFigure from "./SpatialFigure";

function formatDuration(ms: number): string {
  const total = Math.floor(ms / 1000);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}m ${s}s`;
}

export default function ResultsReview({
  testId,
  questions,
}: {
  testId: TestId;
  questions: Question[];
}) {
  const [result, setResult] = useState<TestResult | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setResult(loadLatest(testId));
  }, [testId]);

  if (mounted && !result) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-semibold mb-2">No results found</h1>
        <p className="text-gray-600 mb-6">
          It looks like you haven&apos;t completed this test yet.
        </p>
        <Link
          href={`/test/${testId}`}
          className="inline-block px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Start Test {testId}
        </Link>
      </div>
    );
  }

  if (!result) return null; // SSR placeholder while mounting

  const pct = Math.round((result.score / questions.length) * 100);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">
            Test {testId} — Results
          </h1>
          <div className="flex gap-2">
            <Link
              href={`/test/${testId}`}
              className="px-3 py-2 text-sm rounded border bg-white hover:bg-gray-50"
            >
              Retake
            </Link>
            <Link
              href="/"
              className="px-3 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Home
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Total"
            value={`${result.score}/${questions.length}`}
            sub={`${pct}% · avg test-taker 24`}
            highlight
          />
          <StatCard
            label="Verbal"
            value={`${result.perCategory.verbal.correct}/${result.perCategory.verbal.total}`}
          />
          <StatCard
            label="Math / Logic"
            value={`${result.perCategory.math.correct}/${result.perCategory.math.total}`}
          />
          <StatCard
            label="Spatial"
            value={`${result.perCategory.spatial.correct}/${result.perCategory.spatial.total}`}
          />
        </section>

        <p className="text-sm text-gray-600 mb-4">
          Time used: {formatDuration(result.timeUsedMs)}
        </p>

        <section className="space-y-6">
          {questions.map((q, i) => {
            const chosen = result.answers[q.id] ?? null;
            const correct = chosen === q.answer;
            return (
              <article
                key={q.id}
                className={`bg-white border rounded p-4 ${
                  correct ? "border-green-300" : chosen === null ? "border-gray-300" : "border-red-300"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="text-sm text-gray-500">
                    Q{i + 1} · <span className="uppercase">{q.category}</span>
                  </div>
                  <div
                    className={`text-sm font-semibold ${
                      correct ? "text-green-700" : chosen === null ? "text-gray-500" : "text-red-700"
                    }`}
                  >
                    {correct ? "✓ Correct" : chosen === null ? "— Unanswered" : "✗ Incorrect"}
                  </div>
                </div>
                {q.prompt && <p className="mb-3 whitespace-pre-wrap">{q.prompt}</p>}
                {q.figureSvg && (
                  <div className="mb-3 p-3 border rounded bg-gray-50">
                    <SpatialFigure svg={q.figureSvg} />
                  </div>
                )}
                <ul className="space-y-1 mb-3">
                  {q.options.map((opt) => {
                    const isCorrect = opt.key === q.answer;
                    const isChosen = opt.key === chosen;
                    return (
                      <OptionRow
                        key={opt.key}
                        option={opt}
                        isCorrect={isCorrect}
                        isChosen={isChosen}
                      />
                    );
                  })}
                </ul>
                <div className="text-sm bg-blue-50 border border-blue-200 rounded p-3">
                  <span className="font-semibold">Explanation: </span>
                  {q.explanation}
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
}

function StatCard({
  label,
  value,
  sub,
  highlight = false,
}: {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded border p-4 ${
        highlight ? "bg-blue-600 text-white border-blue-700" : "bg-white border-gray-200"
      }`}
    >
      <div className={`text-xs uppercase tracking-wide ${highlight ? "text-blue-100" : "text-gray-500"}`}>
        {label}
      </div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
      {sub && (
        <div className={`text-xs mt-1 ${highlight ? "text-blue-100" : "text-gray-500"}`}>
          {sub}
        </div>
      )}
    </div>
  );
}

function OptionRow({
  option,
  isCorrect,
  isChosen,
}: {
  option: { key: Choice; text?: string; svg?: string };
  isCorrect: boolean;
  isChosen: boolean;
}) {
  const base = "flex items-start gap-2 p-2 rounded border text-sm";
  const tone = isCorrect
    ? "bg-green-50 border-green-300"
    : isChosen
    ? "bg-red-50 border-red-300"
    : "bg-white border-gray-200";
  const marker = isCorrect ? "✓" : isChosen ? "✗" : "";
  return (
    <li className={`${base} ${tone}`}>
      <span className="font-semibold w-5">{option.key}.</span>
      {option.svg ? (
        <div className="flex-1 max-w-[120px]">
          <SpatialFigure svg={option.svg} />
        </div>
      ) : (
        <span className="flex-1">{option.text}</span>
      )}
      {marker && (
        <span
          className={`font-semibold ${
            isCorrect ? "text-green-700" : "text-red-700"
          }`}
        >
          {marker}
        </span>
      )}
    </li>
  );
}
