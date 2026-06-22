import Email from "@/components/Email";
import CoinsHero from "@/components/CoinsHero";
import CoinCards from "@/components/CoinsCards";
import CoinsUpdates from "@/components/CoinsUpdate";

export default function page() {
  return (
    <>
      <CoinsHero />
      <CoinsUpdates/>
      <CoinCards />
      <Email />
    </>
  );
}