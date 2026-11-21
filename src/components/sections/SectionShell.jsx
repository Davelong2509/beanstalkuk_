import { cn } from "@/lib/utils";
import PageContainer from "@/components/layout/PageContainer";

const backgroundClasses = {
  cream: "bg-cream",
  sage: "bg-sage",
  butter: "bg-butter",
  forest: "bg-forest text-cream",
  white: "bg-white"
};

const spacingClasses = {
  compact: "section-space-compact",
  default: "section-space",
  none: "py-0"
};

export default function SectionShell({
  as: Component = "section",
  background = "cream",
  spacing = "default",
  contained = true,
  className,
  contentClassName,
  children,
  ...props
}) {
  const content = contained ? (
    <PageContainer className={contentClassName}>{children}</PageContainer>
  ) : (
    children
  );

  return (
    <Component
      className={cn(
        backgroundClasses[background] || backgroundClasses.cream,
        spacingClasses[spacing] || spacingClasses.default,
        className
      )}
      {...props}
    >
      {content}
    </Component>
  );
}
