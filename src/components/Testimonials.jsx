const testimonials = [
  {
    quote: "INCC provided the legal strength I needed to fight for my community's land rights. Their dedication is truly sovereign.",
    name: "Advocate S. Kumar",
    role: "Legal Beneficiary",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIdCDb-m5EitH2qlzx1f5aykYkbi-URsJwifQo4XnZf-SE9ldWvfxYoPQo02z9RV3n6uiRqy670ihN65PGmMwTxbDQJKlw-iAcRtuFKN4wJVvOaoIhC5R1RWM9lzUoynPcEYrNzHhQgpELW_lUw2SDD8Fh_ab2PZqAkiRqyKx5OMg-W3xoSKgihBH4mQ76RyqX0MwG7CPraRlIlvmRbInVvsW99GJazlHnlQ8nUgk1-uuErnwbkGmNo7Q_fr_oAxQKban2jF-8xTY"
  },
  {
    quote: "Volunteering with the Ahinda Federation opened my eyes to the real systemic challenges. They are making a tangible impact daily.",
    name: "Priya Sharma",
    role: "Human Rights Volunteer",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAd3ArYGmoF03KGtIzHafYc1bTmYDLi03dhgGMaxVRjjGy-zLq1eAyTm9gSIA04NQ0RoUWbYItvzZTehtbfTc81tF475AWTHFS5-_rMTM9Y6eIW-v0Yu3DJwQnumxzIthut6iLDxL7xqWvZ1RS24zDVqPZ__g32BxX6ZnsEmDHj0TzFU-8kAx6Tfbc992aZwGDwet1x-ebjArBWOjSCS847musw168fMpBOU7MJsYsQBzqxPWVjR7I9eh8BzfA4WzJFeRAkoAWa22Q"
  }
]

function Testimonials() {
  return (
    <section className="bg-[#f5f5f7] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-[#b51a1b]"></div>
              <div>
                <span className="font-label text-[#735c00] font-bold uppercase tracking-[0.15em] text-xs block mb-1">Testimonials</span>
                <h2 className="font-headline text-3xl lg:text-4xl font-bold text-[#00113a]">Voices of Impact</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 border border-[#e2e2e4] relative flex-1">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#b51a1b]"></div>
              <span className="material-symbols-outlined text-[#b51a1b]/30 text-5xl mb-4">format_quote</span>
              <p className="text-[#444650] leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-[#e2e2e4]">
                <img alt={testimonial.name} src={testimonial.image} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-[#00113a]">{testimonial.name}</div>
                  <div className="text-xs text-[#735c00] font-bold uppercase tracking-wider">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
