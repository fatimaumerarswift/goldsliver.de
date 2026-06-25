"use client"
import Image from "next/image";
import { useLang } from "@/components/uselang";
import { Playfair_Display, JetBrains_Mono, Inter } from "next/font/google";
import PriceTickerBar from "@/components/PriceTracker";

const playfair = Playfair_Display({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const content = {
  en: {
    badge: "Scrap Metal",
    title1: "Recycling Markets Create",
    title2: "New Value Opportunities",
    desc: "Learn how valuable precious metals are recovered from electronics, silverware, and industrial scrap through modern recycling method",
  },
  de: {
    badge: "Schrottmetall",
    title1: "Recyclingmärkte Schaffen",
    title2: "Neue Wertschöpfungsmöglichkeiten",
    desc: "Erfahren Sie, wie wertvolle Edelmetalle aus Elektronik, Silberwaren und Industrieschrott durch moderne Recyclingmethoden zurückgewonnen werden",
  },
};

export default function MetalHero() {
  const lang = useLang();
  const t = content[lang];
  return (
    <>
        <div className="bg-white py-8 max-w-full px-4 sm:px-8 md:px-12">
  <div className="relative overflow-hidden rounded-xl mx-0 sm:mx-6 md:mx-12 lg:mx-22 h-[220px] sm:h-[320px] md:h-[380px] lg:h-[400px]">
                <Image
                  src="/Rectangle5.png"
                  alt="Gold bars background"
                  fill
                  className="object-cover sm:w-2xl"
                />
                {/* black */}
                <div className="absolute inset-0 bg-black/40" />
                {/* text content */}
                 <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-12">
                  <span className={`${inter.className} inline-block bg-[#B8860B] text-black text-xs md:text-sm px-3 py-1 rounded-md w-fit mb-3 font-bold`}>
                    {t.badge}
                  </span>
                  <h1 className={`${playfair.className} text-white text-xl md:text-4xl font-bold leading-snug`}>
                    {t.title1}
                  </h1>
                  <h1 className={`${playfair.className} text-white text-xl md:text-4xl font-bold leading-snug`}>
                    {t.title2}
                  </h1>
                  <p className={`${inter.className} text-white text-xs md:text-sm mt-2 max-w-xl`}>
                    {t.desc}
                  </p>
                </div>
              </div>
            </div>

      {/* ticker bar */}
      <PriceTickerBar/>
    </>
  );
}