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
  text,
} from "@/lib/svg/shapes";

// --- Spatial helpers (keep each question terse) ---
const CELL = 80;
const GAP = 10;

// Row of N cells. Each cell is CELL x CELL. children[i] is shapes for cell i.
const rowSvg = (cells: string[][]) =>
  compose(cells.length * (CELL + GAP) - GAP, CELL, [row(CELL, GAP, cells)]);

// Single option cell.
const optSvg = (shapes: string[]) =>
  compose(CELL, CELL, [`<rect x="0.5" y="0.5" width="${CELL - 1}" height="${
    CELL - 1
  }" fill="none" stroke="#111" stroke-width="1"/>${shapes.join("")}`]);

// 3x3 matrix: cells is 9-element array; null for "?".
const mat3Svg = (cells: Array<string[] | null>) =>
  compose(3 * CELL + 2 * GAP, 3 * CELL + 2 * GAP, [matrix3x3(CELL, GAP, cells)]);

const test1: Question[] = [
  // =================== VERBAL (17) ===================
  {
    id: "t1-q01",
    category: "verbal",
    prompt:
      "Choose the word most nearly OPPOSITE in meaning to the word in capitals: MEANDERING",
    options: [
      { key: "A", text: "wandering" },
      { key: "B", text: "direct" },
      { key: "C", text: "circuitous" },
      { key: "D", text: "placid" },
      { key: "E", text: "labored" },
    ],
    answer: "B",
    explanation:
      '"Meandering" means following a winding, indirect course. "Direct" — taking a straight path — is its closest opposite. "Wandering" and "circuitous" are synonyms, not antonyms.',
  },
  {
    id: "t1-q02",
    category: "verbal",
    prompt: "Choose the word most nearly the SAME in meaning as: GARRULOUS",
    options: [
      { key: "A", text: "taciturn" },
      { key: "B", text: "cheerful" },
      { key: "C", text: "loquacious" },
      { key: "D", text: "haughty" },
      { key: "E", text: "venerable" },
    ],
    answer: "C",
    explanation:
      '"Garrulous" means excessively talkative. "Loquacious" is its closest synonym. "Taciturn" is its antonym.',
  },
  {
    id: "t1-q03",
    category: "verbal",
    prompt: "ORNITHOLOGIST is to BIRDS as ICHTHYOLOGIST is to:",
    options: [
      { key: "A", text: "insects" },
      { key: "B", text: "reptiles" },
      { key: "C", text: "fish" },
      { key: "D", text: "rocks" },
      { key: "E", text: "fossils" },
    ],
    answer: "C",
    explanation:
      "An ornithologist studies birds; an ichthyologist studies fish. Entomologists study insects, herpetologists reptiles, geologists rocks, paleontologists fossils.",
  },
  {
    id: "t1-q04",
    category: "verbal",
    prompt:
      "Choose the word that best completes the sentence: Despite her ______ exterior, Marianne was renowned among her colleagues for acts of quiet generosity.",
    options: [
      { key: "A", text: "ebullient" },
      { key: "B", text: "austere" },
      { key: "C", text: "magnanimous" },
      { key: "D", text: "pliant" },
      { key: "E", text: "candid" },
    ],
    answer: "B",
    explanation:
      "The word \"despite\" signals contrast between her exterior and her generosity. \"Austere\" (stern, forbidding) contrasts with quiet generosity. \"Magnanimous\" would reinforce, not contrast.",
  },
  {
    id: "t1-q05",
    category: "verbal",
    prompt: "Choose the word most nearly OPPOSITE: CAPRICIOUS",
    options: [
      { key: "A", text: "whimsical" },
      { key: "B", text: "impulsive" },
      { key: "C", text: "steadfast" },
      { key: "D", text: "jovial" },
      { key: "E", text: "reckless" },
    ],
    answer: "C",
    explanation:
      '"Capricious" means unpredictable or given to sudden changes of mood. "Steadfast" — firmly fixed — is its direct opposite.',
  },
  {
    id: "t1-q06",
    category: "verbal",
    prompt:
      'In the sentence "The committee\'s findings were ENIGMATIC, prompting weeks of speculation," ENIGMATIC most nearly means:',
    options: [
      { key: "A", text: "definitive" },
      { key: "B", text: "exhaustive" },
      { key: "C", text: "mysterious" },
      { key: "D", text: "trivial" },
      { key: "E", text: "inflammatory" },
    ],
    answer: "C",
    explanation:
      'Something "enigmatic" is puzzling or hard to interpret. The clue "weeks of speculation" reinforces the meaning — the findings were mysterious.',
  },
  {
    id: "t1-q07",
    category: "verbal",
    prompt: "THERMOMETER is to TEMPERATURE as SEISMOGRAPH is to:",
    options: [
      { key: "A", text: "volume" },
      { key: "B", text: "earthquakes" },
      { key: "C", text: "wind" },
      { key: "D", text: "altitude" },
      { key: "E", text: "pressure" },
    ],
    answer: "B",
    explanation:
      "A thermometer measures temperature; a seismograph measures (records) earthquakes. The relationship is instrument to what it measures.",
  },
  {
    id: "t1-q08",
    category: "verbal",
    prompt: "Choose the SYNONYM: OSTENTATIOUS",
    options: [
      { key: "A", text: "modest" },
      { key: "B", text: "showy" },
      { key: "C", text: "obscure" },
      { key: "D", text: "hesitant" },
      { key: "E", text: "reserved" },
    ],
    answer: "B",
    explanation:
      '"Ostentatious" means flamboyantly showy or designed to impress. "Showy" is the direct synonym.',
  },
  {
    id: "t1-q09",
    category: "verbal",
    prompt: "Choose the ANTONYM: PARSIMONIOUS",
    options: [
      { key: "A", text: "stingy" },
      { key: "B", text: "frugal" },
      { key: "C", text: "profligate" },
      { key: "D", text: "solemn" },
      { key: "E", text: "diligent" },
    ],
    answer: "C",
    explanation:
      '"Parsimonious" means excessively careful with money. "Profligate" — recklessly extravagant — is the opposite. "Stingy" and "frugal" are synonyms.',
  },
  {
    id: "t1-q10",
    category: "verbal",
    prompt:
      "Which word best completes the sentence? The new protocol was designed to ______ the inefficiencies that had long plagued the intake process.",
    options: [
      { key: "A", text: "exacerbate" },
      { key: "B", text: "obviate" },
      { key: "C", text: "perpetuate" },
      { key: "D", text: "inaugurate" },
      { key: "E", text: "misconstrue" },
    ],
    answer: "B",
    explanation:
      '"Obviate" means to remove or prevent (a difficulty), which fits a protocol designed to fix inefficiencies. "Exacerbate" and "perpetuate" would worsen or continue them.',
  },
  {
    id: "t1-q11",
    category: "verbal",
    prompt: "Choose the ANTONYM: FORTUITOUS",
    options: [
      { key: "A", text: "deliberate" },
      { key: "B", text: "accidental" },
      { key: "C", text: "unlucky" },
      { key: "D", text: "lucky" },
      { key: "E", text: "spontaneous" },
    ],
    answer: "A",
    explanation:
      '"Fortuitous" means happening by chance, accidentally. "Deliberate" — planned, intentional — is its opposite. Note it does not primarily mean "lucky," though it is often used that way colloquially.',
  },
  {
    id: "t1-q12",
    category: "verbal",
    prompt: "DROUGHT is to WATER as FAMINE is to:",
    options: [
      { key: "A", text: "rain" },
      { key: "B", text: "food" },
      { key: "C", text: "disease" },
      { key: "D", text: "harvest" },
      { key: "E", text: "drought" },
    ],
    answer: "B",
    explanation:
      "A drought is a scarcity of water; a famine is a scarcity of food. The relationship is shortage to the missing resource.",
  },
  {
    id: "t1-q13",
    category: "verbal",
    prompt: "Choose the SYNONYM: PERFUNCTORY",
    options: [
      { key: "A", text: "meticulous" },
      { key: "B", text: "cursory" },
      { key: "C", text: "zealous" },
      { key: "D", text: "timely" },
      { key: "E", text: "crude" },
    ],
    answer: "B",
    explanation:
      '"Perfunctory" means carried out with minimum effort or care. "Cursory" — hasty and superficial — is its closest synonym.',
  },
  {
    id: "t1-q14",
    category: "verbal",
    prompt: "Choose the ANTONYM: NADIR",
    options: [
      { key: "A", text: "apex" },
      { key: "B", text: "abyss" },
      { key: "C", text: "balance" },
      { key: "D", text: "threshold" },
      { key: "E", text: "anchor" },
    ],
    answer: "A",
    explanation:
      '"Nadir" is the lowest point. "Apex" — the highest point or peak — is the direct opposite.',
  },
  {
    id: "t1-q15",
    category: "verbal",
    prompt:
      "Although he was ______ in conversation, he wrote with surprising clarity and verve.",
    options: [
      { key: "A", text: "eloquent" },
      { key: "B", text: "laconic" },
      { key: "C", text: "verbose" },
      { key: "D", text: "incisive" },
      { key: "E", text: "animated" },
    ],
    answer: "B",
    explanation:
      '"Although" signals contrast with "clarity and verve" in writing. "Laconic" (using few words, terse) contrasts with lively writing. The other options would not create a contrast.',
  },
  {
    id: "t1-q16",
    category: "verbal",
    prompt: "LIBRARY is to BOOKS as ARBORETUM is to:",
    options: [
      { key: "A", text: "flowers" },
      { key: "B", text: "trees" },
      { key: "C", text: "animals" },
      { key: "D", text: "water" },
      { key: "E", text: "sculptures" },
    ],
    answer: "B",
    explanation:
      "A library is a collection of books; an arboretum is a collection of trees. The relationship is place to what is collected there.",
  },
  {
    id: "t1-q17",
    category: "verbal",
    prompt: "Choose the ANTONYM: ACQUIESCE",
    options: [
      { key: "A", text: "assent" },
      { key: "B", text: "resist" },
      { key: "C", text: "comply" },
      { key: "D", text: "waver" },
      { key: "E", text: "endorse" },
    ],
    answer: "B",
    explanation:
      '"Acquiesce" means to accept something reluctantly but without protest. "Resist" — to oppose or withstand — is its opposite.',
  },

  // =================== MATH / LOGIC (17) ===================
  {
    id: "t1-q18",
    category: "math",
    prompt:
      "The average of four numbers is 22. If three of the numbers are 15, 19, and 27, what is the fourth number?",
    options: [
      { key: "A", text: "25" },
      { key: "B", text: "27" },
      { key: "C", text: "28" },
      { key: "D", text: "29" },
      { key: "E", text: "31" },
    ],
    answer: "B",
    explanation:
      "The total of four numbers is 4 × 22 = 88. The three known numbers sum to 15 + 19 + 27 = 61. The fourth number is 88 − 61 = 27.",
  },
  {
    id: "t1-q19",
    category: "math",
    prompt:
      "A shirt originally priced at $80 is discounted 25%, then an additional 10% is taken off the sale price at checkout. What is the final price?",
    options: [
      { key: "A", text: "$52.00" },
      { key: "B", text: "$54.00" },
      { key: "C", text: "$56.00" },
      { key: "D", text: "$58.00" },
      { key: "E", text: "$60.00" },
    ],
    answer: "B",
    explanation:
      "After 25% off: 80 × 0.75 = $60. After an additional 10% off: 60 × 0.90 = $54.",
  },
  {
    id: "t1-q20",
    category: "math",
    prompt:
      "In a bag of marbles the ratio of red to blue to green is 2 : 3 : 5. If there are 30 green marbles, how many marbles are in the bag altogether?",
    options: [
      { key: "A", text: "40" },
      { key: "B", text: "48" },
      { key: "C", text: "50" },
      { key: "D", text: "60" },
      { key: "E", text: "72" },
    ],
    answer: "D",
    explanation:
      "The green portion (5 parts) = 30, so 1 part = 6. Total parts = 2 + 3 + 5 = 10, so total marbles = 10 × 6 = 60.",
  },
  {
    id: "t1-q21",
    category: "math",
    prompt:
      "A train leaves Station A at 60 mph toward Station B, which is 300 miles away. One hour later a second train leaves Station B toward A at 40 mph. How many miles from A will they meet?",
    options: [
      { key: "A", text: "168" },
      { key: "B", text: "180" },
      { key: "C", text: "192" },
      { key: "D", text: "204" },
      { key: "E", text: "216" },
    ],
    answer: "D",
    explanation:
      "After 1 hour train A has traveled 60 miles, leaving 240 miles between the trains. They now close at 60 + 40 = 100 mph, so they meet after 240/100 = 2.4 more hours. Train A travels an additional 60 × 2.4 = 144 miles. Total distance from A = 60 + 144 = 204 miles.",
  },
  {
    id: "t1-q22",
    category: "math",
    prompt:
      "What number comes next in the series? 3, 6, 11, 18, 27, ___",
    options: [
      { key: "A", text: "36" },
      { key: "B", text: "38" },
      { key: "C", text: "40" },
      { key: "D", text: "42" },
      { key: "E", text: "46" },
    ],
    answer: "B",
    explanation:
      "Differences are 3, 5, 7, 9, 11 (successive odd numbers). Next difference is 11, so 27 + 11 = 38.",
  },
  {
    id: "t1-q23",
    category: "math",
    prompt:
      "If 3(x − 4) = 2x + 7, what is the value of x?",
    options: [
      { key: "A", text: "11" },
      { key: "B", text: "13" },
      { key: "C", text: "17" },
      { key: "D", text: "19" },
      { key: "E", text: "21" },
    ],
    answer: "D",
    explanation:
      "Expand: 3x − 12 = 2x + 7. Subtract 2x: x − 12 = 7. Add 12: x = 19.",
  },
  {
    id: "t1-q24",
    category: "math",
    prompt:
      "All accountants in the firm hold a CPA license. Some accountants specialize in tax law. No one who specializes in tax law works part-time. Which of the following must be true?",
    options: [
      { key: "A", text: "All CPAs are accountants." },
      { key: "B", text: "No accountants work part-time." },
      { key: "C", text: "Some CPAs do not work part-time." },
      { key: "D", text: "All tax-law specialists hold a CPA license." },
      { key: "E", text: "All part-time workers are CPAs." },
    ],
    answer: "D",
    explanation:
      "Tax specialists are accountants (some accountants specialize in tax), and all accountants hold a CPA — therefore all tax-law specialists hold a CPA. The other statements either reverse the conditional (A, E) or overreach (B).",
  },
  {
    id: "t1-q25",
    category: "math",
    prompt:
      "A merchant buys a lamp for $45 and sells it at a 40% profit. A week later he sells an identical lamp at a 20% loss on the original purchase price. What is his combined profit or loss on the two lamps?",
    options: [
      { key: "A", text: "$3 profit" },
      { key: "B", text: "$6 profit" },
      { key: "C", text: "$9 profit" },
      { key: "D", text: "$9 loss" },
      { key: "E", text: "$12 profit" },
    ],
    answer: "C",
    explanation:
      "Lamp 1 profit: 0.40 × 45 = $18. Lamp 2 loss: 0.20 × 45 = $9. Net = $18 − $9 = $9 profit.",
  },
  {
    id: "t1-q26",
    category: "math",
    prompt:
      "A recipe calls for flour and sugar in the ratio 5 : 2. If you use 3 cups of sugar, how many cups of flour are needed?",
    options: [
      { key: "A", text: "6" },
      { key: "B", text: "6.5" },
      { key: "C", text: "7" },
      { key: "D", text: "7.5" },
      { key: "E", text: "8" },
    ],
    answer: "D",
    explanation:
      "Flour : sugar = 5 : 2, so flour = (5/2) × 3 = 7.5 cups.",
  },
  {
    id: "t1-q27",
    category: "math",
    prompt:
      "Pipe A fills a tank in 6 hours; pipe B fills the same tank in 4 hours. How long will it take both pipes working together to fill the tank?",
    options: [
      { key: "A", text: "2 hours" },
      { key: "B", text: "2 hours 24 minutes" },
      { key: "C", text: "2 hours 30 minutes" },
      { key: "D", text: "3 hours" },
      { key: "E", text: "3 hours 20 minutes" },
    ],
    answer: "B",
    explanation:
      "Combined rate = 1/6 + 1/4 = 2/12 + 3/12 = 5/12 per hour. Time = 12/5 = 2.4 hours = 2 hours 24 minutes.",
  },
  {
    id: "t1-q28",
    category: "math",
    prompt:
      "What number comes next? 2, 6, 12, 20, 30, ___",
    options: [
      { key: "A", text: "36" },
      { key: "B", text: "40" },
      { key: "C", text: "42" },
      { key: "D", text: "44" },
      { key: "E", text: "48" },
    ],
    answer: "C",
    explanation:
      "Differences are 4, 6, 8, 10 (consecutive even numbers). The next difference is 12, so 30 + 12 = 42. (Also n(n+1) pattern: 1·2, 2·3, 3·4, 4·5, 5·6, 6·7 = 42.)",
  },
  {
    id: "t1-q29",
    category: "math",
    prompt:
      "A square has its side length increased by 20%. By what percent does its area increase?",
    options: [
      { key: "A", text: "20%" },
      { key: "B", text: "24%" },
      { key: "C", text: "40%" },
      { key: "D", text: "44%" },
      { key: "E", text: "64%" },
    ],
    answer: "D",
    explanation:
      "New side = 1.2 × old. New area = 1.2² = 1.44 × old. Increase = 44%.",
  },
  {
    id: "t1-q30",
    category: "math",
    prompt:
      "In a group of 80 students, 45 play football, 30 play basketball, and 12 play both. How many students play neither sport?",
    options: [
      { key: "A", text: "13" },
      { key: "B", text: "17" },
      { key: "C", text: "19" },
      { key: "D", text: "23" },
      { key: "E", text: "27" },
    ],
    answer: "B",
    explanation:
      "Play at least one sport = 45 + 30 − 12 = 63. Play neither = 80 − 63 = 17.",
  },
  {
    id: "t1-q31",
    category: "math",
    prompt:
      "A principal of $2,000 is invested at 5% simple interest per year. How much total money (principal + interest) will be in the account after 3 years?",
    options: [
      { key: "A", text: "$2,150" },
      { key: "B", text: "$2,250" },
      { key: "C", text: "$2,300" },
      { key: "D", text: "$2,315" },
      { key: "E", text: "$2,400" },
    ],
    answer: "C",
    explanation:
      "Simple interest = 2000 × 0.05 × 3 = $300. Total = $2,000 + $300 = $2,300.",
  },
  {
    id: "t1-q32",
    category: "math",
    prompt:
      "If exactly five of the seven statements in a report are correct, what percent are incorrect? (round to the nearest whole percent)",
    options: [
      { key: "A", text: "22%" },
      { key: "B", text: "25%" },
      { key: "C", text: "28%" },
      { key: "D", text: "29%" },
      { key: "E", text: "33%" },
    ],
    answer: "D",
    explanation:
      "2 of 7 are incorrect. 2/7 ≈ 0.2857 ≈ 29%.",
  },
  {
    id: "t1-q33",
    category: "math",
    prompt:
      "What number should replace the question mark? 1, 4, 9, 16, 25, ?",
    options: [
      { key: "A", text: "30" },
      { key: "B", text: "32" },
      { key: "C", text: "34" },
      { key: "D", text: "36" },
      { key: "E", text: "49" },
    ],
    answer: "D",
    explanation:
      "These are perfect squares: 1², 2², 3², 4², 5². The next is 6² = 36.",
  },
  {
    id: "t1-q34",
    category: "math",
    prompt:
      "A car uses 8 gallons of fuel to travel 240 miles. At that rate, how many gallons will it need for a 390-mile trip?",
    options: [
      { key: "A", text: "11" },
      { key: "B", text: "12" },
      { key: "C", text: "13" },
      { key: "D", text: "14" },
      { key: "E", text: "15" },
    ],
    answer: "C",
    explanation:
      "Fuel economy = 240/8 = 30 mpg. Gallons needed = 390/30 = 13.",
  },

  // =================== SPATIAL (16) ===================
  {
    id: "t1-q35",
    category: "spatial",
    prompt: "Which figure does NOT belong with the others?",
    figureSvg: rowSvg([
      [circle(40, 40, 26), triangle(40, 40, 20)],
      [circle(40, 40, 26), square(40, 40, 20)],
      [circle(40, 40, 26), triangle(40, 40, 20)],
      [circle(40, 40, 26), triangle(40, 40, 14), triangle(40, 40, 8)],
      [circle(40, 40, 26), square(40, 40, 20)],
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
      "Figures A, B, C, and E each contain a circle and exactly one inner shape (triangle or square). Figure D contains a circle with TWO nested triangles — it is the only figure with more than one inner shape.",
  },
  {
    id: "t1-q36",
    category: "spatial",
    prompt:
      "Each figure below has the same five shapes with one feature changing. Which figure does NOT belong?",
    figureSvg: rowSvg([
      [square(40, 40, 40), circle(40, 40, 10, { fill: "#111" })],
      [square(40, 40, 40), circle(40, 40, 10)],
      [square(40, 40, 40), circle(40, 40, 10, { fill: "#111" })],
      [square(40, 40, 40), circle(40, 40, 10, { fill: "#111" })],
      [square(40, 40, 40), circle(40, 40, 10, { fill: "#111" })],
    ]),
    options: [
      { key: "A", text: "Figure A" },
      { key: "B", text: "Figure B" },
      { key: "C", text: "Figure C" },
      { key: "D", text: "Figure D" },
      { key: "E", text: "Figure E" },
    ],
    answer: "B",
    explanation:
      "Every figure shows a square with an inner circle. In four figures the circle is filled black; in Figure B it is left unfilled. Figure B is the outlier.",
  },
  {
    id: "t1-q37",
    category: "spatial",
    prompt:
      "What figure comes next in the sequence? (The arrow inside the circle rotates 45° clockwise each step.)",
    figureSvg: rowSvg([
      [circle(40, 40, 30), line(40, 40, 40, 15)], // up (0°)
      [circle(40, 40, 30), line(40, 40, 57.7, 22.3)], // 45°
      [circle(40, 40, 30), line(40, 40, 65, 40)], // 90°
      [circle(40, 40, 30), line(40, 40, 57.7, 57.7)], // 135°
      [`<text x="40" y="45" font-size="40" text-anchor="middle">?</text>`],
    ]),
    options: [
      { key: "A", svg: optSvg([circle(40, 40, 30), line(40, 40, 40, 65)]) }, // 180 down
      { key: "B", svg: optSvg([circle(40, 40, 30), line(40, 40, 22.3, 57.7)]) }, // 225
      { key: "C", svg: optSvg([circle(40, 40, 30), line(40, 40, 15, 40)]) }, // 270 left
      { key: "D", svg: optSvg([circle(40, 40, 30), line(40, 40, 65, 40)]) }, // 90 right
      { key: "E", svg: optSvg([circle(40, 40, 30), line(40, 40, 40, 15)]) }, // up
    ],
    answer: "A",
    explanation:
      "The arrow rotates 45° clockwise each step: up → NE → right → SE → down. The next position is straight down (180°), which is option A.",
  },
  {
    id: "t1-q38",
    category: "spatial",
    prompt: "Which figure does NOT belong with the others?",
    figureSvg: rowSvg([
      [triangle(40, 40, 40)],
      [triangle(40, 40, 40, { rotate: 90 })],
      [triangle(40, 40, 40, { rotate: 180 })],
      [triangle(40, 40, 40, { rotate: 270 })],
      [square(40, 40, 40, { rotate: 45 })],
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
      "Figures A–D are all triangles rotated to different orientations. Figure E is a rotated square (diamond) — the only non-triangle.",
  },
  {
    id: "t1-q39",
    category: "spatial",
    prompt: "Which of the following is the mirror image (left-right flip) of the figure on the far left?",
    figureSvg: rowSvg([
      [
        triangle(40, 40, 40),
        circle(28, 48, 6, { fill: "#111" }),
      ],
      [],
      [],
      [],
      [],
    ]),
    options: [
      {
        key: "A",
        svg: optSvg([triangle(40, 40, 40), circle(28, 48, 6, { fill: "#111" })]),
      },
      {
        key: "B",
        svg: optSvg([triangle(40, 40, 40), circle(52, 48, 6, { fill: "#111" })]),
      },
      {
        key: "C",
        svg: optSvg([triangle(40, 40, 40, { rotate: 180 }), circle(28, 32, 6, { fill: "#111" })]),
      },
      {
        key: "D",
        svg: optSvg([triangle(40, 40, 40), circle(40, 30, 6, { fill: "#111" })]),
      },
      {
        key: "E",
        svg: optSvg([triangle(40, 40, 40, { rotate: 90 }), circle(48, 40, 6, { fill: "#111" })]),
      },
    ],
    answer: "B",
    explanation:
      "A left-right mirror flip keeps the upright triangle the same (it is symmetric about the vertical axis) but moves the small dot from the lower-left to the lower-right. Option B matches.",
  },
  {
    id: "t1-q40",
    category: "spatial",
    prompt:
      "Which figure completes the 3×3 pattern? (Each row adds one more inner shape from left to right.)",
    figureSvg: mat3Svg([
      [square(40, 40, 50), circle(40, 40, 10)],
      [square(40, 40, 50), circle(30, 40, 8), circle(50, 40, 8)],
      [
        square(40, 40, 50),
        circle(24, 40, 7),
        circle(40, 40, 7),
        circle(56, 40, 7),
      ],
      [triangle(40, 40, 50), circle(40, 45, 10)],
      [triangle(40, 40, 50), circle(32, 48, 7), circle(48, 48, 7)],
      [
        triangle(40, 40, 50),
        circle(28, 50, 6),
        circle(40, 50, 6),
        circle(52, 50, 6),
      ],
      [diamond(40, 40, 50), circle(40, 40, 10)],
      [diamond(40, 40, 50), circle(32, 40, 7), circle(48, 40, 7)],
      null,
    ]),
    options: [
      {
        key: "A",
        svg: optSvg([diamond(40, 40, 50), circle(40, 40, 10)]),
      },
      {
        key: "B",
        svg: optSvg([
          diamond(40, 40, 50),
          circle(26, 40, 6),
          circle(40, 40, 6),
          circle(54, 40, 6),
        ]),
      },
      {
        key: "C",
        svg: optSvg([square(40, 40, 50), circle(40, 40, 10)]),
      },
      {
        key: "D",
        svg: optSvg([
          diamond(40, 40, 50),
          circle(32, 40, 7),
          circle(48, 40, 7),
        ]),
      },
      {
        key: "E",
        svg: optSvg([
          triangle(40, 40, 50),
          circle(28, 50, 6),
          circle(40, 50, 6),
          circle(52, 50, 6),
        ]),
      },
    ],
    answer: "B",
    explanation:
      "Each row keeps the same outer shape (square, triangle, diamond) while the number of inner circles increases 1, 2, 3 left-to-right. The missing cell is the diamond with THREE inner circles — option B.",
  },
  {
    id: "t1-q41",
    category: "spatial",
    prompt: "Which figure does NOT belong?",
    figureSvg: rowSvg([
      [circle(40, 40, 28), square(40, 40, 18, { pattern: "hatch" })],
      [circle(40, 40, 28), triangle(40, 40, 18, { pattern: "hatch" })],
      [circle(40, 40, 28), diamond(40, 40, 14, { pattern: "hatch" })],
      [circle(40, 40, 28), star(40, 40, 10, { pattern: "hatch" })],
      [circle(40, 40, 28), square(40, 40, 18)],
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
      "In figures A–D the inner shape is shaded (hatched); in figure E it is unshaded. Figure E is the outlier.",
  },
  {
    id: "t1-q42",
    category: "spatial",
    prompt:
      "What comes next? The triangle rotates 90° clockwise each step.",
    figureSvg: rowSvg([
      [triangle(40, 40, 40)],
      [triangle(40, 40, 40, { rotate: 90 })],
      [triangle(40, 40, 40, { rotate: 180 })],
      [`<text x="40" y="45" font-size="32" text-anchor="middle">?</text>`],
      [],
    ]),
    options: [
      { key: "A", svg: optSvg([triangle(40, 40, 40)]) },
      { key: "B", svg: optSvg([triangle(40, 40, 40, { rotate: 45 })]) },
      { key: "C", svg: optSvg([triangle(40, 40, 40, { rotate: 270 })]) },
      { key: "D", svg: optSvg([triangle(40, 40, 40, { rotate: 180 })]) },
      { key: "E", svg: optSvg([triangle(40, 40, 40, { rotate: 90 })]) },
    ],
    answer: "C",
    explanation:
      "The triangle rotates 90° clockwise each step: 0° → 90° → 180° → next is 270°. Option C shows the triangle at 270° (pointing left).",
  },
  {
    id: "t1-q43",
    category: "spatial",
    prompt:
      "Which figure is the result of rotating the figure on the far left 90° clockwise?",
    figureSvg: rowSvg([
      [rect(40, 40, 50, 20), circle(60, 40, 5, { fill: "#111" })],
      [],
      [],
      [],
      [],
    ]),
    options: [
      {
        key: "A",
        svg: optSvg([rect(40, 40, 20, 50), circle(40, 60, 5, { fill: "#111" })]),
      },
      {
        key: "B",
        svg: optSvg([rect(40, 40, 20, 50), circle(40, 20, 5, { fill: "#111" })]),
      },
      {
        key: "C",
        svg: optSvg([rect(40, 40, 50, 20), circle(20, 40, 5, { fill: "#111" })]),
      },
      {
        key: "D",
        svg: optSvg([rect(40, 40, 20, 50), circle(60, 40, 5, { fill: "#111" })]),
      },
      {
        key: "E",
        svg: optSvg([rect(40, 40, 50, 20), circle(40, 60, 5, { fill: "#111" })]),
      },
    ],
    answer: "A",
    explanation:
      "A 90° clockwise rotation turns the horizontal rectangle vertical and moves the right-side dot to the bottom. Option A matches; option B is a 90° counter-clockwise rotation.",
  },
  {
    id: "t1-q44",
    category: "spatial",
    prompt: "Which figure does NOT belong?",
    figureSvg: rowSvg([
      [circle(40, 40, 18), circle(40, 40, 28)],
      [square(40, 40, 36), square(40, 40, 56)],
      [triangle(40, 40, 30), triangle(40, 40, 50)],
      [diamond(40, 40, 24), diamond(40, 40, 40)],
      [star(40, 40, 14), circle(40, 40, 28)],
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
      "In A–D, the inner and outer shapes are the same type (two circles, two squares, two triangles, two diamonds). In E the inner shape is a star and the outer is a circle — different shapes. Figure E is the outlier.",
  },
  {
    id: "t1-q45",
    category: "spatial",
    prompt:
      "Which figure continues the pattern? (Each step, the circle shifts one position to the right and the triangle shifts one position to the left.)",
    figureSvg: rowSvg([
      [circle(20, 40, 8, { fill: "#111" }), triangle(60, 40, 16)],
      [circle(30, 40, 8, { fill: "#111" }), triangle(50, 40, 16)],
      [circle(40, 40, 8, { fill: "#111" }), triangle(40, 40, 16)],
      [`<text x="40" y="45" font-size="32" text-anchor="middle">?</text>`],
      [],
    ]),
    options: [
      {
        key: "A",
        svg: optSvg([circle(20, 40, 8, { fill: "#111" }), triangle(60, 40, 16)]),
      },
      {
        key: "B",
        svg: optSvg([circle(50, 40, 8, { fill: "#111" }), triangle(30, 40, 16)]),
      },
      {
        key: "C",
        svg: optSvg([circle(60, 40, 8, { fill: "#111" }), triangle(20, 40, 16)]),
      },
      {
        key: "D",
        svg: optSvg([circle(40, 40, 8, { fill: "#111" }), triangle(40, 40, 16)]),
      },
      {
        key: "E",
        svg: optSvg([circle(30, 40, 8, { fill: "#111" }), triangle(50, 40, 16)]),
      },
    ],
    answer: "B",
    explanation:
      "The circle moves right by 10 px each step (20 → 30 → 40 → 50) while the triangle moves left by 10 px (60 → 50 → 40 → 30). The next step is circle at 50 and triangle at 30 — option B.",
  },
  {
    id: "t1-q46",
    category: "spatial",
    prompt:
      "Which figure is the mirror image (horizontal flip) of the figure on the far left?",
    figureSvg: rowSvg([
      [
        `<polyline points="15,65 30,25 50,45 65,15" fill="none" stroke="#111" stroke-width="3"/>`,
      ],
      [],
      [],
      [],
      [],
    ]),
    options: [
      {
        key: "A",
        svg: optSvg([
          `<polyline points="65,65 50,25 30,45 15,15" fill="none" stroke="#111" stroke-width="3"/>`,
        ]),
      },
      {
        key: "B",
        svg: optSvg([
          `<polyline points="15,65 30,25 50,45 65,15" fill="none" stroke="#111" stroke-width="3"/>`,
        ]),
      },
      {
        key: "C",
        svg: optSvg([
          `<polyline points="15,15 30,55 50,35 65,65" fill="none" stroke="#111" stroke-width="3"/>`,
        ]),
      },
      {
        key: "D",
        svg: optSvg([
          `<polyline points="65,15 50,55 30,35 15,65" fill="none" stroke="#111" stroke-width="3"/>`,
        ]),
      },
      {
        key: "E",
        svg: optSvg([
          `<polyline points="15,45 30,65 50,25 65,45" fill="none" stroke="#111" stroke-width="3"/>`,
        ]),
      },
    ],
    answer: "A",
    explanation:
      "A horizontal mirror flip reverses the x-coordinates (x → 80 − x) while preserving y-values. The original polyline (15,65 30,25 50,45 65,15) becomes (65,65 50,25 30,45 15,15) — option A.",
  },
  {
    id: "t1-q47",
    category: "spatial",
    prompt:
      "How many triangles are in the figure? (Count triangles of ALL sizes, including overlapping ones.)",
    figureSvg: compose(160, 140, [
      // Big triangle with internal segments forming sub-triangles
      `<polygon points="80,20 20,120 140,120" fill="none" stroke="#111" stroke-width="2"/>`,
      `<line x1="80" y1="20" x2="80" y2="120" stroke="#111" stroke-width="2"/>`,
      `<line x1="20" y1="120" x2="80" y2="70" stroke="#111" stroke-width="2"/>`,
      `<line x1="140" y1="120" x2="80" y2="70" stroke="#111" stroke-width="2"/>`,
    ]),
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "5" },
      { key: "C", text: "6" },
      { key: "D", text: "7" },
      { key: "E", text: "8" },
    ],
    answer: "E",
    explanation:
      "Label the apex A, base corners B (left) and C (right), the midpoint of the base M (where the vertical meets the base), and D the point where the two diagonals from B and C meet the vertical. The eight triangles are: ABC (whole), ABM and ACM (left/right halves), ABD and ACD (upper slim triangles), BDM and CDM (lower small triangles), and BDC (the middle kite-triangle with apex D).",
  },
  {
    id: "t1-q48",
    category: "spatial",
    prompt: "Which figure does NOT belong?",
    figureSvg: rowSvg([
      [circle(40, 40, 20, { fill: "#111" })],
      [square(40, 40, 36, { fill: "#111" })],
      [triangle(40, 40, 36, { fill: "#111" })],
      [diamond(40, 40, 28, { fill: "#111" })],
      [star(40, 40, 22)],
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
      "Figures A–D are all solid (filled) shapes. Figure E is a hollow (outline-only) star. Figure E is the outlier.",
  },
  {
    id: "t1-q49",
    category: "spatial",
    prompt:
      "Which figure completes the pattern? (Each figure rotates the inner shape 90° and alternates the outer shape's fill.)",
    figureSvg: rowSvg([
      [square(40, 40, 40, { fill: "#eee" }), rect(40, 40, 30, 8)],
      [square(40, 40, 40), rect(40, 40, 8, 30)],
      [square(40, 40, 40, { fill: "#eee" }), rect(40, 40, 30, 8)],
      [`<text x="40" y="45" font-size="32" text-anchor="middle">?</text>`],
      [],
    ]),
    options: [
      {
        key: "A",
        svg: optSvg([square(40, 40, 40, { fill: "#eee" }), rect(40, 40, 8, 30)]),
      },
      {
        key: "B",
        svg: optSvg([square(40, 40, 40), rect(40, 40, 30, 8)]),
      },
      {
        key: "C",
        svg: optSvg([square(40, 40, 40), rect(40, 40, 8, 30)]),
      },
      {
        key: "D",
        svg: optSvg([square(40, 40, 40, { fill: "#eee" }), rect(40, 40, 30, 8)]),
      },
      {
        key: "E",
        svg: optSvg([square(40, 40, 40), rect(40, 40, 20, 20)]),
      },
    ],
    answer: "C",
    explanation:
      "The outer square alternates gray, white, gray, white → next is white. The inner bar alternates horizontal, vertical, horizontal → next is vertical. White outer + vertical inner = option C.",
  },
  {
    id: "t1-q50",
    category: "spatial",
    prompt:
      "Which figure completes the 3×3 matrix? (Reading across each row, the number of dots increases; reading down each column, the outer shape changes but the dot count pattern is consistent by row.)",
    figureSvg: mat3Svg([
      [circle(40, 40, 28), circle(40, 40, 4, { fill: "#111" })],
      [
        circle(40, 40, 28),
        circle(30, 40, 4, { fill: "#111" }),
        circle(50, 40, 4, { fill: "#111" }),
      ],
      [
        circle(40, 40, 28),
        circle(26, 40, 4, { fill: "#111" }),
        circle(40, 40, 4, { fill: "#111" }),
        circle(54, 40, 4, { fill: "#111" }),
      ],
      [square(40, 40, 50), circle(40, 40, 4, { fill: "#111" })],
      [
        square(40, 40, 50),
        circle(30, 40, 4, { fill: "#111" }),
        circle(50, 40, 4, { fill: "#111" }),
      ],
      [
        square(40, 40, 50),
        circle(26, 40, 4, { fill: "#111" }),
        circle(40, 40, 4, { fill: "#111" }),
        circle(54, 40, 4, { fill: "#111" }),
      ],
      [triangle(40, 45, 50), circle(40, 50, 4, { fill: "#111" })],
      [
        triangle(40, 45, 50),
        circle(32, 50, 4, { fill: "#111" }),
        circle(48, 50, 4, { fill: "#111" }),
      ],
      null,
    ]),
    options: [
      {
        key: "A",
        svg: optSvg([
          triangle(40, 45, 50),
          circle(28, 52, 4, { fill: "#111" }),
          circle(40, 52, 4, { fill: "#111" }),
          circle(52, 52, 4, { fill: "#111" }),
        ]),
      },
      {
        key: "B",
        svg: optSvg([triangle(40, 45, 50), circle(40, 50, 4, { fill: "#111" })]),
      },
      {
        key: "C",
        svg: optSvg([
          square(40, 40, 50),
          circle(26, 40, 4, { fill: "#111" }),
          circle(40, 40, 4, { fill: "#111" }),
          circle(54, 40, 4, { fill: "#111" }),
        ]),
      },
      {
        key: "D",
        svg: optSvg([
          triangle(40, 45, 50),
          circle(32, 50, 4, { fill: "#111" }),
          circle(48, 50, 4, { fill: "#111" }),
        ]),
      },
      {
        key: "E",
        svg: optSvg([
          triangle(40, 45, 50),
          circle(28, 52, 4, { fill: "#111" }),
          circle(40, 52, 4, { fill: "#111" }),
          circle(52, 52, 4, { fill: "#111" }),
          circle(40, 38, 4, { fill: "#111" }),
        ]),
      },
    ],
    answer: "A",
    explanation:
      "Across each row the dot count increases 1 → 2 → 3. The missing cell (row 3, column 3) has a triangle outer shape and needs three dots. Option A is the only triangle with exactly three dots.",
  },
];

export default test1;
