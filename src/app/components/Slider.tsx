"use client";
import { useState } from "react";
import { MeetWithWallet, Spotify, Universo, oiMo } from "./SliderCard";
import SliderTitle from "./SliderTitle";
import Screen from "./Screen";

const projects = [
  {
    id: "title1",
    name: "Meet With Wallet",
    card: MeetWithWallet,
  },
  {
    id: "title2",
    name: "Oi mô",
    card: oiMo,
  },
  {
    id: "title3",
    name: "Universo",
    card: Universo,
  },
  {
    id: "title4",
    name: "Spotify",
    card: Spotify,
  },
];

export default function Slider() {
  const [projectActive, setProjectActive] = useState<string>("");

  function onInView(projectId: string) {
    console.log(projectId);

    setProjectActive(projectId);
  }

  return (
    <div className="flex w-full items-start gap-20 px-80">
      <div className="w-full py-[50vh]">
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <SliderTitle id={project.id} onInView={onInView}>
                {project.name}
              </SliderTitle>
            </li>
          ))}
        </ul>
      </div>

      <div className="sticky top-0 flex h-screen w-full items-center">
        <div className="relative aspect-square h-80 w-full rounded-xl ">
          <Screen>
            {projects.map((project) => (
              <project.card
                key={project.id}
                id={project.id}
                projectActive={projectActive}
              />
            ))}
          </Screen>
        </div>
      </div>
    </div>
  );
}
