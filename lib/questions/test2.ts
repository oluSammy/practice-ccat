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

const test2: Question[] = [
  // =================== VERBAL (17) ===================
  {
    id: "t2-q01",
    category: "verbal",
    prompt: "Choose the ANTONYM: PROLIFIC",
    options: [
      { key: "A", text: "fruitful" },
      { key: "B", text: "barren" },
      { key: "C", text: "abundant" },
      { key: "D", text: "prolonged" },
      { key: "E", text: "vigorous" },
    ],
    answer: "B",
    explanation:
      '"Prolific" means producing a great deal (of work, offspring, etc.). "Barren" — producing little or nothing — is the opposite.',
  },
  {
    id: "t2-q02",
    category: "verbal",
    prompt: "Choose the SYNONYM: AMELIORATE",
    options: [
      { key: "A", text: "worsen" },
      { key: "B", text: "improve" },
      { key: "C", text: "criticize" },
      { key: "D", text: "conceal" },
      { key: "E", text: "approve" },
    ],
    answer: "B",
    explanation:
      '"Ameliorate" means to make better or improve a bad situation. "Improve" is the direct synonym.',
  },
  {
    id: "t2-q03",
    category: "verbal",
    prompt: "SCALPEL is to SURGEON as GAVEL is to:",
    options: [
      { key: "A", text: "carpenter" },
      { key: "B", text: "judge" },
      { key: "C", text: "soldier" },
      { key: "D", text: "musician" },
      { key: "E", text: "diplomat" },
    ],
    answer: "B",
    explanation:
      "A scalpel is the defining tool of a surgeon; a gavel is the defining tool of a judge. The relationship is tool to practitioner.",
  },
  {
    id: "t2-q04",
    category: "verbal",
    prompt:
      "Smartphones have become so ______ that their absence, even for an hour, feels disorienting to most adults.",
    options: [
      { key: "A", text: "anachronistic" },
      { key: "B", text: "ubiquitous" },
      { key: "C", text: "ephemeral" },
      { key: "D", text: "innocuous" },
      { key: "E", text: "rudimentary" },
    ],
    answer: "B",
    explanation:
      '"Ubiquitous" means existing everywhere. The sentence suggests smartphones are so pervasive their absence is jarring. The other words do not fit.',
  },
  {
    id: "t2-q05",
    category: "verbal",
    prompt: "Choose the ANTONYM: EXTOL",
    options: [
      { key: "A", text: "praise" },
      { key: "B", text: "disparage" },
      { key: "C", text: "endure" },
      { key: "D", text: "extend" },
      { key: "E", text: "repay" },
    ],
    answer: "B",
    explanation:
      '"Extol" means to praise enthusiastically. "Disparage" — to belittle or speak critically of — is the opposite.',
  },
  {
    id: "t2-q06",
    category: "verbal",
    prompt:
      'In the sentence "Her argument, while provocative, was not TENABLE in light of the new data," TENABLE most nearly means:',
    options: [
      { key: "A", text: "interesting" },
      { key: "B", text: "defensible" },
      { key: "C", text: "outdated" },
      { key: "D", text: "concise" },
      { key: "E", text: "original" },
    ],
    answer: "B",
    explanation:
      '"Tenable" means able to be maintained or defended. "Not tenable" means the argument cannot hold up under scrutiny — "not defensible" matches.',
  },
  {
    id: "t2-q07",
    category: "verbal",
    prompt: "DAM is to WATER as TOURNIQUET is to:",
    options: [
      { key: "A", text: "wound" },
      { key: "B", text: "blood" },
      { key: "C", text: "bandage" },
      { key: "D", text: "fever" },
      { key: "E", text: "injury" },
    ],
    answer: "B",
    explanation:
      "A dam restricts the flow of water; a tourniquet restricts the flow of blood. The relationship is instrument to what it restricts.",
  },
  {
    id: "t2-q08",
    category: "verbal",
    prompt: "Choose the SYNONYM: SANGUINE",
    options: [
      { key: "A", text: "morose" },
      { key: "B", text: "optimistic" },
      { key: "C", text: "hostile" },
      { key: "D", text: "pallid" },
      { key: "E", text: "furtive" },
    ],
    answer: "B",
    explanation:
      '"Sanguine" means cheerfully optimistic, especially in a difficult situation. "Optimistic" is the closest synonym.',
  },
  {
    id: "t2-q09",
    category: "verbal",
    prompt: "Choose the ANTONYM: ESCHEW",
    options: [
      { key: "A", text: "avoid" },
      { key: "B", text: "embrace" },
      { key: "C", text: "chew" },
      { key: "D", text: "discard" },
      { key: "E", text: "hesitate" },
    ],
    answer: "B",
    explanation:
      '"Eschew" means to deliberately avoid or abstain from. "Embrace" — to willingly accept — is the opposite.',
  },
  {
    id: "t2-q10",
    category: "verbal",
    prompt:
      "Rather than commit to a position, the senator chose to ______, buying time to gauge public opinion.",
    options: [
      { key: "A", text: "capitulate" },
      { key: "B", text: "temporize" },
      { key: "C", text: "remonstrate" },
      { key: "D", text: "extrapolate" },
      { key: "E", text: "consolidate" },
    ],
    answer: "B",
    explanation:
      '"Temporize" means to delay, stall, or avoid committing to a decision to gain time. That exactly matches "buying time to gauge public opinion".',
  },
  {
    id: "t2-q11",
    category: "verbal",
    prompt: "Choose the ANTONYM: PROSAIC",
    options: [
      { key: "A", text: "mundane" },
      { key: "B", text: "poetic" },
      { key: "C", text: "concise" },
      { key: "D", text: "dogmatic" },
      { key: "E", text: "arcane" },
    ],
    answer: "B",
    explanation:
      '"Prosaic" means commonplace or unromantic (prose-like, as opposed to poetic). "Poetic" is its antonym.',
  },
  {
    id: "t2-q12",
    category: "verbal",
    prompt: "COMPASS is to DIRECTION as CLOCK is to:",
    options: [
      { key: "A", text: "distance" },
      { key: "B", text: "time" },
      { key: "C", text: "day" },
      { key: "D", text: "motion" },
      { key: "E", text: "schedule" },
    ],
    answer: "B",
    explanation:
      "A compass indicates direction; a clock indicates time. The relationship is instrument to the quantity it displays.",
  },
  {
    id: "t2-q13",
    category: "verbal",
    prompt: "Choose the SYNONYM: TRUCULENT",
    options: [
      { key: "A", text: "peaceful" },
      { key: "B", text: "belligerent" },
      { key: "C", text: "fatigued" },
      { key: "D", text: "honest" },
      { key: "E", text: "brief" },
    ],
    answer: "B",
    explanation:
      '"Truculent" means eager or quick to argue or fight. "Belligerent" (hostile, aggressive) is its closest synonym.',
  },
  {
    id: "t2-q14",
    category: "verbal",
    prompt: "Choose the ANTONYM: ZENITH",
    options: [
      { key: "A", text: "peak" },
      { key: "B", text: "nadir" },
      { key: "C", text: "horizon" },
      { key: "D", text: "zero" },
      { key: "E", text: "plateau" },
    ],
    answer: "B",
    explanation:
      '"Zenith" is the highest point; "nadir" is the lowest. These are direct opposites.',
  },
  {
    id: "t2-q15",
    category: "verbal",
    prompt:
      "After years of ______ living, the author's unexpected inheritance felt almost unreal.",
    options: [
      { key: "A", text: "opulent" },
      { key: "B", text: "impecunious" },
      { key: "C", text: "convivial" },
      { key: "D", text: "peripatetic" },
      { key: "E", text: "strenuous" },
    ],
    answer: "B",
    explanation:
      '"Impecunious" means habitually without money; an inheritance would feel unreal after years of that. The context ("almost unreal") signals stark contrast with wealth.',
  },
  {
    id: "t2-q16",
    category: "verbal",
    prompt: "NOVEL is to CHAPTER as SYMPHONY is to:",
    options: [
      { key: "A", text: "composer" },
      { key: "B", text: "movement" },
      { key: "C", text: "note" },
      { key: "D", text: "conductor" },
      { key: "E", text: "instrument" },
    ],
    answer: "B",
    explanation:
      "A novel is divided into chapters; a symphony is divided into movements. The relationship is whole to its primary subdivision.",
  },
  {
    id: "t2-q17",
    category: "verbal",
    prompt: "Choose the ANTONYM: INDOLENT",
    options: [
      { key: "A", text: "lazy" },
      { key: "B", text: "industrious" },
      { key: "C", text: "greedy" },
      { key: "D", text: "hesitant" },
      { key: "E", text: "generous" },
    ],
    answer: "B",
    explanation:
      '"Indolent" means habitually lazy. "Industrious" (diligent, hard-working) is the direct opposite.',
  },

  // =================== MATH / LOGIC (17) ===================
  {
    id: "t2-q18",
    category: "math",
    prompt:
      "The average score on a test for 5 students is 82. If the first four scores are 78, 85, 90, and 75, what was the fifth student's score?",
    options: [
      { key: "A", text: "78" },
      { key: "B", text: "80" },
      { key: "C", text: "82" },
      { key: "D", text: "84" },
      { key: "E", text: "86" },
    ],
    answer: "C",
    explanation:
      "Total = 5 × 82 = 410. Sum of first four = 78 + 85 + 90 + 75 = 328. Fifth score = 410 − 328 = 82.",
  },
  {
    id: "t2-q19",
    category: "math",
    prompt:
      "A retailer marks up wholesale cost by 60% to set a list price. During a clearance the list price is discounted 25%. What percent above wholesale cost is the clearance price?",
    options: [
      { key: "A", text: "15%" },
      { key: "B", text: "20%" },
      { key: "C", text: "25%" },
      { key: "D", text: "30%" },
      { key: "E", text: "35%" },
    ],
    answer: "B",
    explanation:
      "List = 1.60 × cost. Clearance = 0.75 × 1.60 × cost = 1.20 × cost = 20% above cost.",
  },
  {
    id: "t2-q20",
    category: "math",
    prompt:
      "A mixture contains 40% alcohol. How many liters of pure alcohol must be added to 10 liters of this mixture to produce a 50% alcohol solution?",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "1.5" },
      { key: "C", text: "2" },
      { key: "D", text: "2.5" },
      { key: "E", text: "3" },
    ],
    answer: "C",
    explanation:
      "Start with 4 L alcohol in 10 L. Let x L pure alcohol be added: (4 + x)/(10 + x) = 0.5. So 4 + x = 5 + 0.5x → 0.5x = 1 → x = 2.",
  },
  {
    id: "t2-q21",
    category: "math",
    prompt:
      "A cyclist travels from X to Y at 12 mph and returns along the same route at 18 mph. What is the cyclist's average speed (in mph) for the round trip?",
    options: [
      { key: "A", text: "13.5" },
      { key: "B", text: "14.0" },
      { key: "C", text: "14.4" },
      { key: "D", text: "15.0" },
      { key: "E", text: "16.0" },
    ],
    answer: "C",
    explanation:
      "Average speed for equal distances = harmonic mean = 2ab/(a+b) = 2(12)(18)/(12+18) = 432/30 = 14.4 mph.",
  },
  {
    id: "t2-q22",
    category: "math",
    prompt: "What comes next? 1, 2, 4, 8, 16, 32, ___",
    options: [
      { key: "A", text: "48" },
      { key: "B", text: "56" },
      { key: "C", text: "60" },
      { key: "D", text: "64" },
      { key: "E", text: "72" },
    ],
    answer: "D",
    explanation:
      "Each term is double the previous term (geometric, ratio 2). 32 × 2 = 64.",
  },
  {
    id: "t2-q23",
    category: "math",
    prompt:
      "If 2x + 3y = 17 and x − y = 1, what is the value of y?",
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "3" },
      { key: "C", text: "4" },
      { key: "D", text: "5" },
      { key: "E", text: "6" },
    ],
    answer: "B",
    explanation:
      "From x = y + 1, substitute: 2(y + 1) + 3y = 17 → 5y + 2 = 17 → 5y = 15 → y = 3.",
  },
  {
    id: "t2-q24",
    category: "math",
    prompt:
      "Every member of the debate team plays a musical instrument. Some members of the debate team also play chess. No chess player on the team plays violin. Which statement MUST be true?",
    options: [
      { key: "A", text: "All debate members play violin." },
      { key: "B", text: "Some debate members play a musical instrument other than violin." },
      { key: "C", text: "No debate members play violin." },
      { key: "D", text: "All chess players are debate members." },
      { key: "E", text: "No chess players play musical instruments." },
    ],
    answer: "B",
    explanation:
      "Some debate members play chess, and chess players do not play violin — but every debate member plays some instrument, so those chess-playing members must play an instrument other than violin. B is the only statement forced by the premises.",
  },
  {
    id: "t2-q25",
    category: "math",
    prompt:
      "A jacket was marked up 30% from its cost and then sold at a 15% discount from the marked-up price. If the cost was $200, what was the selling price?",
    options: [
      { key: "A", text: "$207.00" },
      { key: "B", text: "$217.00" },
      { key: "C", text: "$221.00" },
      { key: "D", text: "$230.00" },
      { key: "E", text: "$240.50" },
    ],
    answer: "C",
    explanation:
      "Marked-up price = 200 × 1.30 = $260. After 15% discount: 260 × 0.85 = $221.",
  },
  {
    id: "t2-q26",
    category: "math",
    prompt:
      "Sara is 4 times as old as Tim. In 12 years, Sara will be only twice as old as Tim. How old is Sara now?",
    options: [
      { key: "A", text: "16" },
      { key: "B", text: "20" },
      { key: "C", text: "24" },
      { key: "D", text: "28" },
      { key: "E", text: "32" },
    ],
    answer: "C",
    explanation:
      "Let Tim's age = t. Sara = 4t. In 12 years: 4t + 12 = 2(t + 12) → 4t + 12 = 2t + 24 → 2t = 12 → t = 6. Sara = 4 × 6 = 24.",
  },
  {
    id: "t2-q27",
    category: "math",
    prompt:
      "Worker A can finish a job in 10 hours. Worker B can finish the same job in 15 hours. If they work together, how long will it take them to finish the job?",
    options: [
      { key: "A", text: "5 hours" },
      { key: "B", text: "6 hours" },
      { key: "C", text: "7 hours" },
      { key: "D", text: "8 hours" },
      { key: "E", text: "9 hours" },
    ],
    answer: "B",
    explanation:
      "Combined rate = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6. So time = 6 hours.",
  },
  {
    id: "t2-q28",
    category: "math",
    prompt: "What comes next? 100, 97, 91, 82, 70, ___",
    options: [
      { key: "A", text: "52" },
      { key: "B", text: "55" },
      { key: "C", text: "58" },
      { key: "D", text: "61" },
      { key: "E", text: "64" },
    ],
    answer: "B",
    explanation:
      "Differences are −3, −6, −9, −12 (decreasing by 3 more each step). Next difference is −15, so 70 − 15 = 55.",
  },
  {
    id: "t2-q29",
    category: "math",
    prompt:
      "A circle has a radius of 6. A second circle has a radius of 9. By what percent is the area of the second circle greater than the first?",
    options: [
      { key: "A", text: "50%" },
      { key: "B", text: "75%" },
      { key: "C", text: "100%" },
      { key: "D", text: "125%" },
      { key: "E", text: "150%" },
    ],
    answer: "D",
    explanation:
      "Area ratio = (9/6)² = 2.25. Second area is 225% of the first — i.e., 125% greater.",
  },
  {
    id: "t2-q30",
    category: "math",
    prompt:
      "In a survey of 120 people, 70 liked tea, 55 liked coffee, and 30 liked both. How many liked NEITHER?",
    options: [
      { key: "A", text: "15" },
      { key: "B", text: "20" },
      { key: "C", text: "25" },
      { key: "D", text: "30" },
      { key: "E", text: "35" },
    ],
    answer: "C",
    explanation:
      "Liked at least one = 70 + 55 − 30 = 95. Neither = 120 − 95 = 25.",
  },
  {
    id: "t2-q31",
    category: "math",
    prompt:
      "What is 35% of 240?",
    options: [
      { key: "A", text: "68" },
      { key: "B", text: "72" },
      { key: "C", text: "84" },
      { key: "D", text: "92" },
      { key: "E", text: "96" },
    ],
    answer: "C",
    explanation:
      "35% = 0.35. 0.35 × 240 = 84. (Shortcut: 10% = 24, 30% = 72, 5% = 12, total 84.)",
  },
  {
    id: "t2-q32",
    category: "math",
    prompt:
      "A fair six-sided die is rolled twice. What is the probability that the sum of the two rolls is exactly 7?",
    options: [
      { key: "A", text: "1/12" },
      { key: "B", text: "1/9" },
      { key: "C", text: "1/6" },
      { key: "D", text: "5/36" },
      { key: "E", text: "7/36" },
    ],
    answer: "C",
    explanation:
      "Pairs summing to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 outcomes out of 36. 6/36 = 1/6.",
  },
  {
    id: "t2-q33",
    category: "math",
    prompt:
      "What number should fill the blank? 2, 5, 11, 23, 47, ___",
    options: [
      { key: "A", text: "59" },
      { key: "B", text: "71" },
      { key: "C", text: "89" },
      { key: "D", text: "95" },
      { key: "E", text: "103" },
    ],
    answer: "D",
    explanation:
      "Each term = previous × 2 + 1. 47 × 2 + 1 = 95.",
  },
  {
    id: "t2-q34",
    category: "math",
    prompt:
      "A plan employs 42 workers in a 3 : 4 ratio of men to women. How many women are employed?",
    options: [
      { key: "A", text: "18" },
      { key: "B", text: "20" },
      { key: "C", text: "22" },
      { key: "D", text: "24" },
      { key: "E", text: "26" },
    ],
    answer: "D",
    explanation:
      "Total parts = 3 + 4 = 7; each part = 42/7 = 6. Women = 4 × 6 = 24.",
  },

  // =================== SPATIAL (16) ===================
  {
    id: "t2-q35",
    category: "spatial",
    prompt: "Which figure does NOT belong?",
    figureSvg: rowSvg([
      [square(40, 40, 50), circle(40, 40, 15)],
      [square(40, 40, 50), triangle(40, 42, 20)],
      [square(40, 40, 50), diamond(40, 40, 18)],
      [circle(40, 40, 28), square(40, 40, 18)],
      [square(40, 40, 50), star(40, 40, 12)],
    ]),
    options: [
      { key: "A", text: "Figure A" },
      { key: "B", text: "Figure B" },
      { key: "C", text: "Figure C" },
      { key: "D", text: "Figure D" },
      { key: "E", text: "Figure E" },
    ],
    answer: "D",
    explanation:
      "In figures A, B, C, and E the outer shape is a square. In figure D the outer shape is a circle. Figure D is the outlier.",
  },
  {
    id: "t2-q36",
    category: "spatial",
    prompt:
      "What figure should appear in the missing cell to complete the pattern? (Each row: the inner shape rotates 45° right across the row.)",
    figureSvg: mat3Svg([
      [square(40, 40, 50), rect(40, 40, 30, 8)],
      [square(40, 40, 50), rect(40, 40, 28, 10, { rotate: 45 })],
      [square(40, 40, 50), rect(40, 40, 8, 30)],
      [circle(40, 40, 28), rect(40, 40, 30, 8)],
      [circle(40, 40, 28), rect(40, 40, 28, 10, { rotate: 45 })],
      [circle(40, 40, 28), rect(40, 40, 8, 30)],
      [diamond(40, 40, 50), rect(40, 40, 30, 8)],
      [diamond(40, 40, 50), rect(40, 40, 28, 10, { rotate: 45 })],
      null,
    ]),
    options: [
      { key: "A", svg: optSvg([diamond(40, 40, 50), rect(40, 40, 8, 30)]) },
      { key: "B", svg: optSvg([diamond(40, 40, 50), rect(40, 40, 30, 8)]) },
      { key: "C", svg: optSvg([circle(40, 40, 28), rect(40, 40, 8, 30)]) },
      { key: "D", svg: optSvg([diamond(40, 40, 50), rect(40, 40, 28, 10, { rotate: 45 })]) },
      { key: "E", svg: optSvg([square(40, 40, 50), rect(40, 40, 8, 30)]) },
    ],
    answer: "A",
    explanation:
      "Across every row the inner bar rotates from horizontal → diagonal → vertical. The missing cell completes row 3 (outer = diamond) with a vertical bar — option A.",
  },
  {
    id: "t2-q37",
    category: "spatial",
    prompt: "Which option shows the figure on the far left rotated 180°?",
    figureSvg: rowSvg([
      [triangle(40, 45, 40), circle(30, 30, 6, { fill: "#111" })],
      [],
      [],
      [],
      [],
    ]),
    options: [
      {
        key: "A",
        svg: optSvg([triangle(40, 35, 40, { rotate: 180 }), circle(50, 50, 6, { fill: "#111" })]),
      },
      {
        key: "B",
        svg: optSvg([triangle(40, 45, 40), circle(50, 30, 6, { fill: "#111" })]),
      },
      {
        key: "C",
        svg: optSvg([triangle(40, 45, 40, { rotate: 90 }), circle(30, 30, 6, { fill: "#111" })]),
      },
      {
        key: "D",
        svg: optSvg([triangle(40, 45, 40), circle(30, 50, 6, { fill: "#111" })]),
      },
      {
        key: "E",
        svg: optSvg([triangle(40, 35, 40, { rotate: 180 }), circle(30, 30, 6, { fill: "#111" })]),
      },
    ],
    answer: "A",
    explanation:
      "A 180° rotation flips the triangle upside-down AND moves the small dot diagonally opposite (upper-left → lower-right). Option A shows both transformations.",
  },
  {
    id: "t2-q38",
    category: "spatial",
    prompt: "Which figure does NOT belong?",
    figureSvg: rowSvg([
      [circle(40, 40, 25, { pattern: "hatch" })],
      [circle(40, 40, 25, { pattern: "dots" })],
      [circle(40, 40, 25, { fill: "#111" })],
      [circle(40, 40, 25, { pattern: "hatch-v" })],
      [square(40, 40, 45, { pattern: "hatch" })],
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
      "Figures A–D are all circles (with different shadings). Figure E is a square. The odd one out is the one with a different shape.",
  },
  {
    id: "t2-q39",
    category: "spatial",
    prompt:
      "Which figure is the horizontal mirror image (left-right flip) of the figure on the far left?",
    figureSvg: rowSvg([
      [`<polygon points="20,20 60,20 50,60 20,60" fill="none" stroke="#111" stroke-width="2"/>`, circle(30, 30, 4, { fill: "#111" })],
      [],
      [],
      [],
      [],
    ]),
    options: [
      { key: "A", svg: optSvg([`<polygon points="20,20 60,20 60,60 30,60" fill="none" stroke="#111" stroke-width="2"/>`, circle(50, 30, 4, { fill: "#111" })]) },
      { key: "B", svg: optSvg([`<polygon points="20,20 60,20 50,60 20,60" fill="none" stroke="#111" stroke-width="2"/>`, circle(50, 30, 4, { fill: "#111" })]) },
      { key: "C", svg: optSvg([`<polygon points="20,20 60,20 60,60 30,60" fill="none" stroke="#111" stroke-width="2"/>`, circle(30, 30, 4, { fill: "#111" })]) },
      { key: "D", svg: optSvg([`<polygon points="20,20 60,20 50,60 20,60" fill="none" stroke="#111" stroke-width="2"/>`, circle(30, 30, 4, { fill: "#111" })]) },
      { key: "E", svg: optSvg([`<polygon points="20,30 60,30 50,70 20,70" fill="none" stroke="#111" stroke-width="2"/>`, circle(30, 40, 4, { fill: "#111" })]) },
    ],
    answer: "A",
    explanation:
      "A horizontal flip reverses x-coordinates. The original's slanted corner was on the right (vertices x: 20, 60, 50, 20); after mirroring the slant is on the LEFT (x: 60, 20, 30, 60 → equivalently 20, 60, 60, 30). The dot also moves from the left (x=30) to the right (x=50). Option A matches.",
  },
  {
    id: "t2-q40",
    category: "spatial",
    prompt:
      "What comes next in the sequence? (Each step the circle count inside the square doubles.)",
    figureSvg: rowSvg([
      [square(40, 40, 55), circle(40, 40, 6, { fill: "#111" })],
      [square(40, 40, 55), circle(30, 40, 6, { fill: "#111" }), circle(50, 40, 6, { fill: "#111" })],
      [
        square(40, 40, 55),
        circle(25, 30, 6, { fill: "#111" }),
        circle(40, 30, 6, { fill: "#111" }),
        circle(55, 30, 6, { fill: "#111" }),
        circle(32, 50, 6, { fill: "#111" }),
      ],
      [`<text x="40" y="45" font-size="32" text-anchor="middle">?</text>`],
      [],
    ]),
    options: [
      {
        key: "A",
        svg: optSvg([
          square(40, 40, 60),
          circle(25, 25, 5, { fill: "#111" }),
          circle(40, 25, 5, { fill: "#111" }),
          circle(55, 25, 5, { fill: "#111" }),
          circle(25, 40, 5, { fill: "#111" }),
          circle(40, 40, 5, { fill: "#111" }),
          circle(55, 40, 5, { fill: "#111" }),
          circle(32, 55, 5, { fill: "#111" }),
          circle(48, 55, 5, { fill: "#111" }),
        ]),
      },
      {
        key: "B",
        svg: optSvg([
          square(40, 40, 55),
          circle(25, 30, 6, { fill: "#111" }),
          circle(40, 30, 6, { fill: "#111" }),
          circle(55, 30, 6, { fill: "#111" }),
          circle(32, 50, 6, { fill: "#111" }),
        ]),
      },
      {
        key: "C",
        svg: optSvg([
          square(40, 40, 55),
          circle(25, 30, 5, { fill: "#111" }),
          circle(40, 30, 5, { fill: "#111" }),
          circle(55, 30, 5, { fill: "#111" }),
          circle(25, 45, 5, { fill: "#111" }),
          circle(40, 45, 5, { fill: "#111" }),
          circle(55, 45, 5, { fill: "#111" }),
        ]),
      },
      {
        key: "D",
        svg: optSvg([
          square(40, 40, 55),
          circle(30, 40, 6, { fill: "#111" }),
          circle(50, 40, 6, { fill: "#111" }),
        ]),
      },
      {
        key: "E",
        svg: optSvg([
          square(40, 40, 55),
          circle(20, 20, 4, { fill: "#111" }),
          circle(40, 20, 4, { fill: "#111" }),
          circle(60, 20, 4, { fill: "#111" }),
          circle(20, 40, 4, { fill: "#111" }),
          circle(40, 40, 4, { fill: "#111" }),
          circle(60, 40, 4, { fill: "#111" }),
          circle(20, 60, 4, { fill: "#111" }),
          circle(40, 60, 4, { fill: "#111" }),
          circle(60, 60, 4, { fill: "#111" }),
          circle(30, 30, 4, { fill: "#111" }),
        ]),
      },
    ],
    answer: "A",
    explanation:
      "The dot counts are 1, 2, 4, so the next term doubles again to 8. Option A has exactly 8 dots; the others do not.",
  },
  {
    id: "t2-q41",
    category: "spatial",
    prompt: "Which figure does NOT belong with the others?",
    figureSvg: rowSvg([
      [triangle(40, 40, 36), circle(40, 48, 5, { fill: "#111" })],
      [square(40, 40, 36), circle(40, 48, 5, { fill: "#111" })],
      [diamond(40, 40, 30), circle(40, 48, 5, { fill: "#111" })],
      [circle(40, 40, 22), circle(40, 30, 5, { fill: "#111" })],
      [star(40, 40, 18), circle(40, 48, 5, { fill: "#111" })],
    ]),
    options: [
      { key: "A", text: "Figure A" },
      { key: "B", text: "Figure B" },
      { key: "C", text: "Figure C" },
      { key: "D", text: "Figure D" },
      { key: "E", text: "Figure E" },
    ],
    answer: "D",
    explanation:
      "In figures A, B, C, and E the small dot is positioned near the bottom of the larger shape. In figure D the dot is positioned near the top. Figure D is the outlier.",
  },
  {
    id: "t2-q42",
    category: "spatial",
    prompt:
      "Which option continues the sequence? (Each step: outer shape rotates 90° and inner shape alternates color.)",
    figureSvg: rowSvg([
      [triangle(40, 40, 40), circle(40, 44, 8, { fill: "#111" })],
      [triangle(40, 40, 40, { rotate: 90 }), circle(44, 40, 8)],
      [triangle(40, 40, 40, { rotate: 180 }), circle(40, 36, 8, { fill: "#111" })],
      [`<text x="40" y="45" font-size="32" text-anchor="middle">?</text>`],
      [],
    ]),
    options: [
      { key: "A", svg: optSvg([triangle(40, 40, 40, { rotate: 270 }), circle(36, 40, 8)]) },
      { key: "B", svg: optSvg([triangle(40, 40, 40, { rotate: 270 }), circle(36, 40, 8, { fill: "#111" })]) },
      { key: "C", svg: optSvg([triangle(40, 40, 40), circle(36, 40, 8)]) },
      { key: "D", svg: optSvg([triangle(40, 40, 40, { rotate: 180 }), circle(36, 40, 8)]) },
      { key: "E", svg: optSvg([triangle(40, 40, 40, { rotate: 270 }), circle(40, 40, 8, { fill: "#111" })]) },
    ],
    answer: "A",
    explanation:
      "Outer triangle rotates 0° → 90° → 180° → 270° (C). Inner circle alternates filled, unfilled, filled, unfilled → next is unfilled. Option A shows a 270°-rotated triangle with an unfilled inner circle.",
  },
  {
    id: "t2-q43",
    category: "spatial",
    prompt:
      "Which cell completes the 3×3 matrix? (Each row keeps the outer shape; the number of inner squares increases 1, 2, 3.)",
    figureSvg: mat3Svg([
      [triangle(40, 45, 55), square(40, 48, 10, { fill: "#111" })],
      [triangle(40, 45, 55), square(32, 50, 8, { fill: "#111" }), square(48, 50, 8, { fill: "#111" })],
      [triangle(40, 45, 55), square(28, 52, 7, { fill: "#111" }), square(40, 52, 7, { fill: "#111" }), square(52, 52, 7, { fill: "#111" })],
      [circle(40, 40, 28), square(40, 40, 10, { fill: "#111" })],
      [circle(40, 40, 28), square(30, 40, 8, { fill: "#111" }), square(50, 40, 8, { fill: "#111" })],
      [circle(40, 40, 28), square(26, 40, 7, { fill: "#111" }), square(40, 40, 7, { fill: "#111" }), square(54, 40, 7, { fill: "#111" })],
      [diamond(40, 40, 50), square(40, 40, 10, { fill: "#111" })],
      [diamond(40, 40, 50), square(30, 40, 8, { fill: "#111" }), square(50, 40, 8, { fill: "#111" })],
      null,
    ]),
    options: [
      {
        key: "A",
        svg: optSvg([
          diamond(40, 40, 50),
          square(26, 40, 7, { fill: "#111" }),
          square(40, 40, 7, { fill: "#111" }),
          square(54, 40, 7, { fill: "#111" }),
        ]),
      },
      {
        key: "B",
        svg: optSvg([diamond(40, 40, 50), square(40, 40, 10, { fill: "#111" })]),
      },
      {
        key: "C",
        svg: optSvg([
          circle(40, 40, 28),
          square(26, 40, 7, { fill: "#111" }),
          square(40, 40, 7, { fill: "#111" }),
          square(54, 40, 7, { fill: "#111" }),
        ]),
      },
      {
        key: "D",
        svg: optSvg([
          diamond(40, 40, 50),
          square(30, 40, 8, { fill: "#111" }),
          square(50, 40, 8, { fill: "#111" }),
        ]),
      },
      {
        key: "E",
        svg: optSvg([
          diamond(40, 40, 50),
          square(26, 40, 7, { fill: "#111" }),
          square(40, 40, 7, { fill: "#111" }),
          square(54, 40, 7, { fill: "#111" }),
          square(40, 30, 7, { fill: "#111" }),
        ]),
      },
    ],
    answer: "A",
    explanation:
      "Each row increases the number of inner squares 1 → 2 → 3 while the outer shape stays the same. The missing cell (diamond, 3 squares) is option A.",
  },
  {
    id: "t2-q44",
    category: "spatial",
    prompt: "How many rectangles (including squares) of all sizes are in the figure below?",
    figureSvg: compose(160, 100, [
      `<rect x="20" y="20" width="120" height="60" fill="none" stroke="#111" stroke-width="2"/>`,
      `<line x1="60" y1="20" x2="60" y2="80" stroke="#111" stroke-width="2"/>`,
      `<line x1="100" y1="20" x2="100" y2="80" stroke="#111" stroke-width="2"/>`,
    ]),
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "5" },
      { key: "C", text: "6" },
      { key: "D", text: "7" },
      { key: "E", text: "8" },
    ],
    answer: "C",
    explanation:
      "The 1×3 strip has three unit rectangles, two 2-unit rectangles (cells 1–2 and cells 2–3), and one 3-unit rectangle (the whole). Total = 3 + 2 + 1 = 6.",
  },
  {
    id: "t2-q45",
    category: "spatial",
    prompt:
      "Which option continues the sequence? (Each step, the dot moves one corner clockwise around a square.)",
    figureSvg: rowSvg([
      [square(40, 40, 50), circle(22, 22, 6, { fill: "#111" })],
      [square(40, 40, 50), circle(58, 22, 6, { fill: "#111" })],
      [square(40, 40, 50), circle(58, 58, 6, { fill: "#111" })],
      [`<text x="40" y="45" font-size="32" text-anchor="middle">?</text>`],
      [],
    ]),
    options: [
      { key: "A", svg: optSvg([square(40, 40, 50), circle(22, 22, 6, { fill: "#111" })]) },
      { key: "B", svg: optSvg([square(40, 40, 50), circle(22, 58, 6, { fill: "#111" })]) },
      { key: "C", svg: optSvg([square(40, 40, 50), circle(40, 58, 6, { fill: "#111" })]) },
      { key: "D", svg: optSvg([square(40, 40, 50), circle(58, 58, 6, { fill: "#111" })]) },
      { key: "E", svg: optSvg([square(40, 40, 50), circle(58, 22, 6, { fill: "#111" })]) },
    ],
    answer: "B",
    explanation:
      "The dot moves clockwise: top-left → top-right → bottom-right → next is bottom-left. Option B matches.",
  },
  {
    id: "t2-q46",
    category: "spatial",
    prompt: "Which figure is the mirror image (vertical flip, i.e., top-bottom) of the figure on the far left?",
    figureSvg: rowSvg([
      [triangle(40, 35, 40), circle(40, 55, 6, { fill: "#111" })],
      [],
      [],
      [],
      [],
    ]),
    options: [
      { key: "A", svg: optSvg([triangle(40, 45, 40, { rotate: 180 }), circle(40, 25, 6, { fill: "#111" })]) },
      { key: "B", svg: optSvg([triangle(40, 35, 40), circle(40, 55, 6, { fill: "#111" })]) },
      { key: "C", svg: optSvg([triangle(40, 35, 40, { rotate: 180 }), circle(40, 55, 6, { fill: "#111" })]) },
      { key: "D", svg: optSvg([triangle(40, 45, 40), circle(40, 25, 6, { fill: "#111" })]) },
      { key: "E", svg: optSvg([triangle(40, 45, 40, { rotate: 180 }), circle(40, 55, 6, { fill: "#111" })]) },
    ],
    answer: "A",
    explanation:
      "A top-bottom flip inverts the triangle (apex now at the bottom) AND moves the dot from the lower half to the upper half. Option A shows both.",
  },
  {
    id: "t2-q47",
    category: "spatial",
    prompt:
      "The figure on the left is folded along the dashed line. Which option shows the resulting shape?",
    figureSvg: compose(160, 100, [
      `<rect x="20" y="20" width="60" height="60" fill="#ddd" stroke="#111" stroke-width="2"/>`,
      `<rect x="80" y="20" width="60" height="60" fill="#eee" stroke="#111" stroke-width="2"/>`,
      triangle(60, 50, 25, { fill: "#111" }),
      circle(110, 50, 10, { fill: "#111" }),
      `<line x1="80" y1="10" x2="80" y2="90" stroke="#111" stroke-width="1" stroke-dasharray="4 3"/>`,
    ]),
    options: [
      {
        key: "A",
        svg: optSvg([
          `<rect x="10" y="10" width="60" height="60" fill="#ddd" stroke="#111" stroke-width="2"/>`,
          triangle(40, 40, 22, { fill: "#111" }),
          circle(40, 40, 8),
        ]),
      },
      {
        key: "B",
        svg: optSvg([
          `<rect x="10" y="10" width="60" height="60" fill="#ddd" stroke="#111" stroke-width="2"/>`,
          circle(40, 40, 8, { fill: "#111" }),
        ]),
      },
      {
        key: "C",
        svg: optSvg([
          `<rect x="10" y="10" width="60" height="60" fill="#ddd" stroke="#111" stroke-width="2"/>`,
          triangle(40, 40, 22, { fill: "#111" }),
        ]),
      },
      {
        key: "D",
        svg: optSvg([
          `<rect x="10" y="10" width="60" height="60" fill="#ddd" stroke="#111" stroke-width="2"/>`,
          circle(28, 40, 8, { fill: "#111" }),
          triangle(52, 40, 22, { fill: "#111" }),
        ]),
      },
      {
        key: "E",
        svg: optSvg([
          `<rect x="10" y="10" width="60" height="60" fill="#ddd" stroke="#111" stroke-width="2"/>`,
          triangle(40, 40, 25, { fill: "#111", rotate: 180 }),
        ]),
      },
    ],
    answer: "A",
    explanation:
      "Folding the right panel onto the left brings the circle on top of the triangle in the SAME left-square. Only option A shows both shapes overlapping on a single panel.",
  },
  {
    id: "t2-q48",
    category: "spatial",
    prompt: "Which figure does NOT belong?",
    figureSvg: rowSvg([
      [line(20, 40, 60, 40), line(40, 20, 40, 60)],
      [line(20, 20, 60, 60), line(20, 60, 60, 20)],
      [line(20, 40, 60, 40), line(20, 20, 60, 60)],
      [line(40, 20, 40, 60), line(20, 60, 60, 20)],
      [line(20, 40, 60, 40), line(40, 20, 40, 60), line(20, 20, 60, 60)],
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
      "Figures A, B, C, and D each contain exactly TWO intersecting lines. Figure E contains three lines. It is the outlier by line count.",
  },
  {
    id: "t2-q49",
    category: "spatial",
    prompt:
      "What figure continues the sequence? (Each step the number of sides increases by 1.)",
    figureSvg: rowSvg([
      [triangle(40, 40, 40)],
      [square(40, 40, 40)],
      [`<polygon points="40,20 60,32 55,56 25,56 20,32" fill="none" stroke="#111" stroke-width="2"/>`],
      [`<polygon points="40,18 58,28 62,50 48,62 32,62 18,50 22,28" fill="none" stroke="#111" stroke-width="2"/>`],
      [`<text x="40" y="45" font-size="32" text-anchor="middle">?</text>`],
    ]),
    options: [
      {
        key: "A",
        svg: optSvg([triangle(40, 40, 40)]),
      },
      {
        key: "B",
        svg: optSvg([`<polygon points="40,15 60,25 65,45 55,62 40,68 25,62 15,45 20,25" fill="none" stroke="#111" stroke-width="2"/>`]),
      },
      {
        key: "C",
        svg: optSvg([`<polygon points="40,18 58,28 62,48 48,62 32,62 18,48 22,28" fill="none" stroke="#111" stroke-width="2"/>`]),
      },
      {
        key: "D",
        svg: optSvg([circle(40, 40, 28)]),
      },
      {
        key: "E",
        svg: optSvg([square(40, 40, 40)]),
      },
    ],
    answer: "B",
    explanation:
      "Side counts: 3, 4, 5, 6, so next is a 7-sided polygon (heptagon). Option B is the 7-sided figure.",
  },
  {
    id: "t2-q50",
    category: "spatial",
    prompt:
      "Which cell completes the 3×3 matrix? (In each row the inner shape rotates 45° right; down each column the outer shape stays the same.)",
    figureSvg: mat3Svg([
      [circle(40, 40, 28), rect(40, 40, 28, 8)],
      [circle(40, 40, 28), rect(40, 40, 24, 10, { rotate: 45 })],
      [circle(40, 40, 28), rect(40, 40, 8, 28)],
      [square(40, 40, 55), rect(40, 40, 28, 8)],
      [square(40, 40, 55), rect(40, 40, 24, 10, { rotate: 45 })],
      [square(40, 40, 55), rect(40, 40, 8, 28)],
      [triangle(40, 45, 55), rect(40, 45, 28, 8)],
      [triangle(40, 45, 55), rect(40, 45, 24, 10, { rotate: 45 })],
      null,
    ]),
    options: [
      { key: "A", svg: optSvg([triangle(40, 45, 55), rect(40, 45, 8, 28)]) },
      { key: "B", svg: optSvg([triangle(40, 45, 55), rect(40, 45, 28, 8)]) },
      { key: "C", svg: optSvg([square(40, 40, 55), rect(40, 40, 8, 28)]) },
      { key: "D", svg: optSvg([triangle(40, 45, 55), rect(40, 45, 24, 10, { rotate: 45 })]) },
      { key: "E", svg: optSvg([circle(40, 40, 28), rect(40, 40, 8, 28)]) },
    ],
    answer: "A",
    explanation:
      "In every row the inner bar rotates horizontal → diagonal → vertical. The missing cell completes the third row (outer = triangle) with a vertical bar. Option A matches.",
  },
];

export default test2;
