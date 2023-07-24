"use client";
import { useEffect, useState } from "react";
import { MeetWithWallet, Spotify, Universo, oiMo } from "./SliderCard";
import SliderTitle from "./SliderTitle";

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
    <div className="flex w-full items-start gap-20">
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

      <div className="flex w-full items-center h-screen sticky top-0">
        <div className="relative aspect-square w-full rounded-xl bg-gray-100 h-80">
          {projects.map((project) => (
            <project.card
              key={project.id}
              id={project.id}
              projectActive={projectActive}
            />
          ))}
          {/* <p
            className={`transition-opacity ${
              projectActive === "title1" ? "opacity-100" : "opacity-0"
            }`}
          >
            MWW
          </p>
          <p
            className={`transition-opacity ${
              projectActive === "title2" ? "opacity-100" : "opacity-0"
            }`}
          >
            Oi mo
          </p>
          <p
            className={`transition-opacity ${
              projectActive === "title3" ? "opacity-100" : "opacity-0"
            }`}
          >
            Universo
          </p>
          <p
            className={`transition-opacity ${
              projectActive === "title4" ? "opacity-100" : "opacity-0"
            }`}
          >
            Spotify
          </p> */}
        </div>
      </div>
    </div>
  );
}
