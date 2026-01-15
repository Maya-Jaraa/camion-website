import Reveal from "./Reveal";

interface StatCardProps {
  value: string;
  text: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, text }) => {
  return (
    <Reveal animation="fade-left">
      <div
        className="
        bg-white border border-[#FFC400]
        rounded-xl
        s:w-[143px] h-[130px]
        xs:w-[107px]
       ms:w-[125px]
       md:w-[250px]
        lg:w-[270px] md:h-[270px]
              flex flex-col items-center justify-center px-1
      "
      >
        <h1 className="text-xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFC400] to-[#FFC400]/60">
          {value}
        </h1>

        <p className="text-center mt-3  text-[10px] md:text-base text-[#727272]">
          {text}
        </p>
      </div>
    </Reveal>
  );
};
