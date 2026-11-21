import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-terracotta text-white shadow-[0_5px_16px_rgba(185,77,64,0.16)] hover:-translate-y-0.5 hover:bg-terracotta-dark hover:shadow-[0_8px_22px_rgba(185,77,64,0.22)]",
        secondary:
          "bg-forest text-white hover:-translate-y-0.5 hover:bg-forest-deep",
        outline:
          "border border-forest/35 bg-transparent text-forest hover:bg-sage",
        light:
          "border border-white/55 bg-white/5 text-white hover:bg-white/12",
        ghost: "text-forest hover:bg-sage"
      },
      size: {
        sm: "min-h-9 px-4 text-xs",
        default: "min-h-11 px-5 text-sm",
        lg: "min-h-12 px-7 text-sm",
        icon: "size-10 p-0"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
