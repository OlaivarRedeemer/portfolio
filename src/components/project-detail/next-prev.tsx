import React from "react";
import { Button } from "../ui/button";
import { projectDetailPages } from "@/contents/project-detail";
import Link from "next/link";

const NextPrev: React.FC<{ slug: string }> = ({ slug }) => {
  const pageIndex = projectDetailPages.indexOf(slug);

  const prevLink = `/${projectDetailPages[pageIndex - 1]}`;
  const nextLink = `/${projectDetailPages[pageIndex + 1]}`;

  return (
    <div className={`flex items-center gap-3 ${pageIndex === 0 ? "justify-end" : "justify-between"}`}>
      {pageIndex !== 0 && (
        <Link href={prevLink}>
          <Button className="w-fit h-fit rounded-md border border-tertiary gap-2.5 px-[15px] py-[10px] my-[50px]">
            <img src="/assets/icons/arrow-left.svg" alt="arrow-left" className="w-[18px] h-[18px]" />
            <p className="text-sm">Prev project</p>
          </Button>
        </Link>
      )}
      {pageIndex !== projectDetailPages.length - 1 && (
        <Link href={nextLink}>
          <Button className="w-fit h-fit rounded-md border border-tertiary gap-2.5 px-[15px] py-[10px] my-[50px]">
            <p className="text-sm">Next project</p>
            <img src="/assets/icons/arrow-right.svg" alt="arrow-right" className="w-[18px] h-[18px]" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export default NextPrev;
