import {
  EighteenSecondSection,
  FAQSection,
  Hero,
  HowItHelpsSection,
  LandingFooter,
  LandingNav,
  ProgressSection,
  ProofSection,
  SampleQuestionSection,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingNav />
      <main>
        <Hero />
        <EighteenSecondSection />
        <HowItHelpsSection />
        <SampleQuestionSection />
        <ProgressSection />
        <ProofSection />
        <FAQSection />
      </main>
      <LandingFooter />
    </div>
  );
}
