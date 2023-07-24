export default function CardVideo() {
  return(
    <div className="transition ease-in-out duration-500 w-[355px] bg-white hover:-translate-y-1">
      <video className="rounded-3xl" src={"/video.mp4"} autoPlay loop muted></video>
    </div>
  )
}