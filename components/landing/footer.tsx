import { Logo } from "@/components/ccat";

export function LandingFooter() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1120px] mx-auto px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-ink-subtle">
        <div className="flex items-center gap-2.5">
          <Logo variant="mark" size={18} />
          <span>CCAT Practice · Made for candidates, not recruiters.</span>
        </div>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-ink transition-colors">Privacy</a>
          <a href="#terms" className="hover:text-ink transition-colors">Terms</a>
          <a href="#contact" className="hover:text-ink transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
