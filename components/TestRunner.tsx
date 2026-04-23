"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Choice, Question, TestId } from "@/lib/types";
import { grade } from "@/lib/grading";
import { saveResult } from "@/lib/storage";
import QuestionCard from "./QuestionCard";
import QuestionNav from "./QuestionNav";
import Timer from "./Timer";

const TOTAL_MS = 15 * 60 * 1000;
const CHOICES: Choice[] = ["A", "B", "C", "D", "E"];

export default function TestRunner({
  testId,
  questions,
}: {
  testId: TestId;
  questions: Question[];
}) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Choice | null>>(() => {
    const initial: Record<string, Choice | null> = {};
    for (const q of questions) initial[q.id] = null;
    return initial;
  });
  const [flagged, setFlagged] = useState<Set<string>>(() => new Set());
  const startedAtRef = useRef<number>(Date.now());
  const [remainingMs, setRemainingMs] = useState(TOTAL_MS);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const currentQ = questions[currentIndex];
  const unanswered = useMemo(
    () => questions.filter((q) => answers[q.id] === null).length,
    [questions, answers]
  );

  const submit = useCallback(() => {
    if (submitted) return;
    setSubmitted(true);
    const timeUsedMs = Math.min(TOTAL_MS, Date.now() - startedAtRef.current);
    const result = grade(testId, questions, answers, timeUsedMs);
    saveResult(result);
    router.push(`/test/${testId}/results`);
  }, [submitted, testId, questions, answers, router]);

  // Timer
  useEffect(() => {
    const id = setInterval(() => {
      const elapsed = Date.now() - startedAtRef.current;
      const left = Math.max(0, TOTAL_MS - elapsed);
      setRemainingMs(left);
      if (left === 0) {
        clearInterval(id);
        submit();
      }
    }, 250);
    return () => clearInterval(id);
  }, [submit]);

  const goTo = useCallback(
    (i: number) => {
      if (i >= 0 && i < questions.length) setCurrentIndex(i);
    },
    [questions.length]
  );

  const select = useCallback(
    (c: Choice) => {
      setAnswers((prev) => ({ ...prev, [currentQ.id]: c }));
    },
    [currentQ]
  );

  const toggleFlag = useCallback(() => {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(currentQ.id)) next.delete(currentQ.id);
      else next.add(currentQ.id);
      return next;
    });
  }, [currentQ]);

  // Keyboard: A-E selects, arrows navigate, F flags
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (submitted || showSubmitConfirm) return;
      const k = e.key.toUpperCase();
      if (CHOICES.includes(k as Choice)) {
        const available = currentQ.options.map((o) => o.key);
        if (available.includes(k as Choice)) {
          select(k as Choice);
          e.preventDefault();
        }
      } else if (e.key === "ArrowRight") {
        goTo(currentIndex + 1);
        e.preventDefault();
      } else if (e.key === "ArrowLeft") {
        goTo(currentIndex - 1);
        e.preventDefault();
      } else if (e.key.toLowerCase() === "f") {
        toggleFlag();
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentIndex, currentQ, goTo, select, toggleFlag, submitted, showSubmitConfirm]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold">CCAT Practice · Test {testId}</span>
          </div>
          <div className="flex items-center gap-3">
            <Timer remainingMs={remainingMs} />
            <button
              type="button"
              onClick={() => setShowSubmitConfirm(true)}
              className="px-4 py-2 text-sm font-medium rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-6">
        <section className="order-2 lg:order-1">
          <QuestionCard
            question={currentQ}
            index={currentIndex}
            total={questions.length}
            selected={answers[currentQ.id]}
            flagged={flagged.has(currentQ.id)}
            onSelect={select}
            onToggleFlag={toggleFlag}
          />
          <div className="mt-6 flex items-center justify-between max-w-3xl mx-auto">
            <button
              type="button"
              onClick={() => goTo(currentIndex - 1)}
              disabled={currentIndex === 0}
              className="px-4 py-2 rounded border bg-white disabled:opacity-40 hover:bg-gray-50"
            >
              ← Previous
            </button>
            <span className="text-sm text-gray-500">
              Keys: A–E to answer, ← → to navigate, F to flag
            </span>
            <button
              type="button"
              onClick={() => goTo(currentIndex + 1)}
              disabled={currentIndex === questions.length - 1}
              className="px-4 py-2 rounded border bg-white disabled:opacity-40 hover:bg-gray-50"
            >
              Next →
            </button>
          </div>
        </section>

        <aside className="order-1 lg:order-2">
          <div className="bg-white border rounded p-3">
            <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              Questions
            </div>
            <QuestionNav
              questions={questions}
              currentIndex={currentIndex}
              answers={answers}
              flagged={flagged}
              onJump={goTo}
            />
            <div className="mt-3 text-xs text-gray-600 space-y-1">
              <div>
                <span className="inline-block w-3 h-3 bg-green-100 border border-green-400 rounded-sm mr-1 align-middle" />
                Answered
              </div>
              <div>
                <span className="inline-block w-3 h-3 bg-blue-500 rounded-sm mr-1 align-middle" />
                Current
              </div>
              <div>
                <span className="inline-block text-yellow-500 mr-1">★</span>
                Flagged
              </div>
            </div>
          </div>
        </aside>
      </main>

      {showSubmitConfirm && (
        <div
          className="fixed inset-0 z-20 bg-black/40 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded shadow-lg max-w-md w-full p-5">
            <h2 className="text-lg font-semibold mb-2">Submit test?</h2>
            <p className="text-sm text-gray-700 mb-4">
              {unanswered === 0
                ? "You have answered all questions."
                : `You have ${unanswered} unanswered question${
                    unanswered === 1 ? "" : "s"
                  }. These will be marked incorrect.`}
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowSubmitConfirm(false)}
                className="px-3 py-2 rounded border bg-white hover:bg-gray-50"
              >
                Keep going
              </button>
              <button
                type="button"
                onClick={submit}
                className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Submit now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
