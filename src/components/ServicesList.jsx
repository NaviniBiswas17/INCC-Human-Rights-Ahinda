function ServicesList() {
  const services = [
    { name: "Fundamental Rights", icon: "shield" },
    { name: "Social Justice", icon: "balance" },
    { name: "Consumer Rights", icon: "shopping_cart" },
    { name: "Crime Protection", icon: "local_police" },
    { name: "Child Rights", icon: "child_care" },
    { name: "Women Empowerment", icon: "woman" },
    { name: "Civil Rights", icon: "groups" },
    { name: "Legal Aid", icon: "gavel" }
  ]

  return (
    <section id="services" className="py-20 px-6 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-[#b51a1b]"></div>
              <div>
                <span className="font-label text-[#735c00] font-bold uppercase tracking-[0.15em] text-xs block mb-1">Our Work</span>
                <h2 className="font-headline text-3xl lg:text-4xl font-bold text-[#00113a]">Areas of Focus</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 border border-[#e2e2e4] hover:border-[#b51a1b]/30 hover:shadow-sm transition-all group text-center">
              <div className="w-14 h-14 bg-[#00113a] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#b51a1b] transition-colors">
                <span className="material-symbols-outlined text-[#e9c349] text-2xl">{service.icon}</span>
              </div>
              <h4 className="font-headline font-bold text-[#00113a] text-sm">{service.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesList
