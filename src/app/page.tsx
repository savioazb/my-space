import Header from "./components/Header";
import Hero from "./components/Hero";

import CardProfile from "./components/CardProfile";
import CardTwitter from "./components/CardTwitter";
import CardStack from "./components/CardStack";
import CardFigma from "./components/CardFigma";
import CardGithub from "./components/CardGithub";
import CardMMR from "./components/CardMRR";
import CardVideo from "./components/CardVideo";
import CardSpotify from "./components/CardSpotify";
import Screen from "./components/Screen";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-full w-auto flex-col items-center bg-neutral-100 pb-40">
        <Header />
        <Hero />
        <div className="flex flex-wrap justify-center gap-4">
          <CardProfile />

          <div className="flex flex-col gap-4">
            <CardTwitter />
            <CardStack />
          </div>

          <div className="flex flex-col gap-4">
            <CardGithub />
            <CardFigma />
            <CardMMR />
          </div>
        </div>
      </div>

      <div className="rounded-t-3xl bg-[#0a0a0a] pt-96">
        <div className="flex flex-col items-center justify-center gap-16 pb-0">
          <div className="flex flex-col items-center justify-center gap-8 text-center">
            <div className="w-fit rounded-bl-3xl rounded-br-full rounded-tl-none rounded-tr-full border border-gray-400 p-4">
              <p className="text-gray-400">So what is it?</p>
            </div>
            <h2 className="text-4xl text-white">
              We collect your online activity in <br /> a simple, beautiful
              space.
            </h2>
          </div>
          <Screen />
        </div>

        <Slider />
        <div className="h-screen">More room to scroll</div>
      </div>
    </main>
  );
}
