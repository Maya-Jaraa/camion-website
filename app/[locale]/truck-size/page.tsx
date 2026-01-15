import MainIntro from "@/app/components/ui/MainIntro";
import Reveal from "@/app/components/ui/Reveal";
import TruckSwiper from "@/app/components/ui/TruckSwiper";

export default function Home() {
  return (
    <div className="">
      <Reveal animation="fade-up">
        <MainIntro
          image="/images/swipperMain/bus2.svg"
          type="truck-size"
        />
      </Reveal>
      <Reveal animation="fade-up">
        <TruckSwiper />
      </Reveal>
    </div>
  );
}
