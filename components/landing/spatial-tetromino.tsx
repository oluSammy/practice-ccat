type SpatialTetrominoProps = {
  variant: 1 | 2 | 3 | 4 | 5;
  size?: number;
  muted?: boolean;
  highlight?: boolean;
};

const CELLS: Record<SpatialTetrominoProps["variant"], [number, number][]> = {
  1: [[0, 0], [1, 0], [1, 1], [2, 1]],
  2: [[0, 1], [0, 0], [1, 0], [2, 0]],
  3: [[0, 0], [0, 1], [1, 1], [1, 2]],
  4: [[2, 0], [1, 0], [1, 1], [0, 1]],
  5: [[0, 0], [1, 0], [0, 1], [1, 1]],
};

export function SpatialTetromino({
  variant,
  size = 72,
  muted,
  highlight,
}: SpatialTetrominoProps) {
  const cells = CELLS[variant];
  const cs = size / 4;
  const fill = highlight
    ? "var(--brand)"
    : muted
    ? "var(--color-paper-200)"
    : "var(--color-paper-900)";
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
    >
      {cells.map(([x, y], i) => (
        <rect
          key={i}
          x={x * cs + 6}
          y={y * cs + 6}
          width={cs - 2}
          height={cs - 2}
          rx={3}
          fill={fill}
          fillOpacity={muted ? 0.8 : 1}
        />
      ))}
    </svg>
  );
}
