"use client";

import { useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { navigation } from "@/content/navigation";
import { siteContact } from "@/content/site";
import BrandLogo from "@/components/layout/BrandLogo";
import { Button } from "@/components/ui/button";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild>
          <button
            type="button"
            aria-label="Open navigation menu"
            className="flex size-11 items-center justify-center rounded-full border border-forest/15 bg-white/55 text-forest transition-colors hover:bg-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          >
            <Menu size={20} />
          </button>
        </Dialog.Trigger>

        <Dialog.Portal forceMount>
          <AnimatePresence>
            {isOpen ? (
              <>
                <Dialog.Overlay asChild>
                  <motion.div
                    key="mobile-navigation-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[60] bg-forest/35 backdrop-blur-[2px]"
                  />
                </Dialog.Overlay>

                <Dialog.Content asChild>
                  <motion.div
                    key="mobile-navigation-panel"
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 32 }}
                    className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-[27rem] flex-col overflow-y-auto bg-cream px-6 pb-8 pt-5 shadow-2xl sm:px-8"
                  >
                    <Dialog.Title className="sr-only">Mobile navigation</Dialog.Title>
                    <div className="flex items-center justify-between border-b border-forest/10 pb-5">
                      <BrandLogo size="mobile" />
                      <Dialog.Close asChild>
                        <button
                          type="button"
                          aria-label="Close navigation menu"
                          className="flex size-10 items-center justify-center rounded-full border border-forest/15 text-forest transition-colors hover:bg-sage"
                        >
                          <X size={19} />
                        </button>
                      </Dialog.Close>
                    </div>

                    <nav aria-label="Mobile navigation" className="flex-1 py-7">
                      <div className="space-y-1">
                        {navigation.map((item, index) =>
                          item.children ? (
                            <details key={item.label} className="group border-b border-forest/10">
                              <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-display text-2xl text-forest [&::-webkit-details-marker]:hidden">
                                {item.label}
                                <ChevronDown
                                  size={18}
                                  className="text-terracotta transition-transform duration-200 group-open:rotate-180"
                                  aria-hidden="true"
                                />
                              </summary>
                              <div className="grid gap-1 pb-4 pl-3">
                                {item.children.map((child) => (
                                  <Dialog.Close asChild key={child.href}>
                                    <Link
                                      href={child.href}
                                      className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-sage hover:text-forest"
                                    >
                                      {child.label}
                                    </Link>
                                  </Dialog.Close>
                                ))}
                              </div>
                            </details>
                          ) : (
                            <Dialog.Close asChild key={item.href}>
                              <Link
                                href={item.href}
                                className="flex items-center justify-between border-b border-forest/10 py-4 font-display text-2xl text-forest transition-colors hover:text-terracotta"
                              >
                                {item.label}
                                <span className="text-xs font-sans text-terracotta">
                                  {String(index + 1).padStart(2, "0")}
                                </span>
                              </Link>
                            </Dialog.Close>
                          )
                        )}
                      </div>
                    </nav>

                    <div className="rounded-2xl bg-sage p-5">
                      <p className="eyebrow">Come and see for yourself</p>
                      <p className="mt-2 font-display text-2xl leading-tight text-forest">
                        The best way to discover Beanstalk is to experience it.
                      </p>
                      <Button asChild className="mt-5 w-full">
                        <Link href="/arrange-a-visit" onClick={() => setIsOpen(false)}>
                          Book a Visit
                        </Link>
                      </Button>
                      <a
                        href={`tel:${siteContact.phoneHref}`}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-forest"
                      >
                        <Phone size={15} aria-hidden="true" />
                        {siteContact.phoneDisplay}
                      </a>
                    </div>
                  </motion.div>
                </Dialog.Content>
              </>
            ) : null}
          </AnimatePresence>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
