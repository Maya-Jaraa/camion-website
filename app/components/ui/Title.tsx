interface TitleProps {
  label?: string | number;
  text: string;
}

export default function Title({ label, text }: TitleProps) {
  return (
    <div
      className="text-center flex flex-wrap items-center justify-center gap-1.5 md:gap-2 px-4"
      dir="ltr"
    >
      <h1 className="text-[#7F8184] text-lg md:text-2xl lg:text-3xl font-bold">
        {label}
      </h1>
      <h1
        className="text-lg md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#FFEBA9] to-[#FFC400] bg-clip-text text-transparent"
      >
        {text}
      </h1>
    </div>
  );
}
