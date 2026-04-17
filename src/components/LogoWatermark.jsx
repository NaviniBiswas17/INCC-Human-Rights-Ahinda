function LogoWatermark() {
  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none opacity-[0.03]">
      {/* Repeating logo pattern */}
      <div className="absolute inset-0 flex flex-wrap content-start justify-around gap-24 p-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <svg
            key={i}
            className="w-32 h-32 text-white"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M24 8L24 40" stroke="currentColor" strokeWidth="2"/>
            <path d="M8 24L40 24" stroke="currentColor" strokeWidth="2"/>
            <circle cx="24" cy="24" r="8" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 12L20 20" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M36 12L28 20" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 36L20 28" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M36 36L28 28" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        ))}
      </div>
    </div>
  )
}

export default LogoWatermark
