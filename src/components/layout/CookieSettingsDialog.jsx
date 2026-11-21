"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Check, Cookie, X } from "lucide-react";

const STORAGE_KEY = "beanstalk-cookie-preferences";

function readSavedPreference() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return false;
    const parsed = JSON.parse(saved);
    return parsed?.analytics === true;
  } catch {
    return false;
  }
}

export default function CookieSettingsDialog() {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [saveError, setSaveError] = useState("");

  function handleOpenChange(nextOpen) {
    if (nextOpen) {
      setAnalytics(readSavedPreference());
      setSaveError("");
    }
    setOpen(nextOpen);
  }

  function savePreferences() {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          essential: true,
          analytics,
          savedAt: new Date().toISOString()
        })
      );
      setOpen(false);
    } catch {
      setSaveError(
        "Your preference could not be saved in this browser. Essential site features will still work."
      );
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="text-left transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-butter"
        >
          Cookie settings
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-forest/55 backdrop-blur-[3px] data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] max-h-[85vh] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-forest/10 bg-cream p-6 text-forest shadow-[0_24px_80px_rgba(0,0,0,0.22)] focus:outline-none sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="mb-3 inline-flex size-10 items-center justify-center rounded-full bg-sage text-forest">
                <Cookie size={19} aria-hidden="true" />
              </span>
              <Dialog.Title className="font-display text-2xl leading-tight sm:text-3xl">
                Cookie settings
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-xs leading-6 text-muted">
                Choose whether optional analytics storage may be used if
                analytics are enabled on this website.
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close cookie settings"
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-forest/15 text-forest transition-colors hover:bg-sage"
              >
                <X size={16} aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          <div className="mt-6 space-y-3">
            <div className="rounded-xl border border-forest/10 bg-white p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">Essential storage</p>
                  <p className="mt-1 text-[0.68rem] leading-5 text-muted">
                    Needed for core site functions and remembering your
                    preference. Always active.
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-sage px-3 py-1 text-[0.62rem] font-semibold text-forest">
                  Always on
                </span>
              </div>
            </div>

            <label className="flex cursor-pointer items-start justify-between gap-4 rounded-xl border border-forest/10 bg-white p-4 transition-colors hover:border-forest/25">
              <span>
                <span className="block text-sm font-semibold">
                  Optional analytics
                </span>
                <span className="mt-1 block text-[0.68rem] leading-5 text-muted">
                  Allow analytics storage only if an analytics service is
                  connected to this website in future.
                </span>
              </span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
                className="mt-1 size-4 shrink-0 accent-[#103c30]"
              />
            </label>
          </div>

          <p className="mt-4 text-[0.65rem] leading-5 text-muted">
            No analytics service is currently connected. Changing this
            preference does not turn on tracking by itself.
          </p>

          {saveError ? (
            <p role="alert" className="mt-4 text-xs leading-5 text-terracotta">
              {saveError}
            </p>
          ) : null}

          <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <Dialog.Close asChild>
              <button
                type="button"
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-forest/20 px-5 text-xs font-semibold text-forest transition-colors hover:bg-sage"
              >
                Cancel
              </button>
            </Dialog.Close>
            <button
              type="button"
              onClick={savePreferences}
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-forest px-5 text-xs font-semibold text-white transition-colors hover:bg-forest-deep"
            >
              <Check size={14} aria-hidden="true" />
              Save preferences
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
