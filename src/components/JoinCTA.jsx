function JoinCTA() {
  return (
    <section className="py-20 px-6 bg-[#00113a] relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 flex flex-wrap content-start justify-around gap-24 p-12">
          {Array.from({ length: 6 }).map((_, i) => (
            <svg key={i} className="w-32 h-32 text-white" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M24 8L24 40" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 24L40 24" stroke="currentColor" strokeWidth="2"/>
            </svg>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#e9c349]/30 px-4 py-2 mb-6">
          <span className="material-symbols-outlined text-[#e9c349] text-sm">campaign</span>
          <span className="text-[#e9c349] text-sm font-bold uppercase tracking-wider">Join the Movement</span>
        </div>

        {/* Headline */}
        <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Be the Voice for Change.<br />
          <span className="text-[#e9c349]">Join for Crime & Corruption Free India</span>
        </h2>

        {/* Description */}
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
          Together, we can build a nation where justice prevails, rights are protected, and every citizen lives with dignity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#b51a1b] hover:bg-[#9a1617] text-white px-8 py-4 font-bold text-base uppercase tracking-wider border-b-4 border-[#93000b] transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">person_add</span>
            Get Membership
          </button>
          <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 font-bold text-base uppercase tracking-wider hover:bg-white/20 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">favorite</span>
            Donate Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default JoinCTA
