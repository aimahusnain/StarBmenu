"use client";
import Link from "next/link";
import { useEffect } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import MobileNav from "./MobileNav";

const Navbar = () => {
  useEffect(() => {
    const refreshLink = document.getElementById("refreshLink");
    const handleRefreshClick = () => {
      location.reload();
    };

    if (refreshLink) {
      refreshLink.addEventListener("click", handleRefreshClick);
    }

    return () => {
      if (refreshLink) {
        refreshLink.removeEventListener("click", handleRefreshClick);
      }
    };
  }, []);


  return (
    <nav className="border-b-2 fixed top-0 shadow-sm pt-3 pb-1 flex items-center inset-x-0 mb-[300px] z-30 w-full border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between border-zinc-200">
          <Link
            aria-label="Starbucks Home"
            href="/"
            className="flex text-2xl gap-4 z-40 font-bold"
          >
          Starbmenu
          </Link>
          <MobileNav />
          <div className="hidden text-lg gap-5 items-center space-x-4 sm:flex">
            <Link href="/drinks">Drinks</Link>
            <Link href="/food">Food</Link>
            <Link href="/athomecoffee">At Home Coffee</Link>
            <Link href="/merchandise">Merchandise</Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;