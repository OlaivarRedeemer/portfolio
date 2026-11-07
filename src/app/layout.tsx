import type { Metadata } from "next";
import { Inter, Newsreader, Caveat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import GridDots from "@/components/grid-dots";
import Motion from "@/components/motion";
import Nav from "@/components/nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz"], variable: "--font-newsreader", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://redeemer-olaivar.vercel.app"),
  title: { default: "Redeemer Olaivar, product designer", template: "%s · Redeemer Olaivar" },
  description: "Redeemer Olaivar is a product designer who makes digital products feel obvious in hindsight. 4+ years with clients in the Philippines, Singapore and Canada.",
  icons: { icon: "/logo.svg" },
};

// Hidden reveal states only apply under `.m`, so no-JS and reduced-motion visitors see everything.
// If hydration never arrives, the timeout gives the content back.
const hand = Caveat({ subsets: ["latin"], weight: ["500", "600"], variable: "--hand", display: "swap" });

const motionBoot = `(function(){var d=document.documentElement;if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;d.classList.add("m");setTimeout(function(){if(!window.__motion)d.classList.remove("m")},3000)})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} ${hand.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: motionBoot }} /></head>
      <body>
        <Motion />
        <GridDots />
        <a className="skip" href="#main">Skip to content</a>
        <div className="column">
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
