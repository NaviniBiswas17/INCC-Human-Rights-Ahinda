function Footer() {
  return (
    <footer className="bg-[#00113a] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="2" fill="none"/>
                <path d="M24 8L24 40" stroke="white" strokeWidth="2"/>
                <path d="M8 24L40 24" stroke="white" strokeWidth="2"/>
                <circle cx="24" cy="24" r="8" fill="#b51a1b" stroke="white" strokeWidth="1.5"/>
              </svg>
              <div className="flex flex-col">
                <span className="font-headline font-extrabold text-white text-lg tracking-wide">INCC</span>
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-[#e9c349]">Human Rights</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              A Section 8 registered NGO dedicated to human rights protection and social justice across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-white mb-4 text-sm uppercase tracking-wider border-b border-[#e9c349]/30 pb-2">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a className="text-white/70 hover:text-[#e9c349] transition-colors" href="#about">About Us</a></li>
              <li><a className="text-white/70 hover:text-[#e9c349] transition-colors" href="#programs">Our Programs</a></li>
              <li><a className="text-white/70 hover:text-[#e9c349] transition-colors" href="#impact">Impact Report</a></li>
              <li><a className="text-white/70 hover:text-[#e9c349] transition-colors" href="#gallery">Gallery</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h5 className="font-bold text-white mb-4 text-sm uppercase tracking-wider border-b border-[#e9c349]/30 pb-2">Get Involved</h5>
            <ul className="space-y-2 text-sm">
              <li><a className="text-white/70 hover:text-[#e9c349] transition-colors" href="#">Donate</a></li>
              <li><a className="text-white/70 hover:text-[#e9c349] transition-colors" href="#">Volunteer</a></li>
              <li><a className="text-white/70 hover:text-[#e9c349] transition-colors" href="#">Partner With Us</a></li>
              <li><a className="text-white/70 hover:text-[#e9c349] transition-colors" href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-bold text-white mb-4 text-sm uppercase tracking-wider border-b border-[#e9c349]/30 pb-2">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li><a className="text-white/70 hover:text-[#e9c349] transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="text-white/70 hover:text-[#e9c349] transition-colors" href="#">Terms of Service</a></li>
              <li><a className="text-white/70 hover:text-[#e9c349] transition-colors" href="#">Section 8 Compliance</a></li>
              <li><a className="text-white/70 hover:text-[#e9c349] transition-colors" href="#">Transparency Report</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            © 2024 INCC Human Rights Ahinda Federation. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <span className="material-symbols-outlined text-[#e9c349] text-sm">verified</span>
            <span>Section 8 Registered NGO</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
