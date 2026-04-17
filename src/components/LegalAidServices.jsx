function LegalAidServices() {
  const services = [
    {
      title: "Free Legal Consultation",
      description: "Expert legal advice for marginalized communities on civil, criminal, and constitutional matters at no cost.",
      icon: "support_agent",
      color: "#b51a1b"
    },
    {
      title: "Document Drafting",
      description: "Assistance in drafting petitions, agreements, affidavits, and legal notices for those who cannot afford lawyers.",
      icon: "description",
      color: "#b51a1b"
    },
    {
      title: "Human Rights Protection",
      description: "Legal intervention in cases of rights violations, police harassment, and discrimination against vulnerable groups.",
      icon: "shield",
      color: "#b51a1b"
    },
    {
      title: "Women & Child Rights",
      description: "Specialized legal support for domestic violence, dowry cases, child abuse, and family disputes.",
      icon: "family_restroom",
      color: "#b51a1b"
    },
    {
      title: "Labor & Employment",
      description: "Fighting for worker rights, wage disputes, unfair termination, and workplace harassment cases.",
      icon: "work",
      color: "#b51a1b"
    },
    {
      title: "Property & Land Rights",
      description: "Legal assistance for land disputes, illegal eviction, property inheritance, and tenancy issues.",
      icon: "real_estate_agent",
      color: "#b51a1b"
    }
  ]

  const quickServices = [
    { name: "Legal Notice", icon: "campaign" },
    { name: "Rent Agreement", icon: "home" },
    { name: "Affidavit", icon: "assignment" },
    { name: "Consumer Complaint", icon: "shopping_cart" },
    { name: "Marriage Registration", icon: "favorite" },
    { name: "RTI Filing", icon: "info" },
    { name: "Motor Claim", icon: "directions_car" },
    { name: "Divorce Petition", icon: "balance" }
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-[#b51a1b]"></div>
              <div>
                <span className="font-label text-[#735c00] font-bold uppercase tracking-[0.15em] text-xs block mb-1">Legal Aid</span>
                <h2 className="font-headline text-3xl lg:text-4xl font-bold text-[#00113a]">Justice for <span className="text-[#b51a1b]">All, Not Just the Privileged</span></h2>
              </div>
            </div>
          </div>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-[#f5f5f7] p-6 border border-[#e2e2e4] hover:border-[#b51a1b]/30 hover:shadow-sm transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-[#00113a] flex items-center justify-center shrink-0 group-hover:bg-[#b51a1b] transition-colors">
                  <span className="material-symbols-outlined text-[#e9c349] text-3xl">{service.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold text-[#00113a] mb-2">{service.title}</h3>
                  <p className="text-[#444650] leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Services Row */}
        <div className="bg-[#b51a1b] rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="font-headline text-2xl font-bold text-white mb-2">Quick Legal Assistance</h3>
            <p className="text-white/80">Fast-track legal documents and services for urgent needs</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickServices.map((item, index) => (
              <button key={index} className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-xl p-4 flex items-center gap-3 transition-all">
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="font-semibold text-sm">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Trust Banner */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm">
            <div className="w-14 h-14 bg-[#00113a] rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-[#e9c349] text-2xl">verified</span>
            </div>
            <div>
              <div className="font-bold text-[#00113a]">100% Free</div>
              <div className="text-sm text-[#444650]">No hidden charges</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm">
            <div className="w-14 h-14 bg-[#00113a] rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-[#e9c349] text-2xl">schedule</span>
            </div>
            <div>
              <div className="font-bold text-[#00113a]">24/7 Support</div>
              <div className="text-sm text-[#444650]">Emergency legal help</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm">
            <div className="w-14 h-14 bg-[#00113a] rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-[#e9c349] text-2xl">gavel</span>
            </div>
            <div>
              <div className="font-bold text-[#00113a]">Expert Lawyers</div>
              <div className="text-sm text-[#444650]">Experienced professionals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LegalAidServices
