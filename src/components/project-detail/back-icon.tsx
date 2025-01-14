import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const BackIcon = () => {
  return (
    <Link href="/">
      <Button className="w-10 h-10 rounded-full border border-tertiary px-0 py-0 my-[50px]">
        <img src="/assets/icons/arrow-left.svg" alt="arrow-left" />
      </Button>
    </Link>
  );
};

export default BackIcon;
