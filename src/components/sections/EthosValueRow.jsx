import Image from "next/image";
import { cn } from "@/lib/utils";
import SplitReveal from "@/components/motion/SplitReveal";
import ImageReveal from "@/components/motion/ImageReveal";
import MediaPlaceholder from "@/components/sections/MediaPlaceholder";

export default function EthosValueRow({
  number,
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  mediaTone = "butter",
  showCamera = false,
  className
}) {
  const text = (
    <div className="max-w-lg">
      <p className="eyebrow mb-5">{number}</p>
      <h2 className="max-w-md font-display text-3xl leading-[1.02] tracking-[-0.035em] text-forest sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 max-w-md text-sm leading-7 text-muted sm:text-[0.95rem] sm:leading-8">
        {description}
      </p>
    </div>
  );

  const media = image ? (
    <ImageReveal className="image-frame relative aspect-[1.35/1]">
      <Image
        src={image}
        alt={imageAlt || ""}
        fill
        sizes="(max-width: 1024px) 100vw, 42vw"
        className="object-cover"
      />
    </ImageReveal>
  ) : (
    <MediaPlaceholder
      tone={mediaTone}
      showCamera={showCamera}
      className="w-full"
    />
  );

  return (
    <div className={cn("border-b border-line/70 py-10 sm:py-14 lg:py-16", className)}>
      <SplitReveal
        left={text}
        right={media}
        reverse={reverse}
        gap="gap-8 lg:gap-16"
        className="items-center"
        leftClassName="flex items-center"
      />
    </div>
  );
}
