import Link from "next/link";
import React from "react";
import { BackArrowIcon } from "./Icons";

const CMSNavbar = () => {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link href={"/"}>
        <BackArrowIcon />
      </Link>
      <div>
        Anime<span className="text-red-500">Blog</span>
      </div>
    </div>
  );
};

export default CMSNavbar;
