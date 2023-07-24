import { BsDiscord } from "react-icons/bs";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-8 text-center pt-20 pb-5">
      <h2 className="text-5xl font-bold">
        Crafting exceptional digital experiences.
      </h2>
      <div className="flex gap-4">
        <Button variant="green" url="https://meetwithwallet.xyz/savio">
          Schedule a meeting
        </Button>
        <Button
          variant="white"
          icon={<BsDiscord />}
          url="https://discordapp.com/users/671681941354840075"
        >
          Discord
        </Button>
      </div>
    </div>
  );
}
