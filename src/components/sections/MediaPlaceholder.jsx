import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MediaPlaceholder({
  tone = "butter",
  showCamera = false,
  className,
  label = "Image placeholder"
}) {
  const tones = {
    butter: "bg-butter",
    sage: "bg-sage",
    forest: "bg-forest text-butter"
  };

  return (
    <div
      aria-label={label}
      role="img"
      className={cn(
        "relative isolate flex aspect-[1.35/1] items-center justify-center overflow-hidden rounded-xl",
        tones[tone] || tones.butter,
        className
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,.5), transparent 65%), repeating-linear-gradient(135deg, transparent 0 22px, rgba(16,60,48,.035) 22px 23px)"
        }}
      />
      {showCamera ? (
        <div className="relative flex size-20 items-center justify-center rounded-2xl border border-butter/60 text-butter/80 sm:size-24">
          <Camera size={42} strokeWidth={1.1} aria-hidden="true" />
        </div>
      ) : null}
    </div>
  );
}
