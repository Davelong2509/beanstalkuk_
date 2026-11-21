import { MapPin, Baby, HeartHandshake } from "lucide-react";
import { homeQuickFacts } from "@/content/home";

const icons = [MapPin, Baby, HeartHandshake];

export default function QuickFacts() {
  return (
    <section aria-label="Nursery at a glance" className="border-b border-forest/10 bg-cream">
      <div className="mx-auto grid max-w-[90rem] divide-y divide-forest/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-10 lg:px-16">
        {homeQuickFacts.map((fact, index) => {
          const Icon = icons[index];
          return (
            <div key={fact} className="flex items-center justify-center gap-3 py-5 text-center columns-1  sm:px-4 lg:py-6">
              <Icon size={16} strokeWidth={1.6} className="shrink-0 text-terracotta" aria-hidden="true" />
              <p className="text-xs font-medium text-forest sm:text-sm">{fact}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
