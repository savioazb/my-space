import Header from "./components/Header";
import Hero from "./components/Hero";

import CardProfile from "./components/CardProfile";
import CardTwitter from "./components/CardTwitter";
import CardStack from "./components/CardStack";
import CardFigma from "./components/CardFigma";
import CardGithub from "./components/CardGithub";
import CardMMR from "./components/CardMRR";
import Screen from "./components/Screen";
import Slider from "./components/Slider";
import CardSubstackEmbed from "./components/CardSubstackEmbed";
import Button from "./components/Button";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-full w-auto flex-col items-center bg-neutral-100 pb-40">
        <Header />
        <Hero />
        <div className="grid grid-cols-3 gap-4 ">
          <div className="flex flex-col gap-4">
            <CardProfile />
            <CardGithub />
          </div>
          <div className="flex flex-col gap-4">
            <CardTwitter />
            <CardStack />
          </div>
          <div className="flex flex-col gap-4">
            <CardMMR />
            <CardSubstackEmbed />
          </div>
        </div>
      </div>

      <div className="relative z-10 rounded-3xl bg-[#0a0a0a] pt-40">
        <div className="flex flex-col items-center justify-center gap-16 pb-0">
          <div className="flex flex-col items-center justify-center gap-8 px-40 text-center">
            <div className="w-fit rounded-bl-3xl rounded-br-full rounded-tl-none rounded-tr-full border border-gray-400 p-4">
              <p className="text-gray-400">How can I help you?</p>
            </div>
            <h2 className="text-4xl text-white">
              From single-page websites to large-scale web applications, I have
              the expertise to build websites that are fast, secure, and
              scalable.
            </h2>
          </div>
        </div>

        <Slider />
      </div>
      <div className="-mt-4 flex flex-col items-center justify-center gap-8 bg-[#C3D0C3] p-20">
        <h2 className="max-w-lg text-center text-3xl font-bold">
          Looks like you&apos;re serious about getting stuff done!
        </h2>
        <Button variant="green" url="https://meetwithwallet.xyz/savio">
          Get Started
        </Button>
      </div>
    </main>
  );
}
