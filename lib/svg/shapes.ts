/**
 * Inline-SVG primitives for spatial-reasoning questions.
 * Every helper returns an SVG fragment string which can be composed via
 * `compose(w, h, [...])` into a full <svg>…</svg> element.
 */

type ShapeOpts = {
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  rotate?: number; // degrees
  /** Optional fill pattern: hatching or dots */
  pattern?: "hatch" | "dots" | "hatch-v";
};

const DEFAULT_STROKE = "#111";
const DEFAULT_STROKE_W = 2;

function commonAttrs(o: ShapeOpts): string {
  const fill = o.fill ?? "none";
  const stroke = o.stroke ?? DEFAULT_STROKE;
  const sw = o.strokeWidth ?? DEFAULT_STROKE_W;
  return `fill="${fill}" stroke="${stroke}" stroke-width="${sw}"`;
}

function rotation(cx: number, cy: number, deg?: number): string {
  if (!deg) return "";
  return `transform="rotate(${deg} ${cx} ${cy})"`;
}

/** Returns the pattern defs needed once per SVG. Idempotent — safe to include always. */
export function patternDefs(): string {
  return `
    <defs>
      <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6">
        <path d="M0,6 L6,0" stroke="#111" stroke-width="1"/>
      </pattern>
      <pattern id="hatch-v" patternUnits="userSpaceOnUse" width="6" height="6">
        <path d="M0,0 L6,6" stroke="#111" stroke-width="1"/>
      </pattern>
      <pattern id="dots" patternUnits="userSpaceOnUse" width="6" height="6">
        <circle cx="3" cy="3" r="1" fill="#111"/>
      </pattern>
    </defs>
  `;
}

function resolveFill(o: ShapeOpts): ShapeOpts {
  if (!o.pattern) return o;
  return { ...o, fill: `url(#${o.pattern})` };
}

export function circle(cx: number, cy: number, r: number, opts: ShapeOpts = {}): string {
  const o = resolveFill(opts);
  return `<circle cx="${cx}" cy="${cy}" r="${r}" ${commonAttrs(o)} ${rotation(cx, cy, o.rotate)}/>`;
}

export function square(
  cx: number,
  cy: number,
  size: number,
  opts: ShapeOpts = {}
): string {
  const o = resolveFill(opts);
  const x = cx - size / 2;
  const y = cy - size / 2;
  return `<rect x="${x}" y="${y}" width="${size}" height="${size}" ${commonAttrs(
    o
  )} ${rotation(cx, cy, o.rotate)}/>`;
}

export function rect(
  cx: number,
  cy: number,
  w: number,
  h: number,
  opts: ShapeOpts = {}
): string {
  const o = resolveFill(opts);
  const x = cx - w / 2;
  const y = cy - h / 2;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" ${commonAttrs(
    o
  )} ${rotation(cx, cy, o.rotate)}/>`;
}

export function triangle(
  cx: number,
  cy: number,
  size: number,
  opts: ShapeOpts = {}
): string {
  const o = resolveFill(opts);
  // Equilateral-ish, pointing up; size = bounding box height.
  const h = size;
  const w = size * 0.95;
  const p1 = `${cx},${cy - h / 2}`;
  const p2 = `${cx - w / 2},${cy + h / 2}`;
  const p3 = `${cx + w / 2},${cy + h / 2}`;
  return `<polygon points="${p1} ${p2} ${p3}" ${commonAttrs(o)} ${rotation(
    cx,
    cy,
    o.rotate
  )}/>`;
}

export function diamond(
  cx: number,
  cy: number,
  size: number,
  opts: ShapeOpts = {}
): string {
  return square(cx, cy, size, { ...opts, rotate: (opts.rotate ?? 0) + 45 });
}

export function star(
  cx: number,
  cy: number,
  r: number,
  opts: ShapeOpts = {}
): string {
  const o = resolveFill(opts);
  const points: string[] = [];
  for (let i = 0; i < 10; i++) {
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    const rr = i % 2 === 0 ? r : r / 2.3;
    const x = cx + rr * Math.cos(angle);
    const y = cy + rr * Math.sin(angle);
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return `<polygon points="${points.join(" ")}" ${commonAttrs(o)} ${rotation(
    cx,
    cy,
    o.rotate
  )}/>`;
}

export function line(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  opts: { stroke?: string; strokeWidth?: number; dash?: string } = {}
): string {
  const stroke = opts.stroke ?? DEFAULT_STROKE;
  const sw = opts.strokeWidth ?? DEFAULT_STROKE_W;
  const dash = opts.dash ? ` stroke-dasharray="${opts.dash}"` : "";
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${sw}"${dash}/>`;
}

export function arrow(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): string {
  // Simple arrow head via marker-less polyline
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const head = 8;
  const hx1 = x2 - ux * head - uy * (head * 0.5);
  const hy1 = y2 - uy * head + ux * (head * 0.5);
  const hx2 = x2 - ux * head + uy * (head * 0.5);
  const hy2 = y2 - uy * head - ux * (head * 0.5);
  return (
    line(x1, y1, x2, y2) +
    `<polygon points="${x2},${y2} ${hx1.toFixed(1)},${hy1.toFixed(1)} ${hx2.toFixed(
      1
    )},${hy2.toFixed(1)}" fill="#111"/>`
  );
}

export function text(
  x: number,
  y: number,
  content: string,
  opts: { size?: number; weight?: number; anchor?: "start" | "middle" | "end" } = {}
): string {
  const s = opts.size ?? 14;
  const w = opts.weight ?? 500;
  const a = opts.anchor ?? "middle";
  return `<text x="${x}" y="${y}" font-size="${s}" font-weight="${w}" text-anchor="${a}" font-family="system-ui, sans-serif" dominant-baseline="central" fill="#111">${content}</text>`;
}

/** A 1-cell box with border, translated by (dx, dy). Children are SVG fragments
 *  already positioned relative to (0,0)..(size,size). */
export function box(
  dx: number,
  dy: number,
  size: number,
  children: string[] = [],
  opts: { border?: boolean } = {}
): string {
  const border = opts.border !== false;
  const borderEl = border
    ? `<rect x="0.5" y="0.5" width="${size - 1}" height="${
        size - 1
      }" fill="none" stroke="#111" stroke-width="1"/>`
    : "";
  return `<g transform="translate(${dx} ${dy})">${borderEl}${children.join("")}</g>`;
}

/** Compose a full <svg> document from fragments. */
export function compose(width: number, height: number, children: string[]): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="auto" preserveAspectRatio="xMidYMid meet">${patternDefs()}${children.join(
    ""
  )}</svg>`;
}

/** Horizontal row of N equally-sized boxes. Children[i] is list of shapes for box i. */
export function row(
  cellSize: number,
  gap: number,
  children: string[][]
): string {
  return children
    .map((cellChildren, i) => box(i * (cellSize + gap), 0, cellSize, cellChildren))
    .join("");
}

/** 3x3 matrix of boxes (for Raven-style spatial questions). */
export function matrix3x3(
  cellSize: number,
  gap: number,
  cells: Array<string[] | null>
): string {
  if (cells.length !== 9) {
    throw new Error("matrix3x3 requires 9 cells");
  }
  return cells
    .map((cellChildren, i) => {
      const col = i % 3;
      const rowIdx = Math.floor(i / 3);
      const dx = col * (cellSize + gap);
      const dy = rowIdx * (cellSize + gap);
      if (cellChildren === null) {
        // Render a question-mark cell.
        return box(dx, dy, cellSize, [text(cellSize / 2, cellSize / 2, "?", { size: 28 })]);
      }
      return box(dx, dy, cellSize, cellChildren);
    })
    .join("");
}
