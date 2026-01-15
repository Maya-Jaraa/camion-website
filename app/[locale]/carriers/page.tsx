import MainIntro from "@/app/components/ui/MainIntro";
import Reveal from "@/app/components/ui/Reveal";
import CamionDownload from "@/app/components/www/CamionDownload";
import CamionOffers from "@/app/components/www/CamionOffers";
import HowToGetStarted from "@/app/components/www/HowToGetStarted";

export default function Home() {
  return (
    <div className="space-y-10">
      <Reveal animation="fade-up">
        <MainIntro
          image="/images/carriers.svg"
          type="shippers"
        />
      </Reveal>
      <Reveal animation="fade-up">
        <CamionOffers />
      </Reveal>
      <Reveal animation="fade-up">
        <HowToGetStarted />
      </Reveal>
      <Reveal animation="fade-up">
        <CamionDownload />
      </Reveal>
    </div>
  );
}
