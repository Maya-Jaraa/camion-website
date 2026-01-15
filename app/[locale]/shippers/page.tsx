import MainIntro from "@/app/components/ui/MainIntro";
import Reveal from "@/app/components/ui/Reveal";
import CamionDownload from "@/app/components/www/CamionDownload";
import HowWeWork from "@/app/components/www/HowWeWork";
import TruckTypes from "@/app/components/www/TrackTypes";
import WhyChooseCamion from "@/app/components/www/WhyChooseCamion";

export default function Home() {
  return (
    <div className="space-y-5 md:space-y-25">
      <Reveal animation="fade-up">
        <MainIntro
          image="/images/shippersintro.svg"
          type="shippers"
        />
      </Reveal>
      <Reveal animation="fade-up">
        <WhyChooseCamion />
      </Reveal>
      <Reveal animation="fade-up">
        <HowWeWork />
      </Reveal>
      <Reveal animation="fade-up">
        <CamionDownload />
      </Reveal>
      <Reveal animation="fade-up">
        <TruckTypes />
      </Reveal>
    </div>
  );
}
