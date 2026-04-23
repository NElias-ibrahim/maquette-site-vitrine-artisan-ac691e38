import { ImageIcon } from "lucide-react";

/* ============================================================
   IMAGE PLACEHOLDER
   Cadre neutre utilisé sur le site démo à la place des photos.
   Le prospect comprend qu'il pourra mettre ses propres images.
   ============================================================ */

type Props = {
  label?: string;
  className?: string;
  ratio?: "square" | "portrait" | "landscape" | "wide" | "free";
};

const ratioClass: Record<NonNullable<Props["ratio"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  free: "",
};

export const ImagePlaceholder = ({
  label = "Photo à insérer",
  className = "",
  ratio = "free",
}: Props) => {
  return (
    <div
      className={`relative w-full h-full overflow-hidden rounded-2xl bg-muted/60 border border-dashed border-foreground/15 flex items-center justify-center ${ratioClass[ratio]} ${className}`}
      role="img"
      aria-label={label}
    >
      {/* Motif diagonal léger */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0 1px, transparent 1px 14px)",
        }}
      />
      <div className="relative flex flex-col items-center gap-3 text-foreground/40 px-6 text-center">
        <ImageIcon className="w-8 h-8" strokeWidth={1.25} />
        <span className="text-[11px] uppercase tracking-[0.25em] font-medium">
          {label}
        </span>
      </div>
    </div>
  );
};

export default ImagePlaceholder;
