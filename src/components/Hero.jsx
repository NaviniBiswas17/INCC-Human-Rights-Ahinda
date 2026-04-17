import LogoWatermark from './LogoWatermark'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Hero background"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOndQ_fOi_YiqBJFA-CH0HziKy8tcsK-Ylnu_to4I53JGyetOvpMx6ud7aKV4DZLJmKGVuoV083Rd6HZVNZQ6Tx4hNZ6Qy7BNUsyiWJ6oLD95oVUSloa7GDzurpd3iZjrr5tEIWMcaAvR-zTkhY0F1-Hw8VAvl5r0PccSDaPfDtNUC0cN9sGftXyy3fRZ1I9ymhk540mV0khDhJESaA6Oma5m44dfLePqJ6qJG0s8eHHt0V7_I0GHxd34r1ttSmhUqHMcr5fObMqc"
        />
        <div className="absolute inset-0 bg-[#00113a]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#00113a] via-[#00113a]/70 to-transparent"></div>
      </div>

      {/* Watermark Logo */}
      <LogoWatermark />

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-12 py-32 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#e9c349]/30 px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#b51a1b] rounded-full animate-pulse"></span>
            <span className="font-label text-[#e9c349] text-xs font-bold uppercase tracking-[0.2em]">Section 8 NGO • Government Authorized</span>
          </div>

          {/* Headline */}
          <h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6">
            Empowering Communities,
            <span className="text-[#e9c349]"> Protecting Rights</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-body border-l-4 border-[#b51a1b] pl-6">
            INCC Human Rights Ahinda Federation works to protect human rights and promote social justice through institutional advocacy and grassroots engagement across India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#b51a1b] hover:bg-[#9a1617] text-white px-8 py-4 font-bold text-base uppercase tracking-wider flex items-center justify-center gap-3 border-b-4 border-[#93000b] transition-all">
              Support Our Cause
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 font-bold text-base uppercase tracking-wider flex items-center justify-center transition-all">
              View Our Programs
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10">
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
    </section>
  )
}

export default Hero
