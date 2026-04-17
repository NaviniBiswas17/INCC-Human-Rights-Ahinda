import HeroImage from '../assets/HeroImage.png'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Full Image No Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Hero background"
          className="w-full h-full object-cover"
          src={HeroImage}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-12 py-32 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-[#e9c349]/50 px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#b51a1b] rounded-full animate-pulse"></span>
            <span className="font-label text-[#e9c349] text-xs font-bold uppercase tracking-[0.2em]">Section 8 NGO • Government Authorized</span>
          </div>

          {/* Headline */}
          <h1 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Empowering Communities,
            <span className="text-[#e9c349] block mt-2">Protecting Rights</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-body border-l-4 border-[#b51a1b] pl-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-black/30 p-4 rounded-r-lg">
            INCC Human Rights Ahinda Federation works to protect human rights and promote social justice through institutional advocacy and grassroots engagement across India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            <button className="bg-[#b51a1b] hover:bg-[#9a1617] text-white px-8 py-4 font-bold text-base uppercase tracking-wider flex items-center justify-center gap-3 border-b-4 border-[#93000b] transition-all">
              Support Our Cause
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 font-bold text-base uppercase tracking-wider flex items-center justify-center transition-all">
              View Our Programs
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-12 pt-8 border-t border-white/20 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-2 text-white/70">
              <span className="material-symbols-outlined text-[#e9c349]">verified</span>
              <span className="text-sm font-medium">12+ Years</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <span className="material-symbols-outlined text-[#e9c349]">groups</span>
              <span className="text-sm font-medium">5000+ Beneficiaries</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <span className="material-symbols-outlined text-[#e9c349]">gavel</span>
              <span className="text-sm font-medium">Legal Aid Provider</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
