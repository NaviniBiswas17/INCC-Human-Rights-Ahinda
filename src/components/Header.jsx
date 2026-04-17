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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#00113a]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <nav className="flex items-center justify-between px-6 lg:px-12 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M24 8L24 40" stroke="white" strokeWidth="2"/>
              <path d="M8 24L40 24" stroke="white" strokeWidth="2"/>
              <circle cx="24" cy="24" r="8" fill="#b51a1b" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-extrabold text-white text-xl tracking-wide">INCC</span>
            <span className="font-label text-[10px] uppercase tracking-[0.25em] text-[#e9c349] font-medium">Human Rights Ahinda</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {['About', 'Services', 'Programs', 'Impact', 'Gallery', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium uppercase tracking-wide text-white/90 hover:text-[#e9c349] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <button className="lg:hidden text-white p-2">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
