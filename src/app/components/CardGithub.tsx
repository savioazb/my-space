import { RxGithubLogo } from "react-icons/rx";
import { getGithubContributions } from "../utils/api";

interface MyData {
  totalContributions: number;
  data: any;
}

export default async function CardGithub() {
  const fetchedData: MyData = await getGithubContributions<MyData>(
    "https://github-contributions-api.deno.dev/savioazb.json",
  );

  const totalContributions: number = fetchedData.totalContributions;

  return (
    <div className="w-[355px] cursor-default rounded-3xl bg-gradient-to-r from-black to-gray-900 p-8 transition duration-500 ease-in-out hover:-translate-y-1">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 text-gray-400">
            <RxGithubLogo />
            <p className=" text-xs uppercase">Contributions this year</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-3xl text-white">{totalContributions}</p>
            <p className="text-green-400">+25%</p>
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <div className="h-12 w-2 rounded-lg bg-green-600"></div>
          <div className="h-14 w-2 rounded-lg bg-green-400"></div>
          <div className="h-6 w-2 rounded-lg bg-green-800"></div>
          <div className="h-14 w-2 rounded-lg bg-green-900"></div>
        </div>
      </div>
    </div>
  );
}
