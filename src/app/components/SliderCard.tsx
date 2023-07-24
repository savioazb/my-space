interface SliderCardProps {
  backgroundColor: string;
  children: React.ReactNode;
  id: string;
  projectActive: string;
}

interface CardProps {
  id: string;
  projectActive: string;
}

function SliderCard({
  backgroundColor,
  children,
  id,
  projectActive,
}: SliderCardProps) {
  return (
    <div
      className={`absolute inset-0 w-full h-full transition-opacity ${backgroundColor} ${
        projectActive === id ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export function MeetWithWallet({ id, projectActive }: CardProps) {
  return (
    <SliderCard
      id={id}
      backgroundColor="bg-red-300"
      projectActive={projectActive}
    >
      <span />
    </SliderCard>
  );
}
export function oiMo({ id, projectActive }: CardProps) {
  return (
    <SliderCard
      id={id}
      backgroundColor="bg-green-300"
      projectActive={projectActive}
    >
      <span />
    </SliderCard>
  );
}
export function Universo({ id, projectActive }: CardProps) {
  return (
    <SliderCard
      id={id}
      backgroundColor="bg-blue-300"
      projectActive={projectActive}
    >
      <span />
    </SliderCard>
  );
}
export function Spotify({ id, projectActive }: CardProps) {
  return (
    <SliderCard
      id={id}
      backgroundColor="bg-yellow-300"
      projectActive={projectActive}
    >
      <span />
    </SliderCard>
  );
}
