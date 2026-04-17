import { useState, useEffect } from 'react'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <nav className="flex items-center justify-between px-6 lg:px-12 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            {/* Logo SVG */}
            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M24 8L24 40" stroke="white" strokeWidth="2"/>
              <path d="M8 24L40 24" stroke="white" strokeWidth="2"/>
              <circle cx="24" cy="24" r="8" fill="#b51a1b" stroke="white" strokeWidth="1.5"/>
              <path d="M12 12L20 20" stroke="white" strokeWidth="1.5"/>
              <path d="M36 12L28 20" stroke="white" strokeWidth="1.5"/>
              <path d="M12 36L20 28" stroke="white" strokeWidth="1.5"/>
              <path d="M36 36L28 28" stroke="white" strokeWidth="1.5"/>
            </svg>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#e9c349] rounded-full border-2 border-white"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-extrabold text-white text-xl tracking-wide">INCC</span>
            <span className="font-label text-[11px] uppercase tracking-[0.25em] text-[#e9c349] font-medium">Human Rights Ahinda</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#about" className="text-white/90 hover:text-[#e9c349] text-sm font-medium uppercase tracking-wide transition-colors">About</a>
          <a href="#programs" className="text-white/90 hover:text-[#e9c349] text-sm font-medium uppercase tracking-wide transition-colors">Programs</a>
          <a href="#impact" className="text-white/90 hover:text-[#e9c349] text-sm font-medium uppercase tracking-wide transition-colors">Impact</a>
          <a href="#gallery" className="text-white/90 hover:text-[#e9c349] text-sm font-medium uppercase tracking-wide transition-colors">Gallery</a>
          <a href="#contact" className="text-white/90 hover:text-[#e9c349] text-sm font-medium uppercase tracking-wide transition-colors">Contact</a>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex bg-[#b51a1b] hover:bg-[#9a1617] text-white px-5 py-2.5 text-sm font-bold uppercase tracking-wider items-center gap-2 border-b-2 border-[#93000b] transition-all">
            Donate Now
          </button>
          <button className="lg:hidden text-white p-2">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
