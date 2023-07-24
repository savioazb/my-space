import Image from "next/image";
import twitterUser from "../assets/pp-twitter.png";
import { AiOutlineTwitter } from "react-icons/ai";

export default function CardTwitter() {
  return (
    <a
      href="https://twitter.com/saviobfialho"
      target="_blank"
      className="cursor-pointer"
    >
      <div className="flex w-[355px] flex-col gap-4 rounded-3xl bg-white p-8 transition duration-500 ease-in-out hover:-translate-y-1">
        <div className="flex items-center gap-2 uppercase text-[#1d9ceb]">
          <AiOutlineTwitter />
          <p className="text-xs">Last tweet</p>
        </div>
        <div>
          <p className="text-xl">👋 Hi! Let&apos;s build something together</p>
        </div>
        <div className="flex gap-2">
          <Image
            src={twitterUser}
            className="w-12 rounded-full"
            alt="User twitter profile pic"
          />
          <div>
            <p className="text-xl text-black">Sávio</p>
            <p className="text-sm text-gray-400">@saviobfialho</p>
          </div>
        </div>
      </div>
    </a>
  );
}
