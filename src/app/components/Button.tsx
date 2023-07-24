import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactElement;
  variant?: "default" | "green" | "white";
  layout?: string;
  url?: string;
}

export default function Button(props: ButtonProps) {
  const { variant } = props;

  const style =
    "transition ease-in-out rounded-full font-bold flex justify-center items-center gap-3 py-4 px-8 hover:-translate-y-1 hover:shadow-md";

  switch (variant) {
    case "green":
      return <GreenButton layout={style} {...props} />;
    case "white":
      return <WhiteButton layout={style} {...props} />;

    default:
      return <DefaultButton layout={style} {...props} />;
  }
}

export function DefaultButton(props: ButtonProps) {
  const { children, icon, layout, ...rest } = props;

  return (
    <button {...rest} className={`${layout} bg-white`}>
      {icon}
      <span>{children}</span>
    </button>
  );
}

export function GreenButton(props: ButtonProps) {
  const { children, icon, layout, url, ...rest } = props;

  return (
    <button {...rest} className={`${layout} bg-[#edec6f]`}>
      {icon}
      <a href={url} target="_blank">
        <span>{children}</span>
      </a>
    </button>
  );
}

export function WhiteButton(props: ButtonProps) {
  const { children, icon, layout, url, ...rest } = props;

  return (
    <button {...rest} className={`${layout} bg-white`}>
      {icon}
      <a href={url} target="_blank">
        <span>{children}</span>
      </a>
    </button>
  );
}
