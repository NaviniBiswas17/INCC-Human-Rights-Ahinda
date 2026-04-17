function CounterBar() {
  const stats = [
    { number: "5000+", label: "Lives Impacted" },
    { number: "120+", label: "Programs" },
    { number: "300+", label: "Volunteers" }
  ]

  return (
    <div className="bg-[#f5f5f7] py-8 border-y border-[#e2e2e4] relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:gap-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-headline font-extrabold text-[#00113a] mb-1">{stat.number}</div>
              <div className="text-xs uppercase tracking-widest text-[#735c00] font-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CounterBar
