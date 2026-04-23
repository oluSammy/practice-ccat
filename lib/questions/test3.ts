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

const test3: Question[] = [
  // =================== VERBAL (17) ===================
  {
    id: "t3-q01",
    category: "verbal",
    prompt: "Choose the ANTONYM: LUCID",
    options: [
      { key: "A", text: "clear" },
      { key: "B", text: "obscure" },
      { key: "C", text: "concise" },
      { key: "D", text: "genuine" },
      { key: "E", text: "bright" },
    ],
    answer: "B",
    explanation:
      '"Lucid" means clearly expressed or easy to understand. "Obscure" — difficult to understand — is the opposite.',
  },
  {
    id: "t3-q02",
    category: "verbal",
    prompt: "Choose the SYNONYM: BELLICOSE",
    options: [
      { key: "A", text: "peaceful" },
      { key: "B", text: "warlike" },
      { key: "C", text: "ornate" },
      { key: "D", text: "shy" },
      { key: "E", text: "melodic" },
    ],
    answer: "B",
    explanation:
      '"Bellicose" means aggressive or inclined to fight. "Warlike" is its closest synonym.',
  },
  {
    id: "t3-q03",
    category: "verbal",
    prompt: "FISH is to SCHOOL as WOLF is to:",
    options: [
      { key: "A", text: "herd" },
      { key: "B", text: "pack" },
      { key: "C", text: "flock" },
      { key: "D", text: "swarm" },
      { key: "E", text: "pride" },
    ],
    answer: "B",
    explanation:
      "Fish travel in a school; wolves travel in a pack. Herds are cattle, flocks are birds/sheep, swarms are bees, prides are lions.",
  },
  {
    id: "t3-q04",
    category: "verbal",
    prompt:
      "Rather than decide outright, the board continued to ______ between the two proposals, delaying action for another quarter.",
    options: [
      { key: "A", text: "oscillate" },
      { key: "B", text: "vacillate" },
      { key: "C", text: "postulate" },
      { key: "D", text: "delineate" },
      { key: "E", text: "extrapolate" },
    ],
    answer: "B",
    explanation:
      '"Vacillate" means to waver between different opinions or courses of action — precisely the behavior described. "Oscillate" is physical wavering, usually not used for decisions.',
  },
  {
    id: "t3-q05",
    category: "verbal",
    prompt: "Choose the ANTONYM: PROFOUND",
    options: [
      { key: "A", text: "abysmal" },
      { key: "B", text: "superficial" },
      { key: "C", text: "intense" },
      { key: "D", text: "insightful" },
      { key: "E", text: "serious" },
    ],
    answer: "B",
    explanation:
      '"Profound" means deep (in thought, feeling, or quality). "Superficial" — shallow — is the opposite.',
  },
  {
    id: "t3-q06",
    category: "verbal",
    prompt:
      'In the sentence "Her PERSPICACIOUS assessment of the market was the firm\'s salvation," PERSPICACIOUS most nearly means:',
    options: [
      { key: "A", text: "cautious" },
      { key: "B", text: "shrewd" },
      { key: "C", text: "outdated" },
      { key: "D", text: "comprehensive" },
      { key: "E", text: "controversial" },
    ],
    answer: "B",
    explanation:
      '"Perspicacious" means having keen insight. "Shrewd" is the closest match — it describes an astute, discerning judgment.',
  },
  {
    id: "t3-q07",
    category: "verbal",
    prompt: "CHEF is to KITCHEN as JUDGE is to:",
    options: [
      { key: "A", text: "law" },
      { key: "B", text: "courtroom" },
      { key: "C", text: "verdict" },
      { key: "D", text: "jury" },
      { key: "E", text: "gavel" },
    ],
    answer: "B",
    explanation:
      "A chef works in a kitchen; a judge works in a courtroom. The relationship is practitioner to workplace.",
  },
  {
    id: "t3-q08",
    category: "verbal",
    prompt: "Choose the SYNONYM: INSIPID",
    options: [
      { key: "A", text: "bold" },
      { key: "B", text: "bland" },
      { key: "C", text: "complex" },
      { key: "D", text: "spicy" },
      { key: "E", text: "brilliant" },
    ],
    answer: "B",
    explanation:
      '"Insipid" means lacking flavor, interest, or vigor. "Bland" is its closest synonym.',
  },
  {
    id: "t3-q09",
    category: "verbal",
    prompt: "Choose the ANTONYM: LAUD",
    options: [
      { key: "A", text: "applaud" },
      { key: "B", text: "condemn" },
      { key: "C", text: "announce" },
      { key: "D", text: "permit" },
      { key: "E", text: "grieve" },
    ],
    answer: "B",
    explanation:
      '"Laud" means to praise highly. "Condemn" — to express strong disapproval — is its opposite.',
  },
  {
    id: "t3-q10",
    category: "verbal",
    prompt:
      "The story about the founder's late-night inspiration is likely ______ — there is no contemporary source that corroborates it.",
    options: [
      { key: "A", text: "apocryphal" },
      { key: "B", text: "apposite" },
      { key: "C", text: "inveterate" },
      { key: "D", text: "indigenous" },
      { key: "E", text: "didactic" },
    ],
    answer: "A",
    explanation:
      '"Apocryphal" means a widely circulated story of doubtful authenticity. The lack of corroborating sources fits exactly.',
  },
  {
    id: "t3-q11",
    category: "verbal",
    prompt: "Choose the ANTONYM: VORACIOUS",
    options: [
      { key: "A", text: "ravenous" },
      { key: "B", text: "satiated" },
      { key: "C", text: "generous" },
      { key: "D", text: "hurried" },
      { key: "E", text: "contented" },
    ],
    answer: "B",
    explanation:
      '"Voracious" means wanting or devouring great quantities. "Satiated" — fully satisfied, not hungry — is the opposite. "Contented" is close but "satiated" specifically opposes hunger.',
  },
  {
    id: "t3-q12",
    category: "verbal",
    prompt: "HYDROLOGIST is to WATER as METEOROLOGIST is to:",
    options: [
      { key: "A", text: "stars" },
      { key: "B", text: "weather" },
      { key: "C", text: "rocks" },
      { key: "D", text: "fossils" },
      { key: "E", text: "magnets" },
    ],
    answer: "B",
    explanation:
      "A hydrologist studies water; a meteorologist studies weather. The relationship is specialist to their subject of study.",
  },
  {
    id: "t3-q13",
    category: "verbal",
    prompt: "Choose the SYNONYM: EBULLIENT",
    options: [
      { key: "A", text: "calm" },
      { key: "B", text: "exuberant" },
      { key: "C", text: "precise" },
      { key: "D", text: "doubtful" },
      { key: "E", text: "envious" },
    ],
    answer: "B",
    explanation:
      '"Ebullient" means cheerful and full of energy. "Exuberant" is the closest synonym.',
  },
  {
    id: "t3-q14",
    category: "verbal",
    prompt: "Choose the ANTONYM: NASCENT",
    options: [
      { key: "A", text: "budding" },
      { key: "B", text: "mature" },
      { key: "C", text: "dormant" },
      { key: "D", text: "volatile" },
      { key: "E", text: "hidden" },
    ],
    answer: "B",
    explanation:
      '"Nascent" means just beginning to exist or develop. "Mature" — fully developed — is its opposite.',
  },
  {
    id: "t3-q15",
    category: "verbal",
    prompt:
      "Although she was usually ______, at the dinner she spoke animatedly, clearly intrigued by the guest.",
    options: [
      { key: "A", text: "loquacious" },
      { key: "B", text: "taciturn" },
      { key: "C", text: "amiable" },
      { key: "D", text: "brash" },
      { key: "E", text: "pedantic" },
    ],
    answer: "B",
    explanation:
      '"Although" signals contrast with "spoke animatedly." "Taciturn" (reserved, silent) contrasts correctly. The other choices either match or are unrelated.',
  },
  {
    id: "t3-q16",
    category: "verbal",
    prompt: "CARTOGRAPHER is to MAPS as CHOREOGRAPHER is to:",
    options: [
      { key: "A", text: "songs" },
      { key: "B", text: "dances" },
      { key: "C", text: "films" },
      { key: "D", text: "novels" },
      { key: "E", text: "paintings" },
    ],
    answer: "B",
    explanation:
      "A cartographer creates maps; a choreographer creates dances. The relationship is practitioner to what they design.",
  },
  {
    id: "t3-q17",
    category: "verbal",
    prompt: "Choose the ANTONYM: TACITURN",
    options: [
      { key: "A", text: "reserved" },
      { key: "B", text: "talkative" },
      { key: "C", text: "cruel" },
      { key: "D", text: "implicit" },
      { key: "E", text: "tardy" },
    ],
    answer: "B",
    explanation:
      '"Taciturn" means habitually reserved or silent. "Talkative" is its direct opposite.',
  },

  // =================== MATH / LOGIC (17) ===================
  {
    id: "t3-q18",
    category: "math",
    prompt:
      "The average of six numbers is 15. If one number (9) is removed, what is the average of the remaining five numbers?",
    options: [
      { key: "A", text: "15.4" },
      { key: "B", text: "15.8" },
      { key: "C", text: "16.0" },
      { key: "D", text: "16.2" },
      { key: "E", text: "16.5" },
    ],
    answer: "D",
    explanation:
      "Sum of six = 90. Remove 9: sum = 81. Average of 5 = 81/5 = 16.2.",
  },
  {
    id: "t3-q19",
    category: "math",
    prompt:
      "An item costs $180 after a 10% discount. What was its original price?",
    options: [
      { key: "A", text: "$190" },
      { key: "B", text: "$195" },
      { key: "C", text: "$198" },
      { key: "D", text: "$200" },
      { key: "E", text: "$210" },
    ],
    answer: "D",
    explanation:
      "180 = 0.90 × original → original = 180/0.9 = $200.",
  },
  {
    id: "t3-q20",
    category: "math",
    prompt:
      "A drink is mixed from juice and water in a 2 : 5 ratio. To make 3.5 liters of drink, how many liters of juice are needed?",
    options: [
      { key: "A", text: "0.5" },
      { key: "B", text: "1.0" },
      { key: "C", text: "1.2" },
      { key: "D", text: "1.5" },
      { key: "E", text: "2.0" },
    ],
    answer: "B",
    explanation:
      "Total parts = 7. Each part = 3.5/7 = 0.5 L. Juice = 2 × 0.5 = 1.0 L.",
  },
  {
    id: "t3-q21",
    category: "math",
    prompt:
      "Jamal drives 150 miles in 3 hours. If he maintains the same speed, how many hours will it take him to drive an additional 400 miles?",
    options: [
      { key: "A", text: "6" },
      { key: "B", text: "7" },
      { key: "C", text: "7.5" },
      { key: "D", text: "8" },
      { key: "E", text: "9" },
    ],
    answer: "D",
    explanation:
      "Speed = 150/3 = 50 mph. 400/50 = 8 hours.",
  },
  {
    id: "t3-q22",
    category: "math",
    prompt: "What comes next? 5, 11, 23, 47, 95, ___",
    options: [
      { key: "A", text: "143" },
      { key: "B", text: "169" },
      { key: "C", text: "181" },
      { key: "D", text: "191" },
      { key: "E", text: "201" },
    ],
    answer: "D",
    explanation:
      "Each term = 2 × previous + 1. 2 × 95 + 1 = 191.",
  },
  {
    id: "t3-q23",
    category: "math",
    prompt:
      "If 5x − 2 = 3x + 12, what is the value of x?",
    options: [
      { key: "A", text: "5" },
      { key: "B", text: "6" },
      { key: "C", text: "7" },
      { key: "D", text: "8" },
      { key: "E", text: "10" },
    ],
    answer: "C",
    explanation:
      "Subtract 3x: 2x − 2 = 12 → 2x = 14 → x = 7.",
  },
  {
    id: "t3-q24",
    category: "math",
    prompt:
      "All mechanics in the shop own their own tools. Some mechanics have CDLs (commercial driver's licenses). Everyone with a CDL has passed the safety exam. Which statement MUST be true?",
    options: [
      { key: "A", text: "All mechanics have CDLs." },
      { key: "B", text: "All mechanics have passed the safety exam." },
      { key: "C", text: "Some mechanics own tools and have passed the safety exam." },
      { key: "D", text: "Everyone who owns tools has a CDL." },
      { key: "E", text: "No mechanic has failed the safety exam." },
    ],
    answer: "C",
    explanation:
      "Some mechanics have CDLs (so have passed the exam) and every mechanic owns tools. Therefore some people both own tools and have passed the exam — statement C.",
  },
  {
    id: "t3-q25",
    category: "math",
    prompt:
      "A store buys a watch for $80 and wants to sell it at a 25% profit on cost. It then offers the customer a 10% discount. What is the selling price?",
    options: [
      { key: "A", text: "$85" },
      { key: "B", text: "$88" },
      { key: "C", text: "$90" },
      { key: "D", text: "$92" },
      { key: "E", text: "$95" },
    ],
    answer: "C",
    explanation:
      "Marked price = 80 × 1.25 = $100. After 10% discount: 100 × 0.90 = $90.",
  },
  {
    id: "t3-q26",
    category: "math",
    prompt:
      "Paul is 3 times Anna's age. Five years ago he was 5 times her age. How old is Anna now?",
    options: [
      { key: "A", text: "8" },
      { key: "B", text: "10" },
      { key: "C", text: "12" },
      { key: "D", text: "15" },
      { key: "E", text: "18" },
    ],
    answer: "B",
    explanation:
      "Let Anna = a, Paul = 3a. Five years ago: 3a − 5 = 5(a − 5) → 3a − 5 = 5a − 25 → 20 = 2a → a = 10.",
  },
  {
    id: "t3-q27",
    category: "math",
    prompt:
      "Pipe X can fill a tank in 4 hours. Pipe Y can drain it in 6 hours. If both are open, how long will it take to fill the empty tank?",
    options: [
      { key: "A", text: "8 hours" },
      { key: "B", text: "10 hours" },
      { key: "C", text: "12 hours" },
      { key: "D", text: "14 hours" },
      { key: "E", text: "16 hours" },
    ],
    answer: "C",
    explanation:
      "Net rate = 1/4 − 1/6 = 3/12 − 2/12 = 1/12 per hour. Time = 12 hours.",
  },
  {
    id: "t3-q28",
    category: "math",
    prompt: "What comes next? 81, 72, 64, 57, 51, ___",
    options: [
      { key: "A", text: "44" },
      { key: "B", text: "45" },
      { key: "C", text: "46" },
      { key: "D", text: "47" },
      { key: "E", text: "48" },
    ],
    answer: "C",
    explanation:
      "Differences: −9, −8, −7, −6, next is −5. 51 − 5 = 46.",
  },
  {
    id: "t3-q29",
    category: "math",
    prompt:
      "A rectangle has length 12 and width 8. If the length is decreased by 25% and the width is increased by 25%, what is the new area?",
    options: [
      { key: "A", text: "85" },
      { key: "B", text: "90" },
      { key: "C", text: "95" },
      { key: "D", text: "96" },
      { key: "E", text: "100" },
    ],
    answer: "B",
    explanation:
      "New length = 12 × 0.75 = 9. New width = 8 × 1.25 = 10. Area = 9 × 10 = 90.",
  },
  {
    id: "t3-q30",
    category: "math",
    prompt:
      "Of 200 employees, 120 speak Spanish, 90 speak French, and 50 speak both. How many speak ONLY French?",
    options: [
      { key: "A", text: "30" },
      { key: "B", text: "40" },
      { key: "C", text: "50" },
      { key: "D", text: "60" },
      { key: "E", text: "70" },
    ],
    answer: "B",
    explanation:
      "Only French = French − Both = 90 − 50 = 40.",
  },
  {
    id: "t3-q31",
    category: "math",
    prompt:
      "12 is what percent of 80?",
    options: [
      { key: "A", text: "10%" },
      { key: "B", text: "12%" },
      { key: "C", text: "15%" },
      { key: "D", text: "18%" },
      { key: "E", text: "20%" },
    ],
    answer: "C",
    explanation:
      "Percentage saved = (amount saved / original price) × 100 = (12 / 80) × 100 = 15%.",
  },
  {
    id: "t3-q32",
    category: "math",
    prompt:
      "A bag contains 4 red and 6 blue marbles. Two marbles are drawn at random without replacement. What is the probability that both are blue?",
    options: [
      { key: "A", text: "1/3" },
      { key: "B", text: "6/25" },
      { key: "C", text: "9/25" },
      { key: "D", text: "1/4" },
      { key: "E", text: "3/10" },
    ],
    answer: "A",
    explanation:
      "P(blue first) = 6/10. P(blue second | first blue) = 5/9. Product = 6/10 × 5/9 = 30/90 = 1/3.",
  },
  {
    id: "t3-q33",
    category: "math",
    prompt: "What comes next? 3, 6, 12, 24, 48, ___",
    options: [
      { key: "A", text: "60" },
      { key: "B", text: "72" },
      { key: "C", text: "84" },
      { key: "D", text: "96" },
      { key: "E", text: "108" },
    ],
    answer: "D",
    explanation:
      "Each term is doubled: 48 × 2 = 96.",
  },
  {
    id: "t3-q34",
    category: "math",
    prompt:
      "If 5 machines produce 200 widgets in 4 hours, how many hours will it take 8 machines to produce 640 widgets (at the same per-machine rate)?",
    options: [
      { key: "A", text: "6" },
      { key: "B", text: "7" },
      { key: "C", text: "8" },
      { key: "D", text: "10" },
      { key: "E", text: "12" },
    ],
    answer: "C",
    explanation:
      "Per-machine rate = 200/(5×4) = 10 widgets/hour. 8 machines → 80/hour. 640/80 = 8 hours.",
  },

  // =================== SPATIAL (16) ===================
  {
    id: "t3-q35",
    category: "spatial",
    prompt: "Which figure does NOT belong?",
    figureSvg: rowSvg([
      [circle(40, 40, 25), line(20, 40, 60, 40)],
      [circle(40, 40, 25), line(40, 20, 40, 60)],
      [circle(40, 40, 25), line(25, 25, 55, 55)],
      [circle(40, 40, 25), line(25, 55, 55, 25)],
      [circle(40, 40, 25)],
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
      "Figures A–D each contain a circle crossed by one line. Figure E has only a circle — no line. Figure E is the outlier.",
  },
  {
    id: "t3-q36",
    category: "spatial",
    prompt:
      "Which figure comes next in the sequence? (Outer shape stays the same; inner shape changes count and color.)",
    figureSvg: rowSvg([
      [square(40, 40, 55), circle(40, 40, 8)],
      [square(40, 40, 55), circle(30, 40, 7, { fill: "#111" }), circle(50, 40, 7, { fill: "#111" })],
      [square(40, 40, 55), circle(26, 40, 6), circle(40, 40, 6), circle(54, 40, 6)],
      [`<text x="40" y="45" font-size="32" text-anchor="middle">?</text>`],
      [],
    ]),
    options: [
      {
        key: "A",
        svg: optSvg([
          square(40, 40, 55),
          circle(24, 40, 5, { fill: "#111" }),
          circle(35, 40, 5, { fill: "#111" }),
          circle(46, 40, 5, { fill: "#111" }),
          circle(57, 40, 5, { fill: "#111" }),
        ]),
      },
      {
        key: "B",
        svg: optSvg([
          square(40, 40, 55),
          circle(24, 40, 5),
          circle(35, 40, 5),
          circle(46, 40, 5),
          circle(57, 40, 5),
        ]),
      },
      {
        key: "C",
        svg: optSvg([
          square(40, 40, 55),
          circle(26, 40, 6),
          circle(40, 40, 6),
          circle(54, 40, 6),
        ]),
      },
      {
        key: "D",
        svg: optSvg([
          square(40, 40, 55),
          circle(30, 40, 7, { fill: "#111" }),
          circle(50, 40, 7, { fill: "#111" }),
        ]),
      },
      {
        key: "E",
        svg: optSvg([
          circle(40, 40, 30),
          circle(24, 40, 5, { fill: "#111" }),
          circle(35, 40, 5, { fill: "#111" }),
          circle(46, 40, 5, { fill: "#111" }),
          circle(57, 40, 5, { fill: "#111" }),
        ]),
      },
    ],
    answer: "A",
    explanation:
      "Inner circle count: 1, 2, 3 → next is 4. Fill pattern: unfilled, filled, unfilled, → next is filled. Option A shows 4 filled circles inside a square.",
  },
  {
    id: "t3-q37",
    category: "spatial",
    prompt: "Which figure is the figure on the left rotated 90° counter-clockwise?",
    figureSvg: rowSvg([
      [rect(40, 40, 50, 14), circle(20, 40, 5, { fill: "#111" })],
      [],
      [],
      [],
      [],
    ]),
    options: [
      { key: "A", svg: optSvg([rect(40, 40, 14, 50), circle(40, 60, 5, { fill: "#111" })]) },
      { key: "B", svg: optSvg([rect(40, 40, 14, 50), circle(40, 20, 5, { fill: "#111" })]) },
      { key: "C", svg: optSvg([rect(40, 40, 50, 14), circle(60, 40, 5, { fill: "#111" })]) },
      { key: "D", svg: optSvg([rect(40, 40, 14, 50), circle(60, 40, 5, { fill: "#111" })]) },
      { key: "E", svg: optSvg([rect(40, 40, 50, 14), circle(20, 40, 5, { fill: "#111" })]) },
    ],
    answer: "B",
    explanation:
      "Rotating 90° counter-clockwise turns the horizontal bar vertical and moves the dot from the left side to the TOP. Option B shows the dot at the top of a vertical bar.",
  },
  {
    id: "t3-q38",
    category: "spatial",
    prompt: "Which figure does NOT belong?",
    figureSvg: rowSvg([
      [triangle(40, 40, 36, { fill: "#111" })],
      [square(40, 40, 36, { fill: "#111" })],
      [diamond(40, 40, 30, { fill: "#111" })],
      [circle(40, 40, 22, { fill: "#111" })],
      [star(40, 40, 18, { fill: "#111" })],
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
      "Figures A, B, C, and E are all straight-edged polygons. Figure D (a circle) is the only curved shape — the outlier.",
  },
  {
    id: "t3-q39",
    category: "spatial",
    prompt:
      "Which figure is the mirror image (horizontal flip) of the figure on the far left?",
    figureSvg: rowSvg([
      [
        `<path d="M 20 20 L 60 20 L 60 40 L 30 40 L 30 60 L 20 60 Z" fill="none" stroke="#111" stroke-width="2"/>`,
      ],
      [],
      [],
      [],
      [],
    ]),
    options: [
      { key: "A", svg: optSvg([`<path d="M 60 20 L 20 20 L 20 40 L 50 40 L 50 60 L 60 60 Z" fill="none" stroke="#111" stroke-width="2"/>`]) },
      { key: "B", svg: optSvg([`<path d="M 20 20 L 60 20 L 60 40 L 30 40 L 30 60 L 20 60 Z" fill="none" stroke="#111" stroke-width="2"/>`]) },
      { key: "C", svg: optSvg([`<path d="M 20 60 L 60 60 L 60 40 L 30 40 L 30 20 L 20 20 Z" fill="none" stroke="#111" stroke-width="2"/>`]) },
      { key: "D", svg: optSvg([`<path d="M 60 60 L 20 60 L 20 40 L 50 40 L 50 20 L 60 20 Z" fill="none" stroke="#111" stroke-width="2"/>`]) },
      { key: "E", svg: optSvg([`<path d="M 20 20 L 60 20 L 60 60 L 20 60 Z" fill="none" stroke="#111" stroke-width="2"/>`]) },
    ],
    answer: "A",
    explanation:
      "A horizontal flip mirrors x-coordinates. The original has its outstretched arm on the top-right and a foot on the bottom-left. After flipping, the arm is on the top-left and the foot on the bottom-right — option A.",
  },
  {
    id: "t3-q40",
    category: "spatial",
    prompt:
      "Which cell completes the 3×3 matrix? (Down each column the number of sides of the outer shape increases; across each row the inner figure changes color.)",
    figureSvg: mat3Svg([
      [triangle(40, 45, 50), circle(40, 48, 8)],
      [triangle(40, 45, 50), circle(40, 48, 8, { fill: "#111" })],
      [triangle(40, 45, 50), circle(40, 48, 8)],
      [square(40, 40, 50), circle(40, 40, 8)],
      [square(40, 40, 50), circle(40, 40, 8, { fill: "#111" })],
      [square(40, 40, 50), circle(40, 40, 8)],
      [`<polygon points="40,18 58,30 52,58 28,58 22,30" fill="none" stroke="#111" stroke-width="2"/>`, circle(40, 42, 8)],
      [`<polygon points="40,18 58,30 52,58 28,58 22,30" fill="none" stroke="#111" stroke-width="2"/>`, circle(40, 42, 8, { fill: "#111" })],
      null,
    ]),
    options: [
      { key: "A", svg: optSvg([`<polygon points="40,18 58,30 52,58 28,58 22,30" fill="none" stroke="#111" stroke-width="2"/>`, circle(40, 42, 8)]) },
      { key: "B", svg: optSvg([`<polygon points="40,18 58,30 52,58 28,58 22,30" fill="none" stroke="#111" stroke-width="2"/>`, circle(40, 42, 8, { fill: "#111" })]) },
      { key: "C", svg: optSvg([square(40, 40, 50), circle(40, 40, 8)]) },
      { key: "D", svg: optSvg([triangle(40, 45, 50), circle(40, 48, 8)]) },
      { key: "E", svg: optSvg([`<polygon points="40,18 58,30 52,58 28,58 22,30" fill="none" stroke="#111" stroke-width="2"/>`]) },
    ],
    answer: "A",
    explanation:
      "In each row the inner circle alternates unfilled, filled, unfilled. The third row uses a pentagon outer. The missing cell (row 3, column 3) therefore needs a pentagon with an unfilled inner circle — option A.",
  },
  {
    id: "t3-q41",
    category: "spatial",
    prompt: "Which figure does NOT belong?",
    figureSvg: rowSvg([
      [circle(40, 40, 25), triangle(40, 40, 18)],
      [circle(40, 40, 25), square(40, 40, 18)],
      [circle(40, 40, 25), diamond(40, 40, 16)],
      [circle(40, 40, 25), star(40, 40, 10)],
      [circle(40, 40, 25), circle(40, 40, 10)],
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
      "All five have an outer circle; in four figures the inner shape is NOT a circle (triangle, square, diamond, star). Only figure E repeats the outer shape as the inner shape. Figure E is the outlier.",
  },
  {
    id: "t3-q42",
    category: "spatial",
    prompt:
      "Which figure comes next in the sequence? (Each step adds a new line to the figure.)",
    figureSvg: rowSvg([
      [line(20, 40, 60, 40)],
      [line(20, 40, 60, 40), line(40, 20, 40, 60)],
      [line(20, 40, 60, 40), line(40, 20, 40, 60), line(20, 20, 60, 60)],
      [`<text x="40" y="45" font-size="32" text-anchor="middle">?</text>`],
      [],
    ]),
    options: [
      {
        key: "A",
        svg: optSvg([
          line(20, 40, 60, 40),
          line(40, 20, 40, 60),
          line(20, 20, 60, 60),
          line(20, 60, 60, 20),
        ]),
      },
      {
        key: "B",
        svg: optSvg([line(20, 40, 60, 40), line(40, 20, 40, 60), line(20, 20, 60, 60)]),
      },
      {
        key: "C",
        svg: optSvg([line(20, 40, 60, 40)]),
      },
      {
        key: "D",
        svg: optSvg([circle(40, 40, 25)]),
      },
      {
        key: "E",
        svg: optSvg([line(20, 40, 60, 40), line(20, 20, 60, 60), line(20, 60, 60, 20)]),
      },
    ],
    answer: "A",
    explanation:
      "Line counts: 1, 2, 3 → next has 4 lines. The figure also completes the asterisk pattern (horizontal, vertical, both diagonals). Option A has all 4 lines.",
  },
  {
    id: "t3-q43",
    category: "spatial",
    prompt:
      "Which figure is the figure on the far left rotated 180°?",
    figureSvg: rowSvg([
      [
        `<polygon points="20,60 20,20 50,20 60,40" fill="none" stroke="#111" stroke-width="2"/>`,
      ],
      [],
      [],
      [],
      [],
    ]),
    options: [
      { key: "A", svg: optSvg([`<polygon points="60,20 60,60 30,60 20,40" fill="none" stroke="#111" stroke-width="2"/>`]) },
      { key: "B", svg: optSvg([`<polygon points="20,60 20,20 50,20 60,40" fill="none" stroke="#111" stroke-width="2"/>`]) },
      { key: "C", svg: optSvg([`<polygon points="60,60 20,60 20,30 40,20" fill="none" stroke="#111" stroke-width="2"/>`]) },
      { key: "D", svg: optSvg([`<polygon points="20,20 60,20 60,50 40,60" fill="none" stroke="#111" stroke-width="2"/>`]) },
      { key: "E", svg: optSvg([`<polygon points="20,20 20,60 50,60 60,40" fill="none" stroke="#111" stroke-width="2"/>`]) },
    ],
    answer: "A",
    explanation:
      "A 180° rotation sends each point (x, y) to (80 − x, 80 − y). The original vertices (20,60)(20,20)(50,20)(60,40) become (60,20)(60,60)(30,60)(20,40) — option A.",
  },
  {
    id: "t3-q44",
    category: "spatial",
    prompt: "How many squares (of any size) are in the figure below?",
    figureSvg: compose(170, 170, [
      `<rect x="20" y="20" width="120" height="120" fill="none" stroke="#111" stroke-width="2"/>`,
      `<line x1="60" y1="20" x2="60" y2="140" stroke="#111" stroke-width="2"/>`,
      `<line x1="100" y1="20" x2="100" y2="140" stroke="#111" stroke-width="2"/>`,
      `<line x1="20" y1="60" x2="140" y2="60" stroke="#111" stroke-width="2"/>`,
      `<line x1="20" y1="100" x2="140" y2="100" stroke="#111" stroke-width="2"/>`,
    ]),
    options: [
      { key: "A", text: "9" },
      { key: "B", text: "10" },
      { key: "C", text: "12" },
      { key: "D", text: "14" },
      { key: "E", text: "16" },
    ],
    answer: "D",
    explanation:
      "In a 3×3 grid: 1×1 squares = 9; 2×2 squares = 4; 3×3 squares = 1. Total = 9 + 4 + 1 = 14.",
  },
  {
    id: "t3-q45",
    category: "spatial",
    prompt:
      "Which option continues the sequence? (The number of dots doubles at each step.)",
    figureSvg: rowSvg([
      [circle(40, 40, 10, { fill: "#111" })],
      [circle(28, 40, 8, { fill: "#111" }), circle(52, 40, 8, { fill: "#111" })],
      [
        circle(22, 40, 6, { fill: "#111" }),
        circle(34, 40, 6, { fill: "#111" }),
        circle(46, 40, 6, { fill: "#111" }),
        circle(58, 40, 6, { fill: "#111" }),
      ],
      [`<text x="40" y="45" font-size="32" text-anchor="middle">?</text>`],
      [],
    ]),
    options: [
      {
        key: "A",
        svg: optSvg([
          circle(18, 30, 4, { fill: "#111" }),
          circle(28, 30, 4, { fill: "#111" }),
          circle(38, 30, 4, { fill: "#111" }),
          circle(48, 30, 4, { fill: "#111" }),
          circle(18, 50, 4, { fill: "#111" }),
          circle(28, 50, 4, { fill: "#111" }),
          circle(38, 50, 4, { fill: "#111" }),
          circle(48, 50, 4, { fill: "#111" }),
        ]),
      },
      {
        key: "B",
        svg: optSvg([
          circle(18, 40, 4, { fill: "#111" }),
          circle(28, 40, 4, { fill: "#111" }),
          circle(38, 40, 4, { fill: "#111" }),
          circle(48, 40, 4, { fill: "#111" }),
          circle(58, 40, 4, { fill: "#111" }),
        ]),
      },
      {
        key: "C",
        svg: optSvg([
          circle(22, 40, 6, { fill: "#111" }),
          circle(34, 40, 6, { fill: "#111" }),
          circle(46, 40, 6, { fill: "#111" }),
          circle(58, 40, 6, { fill: "#111" }),
        ]),
      },
      {
        key: "D",
        svg: optSvg([
          circle(28, 40, 8, { fill: "#111" }),
          circle(52, 40, 8, { fill: "#111" }),
        ]),
      },
      {
        key: "E",
        svg: optSvg([
          circle(22, 40, 6),
          circle(34, 40, 6),
          circle(46, 40, 6),
          circle(58, 40, 6),
        ]),
      },
    ],
    answer: "A",
    explanation:
      "Dot counts double each step: 1 → 2 → 4 → next is 8. Option A is the only choice with exactly 8 dots (arranged in two rows of 4).",
  },
  {
    id: "t3-q46",
    category: "spatial",
    prompt: "Which figure does NOT belong?",
    figureSvg: rowSvg([
      [square(40, 40, 40, { rotate: 0 }), line(20, 40, 60, 40)],
      [square(40, 40, 40, { rotate: 45 }), line(20, 40, 60, 40)],
      [square(40, 40, 40, { rotate: 30 }), line(20, 40, 60, 40)],
      [square(40, 40, 40, { rotate: 15 }), line(20, 40, 60, 40)],
      [circle(40, 40, 20), line(20, 40, 60, 40)],
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
      "Figures A–D all show a square (rotated to different angles) with a horizontal line. Figure E has a circle instead of a square. Figure E is the outlier.",
  },
  {
    id: "t3-q47",
    category: "spatial",
    prompt:
      "Which figure is the figure on the left rotated 90° clockwise?",
    figureSvg: rowSvg([
      [
        `<polygon points="20,60 40,20 60,60" fill="none" stroke="#111" stroke-width="2"/>`,
        circle(40, 50, 5, { fill: "#111" }),
      ],
      [],
      [],
      [],
      [],
    ]),
    options: [
      { key: "A", svg: optSvg([`<polygon points="60,20 20,40 60,60" fill="none" stroke="#111" stroke-width="2"/>`, circle(50, 40, 5, { fill: "#111" })]) },
      { key: "B", svg: optSvg([`<polygon points="20,20 60,40 20,60" fill="none" stroke="#111" stroke-width="2"/>`, circle(30, 40, 5, { fill: "#111" })]) },
      { key: "C", svg: optSvg([`<polygon points="20,60 40,20 60,60" fill="none" stroke="#111" stroke-width="2"/>`, circle(40, 50, 5, { fill: "#111" })]) },
      { key: "D", svg: optSvg([`<polygon points="20,20 60,20 40,60" fill="none" stroke="#111" stroke-width="2"/>`, circle(40, 30, 5, { fill: "#111" })]) },
      { key: "E", svg: optSvg([`<polygon points="20,20 60,40 20,60" fill="none" stroke="#111" stroke-width="2"/>`, circle(30, 40, 5, { fill: "#111" })]) },
    ],
    answer: "B",
    explanation:
      "A 90° clockwise rotation sends the upward-pointing triangle to point right, and the dot (originally at the bottom) moves to the left. Option B shows the rightward-pointing triangle with the dot on its left.",
  },
  {
    id: "t3-q48",
    category: "spatial",
    prompt: "Which figure does NOT belong?",
    figureSvg: rowSvg([
      [square(40, 40, 40), circle(40, 40, 10), circle(40, 40, 4, { fill: "#111" })],
      [square(40, 40, 40), triangle(40, 42, 16), circle(40, 42, 4, { fill: "#111" })],
      [square(40, 40, 40), diamond(40, 40, 14), circle(40, 40, 4, { fill: "#111" })],
      [square(40, 40, 40), star(40, 40, 10), circle(40, 40, 4, { fill: "#111" })],
      [square(40, 40, 40), circle(40, 40, 10)],
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
      "Figures A–D each contain three shapes: a square, an inner shape, and a tiny black dot. Figure E is missing the small black dot. Figure E is the outlier.",
  },
  {
    id: "t3-q49",
    category: "spatial",
    prompt:
      "Which option comes next? (Each step, the inner shape alternates between triangle and square, and the outer ring changes fill.)",
    figureSvg: rowSvg([
      [circle(40, 40, 30, { fill: "#eee" }), triangle(40, 45, 22)],
      [circle(40, 40, 30), square(40, 40, 22)],
      [circle(40, 40, 30, { fill: "#eee" }), triangle(40, 45, 22)],
      [`<text x="40" y="45" font-size="32" text-anchor="middle">?</text>`],
      [],
    ]),
    options: [
      { key: "A", svg: optSvg([circle(40, 40, 30), square(40, 40, 22)]) },
      { key: "B", svg: optSvg([circle(40, 40, 30, { fill: "#eee" }), square(40, 40, 22)]) },
      { key: "C", svg: optSvg([circle(40, 40, 30), triangle(40, 45, 22)]) },
      { key: "D", svg: optSvg([circle(40, 40, 30, { fill: "#eee" }), triangle(40, 45, 22)]) },
      { key: "E", svg: optSvg([square(40, 40, 55), square(40, 40, 22)]) },
    ],
    answer: "A",
    explanation:
      "Outer ring alternates gray, white, gray, → next is white. Inner alternates triangle, square, triangle, → next is square. White ring + square = option A.",
  },
  {
    id: "t3-q50",
    category: "spatial",
    prompt:
      "Which cell completes the 3×3 matrix? (Down each column the figure gains a small black dot; across each row the outer shape changes.)",
    figureSvg: mat3Svg([
      [triangle(40, 45, 50)],
      [square(40, 40, 50)],
      [circle(40, 40, 28)],
      [triangle(40, 45, 50), circle(40, 50, 4, { fill: "#111" })],
      [square(40, 40, 50), circle(40, 40, 4, { fill: "#111" })],
      [circle(40, 40, 28), circle(40, 40, 4, { fill: "#111" })],
      [triangle(40, 45, 50), circle(32, 50, 4, { fill: "#111" }), circle(48, 50, 4, { fill: "#111" })],
      [square(40, 40, 50), circle(32, 40, 4, { fill: "#111" }), circle(48, 40, 4, { fill: "#111" })],
      null,
    ]),
    options: [
      { key: "A", svg: optSvg([circle(40, 40, 28), circle(32, 40, 4, { fill: "#111" }), circle(48, 40, 4, { fill: "#111" })]) },
      { key: "B", svg: optSvg([circle(40, 40, 28), circle(40, 40, 4, { fill: "#111" })]) },
      { key: "C", svg: optSvg([circle(40, 40, 28)]) },
      { key: "D", svg: optSvg([square(40, 40, 50), circle(32, 40, 4, { fill: "#111" }), circle(48, 40, 4, { fill: "#111" })]) },
      { key: "E", svg: optSvg([circle(40, 40, 28), circle(28, 40, 4, { fill: "#111" }), circle(40, 40, 4, { fill: "#111" }), circle(52, 40, 4, { fill: "#111" })]) },
    ],
    answer: "A",
    explanation:
      "Down each column the dot count grows 0 → 1 → 2. The third column's outer shape is a circle. The missing cell (row 3, column 3) needs a circle with 2 inner dots — option A.",
  },
];

export default test3;
