import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { navlinks } from "@/constants/NavLinks";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30 flex items-center justify-center">
      <div className="relative container py-6 flex justify-between items-center transition-all">
        <Logo />
        <nav className="hidden md:flex gap-8 capitalize">
          {navlinks.map((link, index) => (
            <Link
              href={`#${link}`}
              className="text-sm font-semibold tracking-wide text-slate-200"
              key={index}
            >
              {link}
            </Link>
          ))}
        </nav>
        {/* mobile navbar */}
        <MobileNav />
      </div>
    </header>
  );
}
