import {
  AnswerOption,
  CategoryChip,
  FocusIntegrityBanner,
  Kbd,
  KeyboardHintChip,
  Logo,
  PercentileRing,
  QuestionNavigator,
  StreakFlame,
  ThemeToggle,
  Timer,
  type NavCellState,
} from "@/components/ccat";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTitle, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { PlusIcon } from "lucide-react";
import { ToastTrigger } from "./toast-trigger";

const PAPER_STOPS = [50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
const CLAY_STOPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
const HUE_STOPS = [50, 200, 500, 700] as const;

const NAV_STATES: NavCellState[] = Array.from({ length: 50 }, (_, i) => {
  if (i === 17) return "current";
  if (i % 7 === 3) return "flagged";
  if (i < 18) return "answered";
  return "unanswered";
});

function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4 py-10">
      <div className="space-y-1">
        <h2 className="font-display text-3xl">{title}</h2>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      <Separator />
      <div className="pt-2">{children}</div>
    </section>
  );
}

function Swatch({ token, cssColor }: { token: string; cssColor: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="size-10 rounded-md ring-1 ring-foreground/10"
        style={{ background: cssColor }}
      />
      <div className="flex flex-col">
        <span className="font-mono text-xs">{token}</span>
      </div>
    </div>
  );
}

function SwatchRow({ prefix, stops }: { prefix: string; stops: readonly number[] }) {
  return (
    <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
      {stops.map((stop) => (
        <Swatch
          key={stop}
          token={`--color-${prefix}-${stop}`}
          cssColor={`var(--color-${prefix}-${stop})`}
        />
      ))}
    </div>
  );
}

export default function DesignPage() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
            <Logo />
            <div className="flex items-center gap-2">
              <span className="hidden text-xs text-muted-foreground sm:inline">
                Design system
              </span>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 pb-24">
          <div className="pt-10 pb-2">
            <h1 className="font-display text-5xl tracking-tight">CCAT Practice design system</h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Warm paper neutrals, terracotta accent, sage / slate / plum category hues.
              Everything on this page is driven by the tokens in <span className="font-mono text-xs">app/globals.css</span>.
            </p>
          </div>

          <Section id="colors" title="Color" subtitle="All scales use oklch and remain within the warm family.">
            <div className="space-y-8">
              <div>
                <h3 className="mb-3 font-display text-lg">Paper neutrals</h3>
                <SwatchRow prefix="paper" stops={PAPER_STOPS} />
              </div>
              <div>
                <h3 className="mb-3 font-display text-lg">Clay (brand)</h3>
                <SwatchRow prefix="clay" stops={CLAY_STOPS} />
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <h3 className="mb-3 font-display text-lg">Verbal — Sage</h3>
                  <SwatchRow prefix="verbal" stops={HUE_STOPS} />
                </div>
                <div>
                  <h3 className="mb-3 font-display text-lg">Math — Slate</h3>
                  <SwatchRow prefix="math" stops={HUE_STOPS} />
                </div>
                <div>
                  <h3 className="mb-3 font-display text-lg">Spatial — Plum</h3>
                  <SwatchRow prefix="spatial" stops={HUE_STOPS} />
                </div>
              </div>
              <div>
                <h3 className="mb-3 font-display text-lg">Semantic</h3>
                <div className="flex flex-wrap gap-4">
                  <Swatch token="--color-success" cssColor="var(--color-success)" />
                  <Swatch token="--color-warning" cssColor="var(--color-warning)" />
                  <Swatch token="--color-danger" cssColor="var(--color-danger)" />
                  <Swatch token="--color-info" cssColor="var(--color-info)" />
                </div>
              </div>
            </div>
          </Section>

          <Section id="type" title="Typography" subtitle="Instrument Serif for display, Instrument Sans for UI, JetBrains Mono for numerals and keys.">
            <div className="space-y-3">
              <h1 className="font-display text-6xl">The quick brown fox</h1>
              <h2 className="font-display text-4xl">The quick brown fox</h2>
              <h3 className="font-display text-2xl">The quick brown fox</h3>
              <p className="max-w-2xl text-base">
                Body copy in Instrument Sans. Candidates are nervous — keep the tone
                steady, reassuring, and precise.
              </p>
              <p className="max-w-2xl text-sm text-muted-foreground">
                Muted body for secondary information and captions.
              </p>
              <p className="font-mono text-sm">
                14:59 · 42/50 · 18s per question
              </p>
            </div>
          </Section>

          <Section id="radii" title="Radii & shadows">
            <div className="flex flex-wrap gap-4">
              {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((r) => (
                <div
                  key={r}
                  className="flex size-20 flex-col items-center justify-center gap-1 bg-muted text-xs text-muted-foreground"
                  style={{ borderRadius: `var(--radius-${r})` }}
                >
                  <span className="font-mono">{r}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {([1, 2, 3] as const).map((level) => (
                <div
                  key={level}
                  className="flex h-24 items-center justify-center rounded-lg bg-card ring-1 ring-foreground/10"
                  style={{ boxShadow: `var(--shadow-${level})` }}
                >
                  <span className="font-mono text-xs text-muted-foreground">shadow-{level}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section id="buttons" title="Buttons">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="xs">xs</Button>
                <Button size="sm">sm</Button>
                <Button>default</Button>
                <Button size="lg">lg</Button>
                <Button size="icon" aria-label="Add"><PlusIcon /></Button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button disabled>Disabled</Button>
                <Button variant="secondary" disabled>Disabled</Button>
              </div>
            </div>
          </Section>

          <Section id="chips" title="Chips, badges & keyboard hints">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <CategoryChip category="verbal" />
              <CategoryChip category="math" />
              <CategoryChip category="spatial" />
              <KeyboardHintChip label="Select" keys={["A", "B", "C", "D", "E"]} />
              <KeyboardHintChip label="Flag" keys={["F"]} />
            </div>
          </Section>

          <Section id="forms" title="Form controls">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="you@example.com" />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <RadioGroup defaultValue="practice" className="gap-3">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="practice" id="mode-practice" />
                    <Label htmlFor="mode-practice">Practice — untimed, hints allowed</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="mock" id="mode-mock" />
                    <Label htmlFor="mode-mock">Mock — 15:00 lockdown</Label>
                  </div>
                </RadioGroup>
                <div className="space-y-2">
                  <Label>Progress through test</Label>
                  <Progress value={38} />
                </div>
              </div>
              <div className="space-y-4">
                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="verbal">Verbal</TabsTrigger>
                    <TabsTrigger value="math">Math</TabsTrigger>
                    <TabsTrigger value="spatial">Spatial</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="pt-3 text-muted-foreground">
                    Shows all 200 questions across categories.
                  </TabsContent>
                  <TabsContent value="verbal" className="pt-3 text-muted-foreground">
                    Verbal-only subset — vocabulary, analogies, comprehension.
                  </TabsContent>
                  <TabsContent value="math" className="pt-3 text-muted-foreground">
                    Math / logic — arithmetic, rate problems, series.
                  </TabsContent>
                  <TabsContent value="spatial" className="pt-3 text-muted-foreground">
                    Spatial — rotation, folding, pattern completion.
                  </TabsContent>
                </Tabs>
                <Accordion>
                  <AccordionItem value="a">
                    <AccordionTrigger>Why 18 seconds per question?</AccordionTrigger>
                    <AccordionContent>
                      50 questions in 15 minutes. Pacing matters more than knowledge.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="b">
                    <AccordionTrigger>Do wrong answers hurt my score?</AccordionTrigger>
                    <AccordionContent>
                      No penalty — guess if you aren&apos;t sure.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </Section>

          <Section id="overlays" title="Overlays">
            <div className="flex flex-wrap items-center gap-3">
              <Dialog>
                <DialogTrigger render={<Button variant="outline">Open dialog</Button>} />
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Submit attempt?</DialogTitle>
                    <DialogDescription>
                      You have 8 unanswered questions. You can still submit — no penalty for wrong answers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <Sheet>
                <SheetTrigger render={<Button variant="outline">Open sheet</Button>} />
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Test settings</SheetTitle>
                    <SheetDescription>
                      Adjust timer, mode, and focus-integrity options.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              <Popover>
                <PopoverTrigger render={<Button variant="outline">Open popover</Button>} />
                <PopoverContent>
                  <PopoverTitle>Question flagged</PopoverTitle>
                  <p className="text-sm text-muted-foreground">
                    You&apos;ll come back to this at the end.
                  </p>
                </PopoverContent>
              </Popover>

              <Tooltip>
                <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
                <TooltipContent>18 seconds per question</TooltipContent>
              </Tooltip>

              <ToastTrigger />
            </div>
          </Section>

          <Section id="timer" title="Timer">
            <div className="flex flex-wrap items-end gap-8">
              <div>
                <div className="mb-2 text-xs text-muted-foreground">Large · default</div>
                <Timer seconds={732} size="lg" />
              </div>
              <div>
                <div className="mb-2 text-xs text-muted-foreground">Large · warning</div>
                <Timer seconds={45} size="lg" />
              </div>
              <div>
                <div className="mb-2 text-xs text-muted-foreground">Inline</div>
                <Timer seconds={732} size="sm" />
              </div>
            </div>
          </Section>

          <Section id="answer" title="Answer options">
            <div className="grid max-w-xl gap-2.5">
              <AnswerOption letter="A" label="Extraneous — not essential to the main argument." state="default" />
              <AnswerOption letter="B" label="Tangential — slightly related, but off-topic." state="selected" />
              <AnswerOption letter="C" label="Pivotal — the correct synonym in this context." state="correct" />
              <AnswerOption letter="D" label="Superfluous — a distractor, not the best fit." state="incorrect" />
              <AnswerOption letter="E" label="Disparate — unrelated; you flagged this." state="flagged" />
            </div>
          </Section>

          <Section id="nav" title="Question navigator" subtitle="50 cells · answered / unanswered / flagged / current">
            <div className="max-w-md">
              <QuestionNavigator states={NAV_STATES} />
            </div>
          </Section>

          <Section id="misc" title="Percentile, streak, focus integrity">
            <div className="grid gap-6 md:grid-cols-[auto_auto_1fr] md:items-center">
              <div className="flex items-center gap-6">
                <PercentileRing value={92} label="pct" />
                <PercentileRing value={68} label="pct" />
                <PercentileRing value={34} label="pct" />
              </div>
              <StreakFlame days={7} />
              <FocusIntegrityBanner count={3} />
            </div>
          </Section>

          <Section id="cards" title="Cards">
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Test 1</CardTitle>
                  <CardDescription>50 questions · 15 minutes · Verbal, Math, Spatial</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Best score</span>
                  <span className="font-mono text-lg tabular-nums">34/50</span>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Adaptive drill</CardTitle>
                  <CardDescription>10 questions tuned to your weakest sub-skill.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <CategoryChip category="spatial" />
                    <span className="text-sm text-muted-foreground">3×3 matrix rotation</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Section>

          <Section id="skeletons" title="Skeletons">
            <div className="max-w-md space-y-3">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <div className="flex items-center gap-3">
                <Skeleton className="size-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-3 w-1/3" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
            </div>
          </Section>

          <Section id="keyboard" title="Keyboard keys">
            <div className="flex flex-wrap items-center gap-3">
              <Kbd>A</Kbd>
              <Kbd>B</Kbd>
              <Kbd>C</Kbd>
              <Kbd>D</Kbd>
              <Kbd>E</Kbd>
              <Kbd>↑</Kbd>
              <Kbd>↓</Kbd>
              <Kbd>Enter</Kbd>
              <Kbd>Esc</Kbd>
            </div>
          </Section>
        </main>
      </div>
    </TooltipProvider>
  );
}
