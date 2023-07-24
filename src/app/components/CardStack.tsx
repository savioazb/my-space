import { RxNotionLogo, RxVercelLogo, RxFramerLogo } from "react-icons/rx";
import { SiNextdotjs } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

export default function CardStack() {
  return (
    <div className="transition ease-in-out duration-500 w-[355px] rounded-3xl bg-gradient-to-r from-black to-gray-900 p-8 hover:-translate-y-1 cursor-default">
      <p className="text-lg text-white">Stack</p>
      <p className="text-md text-gray-400">My apps & tools of choice.</p>
      <ul className="mt-4 flex flex-col gap-4">
        <li className="flex items-center gap-4">
          <div className="bg-gray-700 text-white p-2 rounded-md flex justify-center items-center h-fit">
            <SiNextdotjs size={20} />
          </div>
          <div>
            <p className="text-white text-sm">Next.js</p>
            <p className="text-gray-400 text-sm">Development</p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <div className="bg-blue-500 text-white p-2 rounded-md flex justify-center items-center h-fit">
            <FiFigma size={20} />
          </div>
          <div>
            <p className="text-white text-sm">Figma</p>
            <p className="text-gray-400 text-sm">UI Design</p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <div className="bg-white p-2 rounded-md flex justify-center items-center h-fit">
            <RxNotionLogo size={20} />
          </div>
          <div>
            <p className="text-white text-sm">Notion</p>
            <p className="text-gray-400 text-sm">Productivity</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
