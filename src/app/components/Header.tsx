import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Header() {
  return (
    <div className="w-[1260px] pt-5 flex justify-between items-center">
      <h1 className="text-xl font-bold">sávio fialho</h1>
      <div className="flex gap-4">
        <div className="text-xs text-right">
          <p>Currently available</p>
          <p>Follow my journey on Twitter</p>
        </div>
        <Link href={"/#"}>
          <AiOutlineTwitter size={32} />
        </Link>
      </div>
    </div>
  );
}
