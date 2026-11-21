import { cn } from "@/lib/utils";

const widthClasses = {
  wide: "max-w-[90rem]",
  default: "max-w-[78rem]",
  narrow: "max-w-[46rem]"
};

export default function PageContainer({
  as: Component = "div",
  width = "default",
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn("mx-auto w-[calc(100%_-_2.5rem)] sm:w-[calc(100%_-_4rem)] lg:w-[calc(100%_-_10rem)]", widthClasses[width] || widthClasses.default, className)}
      {...props}
    >
      {children}
    </Component>
  );
}
