"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  X
} from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import Reveal from "@/components/motion/Reveal";
import {
  galleryCategories,
  galleryImages
} from "@/content/gallery";

function GalleryLightbox({ image, index, total, onPrevious, onNext, onClose }) {
  const shouldReduceMotion = useReducedMotion();

  function handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      onPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      onNext();
    }
  }

  return (
    <Dialog.Root
      open={Boolean(image)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            className="fixed inset-0 z-[100] bg-[#061a14]/90 backdrop-blur-sm"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </Dialog.Overlay>

        <Dialog.Content
          asChild
          onKeyDown={handleKeyDown}
        >
          <motion.div
            className="fixed inset-3 z-[101] flex flex-col justify-center outline-none sm:inset-6 lg:inset-10"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.985, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between pb-3 text-white">
              <div className="min-w-0 pr-4">
                <Dialog.Title className="truncate text-sm font-semibold sm:text-base">
                  {image?.title}
                </Dialog.Title>
                <Dialog.Description className="mt-0.5 text-xs text-white/65">
                  Photo {index + 1} of {total} · Use the arrow keys to browse
                </Dialog.Description>
              </div>

              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Close photo viewer"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-white"
                >
                  <X size={19} aria-hidden="true" />
                </button>
              </Dialog.Close>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center">
              <div className="relative h-full max-h-[min(76vh,900px)] w-full">
                {image ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    unoptimized
                    sizes="100vw"
                    className="select-none object-contain"
                    priority
                  />
                ) : null}
              </div>

              <button
                type="button"
                aria-label="Previous photo"
                onClick={onPrevious}
                className="absolute left-0 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-black/55 sm:left-3 sm:size-12"
              >
                <ChevronLeft size={23} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={onNext}
                className="absolute right-0 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-black/55 sm:right-3 sm:size-12"
              >
                <ChevronRight size={23} aria-hidden="true" />
              </button>
            </div>

            <p className="mx-auto w-full max-w-6xl pt-3 text-center text-xs text-white/65">
              {image?.alt}
            </p>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeImageId, setActiveImageId] = useState(null);

  const visibleImages = useMemo(
    () =>
      activeCategory === "all"
        ? galleryImages
        : galleryImages.filter((image) => image.category === activeCategory),
    [activeCategory]
  );

  const activeIndex = visibleImages.findIndex(
    (image) => image.id === activeImageId
  );
  const activeImage = activeIndex >= 0 ? visibleImages[activeIndex] : null;

  function openImage(image) {
    setActiveImageId(image.id);
  }

  function showPrevious() {
    if (!visibleImages.length) return;
    const nextIndex =
      (Math.max(activeIndex, 0) - 1 + visibleImages.length) %
      visibleImages.length;
    setActiveImageId(visibleImages[nextIndex].id);
  }

  function showNext() {
    if (!visibleImages.length) return;
    const nextIndex =
      (Math.max(activeIndex, 0) + 1) % visibleImages.length;
    setActiveImageId(visibleImages[nextIndex].id);
  }

  function changeCategory(category) {
    setActiveCategory(category);
    setActiveImageId(null);
  }

  return (
    <>
      <section className="bg-cream pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24">
        <PageContainer width="wide">
          <div className="mb-7 flex flex-col gap-5 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <p className="eyebrow">Little moments, big memories</p>
              <h2 className="mt-3 font-display text-3xl leading-tight tracking-[-0.035em] text-forest sm:text-4xl">
                Moments of joy and learning.
              </h2>
            </Reveal>
            <p className="max-w-sm text-xs leading-6 text-muted sm:text-right">
              A glimpse of the everyday adventures, discoveries and happy
              moments that make Beanstalk special.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter gallery photos"
            className="mb-7 flex flex-wrap gap-2 sm:mb-9"
          >
            {galleryCategories.map((category) => {
              const selected = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => changeCategory(category.id)}
                  className={`min-h-9 rounded-full border px-4 text-[0.68rem] font-semibold transition-all duration-200 ${
                    selected
                      ? "border-forest bg-forest text-white shadow-sm"
                      : "border-forest/25 bg-transparent text-forest hover:border-forest hover:bg-sage"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div
            aria-live="polite"
            className="sr-only"
          >
            Showing {visibleImages.length} gallery photos.
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:gap-5">
            {visibleImages.map((image, index) => (
              <Reveal
                key={image.id}
                delay={Math.min(index * 0.035, 0.18)}
                amount={0.08}
              >
                <button
                  type="button"
                  onClick={() => openImage(image)}
                  aria-label={`View photo: ${image.alt}`}
                  className="group relative block w-full overflow-hidden rounded-xl bg-sage text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
                >
                  <div className={`relative ${image.aspect} overflow-hidden`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      unoptimized
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] group-focus-visible:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09271f]/65 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between gap-3 p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                      <span className="text-xs font-semibold leading-5">
                        {image.title}
                      </span>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/15 backdrop-blur-sm">
                        <Expand size={14} aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-[0.65rem] text-muted">
            <span className="size-1.5 rounded-full bg-[#6d9b78]" />
            {visibleImages.length} moments from life at Beanstalk
          </div>
        </PageContainer>
      </section>

      <GalleryLightbox
        image={activeImage}
        index={activeIndex}
        total={visibleImages.length}
        onPrevious={showPrevious}
        onNext={showNext}
        onClose={() => setActiveImageId(null)}
      />
    </>
  );
}
