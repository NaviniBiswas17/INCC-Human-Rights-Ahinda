const stats = [
  { number: "5000+", label: "Lives Impacted" },
  { number: "120+", label: "Active Programs" },
  { number: "300+", label: "Volunteers" },
  { number: "15+", label: "States Covered" }
]

function Impact() {
  return (
    <section id="impact" className="bg-[#00113a] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#e9c349]/30 mb-6">
            <span className="w-1.5 h-1.5 bg-[#b51a1b] rounded-full"></span>
            <span className="font-label text-[#e9c349] text-xs font-bold uppercase tracking-[0.2em]">Our Impact</span>
          </span>
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-white mb-4">Making a Difference</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Measurable outcomes from our continuous efforts in protecting human rights and empowering communities across India.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-6 text-center">
              <div className="text-4xl lg:text-5xl font-headline font-black text-white mb-2">{stat.number}</div>
              <div className="text-[#e9c349] font-bold text-sm uppercase tracking-wider mb-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto pt-12 border-t border-white/10 text-center">
          <span className="material-symbols-outlined text-[#e9c349]/50 text-4xl mb-4">format_quote</span>
          <p className="text-white/80 text-xl font-body italic leading-relaxed">
            "Justice is not a privilege, it is a fundamental right for every citizen. Our mission is to ensure that right reaches every corner of society."
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="w-8 h-px bg-[#b51a1b]"></div>
            <span className="text-white/50 text-sm uppercase tracking-wider">INCC Federation</span>
            <div className="w-8 h-px bg-[#b51a1b]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact
