import Link from "next/link";
import HomeTestCard from "@/components/HomeTestCard";
import type { TestId } from "@/lib/types";
import { Logo } from "@/components/ccat";

const TEST_IDS: TestId[] = [1, 2, 3, 4];

export default function Practice() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/60 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" aria-label="Back to home">
            <Logo size={24} />
          </Link>
          <Link
            href="/"
            className="text-sm text-ink-muted hover:text-ink transition-colors"
          >
            ← Home
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-4xl mb-2">Practice tests</h1>
          <p className="text-ink-muted">
            Four full-length practice tests for the Criteria Cognitive Aptitude Test.
          </p>
        </div>

        <section className="mb-10 rounded-lg border border-border bg-card p-6 shadow-1">
          <h2 className="text-lg font-medium mb-3 font-sans">Format</h2>
          <ul className="list-disc list-inside text-sm text-ink-muted space-y-1.5">
            <li>50 questions in 15 minutes — about 18 seconds per question.</li>
            <li>Mix of Verbal, Math / Logic, and Spatial Reasoning.</li>
            <li>No penalty for wrong answers — guess if you are unsure.</li>
            <li>Answers and explanations appear only after submitting.</li>
            <li>
              Average test-taker answers <strong className="text-ink">24/50</strong> —
              you don&apos;t need to finish every question.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-4 font-sans">Choose a practice test</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TEST_IDS.map((id) => (
              <HomeTestCard key={id} testId={id} />
            ))}
          </div>
          <p className="text-xs text-ink-subtle mt-6">
            Tests 1–4 contain 200 unique questions in total. Your progress is stored
            locally in your browser.
          </p>
        </section>
      </main>
    </div>
  );
}
