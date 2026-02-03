import { type FC } from "react";

type LogoProps = {
  /** Use "light" for white text on dark backgrounds (e.g. footer). Default is dark text. */
  variant?: "default" | "light";
  className?: string;
};

export const Logo: FC<LogoProps> = ({ variant = "default", className = "" }) => {
  const colorClass =
    variant === "light" ? "text-white" : "text-[#171717]";

  return (
    <span
      className={`font-sans font-bold tracking-tight antialiased text-lg sm:text-medium md:text-xl lg:text-xl xl:text-2xl min-w-0 inline-flex flex-wrap items-baseline max-[350px]:flex-nowrap max-[350px]:text-sm max-[350px]:leading-tight ${colorClass} ${className}`.trim()}
      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
    >
      <span>Jilotepec</span>
      <span className="min-[351px]:pl-1">Logistics</span>
    </span>
  );
};
