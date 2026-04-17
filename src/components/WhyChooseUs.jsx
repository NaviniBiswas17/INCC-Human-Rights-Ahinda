function WhyChooseUs() {
  const features = [
    {
      icon: "gavel",
      title: "Proven Commitment to Justice",
      description: "We stand firm in defending the rights of the marginalized and voiceless, ensuring that fairness and dignity reach every corner of society."
    },
    {
      icon: "grass",
      title: "Grassroots Impact",
      description: "Our efforts begin at the community level, empowering people with education, awareness, and tools to protect their rights."
    },
    {
      icon: "diversity_3",
      title: "Inclusive Vision",
      description: "We work for everyone—regardless of caste, creed, gender, religion, or socioeconomic status."
    },
    {
      icon: "verified_user",
      title: "Experienced Team",
      description: "Our dedicated team of social workers, legal experts, and volunteers bring knowledge and courage to every initiative."
    }
  ]

  return (
    <section className="py-20 px-6 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-[#b51a1b]"></div>
              <div>
                <span className="font-label text-[#735c00] font-bold uppercase tracking-[0.15em] text-xs block mb-1">Why Choose Us</span>
                <h2 className="font-headline text-3xl lg:text-4xl font-bold text-[#00113a]">Committed to Justice</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-5 p-6 bg-white border border-[#e2e2e4]">
              <div className="w-16 h-16 bg-[#00113a] flex items-center justify-center shrink-0 group-hover:bg-[#b51a1b] transition-colors">
                <span className="material-symbols-outlined text-[#e9c349] text-2xl">{feature.icon}</span>
              </div>
              <div>
                <h3 className="font-headline text-xl font-bold text-[#00113a] mb-2">{feature.title}</h3>
                <p className="text-[#444650] leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
