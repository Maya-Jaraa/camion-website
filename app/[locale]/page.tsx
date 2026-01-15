import { useTranslations } from "next-intl";
import MainSwiper from "../components/ui/MainSwiper";
import CamionServices from "../components/www/CamionServices";
import WhyCamion from "../components/www/WhyCamion";
import CamionInNumbers from "../components/www/CamionInNumbers";
import CamionDownload from "../components/www/CamionDownload";
import CamionTracking from "../components/www/CamionTracking";
import GreenLogistics from "../components/www/GreenLogistics";
import Reveal from "../components/ui/Reveal";
export default function Home() {
  return (
    <div className="space-y-5">
      <MainSwiper />
      <Reveal animation="fade-up">
        <CamionServices />
      </Reveal>
      <Reveal animation="fade-up">
        <WhyCamion />
      </Reveal>
      <Reveal animation="fade-up">
        <CamionInNumbers />
      </Reveal>
      <Reveal animation="fade-up">
        <CamionDownload />
      </Reveal>
      <Reveal animation="fade-up">
        <CamionTracking />
      </Reveal>
      <Reveal animation="fade-up">
        <GreenLogistics />
      </Reveal>
    </div>
  );
}
