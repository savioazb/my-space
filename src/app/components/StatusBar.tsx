interface StatusBarProps{
  filled?: boolean
}

export default function StatusBar({filled}: StatusBarProps) {
  const style = 'w-2 h-14 rounded-lg'

  return <div className={`${style} ${filled ? 'bg-[#f4f37b]':'bg-gray-400'}`}></div>
}