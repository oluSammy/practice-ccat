"use client";

export default function Timer({ remainingMs }: { remainingMs: number }) {
  const total = Math.max(0, Math.floor(remainingMs / 1000));
  const mm = Math.floor(total / 60)
    .toString()
    .padStart(2, "0");
  const ss = (total % 60).toString().padStart(2, "0");
  const warn = remainingMs <= 60_000; // last minute
  return (
    <div
      className={`font-mono text-2xl tabular-nums px-3 py-1 rounded border ${
        warn ? "bg-red-100 text-red-700 border-red-300" : "bg-gray-100 border-gray-300 text-gray-900"
      }`}
      aria-label="Time remaining"
    >
      {mm}:{ss}
    </div>
  );
}
