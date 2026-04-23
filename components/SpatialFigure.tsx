"use client";

export default function SpatialFigure({
  svg,
  className = "",
}: {
  svg: string;
  className?: string;
}) {
  // The svg prop contains a full <svg>...</svg> markup string from our
  // authoring helpers. We inject it via dangerouslySetInnerHTML — all SVG
  // comes from trusted in-repo code, never user input.
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
