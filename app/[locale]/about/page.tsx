import AboutIntro from "@/app/components/ui/AboutIntro";
import Reveal from "@/app/components/ui/Reveal";
import Vision from "@/app/components/ui/Vision";

export default function Home() {
  return (
    <div className="space-y-7">
      <Reveal animation="fade-up">
        <AboutIntro />
      </Reveal>
      <Reveal animation="fade-up">
        <Vision />
      </Reveal>
    </div>
  );
}
