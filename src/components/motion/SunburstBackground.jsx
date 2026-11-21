import { cn } from "@/lib/utils";

export default function SunburstBackground({ className }) {
  return (
    <div
      aria-hidden="true"
      className={cn("sunburst-background", className)}
    />
  );
}
