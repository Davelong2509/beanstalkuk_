import { cn } from "@/lib/utils";

const alignmentClasses = {
  left: "items-start text-left",
  center: "items-center text-center"
};

const toneClasses = {
  dark: {
    eyebrow: "text-terracotta",
    title: "text-forest",
    description: "text-muted"
  },
  light: {
    eyebrow: "text-butter",
    title: "text-cream",
    description: "text-cream/75"
  }
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  size = "large",
  className,
  titleClassName,
  descriptionClassName,
  as: Heading = "h2"
}) {
  const palette = toneClasses[tone] || toneClasses.dark;

  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col",
        alignmentClasses[align] || alignmentClasses.left,
        className
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow mb-4", palette.eyebrow)}>{eyebrow}</p>
      ) : null}

      <Heading
        className={cn(
          "font-display leading-[0.98] tracking-[-0.045em]",
          size === "small"
            ? "text-3xl sm:text-4xl"
            : "text-4xl sm:text-5xl lg:text-[4.25rem]",
          palette.title,
          titleClassName
        )}
      >
        {title}
      </Heading>

      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8",
            palette.description,
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
