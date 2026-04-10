"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "tolk360-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Small delay so the slide-up animation is visible
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "all");
    setVisible(false);
  }

  function handleNecessaryOnly() {
    localStorage.setItem(STORAGE_KEY, "necessary");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop – visible on mobile only */}
      <div
        className="fixed inset-0 z-[9998] bg-black/40 sm:hidden"
        onClick={handleNecessaryOnly}
        aria-hidden="true"
      />

      {/* Banner */}
      <div
        role="dialog"
        aria-label="Cookie-samtykke"
        className="fixed bottom-0 left-0 right-0 z-[9999] animate-slideUp"
      >
        <div
          className="mx-auto max-w-4xl px-4 pb-4 sm:px-6"
        >
          <div
            className="rounded-xl border border-white/20 p-5 sm:p-6 shadow-2xl"
            style={{ backgroundColor: "var(--brand-primary)" }}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              {/* Text */}
              <div className="text-sm leading-relaxed text-white/90 sm:text-base">
                <p>
                  Vi bruger cookies for at forbedre din oplevelse på vores
                  hjemmeside.{" "}
                  <Link
                    href="/cookiepolitik"
                    className="underline underline-offset-2 text-white hover:text-[var(--brand-light)] transition-colors"
                  >
                    Læs vores cookiepolitik
                  </Link>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:gap-3">
                <button
                  onClick={handleAccept}
                  className="rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[0.97] cursor-pointer"
                  style={{ backgroundColor: "var(--brand-accent)" }}
                >
                  Accepter
                </button>
                <button
                  onClick={handleNecessaryOnly}
                  className="rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/20 active:scale-[0.97] cursor-pointer"
                >
                  Kun nødvendige
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-up keyframes */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
}
