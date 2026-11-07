import type { Metadata } from "next";
import Story from "@/views/story";

export const metadata: Metadata = { title: "Story" };

export default function Page() {
  return <Story />;
}
