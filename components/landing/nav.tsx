import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Logo, ThemeToggle } from "@/components/ccat";
import { auth0 } from "@/lib/auth0";

const LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export async function LandingNav() {
  const session = await auth0.getSession();

  return (
    <header className="relative z-10">
      <div className="max-w-[1120px] mx-auto h-16 px-10 flex items-center justify-between">
        <Link href="/" aria-label="CCAT Practice home">
          <Logo size={28} />
        </Link>
        <nav className="flex items-center gap-7 text-sm text-ink-muted">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden sm:inline hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
          {session ? (
            <>
              <span className="hidden sm:inline text-ink">
                {session.user.email}
              </span>
              <a
                href="/auth/logout"
                className="hidden sm:inline hover:text-ink transition-colors"
              >
                Logout
              </a>
            </>
          ) : (
            <a
              href="/auth/login"
              className="hidden sm:inline hover:text-ink transition-colors"
            >
              Sign in
            </a>
          )}
          <ThemeToggle />
          {session ? (
            <Link
              href="/practice"
              className={buttonVariants({
                className:
                  "h-9 rounded-lg px-4 text-[13px] bg-primary text-primary-foreground hover:bg-[color:var(--brand-hover)]",
              })}
            >
              Start free
            </Link>
          ) : (
            <a
              href="/auth/login?screen_hint=signup"
              className={buttonVariants({
                className:
                  "h-9 rounded-lg px-4 text-[13px] bg-primary text-primary-foreground hover:bg-[color:var(--brand-hover)]",
              })}
            >
              Start free
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
