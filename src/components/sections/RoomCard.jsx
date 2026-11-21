import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import HoverMotion from "@/components/motion/HoverMotion";

export default function RoomCard({
  title,
  eyebrow,
  description,
  href,
  image,
  imageAlt = "",
  className
}) {
  return (
    <HoverMotion className="h-full" lift={6} scale={1.005}>
      <Link
        href={href}
        className={cn(
          "group relative flex min-h-[23rem] h-full flex-col justify-end overflow-hidden rounded-xl bg-gradient-to-b from-butter via-[#d8d8b7] to-forest p-6 text-white sm:min-h-[26rem] sm:p-7",
          className
        )}
      >
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent transition-opacity duration-300 group-hover:opacity-95" />
        <div className="relative z-10">
          {eyebrow ? <p className="eyebrow text-butter">{eyebrow}</p> : null}
          <h3 className="mt-3 font-display text-4xl text-white sm:text-5xl">{title}</h3>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/90">{description}</p>
          <span className="mt-6 inline-flex items-center gap-2 border-b border-butter pb-2 text-sm font-semibold text-white">
            Explore the room <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </HoverMotion>
  );
}
