import Image from "next/image";
import Gambino from "../asstes/gambino.png";
import { BsSpotify } from "react-icons/bs";
import SoundBar from "./SoundBar";

export default function CardSpotify() {
  return (
    <div className="flex w-[355px] cursor-default justify-between rounded-3xl bg-gradient-to-r from-green-500 to-green-400 p-4">
      <div className="flex items-center gap-2">
        <Image
          className="rounded-xl"
          width={80}
          src={Gambino}
          alt="spotify cd cover"
        />
        <div className="flex flex-col">
          <div className="flex items-end gap-1">
            <SoundBar />
            <p className="text-xs font-bold uppercase text-black">
              Playing Now
            </p>
          </div>

          <p className="text-lg font-bold text-white">Redbone</p>
          <p className="text-md text-white">Childish Gambino</p>
        </div>
      </div>
      <div className="self-end text-xl text-white">
        <BsSpotify />
      </div>
    </div>
  );
}
