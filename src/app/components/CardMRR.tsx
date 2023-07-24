import StatusBar from "./StatusBar";

import { range } from "../utils/range";
import { AiOutlineTwitter } from "react-icons/ai";

export default function CardMMR() {
  return (
    <div className="w-[355px] cursor-default rounded-3xl bg-[#C3D0C3] p-8 transition duration-500 ease-in-out hover:-translate-y-1">
      <div className="flex flex-col gap-4">
        <div className="w-fit rounded-3xl border  border-[#333333] px-2 py-1">
          <p className="text-xs uppercase text-[#333333]">MRR Goal</p>
        </div>
        <div className="flex gap-2">
          <p className="text-5xl text-black">60%</p>
          <div className="h-fit rounded-3xl bg-[#f4f37b] px-2 py-1">
            <p className="text-xs">$2500</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-xs uppercase text-gray-400">
            136 days since I started
          </p>
          <p className="text-xs uppercase text-black">$6k goal</p>
        </div>
        <div className="flex gap-2">
          {range(12).map((num) => (
            <StatusBar key={num} filled={true} />
          ))}
          {range(8).map((num) => (
            <StatusBar key={num} />
          ))}
        </div>

        <button className="flex w-fit items-center justify-center gap-2 rounded-lg bg-black px-4 py-2 text-sm text-white transition ease-in-out hover:bg-white hover:text-black">
          <AiOutlineTwitter />
          Follow the journey
        </button>
      </div>
    </div>
  );
}
