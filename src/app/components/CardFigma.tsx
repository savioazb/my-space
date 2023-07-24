import Image from "next/image";
import Mockup from "../assets/mockup.png";
import { HiArrowUpRight } from "react-icons/hi2";

export default function CardFigma() {
  return (
    <div className="group w-[355px] cursor-default rounded-3xl bg-white p-4">
      <div className="flex justify-between gap-4">
        <div className="flex items-center justify-center gap-4">
          <Image
            className="w-20 rounded-xl"
            src={Mockup}
            alt="Figma mockup example"
          />
          <div className="flex flex-col">
            <p className="text-sm text-gray-400">figma.com</p>
            <p className="text-xl text-black">Interface iOS Kit</p>
          </div>
        </div>
        <div className="h-fit rounded-full bg-[#f4f37b] p-2 transition ease-in-out group-hover:bg-gray-200">
          <HiArrowUpRight size={12} />
        </div>
      </div>
    </div>
  );
}
