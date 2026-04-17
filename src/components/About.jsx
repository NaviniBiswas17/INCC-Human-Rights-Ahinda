function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-12 bg-[#b51a1b]"></div>
            <div>
              <span className="font-label text-[#735c00] font-bold uppercase tracking-[0.15em] text-xs block mb-1">About Us</span>
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-[#00113a]">Who We Are</h2>
            </div>
          </div>
        </div>
        <p className="text-[#444650] text-lg max-w-xl leading-relaxed">
          A Section 8 registered NGO dedicated to human rights protection and social justice across India.
        </p>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Vision Card */}
        <div className="bg-white border-l-4 border-[#b51a1b] p-8 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-[#00113a] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#e9c349] text-2xl">visibility</span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#735c00]">Our Vision</span>
              <h3 className="text-2xl font-headline font-bold text-[#00113a] mt-1">A Just Society</h3>
            </div>
          </div>
          <p className="text-[#444650] leading-relaxed text-lg">
            A world where every individual lives with dignity, equality, and uninhibited access to their fundamental human rights, regardless of their background or circumstances.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white border-l-4 border-[#e9c349] p-8 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-[#00113a] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#e9c349] text-2xl">flag</span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#735c00]">Our Mission</span>
              <h3 className="text-2xl font-headline font-bold text-[#00113a] mt-1">Empowerment Through Action</h3>
            </div>
          </div>
          <p className="text-[#444650] leading-relaxed text-lg">
            To empower the marginalized through legal aid, education, and advocacy while maintaining institutional excellence as a Section 8 Company recognized by the Government of India.
          </p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-16 pt-12 border-t border-[#e2e2e4]">
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
          <div className="flex items-center gap-3 px-6 py-3 bg-[#f3f3f5] border border-[#e2e2e4]">
            <span className="material-symbols-outlined text-[#b51a1b]">verified_user</span>
            <span className="text-sm font-bold text-[#00113a] uppercase tracking-wide">Section 8 Certified</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-[#f3f3f5] border border-[#e2e2e4]">
            <span className="material-symbols-outlined text-[#b51a1b]">policy</span>
            <span className="text-sm font-bold text-[#00113a] uppercase tracking-wide">Government Authorized</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-[#f3f3f5] border border-[#e2e2e4]">
            <span className="material-symbols-outlined text-[#b51a1b]">gavel</span>
            <span className="text-sm font-bold text-[#00113a] uppercase tracking-wide">Legal Aid Provider</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-[#f3f3f5] border border-[#e2e2e4]">
            <span className="material-symbols-outlined text-[#b51a1b]">workspace_premium</span>
            <span className="text-sm font-bold text-[#00113a] uppercase tracking-wide">12+ Years Service</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
