import { notFound } from "next/navigation";
import TestRunner from "@/components/TestRunner";
import { getTest, isValidTestId } from "@/lib/questions";

export default async function TestPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const n = Number(id);
  if (!isValidTestId(n)) notFound();
  const questions = getTest(n);
  return <TestRunner testId={n} questions={questions} />;
}

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
}
