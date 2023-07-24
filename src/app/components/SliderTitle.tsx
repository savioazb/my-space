import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface TitleProps {
  children: React.ReactNode;
  id: string;
  onInView: (id: string) => void;
}

export default function SliderTitle({ children, onInView, id }: TitleProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      onInView(id);
    }
  }, [isInView]);
  return (
    <p
      ref={ref}
      className={`text-white text-3xl py-16 transition-opacity ${
        !isInView && "opacity-20"
      }`}
    >
      {children}
    </p>
  );
}
