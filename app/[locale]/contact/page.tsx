import ContactForm from "@/app/components/ui/ContactForm";
import ContactInfoCard from "@/app/components/ui/ContactInfoCard";
import Reveal from "@/app/components/ui/Reveal";
import GetInTouch from "@/app/components/www/GetInTouch";
import { useLocale } from "next-intl";

export default function Home() {
  return (
    <div className="space-y-7">
      <Reveal animation="fade-up">
        <GetInTouch />
      </Reveal>
      <div className="flex flex-col space-y-4  lg:flex-row justify-center space-x-10 items-center px-10 mb-10">
        <ContactForm />
        <Reveal animation="fade-right">
          <ContactInfoCard />
        </Reveal>
      </div>
    </div>
  );
}
