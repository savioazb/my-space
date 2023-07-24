import Image from "next/image";
import mww from "../assets/logo.svg";
import oimo from "../assets/logo-oimo.svg";
import { BsArrowBarRight, BsArrowRightShort } from "react-icons/bs";

interface SliderCardProps {
  backgroundColor: string;
  children: React.ReactNode;
  id: string;
  projectActive: string;
}

interface CardProps {
  id: string;
  projectActive: string;
}

function SliderCard({
  backgroundColor,
  children,
  id,
  projectActive,
}: SliderCardProps) {
  return (
    <div
      className={`absolute inset-0 flex h-full w-full items-center justify-center rounded-xl transition-opacity ${backgroundColor} ${
        projectActive === id ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export function MeetWithWallet({ id, projectActive }: CardProps) {
  return (
    <SliderCard
      id={id}
      backgroundColor="tranparent"
      projectActive={projectActive}
    >
      <div className="flex flex-col items-start justify-center gap-8">
        <Image src={mww} alt="mww logo" width={100} height={100} />
        <p className="text-gray-400">
          Experienced with various B2B products, including Shopify, WP. Create
          appealing solutions for business clients.
        </p>
        <a
          className="z-40 flex cursor-pointer items-center justify-center gap-2 text-white"
          href="https://www.google.com"
          target="_blank"
        >
          Check it out
          <BsArrowRightShort />
        </a>
      </div>
    </SliderCard>
  );
}
export function oiMo({ id, projectActive }: CardProps) {
  return (
    <SliderCard
      id={id}
      backgroundColor="transparent"
      projectActive={projectActive}
    >
      <div className="flex flex-col items-start justify-center gap-8">
        <Image src={oimo} alt="mww logo" width={100} height={100} />
        <p className="text-gray-400">
          Experienced with various B2B products, including Shopify, WP. Create
          appealing solutions for business clients.
        </p>
        <a
          className="z-40 flex cursor-pointer items-center justify-center gap-2 text-white"
          href="https://www.globl.com"
          target="_blank"
        >
          Check it out
          <BsArrowRightShort />
        </a>
      </div>
    </SliderCard>
  );
}
export function Universo({ id, projectActive }: CardProps) {
  return (
    <SliderCard
      id={id}
      backgroundColor="bg-blue-300"
      projectActive={projectActive}
    >
      <span />
    </SliderCard>
  );
}
export function Spotify({ id, projectActive }: CardProps) {
  return (
    <SliderCard
      id={id}
      backgroundColor="bg-yellow-300"
      projectActive={projectActive}
    >
      <span />
    </SliderCard>
  );
}
