function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-[#b51a1b]"></div>
              <div>
                <span className="font-label text-[#735c00] font-bold uppercase tracking-[0.15em] text-xs block mb-1">Contact</span>
                <h2 className="font-headline text-3xl lg:text-4xl font-bold text-[#00113a]">Get in Touch</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-[#444650] text-lg leading-relaxed mb-8">
              Have questions about our programs or want to partner with us? Reach out to our headquarters.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-[#f5f5f7] border-l-4 border-[#00113a]">
                <div className="w-10 h-10 bg-[#00113a] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#e9c349]">location_on</span>
                </div>
                <div>
                  <div className="font-bold text-[#00113a] uppercase text-sm tracking-wide">Headquarters</div>
                  <div className="text-[#444650] mt-1">124 Sovereign Building, New Delhi - 110001, India</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#f5f5f7] border-l-4 border-[#b51a1b]">
                <div className="w-10 h-10 bg-[#b51a1b] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white">mail</span>
                </div>
                <div>
                  <div className="font-bold text-[#00113a] uppercase text-sm tracking-wide">Email</div>
                  <div className="text-[#444650] mt-1">contact@incc-federation.org</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#f5f5f7] border-l-4 border-[#e9c349]">
                <div className="w-10 h-10 bg-[#735c00] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white">phone</span>
                </div>
                <div>
                  <div className="font-bold text-[#00113a] uppercase text-sm tracking-wide">Phone</div>
                  <div className="text-[#444650] mt-1">+91 11 2345 6789</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#f5f5f7] p-8 border border-[#e2e2e4]">
            <h3 className="font-headline text-xl font-bold text-[#00113a] mb-6 pb-4 border-b-2 border-[#b51a1b]">Send a Message</h3>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#757682] mb-2">Full Name</label>
                  <input className="w-full bg-white border border-[#c5c6d2] px-4 py-3 focus:border-[#b51a1b] focus:outline-none transition-colors" placeholder="Your name" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#757682] mb-2">Email Address</label>
                  <input className="w-full bg-white border border-[#c5c6d2] px-4 py-3 focus:border-[#b51a1b] focus:outline-none transition-colors" placeholder="Your email" type="email" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#757682] mb-2">Subject</label>
                <input className="w-full bg-white border border-[#c5c6d2] px-4 py-3 focus:border-[#b51a1b] focus:outline-none transition-colors" placeholder="Message subject" type="text" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#757682] mb-2">Message</label>
                <textarea className="w-full bg-white border border-[#c5c6d2] px-4 py-3 focus:border-[#b51a1b] focus:outline-none transition-colors" placeholder="Your message" rows="4"></textarea>
              </div>
              <button className="w-full bg-[#b51a1b] hover:bg-[#9a1617] text-white font-bold py-4 uppercase tracking-wider border-b-4 border-[#93000b] transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
