"use client";

import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

type TickerItem = { label: string; value: string };

const TICKERS: TickerItem[] = [
  { label: "XAU/USD", value: "Loading..." },
  { label: "XAG/USD", value: "Loading..." },
  { label: "BTC/USD", value: "Loading..." },
  { label: "ETH/USD", value: "Loading..." },
  { label: "EUR/USD", value: "Loading..." },
];

export default function PriceTickerBar() {
  // Duplicate the list so the scroll loop is seamless (no visible jump/reset).
  const items = [...TICKERS, ...TICKERS];

  return (
    <div className="w-full  bg-black border-y border-gray-800 overflow-hidden">
      <div className="flex w-max animate-ticker-scroll my-2 ">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-1.5 whitespace-nowrap px-4 sm:px-6 py-2 sm:py-2.5 border-r border-gray-800"
          >
            <span className={`${jetbrainsMono.className} text-[15px] sm:text-lg text-gray-400`}>
              {item.label}:
            </span>
            <span className={`${jetbrainsMono.className} text-[15px] sm:text-lg text-[#F7BD48]`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-ticker-scroll {
          animation: ticker-scroll 30s linear infinite;
        }
        .animate-ticker-scroll:hover {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .animate-ticker-scroll {
            animation-duration: 20s;
          }
        }
      `}</style>
    </div>
  );
}