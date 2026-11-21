import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { navigation } from "@/content/navigation";

export default function DesktopNavigation() {
  return (
    <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
      {navigation.map((item) =>
        item.children ? (
          <details key={item.label} className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-full px-3 py-2 text-[0.76rem] font-medium text-forest/85 transition-colors hover:bg-sage hover:text-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta [&::-webkit-details-marker]:hidden">
              {item.label}
              <ChevronDown
                size={13}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-open:visible group-open:translate-y-0 group-open:opacity-100">
              <div className="rounded-2xl border border-forest/10 bg-cream p-2 shadow-[0_18px_50px_rgba(16,60,48,0.13)]">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block rounded-xl px-4 py-3 text-sm text-forest/85 transition-colors hover:bg-sage hover:text-forest focus-visible:bg-sage"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          </details>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full px-3 py-2 text-[0.76rem] font-medium text-forest/85 transition-colors hover:bg-sage hover:text-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          >
            {item.label}
          </Link>
        )
      )}
    </nav>
  );
}
