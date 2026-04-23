import type { Question } from "@/lib/types";
import {
  circle,
  square,
  triangle,
  diamond,
  star,
  rect,
  line,
  compose,
  row,
  matrix3x3,
} from "@/lib/svg/shapes";

const CELL = 80;
const GAP = 10;
const rowSvg = (cells: string[][]) =>
  compose(cells.length * (CELL + GAP) - GAP, CELL, [row(CELL, GAP, cells)]);
const optSvg = (shapes: string[]) =>
  compose(CELL, CELL, [`<rect x="0.5" y="0.5" width="${CELL - 1}" height="${
    CELL - 1
  }" fill="none" stroke="#111" stroke-width="1"/>${shapes.join("")}`]);
const mat3Svg = (cells: Array<string[] | null>) =>
  compose(3 * CELL + 2 * GAP, 3 * CELL + 2 * GAP, [matrix3x3(CELL, GAP, cells)]);

const test4: Question[] = [
  // =================== VERBAL (17) ===================
  {
    id: "t4-q01",
    category: "verbal",
    prompt: "Choose the ANTONYM: COPIOUS",
    options: [
      { key: "A", text: "abundant" },
      { key: "B", text: "scant" },
      { key: "C", text: "confusing" },
      { key: "D", text: "proper" },
      { key: "E", text: "complete" },
    ],
    answer: "B",
    explanation:
      '"Copious" means abundant in supply. "Scant" — barely sufficient — is the opposite.',
  },
  {
    id: "t4-q02",
    category: "verbal",
    prompt: "Choose the SYNONYM: SUCCINCT",
    options: [
      { key: "A", text: "verbose" },
      { key: "B", text: "concise" },
      { key: "C", text: "vague" },
      { key: "D", text: "formal" },
      { key: "E", text: "ancient" },
    ],
    answer: "B",
    explanation:
      '"Succinct" means briefly and clearly expressed. "Concise" is its direct synonym.',
  },
  {
    id: "t4-q03",
    category: "verbal",
    prompt: "HERD is to CATTLE as GAGGLE is to:",
    options: [
      { key: "A", text: "dogs" },
      { key: "B", text: "geese" },
      { key: "C", text: "whales" },
      { key: "D", text: "ants" },
      { key: "E", text: "sheep" },
    ],
    answer: "B",
    explanation:
      "A herd is a group of cattle; a gaggle is a group of geese. The relationship is collective noun to its animal.",
  },
  {
    id: "t4-q04",
    category: "verbal",
    prompt:
      "The evidence was ______; any jury would have acquitted him.",
    options: [
      { key: "A", text: "damning" },
      { key: "B", text: "exculpatory" },
      { key: "C", text: "circumstantial" },
      { key: "D", text: "superfluous" },
      { key: "E", text: "cryptic" },
    ],
    answer: "B",
    explanation:
      '"Exculpatory" evidence clears someone of blame — consistent with acquittal. "Damning" evidence would produce the opposite outcome.',
  },
  {
    id: "t4-q05",
    category: "verbal",
    prompt: "Choose the ANTONYM: INCIPIENT",
    options: [
      { key: "A", text: "beginning" },
      { key: "B", text: "mature" },
      { key: "C", text: "gradual" },
      { key: "D", text: "sudden" },
      { key: "E", text: "secret" },
    ],
    answer: "B",
    explanation:
      '"Incipient" means in the early stages of development. "Mature" — fully developed — is the opposite.',
  },
  {
    id: "t4-q06",
    category: "verbal",
    prompt:
      'In the sentence "The professor\'s argument was PELLUCID, accessible even to undergraduates," PELLUCID most nearly means:',
    options: [
      { key: "A", text: "pedantic" },
      { key: "B", text: "transparent" },
      { key: "C", text: "controversial" },
      { key: "D", text: "condensed" },
      { key: "E", text: "thorough" },
    ],
    answer: "B",
    explanation:
      '"Pellucid" means translucently clear and easy to understand. "Transparent" (used figuratively) is the best match. The clue "accessible even to undergraduates" reinforces the clarity meaning.',
  },
  {
    id: "t4-q07",
    category: "verbal",
    prompt: "PALETTE is to PAINTER as LEXICON is to:",
    options: [
      { key: "A", text: "sculptor" },
      { key: "B", text: "writer" },
      { key: "C", text: "architect" },
      { key: "D", text: "surveyor" },
      { key: "E", text: "banker" },
    ],
    answer: "B",
    explanation:
      "A palette is a painter's collection of colors; a lexicon is a writer's (or speaker's) collection of words. The relationship is collection of raw material to practitioner.",
  },
  {
    id: "t4-q08",
    category: "verbal",
    prompt: "Choose the SYNONYM: RECALCITRANT",
    options: [
      { key: "A", text: "cooperative" },
      { key: "B", text: "defiant" },
      { key: "C", text: "reckless" },
      { key: "D", text: "forgetful" },
      { key: "E", text: "clever" },
    ],
    answer: "B",
    explanation:
      '"Recalcitrant" means stubbornly resistant to authority. "Defiant" is the closest synonym.',
  },
  {
    id: "t4-q09",
    category: "verbal",
    prompt: "Choose the ANTONYM: EXONERATE",
    options: [
      { key: "A", text: "acquit" },
      { key: "B", text: "incriminate" },
      { key: "C", text: "excite" },
      { key: "D", text: "examine" },
      { key: "E", text: "delay" },
    ],
    answer: "B",
    explanation:
      '"Exonerate" means to absolve from blame. "Incriminate" — to make someone appear guilty — is the opposite.',
  },
  {
    id: "t4-q10",
    category: "verbal",
    prompt:
      "With the surgery such a ______ measure, the doctor recommended trying physical therapy first.",
    options: [
      { key: "A", text: "drastic" },
      { key: "B", text: "cursory" },
      { key: "C", text: "ambivalent" },
      { key: "D", text: "tedious" },
      { key: "E", text: "innocuous" },
    ],
    answer: "A",
    explanation:
      '"Drastic" (extreme, severe) matches the reasoning that a less extreme option — physical therapy — should be attempted first.',
  },
  {
    id: "t4-q11",
    category: "verbal",
    prompt: "Choose the ANTONYM: DIAPHANOUS",
    options: [
      { key: "A", text: "sheer" },
      { key: "B", text: "opaque" },
      { key: "C", text: "wrinkled" },
      { key: "D", text: "fragrant" },
      { key: "E", text: "brittle" },
    ],
    answer: "B",
    explanation:
      '"Diaphanous" means light, delicate, and translucent. "Opaque" (impenetrable to light) is the opposite.',
  },
  {
    id: "t4-q12",
    category: "verbal",
    prompt: "HUNGER is to FOOD as THIRST is to:",
    options: [
      { key: "A", text: "desert" },
      { key: "B", text: "water" },
      { key: "C", text: "glass" },
      { key: "D", text: "fatigue" },
      { key: "E", text: "salt" },
    ],
    answer: "B",
    explanation:
      "Hunger is relieved by food; thirst is relieved by water. The relationship is deprivation to its remedy.",
  },
  {
    id: "t4-q13",
    category: "verbal",
    prompt: "Choose the SYNONYM: DILATORY",
    options: [
      { key: "A", text: "prompt" },
      { key: "B", text: "tardy" },
      { key: "C", text: "excessive" },
      { key: "D", text: "essential" },
      { key: "E", text: "proud" },
    ],
    answer: "B",
    explanation:
      '"Dilatory" means slow to act or tending to delay. "Tardy" is the closest synonym.',
  },
  {
    id: "t4-q14",
    category: "verbal",
    prompt: "Choose the ANTONYM: OBDURATE",
    options: [
      { key: "A", text: "firm" },
      { key: "B", text: "flexible" },
      { key: "C", text: "jovial" },
      { key: "D", text: "vacant" },
      { key: "E", text: "morose" },
    ],
    answer: "B",
    explanation:
      '"Obdurate" means stubbornly refusing to change one\'s mind. "Flexible" — willing to adapt — is the opposite.',
  },
  {
    id: "t4-q15",
    category: "verbal",
    prompt:
      "The critic's review, while ostensibly balanced, contained a subtle ______ that betrayed his real opinion.",
    options: [
      { key: "A", text: "panegyric" },
      { key: "B", text: "innuendo" },
      { key: "C", text: "solicitation" },
      { key: "D", text: "redundancy" },
      { key: "E", text: "tribute" },
    ],
    answer: "B",
    explanation:
      '"Innuendo" is an indirect, usually unfavorable, remark that hints at the speaker\'s true opinion. That fits a review appearing balanced but subtly negative.',
  },
  {
    id: "t4-q16",
    category: "verbal",
    prompt: "AUTHOR is to NOVEL as COMPOSER is to:",
    options: [
      { key: "A", text: "orchestra" },
      { key: "B", text: "symphony" },
      { key: "C", text: "song" },
      { key: "D", text: "stage" },
      { key: "E", text: "instrument" },
    ],
    answer: "B",
    explanation:
      "An author creates a novel (a large-scale written work); a composer creates a symphony (a large-scale musical work). The relationship is creator to major work.",
  },
  {
    id: "t4-q17",
    category: "verbal",
    prompt: "Choose the ANTONYM: GREGARIOUS",
    options: [
      { key: "A", text: "sociable" },
      { key: "B", text: "reclusive" },
      { key: "C", text: "graceful" },
      { key: "D", text: "furious" },
      { key: "E", text: "wealthy" },
    ],
    answer: "B",
    explanation:
      '"Gregarious" means sociable, fond of company. "Reclusive" — avoiding the company of others — is the opposite.',
  },

  // =================== MATH / LOGIC (17) ===================
  {
    id: "t4-q18",
    category: "math",
    prompt:
      "The average weight of 8 boxes is 24 kg. If a ninth box weighing 33 kg is added, what is the new average weight?",
    options: [
      { key: "A", text: "24 kg" },
      { key: "B", text: "25 kg" },
      { key: "C", text: "26 kg" },
      { key: "D", text: "27 kg" },
      { key: "E", text: "28 kg" },
    ],
    answer: "B",
    explanation:
      "Total for 8 boxes = 8 × 24 = 192. Add 33: 225. New average = 225/9 = 25.",
  },
  {
    id: "t4-q19",
    category: "math",
    prompt:
      "A business's revenue was $500,000 last year and $650,000 this year. What is the percent increase?",
    options: [
      { key: "A", text: "25%" },
      { key: "B", text: "28%" },
      { key: "C", text: "30%" },
      { key: "D", text: "32%" },
      { key: "E", text: "35%" },
    ],
    answer: "C",
    explanation:
      "Change = 150,000; percent increase = 150,000 / 500,000 = 0.30 = 30%.",
  },
  {
    id: "t4-q20",
    category: "math",
    prompt:
      "A chemistry solution is 20% acid. How many milliliters of water must be added to 80 mL of this solution to reduce the acid concentration to 10%?",
    options: [
      { key: "A", text: "40" },
      { key: "B", text: "60" },
      { key: "C", text: "80" },
      { key: "D", text: "100" },
      { key: "E", text: "120" },
    ],
    answer: "C",
    explanation:
      "Acid = 0.20 × 80 = 16 mL. Let x mL water be added. 16 / (80 + x) = 0.10 → 80 + x = 160 → x = 80 mL.",
  },
  {
    id: "t4-q21",
    category: "math",
    prompt:
      "Two runners start at the same point and run in opposite directions. One runs at 6 mph, the other at 8 mph. How many miles apart are they after 45 minutes?",
    options: [
      { key: "A", text: "7.5" },
      { key: "B", text: "9.0" },
      { key: "C", text: "10.0" },
      { key: "D", text: "10.5" },
      { key: "E", text: "11.0" },
    ],
    answer: "D",
    explanation:
      "Combined speed = 14 mph. Time = 0.75 h. Distance = 14 × 0.75 = 10.5 miles.",
  },
  {
    id: "t4-q22",
    category: "math",
    prompt: "What comes next? 2, 3, 5, 8, 13, 21, ___",
    options: [
      { key: "A", text: "28" },
      { key: "B", text: "30" },
      { key: "C", text: "33" },
      { key: "D", text: "34" },
      { key: "E", text: "36" },
    ],
    answer: "D",
    explanation:
      "Each term equals the sum of the two previous (Fibonacci-style): 13 + 21 = 34.",
  },
  {
    id: "t4-q23",
    category: "math",
    prompt:
      "If 4(x + 3) − 2x = 22, what is x?",
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "5" },
      { key: "C", text: "6" },
      { key: "D", text: "7" },
      { key: "E", text: "8" },
    ],
    answer: "B",
    explanation:
      "Expand: 4x + 12 − 2x = 22 → 2x + 12 = 22 → 2x = 10 → x = 5.",
  },
  {
    id: "t4-q24",
    category: "math",
    prompt:
      "All architects on the project use CAD software. No one using CAD software is certified in the old drafting system. Some project members are architects. Which statement MUST be true?",
    options: [
      { key: "A", text: "No project members use CAD software." },
      { key: "B", text: "All project members are architects." },
      { key: "C", text: "Some project members are not certified in the old drafting system." },
      { key: "D", text: "All CAD users are architects." },
      { key: "E", text: "All architects are certified in the old drafting system." },
    ],
    answer: "C",
    explanation:
      "Some members are architects (who use CAD) and CAD users are not certified in the old system. Therefore some members (those who are architects) are not certified in the old system.",
  },
  {
    id: "t4-q25",
    category: "math",
    prompt:
      "A retailer buys shoes at $50 per pair and marks them up 80%. When they don't sell, the retailer discounts the marked-up price by 40%. Is this a profit or loss, and by how much per pair?",
    options: [
      { key: "A", text: "$4 profit" },
      { key: "B", text: "$4 loss" },
      { key: "C", text: "$6 profit" },
      { key: "D", text: "$8 profit" },
      { key: "E", text: "$10 loss" },
    ],
    answer: "A",
    explanation:
      "Marked-up price = 50 × 1.80 = $90. After the 40% discount: 90 × 0.60 = $54. Profit per pair = 54 − 50 = $4.",
  },
  {
    id: "t4-q26",
    category: "math",
    prompt:
      "Maria is twice as old as her brother Tom. In 16 years, Maria will be 1.5 times as old as Tom. How old is Tom now?",
    options: [
      { key: "A", text: "12" },
      { key: "B", text: "14" },
      { key: "C", text: "16" },
      { key: "D", text: "18" },
      { key: "E", text: "20" },
    ],
    answer: "C",
    explanation:
      "Let Tom = t; Maria = 2t. In 16 years: 2t + 16 = 1.5(t + 16) → 2t + 16 = 1.5t + 24 → 0.5t = 8 → t = 16.",
  },
  {
    id: "t4-q27",
    category: "math",
    prompt:
      "Machine A makes 60 parts per hour. Machine B makes 40 parts per hour. How many hours will it take them together to make 500 parts?",
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "5" },
      { key: "C", text: "6" },
      { key: "D", text: "7" },
      { key: "E", text: "8" },
    ],
    answer: "B",
    explanation:
      "Combined rate = 60 + 40 = 100 parts/hour. 500 / 100 = 5 hours.",
  },
  {
    id: "t4-q28",
    category: "math",
    prompt: "What comes next? 7, 14, 28, 56, 112, ___",
    options: [
      { key: "A", text: "168" },
      { key: "B", text: "196" },
      { key: "C", text: "224" },
      { key: "D", text: "252" },
      { key: "E", text: "280" },
    ],
    answer: "C",
    explanation:
      "Each term is double the previous: 112 × 2 = 224.",
  },
  {
    id: "t4-q29",
    category: "math",
    prompt:
      "A triangle has sides of 5, 12, and 13. What is its area?",
    options: [
      { key: "A", text: "25" },
      { key: "B", text: "30" },
      { key: "C", text: "32" },
      { key: "D", text: "39" },
      { key: "E", text: "60" },
    ],
    answer: "B",
    explanation:
      "5-12-13 is a right triangle (5² + 12² = 25 + 144 = 169 = 13²). Area = (1/2) × 5 × 12 = 30.",
  },
  {
    id: "t4-q30",
    category: "math",
    prompt:
      "In a class of 30, 18 students play soccer, 14 play basketball, and 5 play both. How many play soccer but NOT basketball?",
    options: [
      { key: "A", text: "8" },
      { key: "B", text: "9" },
      { key: "C", text: "11" },
      { key: "D", text: "13" },
      { key: "E", text: "14" },
    ],
    answer: "D",
    explanation:
      "Soccer only = 18 − 5 = 13.",
  },
  {
    id: "t4-q31",
    category: "math",
    prompt:
      "An investment of $5,000 grows to $6,200 after 3 years with simple interest. What is the annual interest rate?",
    options: [
      { key: "A", text: "6%" },
      { key: "B", text: "7%" },
      { key: "C", text: "8%" },
      { key: "D", text: "9%" },
      { key: "E", text: "10%" },
    ],
    answer: "C",
    explanation:
      "Interest = 6200 − 5000 = 1200. Rate = 1200 / (5000 × 3) = 0.08 = 8%.",
  },
  {
    id: "t4-q32",
    category: "math",
    prompt:
      "A fair coin is flipped 4 times. What is the probability of getting exactly 3 heads?",
    options: [
      { key: "A", text: "1/8" },
      { key: "B", text: "3/16" },
      { key: "C", text: "1/4" },
      { key: "D", text: "5/16" },
      { key: "E", text: "3/8" },
    ],
    answer: "C",
    explanation:
      "Favorable outcomes = C(4,3) = 4. Total outcomes = 2⁴ = 16. Probability = 4/16 = 1/4.",
  },
  {
    id: "t4-q33",
    category: "math",
    prompt: "What comes next? 64, 32, 16, 8, 4, ___",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "4" },
      { key: "E", text: "0" },
    ],
    answer: "B",
    explanation:
      "Each term is half the previous: 4 / 2 = 2.",
  },
  {
    id: "t4-q34",
    category: "math",
    prompt:
      "A map uses a scale of 1 inch = 25 miles. How many miles apart are two cities that are 4.5 inches apart on the map?",
    options: [
      { key: "A", text: "100" },
      { key: "B", text: "105" },
      { key: "C", text: "112.5" },
      { key: "D", text: "120" },
      { key: "E", text: "125" },
    ],
    answer: "C",
    explanation:
      "4.5 × 25 = 112.5 miles.",
  },

  // =================== SPATIAL (16) ===================
  {
    id: "t4-q35",
    category: "spatial",
    prompt: "Which figure does NOT belong?",
    figureSvg: rowSvg([
      [circle(40, 40, 28, { pattern: "hatch" }), circle(40, 40, 10)],
      [square(40, 40, 52, { pattern: "hatch" }), square(40, 40, 18)],
      [triangle(40, 43, 52, { pattern: "hatch" }), triangle(40, 46, 16)],
      [diamond(40, 40, 42, { pattern: "hatch" }), diamond(40, 40, 14)],
      [star(40, 40, 22, { pattern: "hatch" }), circle(40, 40, 10)],
    ]),
    options: [
      { key: "A", text: "Figure A" },
      { key: "B", text: "Figure B" },
      { key: "C", text: "Figure C" },
      { key: "D", text: "Figure D" },
      { key: "E", text: "Figure E" },
    ],
    answer: "E",
    explanation:
      "In figures A–D the inner and outer shapes are the same type (two circles, two squares, two triangles, two diamonds). In figure E the inner shape (circle) differs from the outer (star). Figure E is the outlier.",
  },
  {
    id: "t4-q36",
    category: "spatial",
    prompt:
      "Which option continues the sequence? (Outer shape cycles; inner shape's side count matches the outer shape.)",
    figureSvg: rowSvg([
      [triangle(40, 45, 50), triangle(40, 46, 20)],
      [square(40, 40, 50), square(40, 40, 20)],
      [
        `<polygon points="40,20 60,34 52,58 28,58 20,34" fill="none" stroke="#111" stroke-width="2"/>`,
        `<polygon points="40,32 50,40 47,52 33,52 30,40" fill="none" stroke="#111" stroke-width="2"/>`,
      ],
      [`<text x="40" y="45" font-size="32" text-anchor="middle">?</text>`],
      [],
    ]),
    options: [
      {
        key: "A",
        svg: optSvg([
          `<polygon points="40,20 58,30 62,50 48,62 32,62 18,50 22,30" fill="none" stroke="#111" stroke-width="2"/>`,
          `<polygon points="40,32 50,37 52,48 46,55 34,55 28,48 30,37" fill="none" stroke="#111" stroke-width="2"/>`,
        ]),
      },
      {
        key: "B",
        svg: optSvg([
          `<polygon points="40,20 56,28 62,44 56,60 40,65 24,60 18,44 24,28" fill="none" stroke="#111" stroke-width="2"/>`,
        ]),
      },
      {
        key: "C",
        svg: optSvg([circle(40, 40, 25), circle(40, 40, 10)]),
      },
      {
        key: "D",
        svg: optSvg([triangle(40, 45, 50), triangle(40, 46, 20)]),
      },
      {
        key: "E",
        svg: optSvg([square(40, 40, 50), square(40, 40, 20)]),
      },
    ],
    answer: "A",
    explanation:
      "The outer side count grows 3, 4, 5 — next should be 6 (hexagon). The inner shape always matches the outer. Option A shows a hexagon containing a smaller hexagon.",
  },
  {
    id: "t4-q37",
    category: "spatial",
    prompt:
      "Which option is the figure on the left rotated 90° clockwise?",
    figureSvg: rowSvg([
      [
        `<polygon points="20,20 60,40 20,60" fill="none" stroke="#111" stroke-width="2"/>`,
        circle(30, 40, 4, { fill: "#111" }),
      ],
      [],
      [],
      [],
      [],
    ]),
    options: [
      { key: "A", svg: optSvg([`<polygon points="20,20 60,20 40,60" fill="none" stroke="#111" stroke-width="2"/>`, circle(40, 30, 4, { fill: "#111" })]) },
      { key: "B", svg: optSvg([`<polygon points="60,20 60,60 20,40" fill="none" stroke="#111" stroke-width="2"/>`, circle(50, 40, 4, { fill: "#111" })]) },
      { key: "C", svg: optSvg([`<polygon points="20,60 60,60 40,20" fill="none" stroke="#111" stroke-width="2"/>`, circle(40, 50, 4, { fill: "#111" })]) },
      { key: "D", svg: optSvg([`<polygon points="20,20 60,40 20,60" fill="none" stroke="#111" stroke-width="2"/>`, circle(30, 40, 4, { fill: "#111" })]) },
      { key: "E", svg: optSvg([`<polygon points="40,20 20,60 60,60" fill="none" stroke="#111" stroke-width="2"/>`, circle(40, 50, 4, { fill: "#111" })]) },
    ],
    answer: "A",
    explanation:
      "The original triangle points right. Rotated 90° clockwise, it points down (apex at the bottom). The dot, originally on the left, moves to the top. Option A matches.",
  },
  {
    id: "t4-q38",
    category: "spatial",
    prompt: "Which figure does NOT belong?",
    figureSvg: rowSvg([
      [circle(40, 40, 26), circle(40, 40, 14), circle(40, 40, 6)],
      [square(40, 40, 48), square(40, 40, 30), square(40, 40, 14)],
      [triangle(40, 45, 50), triangle(40, 45, 30), triangle(40, 45, 14)],
      [diamond(40, 40, 38), diamond(40, 40, 24), diamond(40, 40, 12)],
      [circle(40, 40, 26), square(40, 40, 30), triangle(40, 45, 14)],
    ]),
    options: [
      { key: "A", text: "Figure A" },
      { key: "B", text: "Figure B" },
      { key: "C", text: "Figure C" },
      { key: "D", text: "Figure D" },
      { key: "E", text: "Figure E" },
    ],
    answer: "E",
    explanation:
      "Figures A–D each show three nested copies of the SAME shape. Figure E mixes three different shapes. Figure E is the outlier.",
  },
  {
    id: "t4-q39",
    category: "spatial",
    prompt:
      "Which figure is the vertical mirror (top-bottom flip) of the figure on the far left?",
    figureSvg: rowSvg([
      [
        `<polyline points="15,20 35,55 50,30 65,60" fill="none" stroke="#111" stroke-width="3"/>`,
      ],
      [],
      [],
      [],
      [],
    ]),
    options: [
      { key: "A", svg: optSvg([`<polyline points="15,60 35,25 50,50 65,20" fill="none" stroke="#111" stroke-width="3"/>`]) },
      { key: "B", svg: optSvg([`<polyline points="15,20 35,55 50,30 65,60" fill="none" stroke="#111" stroke-width="3"/>`]) },
      { key: "C", svg: optSvg([`<polyline points="65,20 45,55 30,30 15,60" fill="none" stroke="#111" stroke-width="3"/>`]) },
      { key: "D", svg: optSvg([`<polyline points="15,40 35,25 50,40 65,25" fill="none" stroke="#111" stroke-width="3"/>`]) },
      { key: "E", svg: optSvg([`<polyline points="15,40 35,55 50,40 65,55" fill="none" stroke="#111" stroke-width="3"/>`]) },
    ],
    answer: "A",
    explanation:
      "A vertical flip inverts y-coordinates (y → 80 − y) while x stays the same. The original (15,20 35,55 50,30 65,60) becomes (15,60 35,25 50,50 65,20) — option A.",
  },
  {
    id: "t4-q40",
    category: "spatial",
    prompt:
      "Which cell completes the 3×3 matrix? (Number of dots increases down each column; outer shape stays the same across each row.)",
    figureSvg: mat3Svg([
      [circle(40, 40, 28)],
      [circle(40, 40, 28), circle(40, 40, 4, { fill: "#111" })],
      [circle(40, 40, 28), circle(30, 40, 4, { fill: "#111" }), circle(50, 40, 4, { fill: "#111" })],
      [square(40, 40, 50)],
      [square(40, 40, 50), circle(40, 40, 4, { fill: "#111" })],
      [square(40, 40, 50), circle(30, 40, 4, { fill: "#111" }), circle(50, 40, 4, { fill: "#111" })],
      [triangle(40, 45, 55)],
      [triangle(40, 45, 55), circle(40, 50, 4, { fill: "#111" })],
      null,
    ]),
    options: [
      { key: "A", svg: optSvg([triangle(40, 45, 55), circle(32, 50, 4, { fill: "#111" }), circle(48, 50, 4, { fill: "#111" })]) },
      { key: "B", svg: optSvg([triangle(40, 45, 55), circle(40, 50, 4, { fill: "#111" })]) },
      { key: "C", svg: optSvg([triangle(40, 45, 55)]) },
      { key: "D", svg: optSvg([square(40, 40, 50), circle(30, 40, 4, { fill: "#111" }), circle(50, 40, 4, { fill: "#111" })]) },
      { key: "E", svg: optSvg([triangle(40, 45, 55), circle(28, 50, 4, { fill: "#111" }), circle(40, 50, 4, { fill: "#111" }), circle(52, 50, 4, { fill: "#111" })]) },
    ],
    answer: "A",
    explanation:
      "Down each column the dot count is 0, 1, 2. The third row uses a triangle. The missing cell (row 3, column 3) is a triangle with 2 dots — option A.",
  },
  {
    id: "t4-q41",
    category: "spatial",
    prompt: "Which figure does NOT belong?",
    figureSvg: rowSvg([
      [triangle(40, 40, 38), line(40, 20, 40, 60)],
      [square(40, 40, 38), line(40, 20, 40, 60)],
      [circle(40, 40, 22), line(40, 20, 40, 60)],
      [diamond(40, 40, 32), line(40, 20, 40, 60)],
      [star(40, 40, 18), line(20, 40, 60, 40)],
    ]),
    options: [
      { key: "A", text: "Figure A" },
      { key: "B", text: "Figure B" },
      { key: "C", text: "Figure C" },
      { key: "D", text: "Figure D" },
      { key: "E", text: "Figure E" },
    ],
    answer: "E",
    explanation:
      "In figures A–D a VERTICAL line bisects the shape. In figure E the line is HORIZONTAL. Figure E is the outlier.",
  },
  {
    id: "t4-q42",
    category: "spatial",
    prompt:
      "Which option comes next? (Each step the figure acquires one more small outside dot, placed one corner further clockwise starting from the top-left.)",
    figureSvg: rowSvg([
      [square(40, 40, 36), circle(16, 16, 4, { fill: "#111" })],
      [square(40, 40, 36), circle(16, 16, 4, { fill: "#111" }), circle(64, 16, 4, { fill: "#111" })],
      [
        square(40, 40, 36),
        circle(16, 16, 4, { fill: "#111" }),
        circle(64, 16, 4, { fill: "#111" }),
        circle(64, 64, 4, { fill: "#111" }),
      ],
      [`<text x="40" y="45" font-size="32" text-anchor="middle">?</text>`],
      [],
    ]),
    options: [
      {
        key: "A",
        svg: optSvg([
          square(40, 40, 36),
          circle(16, 16, 4, { fill: "#111" }),
          circle(64, 16, 4, { fill: "#111" }),
          circle(64, 64, 4, { fill: "#111" }),
          circle(16, 64, 4, { fill: "#111" }),
        ]),
      },
      {
        key: "B",
        svg: optSvg([
          square(40, 40, 36),
          circle(16, 16, 4, { fill: "#111" }),
          circle(64, 16, 4, { fill: "#111" }),
          circle(64, 64, 4, { fill: "#111" }),
        ]),
      },
      {
        key: "C",
        svg: optSvg([square(40, 40, 36), circle(16, 16, 4, { fill: "#111" })]),
      },
      {
        key: "D",
        svg: optSvg([
          square(40, 40, 36),
          circle(16, 16, 4, { fill: "#111" }),
          circle(40, 16, 4, { fill: "#111" }),
          circle(64, 16, 4, { fill: "#111" }),
        ]),
      },
      {
        key: "E",
        svg: optSvg([
          square(40, 40, 36),
          circle(16, 64, 4, { fill: "#111" }),
        ]),
      },
    ],
    answer: "A",
    explanation:
      "Dots are added one-by-one at corners clockwise: TL, TR, BR, next is BL. Option A shows all four corners filled.",
  },
  {
    id: "t4-q43",
    category: "spatial",
    prompt:
      "Which option is the figure on the left rotated 180°?",
    figureSvg: rowSvg([
      [square(40, 40, 44), circle(26, 26, 5, { fill: "#111" })],
      [],
      [],
      [],
      [],
    ]),
    options: [
      { key: "A", svg: optSvg([square(40, 40, 44), circle(54, 54, 5, { fill: "#111" })]) },
      { key: "B", svg: optSvg([square(40, 40, 44), circle(26, 54, 5, { fill: "#111" })]) },
      { key: "C", svg: optSvg([square(40, 40, 44), circle(54, 26, 5, { fill: "#111" })]) },
      { key: "D", svg: optSvg([square(40, 40, 44), circle(26, 26, 5, { fill: "#111" })]) },
      { key: "E", svg: optSvg([square(40, 40, 44), circle(40, 40, 5, { fill: "#111" })]) },
    ],
    answer: "A",
    explanation:
      "180° rotation sends (x, y) to (80 − x, 80 − y). A dot at (26, 26) moves to (54, 54) — the diagonally opposite corner. Option A matches.",
  },
  {
    id: "t4-q44",
    category: "spatial",
    prompt: "How many triangles (of any size) are in the figure below?",
    figureSvg: compose(160, 150, [
      `<polygon points="80,15 15,130 145,130" fill="none" stroke="#111" stroke-width="2"/>`,
      `<line x1="80" y1="15" x2="80" y2="130" stroke="#111" stroke-width="2"/>`,
    ]),
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "3" },
      { key: "C", text: "4" },
      { key: "D", text: "5" },
      { key: "E", text: "6" },
    ],
    answer: "B",
    explanation:
      "A vertical line from the apex to the base's midpoint splits the large triangle into two smaller triangles. Counting: 1 large triangle + 2 small halves = 3 triangles total.",
  },
  {
    id: "t4-q45",
    category: "spatial",
    prompt:
      "Which option continues the sequence? (Each step the number of sides of the shape increases by 1.)",
    figureSvg: rowSvg([
      [triangle(40, 45, 50)],
      [square(40, 40, 50)],
      [`<polygon points="40,20 60,32 55,56 25,56 20,32" fill="none" stroke="#111" stroke-width="2"/>`],
      [`<text x="40" y="45" font-size="32" text-anchor="middle">?</text>`],
      [],
    ]),
    options: [
      { key: "A", svg: optSvg([`<polygon points="40,18 58,28 62,48 48,62 32,62 18,48 22,28" fill="none" stroke="#111" stroke-width="2"/>`]) },
      { key: "B", svg: optSvg([`<polygon points="40,20 56,30 60,50 40,65 20,50 24,30" fill="none" stroke="#111" stroke-width="2"/>`]) },
      { key: "C", svg: optSvg([triangle(40, 45, 50)]) },
      { key: "D", svg: optSvg([square(40, 40, 50)]) },
      { key: "E", svg: optSvg([circle(40, 40, 25)]) },
    ],
    answer: "B",
    explanation:
      "Side counts: 3, 4, 5. The next polygon has 6 sides (hexagon). Option B is the hexagon.",
  },
  {
    id: "t4-q46",
    category: "spatial",
    prompt: "Which figure does NOT belong?",
    figureSvg: rowSvg([
      [square(40, 40, 50), line(20, 20, 60, 60)],
      [square(40, 40, 50), line(20, 60, 60, 20)],
      [square(40, 40, 50), line(40, 20, 40, 60)],
      [square(40, 40, 50), line(20, 40, 60, 40)],
      [circle(40, 40, 25), line(20, 40, 60, 40)],
    ]),
    options: [
      { key: "A", text: "Figure A" },
      { key: "B", text: "Figure B" },
      { key: "C", text: "Figure C" },
      { key: "D", text: "Figure D" },
      { key: "E", text: "Figure E" },
    ],
    answer: "E",
    explanation:
      "Figures A–D all show a square with a single dividing line. Figure E replaces the square with a circle. Figure E is the outlier.",
  },
  {
    id: "t4-q47",
    category: "spatial",
    prompt:
      "Which option continues the sequence? (Each step the figure alternates between a filled triangle and a filled square, decreasing in size.)",
    figureSvg: rowSvg([
      [triangle(40, 45, 55, { fill: "#111" })],
      [square(40, 40, 40, { fill: "#111" })],
      [triangle(40, 45, 30, { fill: "#111" })],
      [`<text x="40" y="45" font-size="32" text-anchor="middle">?</text>`],
      [],
    ]),
    options: [
      { key: "A", svg: optSvg([square(40, 40, 20, { fill: "#111" })]) },
      { key: "B", svg: optSvg([square(40, 40, 40, { fill: "#111" })]) },
      { key: "C", svg: optSvg([triangle(40, 45, 20, { fill: "#111" })]) },
      { key: "D", svg: optSvg([circle(40, 40, 10, { fill: "#111" })]) },
      { key: "E", svg: optSvg([square(40, 40, 50, { fill: "#111" })]) },
    ],
    answer: "A",
    explanation:
      "Shapes alternate triangle, square, triangle → next is square. Sizes decrease 55, 40, 30 → next about 20. Option A is a filled square of size ~20.",
  },
  {
    id: "t4-q48",
    category: "spatial",
    prompt: "Which figure does NOT belong?",
    figureSvg: rowSvg([
      [circle(40, 40, 25), circle(40, 40, 15), circle(40, 40, 5)],
      [square(40, 40, 48), square(40, 40, 30), square(40, 40, 12)],
      [circle(40, 40, 25), square(40, 40, 26), circle(40, 40, 8)],
      [diamond(40, 40, 38), diamond(40, 40, 24), diamond(40, 40, 10)],
      [triangle(40, 45, 48), triangle(40, 45, 30), triangle(40, 45, 12)],
    ]),
    options: [
      { key: "A", text: "Figure A" },
      { key: "B", text: "Figure B" },
      { key: "C", text: "Figure C" },
      { key: "D", text: "Figure D" },
      { key: "E", text: "Figure E" },
    ],
    answer: "C",
    explanation:
      "Figures A, B, D, and E show three nested SAME-shape figures. Figure C alternates shape types (circle, square, circle). Figure C is the outlier.",
  },
  {
    id: "t4-q49",
    category: "spatial",
    prompt:
      "Which option continues the sequence? (Each step the triangle rotates 60° clockwise.)",
    figureSvg: rowSvg([
      [triangle(40, 40, 40)],
      [triangle(40, 40, 40, { rotate: 60 })],
      [triangle(40, 40, 40, { rotate: 120 })],
      [`<text x="40" y="45" font-size="32" text-anchor="middle">?</text>`],
      [],
    ]),
    options: [
      { key: "A", svg: optSvg([triangle(40, 40, 40, { rotate: 180 })]) },
      { key: "B", svg: optSvg([triangle(40, 40, 40, { rotate: 90 })]) },
      { key: "C", svg: optSvg([triangle(40, 40, 40, { rotate: 240 })]) },
      { key: "D", svg: optSvg([triangle(40, 40, 40, { rotate: 45 })]) },
      { key: "E", svg: optSvg([triangle(40, 40, 40)]) },
    ],
    answer: "A",
    explanation:
      "Angles so far: 0°, 60°, 120°. The next rotation of +60° gives 180°. Option A matches.",
  },
  {
    id: "t4-q50",
    category: "spatial",
    prompt:
      "Which cell completes the 3×3 matrix? (Each cell = outer shape + number of dots. Down each column the dot count increases 1, 2, 3; across each row the outer shape changes.)",
    figureSvg: mat3Svg([
      [circle(40, 40, 28), circle(40, 40, 4, { fill: "#111" })],
      [square(40, 40, 50), circle(40, 40, 4, { fill: "#111" })],
      [triangle(40, 45, 55), circle(40, 50, 4, { fill: "#111" })],
      [circle(40, 40, 28), circle(32, 40, 4, { fill: "#111" }), circle(48, 40, 4, { fill: "#111" })],
      [square(40, 40, 50), circle(32, 40, 4, { fill: "#111" }), circle(48, 40, 4, { fill: "#111" })],
      [triangle(40, 45, 55), circle(32, 50, 4, { fill: "#111" }), circle(48, 50, 4, { fill: "#111" })],
      [
        circle(40, 40, 28),
        circle(28, 40, 4, { fill: "#111" }),
        circle(40, 40, 4, { fill: "#111" }),
        circle(52, 40, 4, { fill: "#111" }),
      ],
      [
        square(40, 40, 50),
        circle(28, 40, 4, { fill: "#111" }),
        circle(40, 40, 4, { fill: "#111" }),
        circle(52, 40, 4, { fill: "#111" }),
      ],
      null,
    ]),
    options: [
      {
        key: "A",
        svg: optSvg([
          triangle(40, 45, 55),
          circle(28, 50, 4, { fill: "#111" }),
          circle(40, 50, 4, { fill: "#111" }),
          circle(52, 50, 4, { fill: "#111" }),
        ]),
      },
      {
        key: "B",
        svg: optSvg([triangle(40, 45, 55), circle(40, 50, 4, { fill: "#111" })]),
      },
      {
        key: "C",
        svg: optSvg([square(40, 40, 50), circle(40, 40, 4, { fill: "#111" })]),
      },
      {
        key: "D",
        svg: optSvg([
          triangle(40, 45, 55),
          circle(32, 50, 4, { fill: "#111" }),
          circle(48, 50, 4, { fill: "#111" }),
        ]),
      },
      {
        key: "E",
        svg: optSvg([
          circle(40, 40, 28),
          circle(28, 40, 4, { fill: "#111" }),
          circle(40, 40, 4, { fill: "#111" }),
          circle(52, 40, 4, { fill: "#111" }),
        ]),
      },
    ],
    answer: "A",
    explanation:
      "The missing cell is (row 3, column 3). Down each column the dot count is 1, 2, 3; across each row the outer shape is circle, square, triangle. So the answer is a triangle with 3 dots — option A.",
  },
];

export default test4;
