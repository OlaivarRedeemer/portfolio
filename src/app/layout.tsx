import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/views/layout/layout";

export const metadata: Metadata = {
  title: "Redeemer Olaivar",
  description:
    "I'm a passionate UI/UX designer driven by creating intuitive and user-friendly experiences. I specialized in clean and minimalist designs.",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        href: "/logo.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
