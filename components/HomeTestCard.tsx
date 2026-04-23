"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { TestId } from "@/lib/types";
import { loadBest, loadLatest } from "@/lib/storage";

export default function HomeTestCard({ testId }: { testId: TestId }) {
  const [best, setBest] = useState<number | null>(null);
  const [latestAt, setLatestAt] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setBest(loadBest(testId));
    const r = loadLatest(testId);
    setLatestAt(r?.takenAt ?? null);
  }, [testId]);

  const notStarted = mounted && best === null;

  return (
    <Link
      href={`/test/${testId}`}
      className="group block border rounded-lg bg-white p-5 hover:shadow-md hover:border-blue-400 transition"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-semibold">Test {testId}</span>
        {mounted && (
          <span
            className={`text-xs px-2 py-0.5 rounded ${
              notStarted
                ? "bg-gray-100 text-gray-600"
                : "bg-green-100 text-green-800"
            }`}
          >
            {notStarted ? "Not started" : "Completed"}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-600 mb-4">
        50 questions · 15 minutes · Verbal, Math, Spatial
      </p>
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <span className="text-gray-500">Best score: </span>
          <span className="font-semibold">
            {mounted ? (best === null ? "—" : `${best}/50`) : "—"}
          </span>
        </div>
        {mounted && latestAt && (
          <div className="text-xs text-gray-500">
            Last: {new Date(latestAt).toLocaleDateString()}
          </div>
        )}
      </div>
      <div className="mt-4 inline-block text-sm text-blue-600 group-hover:underline">
        Start Test {testId} →
      </div>
    </Link>
  );
}
