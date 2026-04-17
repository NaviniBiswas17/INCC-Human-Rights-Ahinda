const programs = [
  {
    icon: "campaign",
    title: "Human Rights Awareness",
    description: "Educating citizens about their constitutional rights and legal safeguards through nationwide workshops.",
    stat: "50+ Workshops"
  },
  {
    icon: "female",
    title: "Women Empowerment",
    description: "Skill development and safety training for women from underprivileged backgrounds.",
    stat: "2000+ Women"
  },
  {
    icon: "gavel",
    title: "Legal Aid Services",
    description: "Providing free legal representation for victims of discrimination and rights violations.",
    stat: "500+ Cases"
  },
  {
    icon: "groups",
    title: "Youth Development",
    description: "Leadership camps, civic education, and mentorship programs for young individuals.",
    stat: "1500+ Youth"
  },
  {
    icon: "diversity_1",
    title: "Community Welfare",
    description: "Direct community support through health camps and crisis relief operations.",
    stat: "100+ Villages"
  },
  {
    icon: "school",
    title: "Inclusive Education",
    description: "Ensuring quality primary education for children in remote areas.",
    stat: "800+ Children"
  }
]

function Programs() {
  return (
    <section id="programs" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-[#b51a1b]"></div>
              <div>
                <span className="font-label text-[#735c00] font-bold uppercase tracking-[0.15em] text-xs block mb-1">Our Work</span>
                <h2 className="font-headline text-3xl lg:text-4xl font-bold text-[#00113a]">Core Programs</h2>
              </div>
            </div>
          </div>
          <a className="text-[#b51a1b] font-bold flex items-center gap-2 hover:gap-3 transition-all uppercase text-sm tracking-wide" href="#">
            View All Initiatives
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div key={index} className="bg-[#f5f5f7] p-6 border border-[#e2e2e4] hover:border-[#b51a1b]/30 hover:shadow-sm transition-all group">
              {/* Icon */}
              <div className="w-12 h-12 bg-[#00113a] flex items-center justify-center mb-5 group-hover:bg-[#b51a1b] transition-colors">
                <span className="material-symbols-outlined text-[#e9c349] text-xl">{program.icon}</span>
              </div>

              {/* Content */}
              <h4 className="font-headline text-xl font-bold text-[#00113a] mb-3">{program.title}</h4>
              <p className="text-[#444650] text-sm leading-relaxed mb-4">{program.description}</p>

              {/* Stat Badge */}
              <div className="flex items-center justify-between pt-4 border-t border-[#e2e2e4]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#735c00]">{program.stat}</span>
                <span className="material-symbols-outlined text-[#b51a1b] text-sm">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
