const galleryImages = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdAOQhV_7c6TWnlASTLl0X83XDKROJJZS5iTCnaagBbhmeRCOzSdu1awK59TSiITPk6J1jsHy2Jd5vDxsUMqbmvgdIUjsdXpCwuK5i3CtugNN3e0R1KMHb2S6VUe2VUT_VeF82kJ-cNbAgYHy9SqyKVnGVljXMeDSc2_FpTK-mLWaacsXrevX3enQXrji4jVo-U5hGchCEOeennmo28nYcL2fW2Rx8xL5OpChwHmgYrZ7PnryspYrwhy6eTw84iGUKP5WppHLS3MU", alt: "Community volunteers planting trees", category: "Environment" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHF71KaLa9WOQwPWn7Rul3tuKXODeZmu0R_rPsT0LN0bhcI-9E_bg__vST00Eiq0OPVV02pntci2G5AuGdAi-YhGbYvCRWxmWsTLacmKtbouHB1V2mbewRW3xMuRr8UaL4rs_0-t5mpQTJjvW9hkoVSZH57hy5FiXiiDf41I2FN8el7XaZkGrWFjET1-CU2xNzf-F0wfbMYQfrfdGMdV-drNhiQPWmWtxle56RNV5-cSNHhKSVO6xUQH5kNPSj7Rn189caEBlivl8", alt: "Hands symbolising unity", category: "Unity" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDWTjkj0L7hIJYCAsggn8gjwgfYAnNAhZxwHkq5R8FR5SD2g9iD8yKAYmCi-YSl9zIiqFXF7zLC7kvjQ45rrGCl9OemkHYzvr20C8C-Jx2ksZojjhV6yM3iTE5DoUtjUuyHxwQ7lJwprEAakskdhvUsxiaWThtfou--Z3Bc7Ns1Z5Pw9coNZic0Uax2hIo2XA6ijLRD4kN68c7oN7qRayFKcDPJqFIxlEbqTjeJvffcqUXLY3bvHn4qTYJlwbdOZqvHAUfuRqdkTQ", alt: "Human rights seminar", category: "Education" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtKi9WX-AXqzuQ69_lWJz50xDsOOoLZfzgtr2XNgEeh2q6sm9_3vmHu8xF9vtyC3WHvGjCPcXfTy00geqt0YcX4FQV1Ke4UrMbE9K0_Vrb8C_JusSj24yluxhY1XjG4lni_GVCXrFD-clJs8tewowCON5bZtNl72KNgHpqePadDMQBPtajEjKaQ1vRrn22so6qqmPtrjT5wdjS8jvYUlucDNU8_bE_hxEDGQLuOTlW9I1cGfVdhJmcBfZWOLzZM-Wyacy8Birw2Sw", alt: "Legal professionals", category: "Legal Aid" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9LsX-_C6KZobuCDmGdfEemmbyVG3fuetEdvQ77yCH5WW2pgj_uPYsPR4yrMKB1HbgmRcJV_FVM1KC1yT5yy8z5DqsqIr_NM9G7QBH14Soj1ejJ0xnl6YSeml-VXp9OIApsjiTcllJ2loChQI5Y-Msk4KvHIii_XFwqwNSE6I1kngk36TIfUI2vjxzOx1iNGua5uHwYZ8g06szkh8T9heT9HTeKVZbdE_ak9qosqfGnyay7HyUKuNIXsoWSds9A32n0pr-KriZGc8", alt: "Children learning", category: "Education" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA30bQe-bZUSOQBntE02e1Ebd2I8hfeHSnNzC_h6pVieuBAZZ-yonBoT49cUL7mbpDNCCaPjmoMImv4KbJgVc2hP4dF1mx2y4eq782Y7uKlD2rukiKr_6wh1DMDmVEnKLhYdgv83ealI_AM-pE4o3dxgArW7yuceADCJnSH98wCElMMokwp-uViMYApSdBmZ9SqjVR941H_mbxg37tGNbrVdahG8MtAnBF75IYHP6GuiU838NyWymJzxhEU_lqLRBqADf0h-_2f1Hg", alt: "Humanitarian aid", category: "Relief" }
]

function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 max-w-7xl mx-auto">
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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="relative group overflow-hidden border border-[#e2e2e4]">
            <img src={img.src} alt={img.alt} className="w-full h-64 object-cover transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-[#00113a]/0 group-hover:bg-[#00113a]/60 transition-colors flex items-end">
              <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <span className="text-[#e9c349] text-xs font-bold uppercase tracking-wider">{img.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
