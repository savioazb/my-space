import { FaLinkedinIn } from "react-icons/fa";

export default function CardProfile() {
  return (
    <a
      href="https://www.linkedin.com/in/savio-fialho/"
      target="_blank"
      className="cursor-pointer"
    >
      <div className="group flex h-[487px] w-[352px] items-end rounded-3xl bg-[url('assets/savio.png')] bg-cover bg-center shadow-[inset_0_-19px_26px_29px_rgba(0,0,0,0.4)] transition duration-500 ease-in-out hover:-translate-y-1">
        <div className="flex w-full items-center justify-between p-8">
          <div className="">
            <p className="text-4xl font-bold text-white">
              Sávio <br /> Fialho
            </p>
            <p className="text-white">Front End Developer</p>
          </div>
          <div className="rounded-full border border-white bg-transparent p-2 text-2xl text-white transition ease-in-out group-hover:bg-white group-hover:text-black">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </a>
  );
}
