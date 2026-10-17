"use client";
import FadeIn from "@/components/FadeIn";

export default function FasilitasPage() {
  // Nama file disesuaikan persis dengan dokumen brief
  const fasilitas = [
    { nama: "Gedung Sekolah", gambar: "/images/sekolah.png" },
    { nama: "Musholla", gambar: "/images/Musholla.png" },
    { nama: "Ruang Pembelajaran", gambar: "/images/Pembelajarn.png" },
    { nama: "Asrama Santri", gambar: "/images/Asrama.png" },
    { nama: "Kegiatan Santri", gambar: "/images/Kegiatan santri.png" },
    { nama: "Acara & Wisuda", gambar: "/images/Acara.png" },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <FadeIn>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center border-b-4 border-pesantren inline-block pb-2 flex justify-center mx-auto">
          Fasilitas & Galeri
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Pondok Pesantren Al Kautsar menyediakan lingkungan yang nyaman, asri, dan fasilitas yang memadai untuk menunjang kegiatan ibadah serta belajar mengajar.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {fasilitas.map((item, index) => (
          <FadeIn key={index} delay={index * 0.1} direction="up">
            <div className="group rounded-2xl overflow-hidden shadow-sm bg-white border border-gray-100 hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] relative overflow-hidden bg-pesantren-light">
                {/* Fallback teks jika gambar belum dimasukkan */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-pesantren-dark text-sm p-4 text-center">
                  <svg className="w-8 h-8 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span>File dibutuhkan: <br/><b className="font-mono">{item.gambar}</b></span>
                </div>
                <img 
                  src={item.gambar} 
                  alt={item.nama} 
                  className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => (e.currentTarget.style.opacity = '0')}
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-gray-800 text-lg">{item.nama}</h3>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}