import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex items-center justify-between h-16 w-full">
        <Link href="/">
          <div>Dev Block</div>
        </Link>
        <div>theme</div>
      </div>
    </div>
  );
};

export default Navbar;
