"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const BackIcon = () => {
  const router = useRouter();

  const back = () => {
    router.back();
  };

  return (
    <Button className="w-10 h-10 rounded-full border border-tertiary px-0 py-0 my-[50px]" onClick={back}>
      <img src="/assets/icons/arrow-left.svg" alt="arrow-left" />
    </Button>
  );
};

export default BackIcon;
