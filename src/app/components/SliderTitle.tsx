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
  }, [isInView, onInView, id]);
  return (
    <p
      ref={ref}
      className={`py-16 text-3xl text-white transition-opacity ${
        !isInView && "opacity-20"
      }`}
    >
      {children}
    </p>
  );
}
