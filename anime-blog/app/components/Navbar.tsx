import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="flex justify-between items-end h-16 w-full">
        <Link href={"/"}>
          <div>
            Anime<span className="text-red-500">Blog</span>
          </div>
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
