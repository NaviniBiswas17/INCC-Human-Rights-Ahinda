const galleryImages = [
  { src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&auto=format&fit=crop&q=60", title: "Community Workshop", location: "Rural Bihar" },
  { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=60", title: "Women's Self-Help Group", location: "Uttar Pradesh" },
  { src: "https://images.unsplash.com/photo-1542810634-71277d43dc?w=600&auto=format&fit=crop&q=60", title: "Legal Aid Camp", location: "Delhi" },
  { src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&auto=format&fit=crop&q=60", title: "Youth Leadership Camp", location: "Rajasthan" },
  { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=60", title: "Health Camp", location: "Madhya Pradesh" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=60", title: "Education Program", location: "Haryana" }
]

function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-[#b51a1b]"></div>
              <div>
                <span className="font-label text-[#735c00] font-bold uppercase tracking-[0.15em] text-xs block mb-1">Gallery</span>
                <h2 className="font-headline text-3xl lg:text-4xl font-bold text-[#00113a]">Our Work in Action</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden border border-[#e2e2e4]">
              <img src={img.src} alt={img.title} className="w-full h-64 object-cover transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#00113a]/0 group-hover:bg-[#00113a]/60 transition-colors flex items-end">
                <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <span className="text-[#e9c349] text-xs font-bold uppercase tracking-wider">{img.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
