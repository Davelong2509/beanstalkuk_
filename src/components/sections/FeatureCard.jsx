import { cn } from "@/lib/utils";

export default function FeatureCard({
  number,
  title,
  description,
  tone = "light",
  className
}) {
  const isDark = tone === "dark";

  return (
    <article
      className={cn(
        "border-t pt-6",
        isDark ? "border-white/20 text-cream" : "border-forest/15 text-forest",
        className
      )}
    >
      {number ? (
        <p className={cn("font-display text-lg italic", isDark ? "text-butter" : "text-terracotta")}>
          {number}
        </p>
      ) : null}
      <h3 className={cn("mt-4 font-display text-2xl leading-tight", isDark ? "text-cream" : "text-forest")}>
        {title}
      </h3>
      {description ? (
        <p className={cn("mt-3 max-w-sm text-sm leading-7", isDark ? "text-cream/70" : "text-muted")}>
          {description}
        </p>
      ) : null}
    </article>
  );
}
