"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import brightexLogo from "../../images/WhatsApp_Image_2026-03-25_at_2.55.55_PM-removebg-preview.png";

type NavItem = {
  label: string;
  href: string;
  matchPath: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", matchPath: "/" },
  { label: "About", href: "/about", matchPath: "/about" },
  { label: "Services", href: "/#services", matchPath: "/services" },
  { label: "Gallery", href: "/gallery", matchPath: "/gallery" },
  { label: "Contact Us", href: "/contact", matchPath: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const visibleItems = navItems.filter((item) => {
    if (item.matchPath === "/") {
      return pathname !== "/";
    }

    return pathname !== item.matchPath;
  });

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/30 bg-gradient-to-r from-blue-800 via-blue-700 to-rose-600 text-white shadow-lg shadow-blue-900/20 backdrop-blur">
      <div className="mx-auto flex w-[min(1120px,92vw)] items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl border border-white/45 bg-white/25 px-3 backdrop-blur-md"
          aria-label="Brightex home"
        >
          <Image
            src={brightexLogo}
            alt="Brightex logo"
            priority
            className="relative top-[3px] h-14 w-15"
          />
          <span className="font-heading text-xl font-bold tracking-tight text-white">
            Brightex
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-semibold md:flex">
          {visibleItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-blue-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/40 bg-white/10 text-2xl leading-none text-white transition hover:bg-white/20 md:hidden"
        >
          {mobileOpen ? "×" : "≡"}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/25 bg-blue-900/95 px-4 py-3 md:hidden">
          <div className="mx-auto flex w-[min(1120px,92vw)] flex-col gap-1 text-sm font-semibold">
            {visibleItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 transition hover:bg-white/15"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
