import MainBigLinks from "@/components/MainBigLinks/MainBigLinks";
import MainHero from "@/components/MainHero/MainHero";

export default function Home() {
  return (
    <div className="bg-white mt-24">
      <MainHero />
      <MainBigLinks />
    </div>
  );
}
