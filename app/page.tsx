import HomeTestCard from "@/components/HomeTestCard";
import type { TestId } from "@/lib/types";

const TEST_IDS: TestId[] = [1, 2, 3, 4];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">CCAT Practice</h1>
          <p className="text-gray-600 mt-1">
            Four full-length practice tests for the Criteria Cognitive Aptitude Test.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <section className="mb-8 bg-white border rounded p-5">
          <h2 className="text-lg font-semibold mb-2">Format</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>50 questions in 15 minutes — about 18 seconds per question.</li>
            <li>Mix of Verbal, Math / Logic, and Spatial Reasoning.</li>
            <li>No penalty for wrong answers — guess if you are unsure.</li>
            <li>Answers and explanations appear only after submitting.</li>
            <li>
              Average test-taker answers <strong>24/50</strong> — you don&apos;t need to
              finish every question.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Choose a practice test</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TEST_IDS.map((id) => (
              <HomeTestCard key={id} testId={id} />
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6">
            Tests 1–4 contain 200 unique questions in total. Your progress is stored
            locally in your browser.
          </p>
        </section>
      </main>
    </div>
  );
}
