function CounterBar() {
  const stats = [
    { number: "5000+", label: "Lives Impacted" },
    { number: "120+", label: "Programs" },
    { number: "300+", label: "Volunteers" }
  ]

  return (
    <div className="bg-white border-y border-[#e2e2e4] relative z-20">
      <div className="max-w-7xl mx-auto py-6 px-6">
        <div className="grid grid-cols-3 divide-x divide-[#e2e2e4]">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-4">
              <div className="text-2xl md:text-3xl font-headline font-black text-[#00113a]">{stat.number}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#b51a1b] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CounterBar
