import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* 1. Navbar Utama Website (Hanya 1 buah) */}
      <Navbar />

      {/* 2. FOTO UTAMA / HERO BANNER */}
      <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden shadow-lg bg-[#134225]">
        <img 
          src="/images/sekolah.png" 
          alt="Foto Utama Pondok Pesantren Al Kautsar" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 text-white">
          <span className="px-4 py-1.5 mb-3 text-xs md:text-sm font-semibold tracking-widest uppercase bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-md">
            Yayasan Pendidikan Islam Al Kautsar
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-lg tracking-wide">
            Pondok Pesantren Al Kautsar
          </h1>
          <p className="text-sm md:text-lg text-gray-200 max-w-2xl drop-shadow-md leading-relaxed">
            Membangun generasi Qurani yang berakhlak mulia, cerdas, berwawasan luas, dan mandiri di Satui, Tanah Bumbu.
          </p>
        </div>
      </section>

      {/* 3. TOMBOL PINTASAN (SHORTCUTS) */}
      <section className="py-8 px-4 max-w-5xl mx-auto -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="/profil" className="bg-white hover:bg-[#134225] hover:text-white text-[#134225] font-semibold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 text-center border border-gray-100 group">
            <div className="text-xl mb-1">🏛️</div>
            <span>Profil Ponpes</span>
          </a>
          <a href="/pendidikan" className="bg-white hover:bg-[#134225] hover:text-white text-[#134225] font-semibold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 text-center border border-gray-100 group">
            <div className="text-xl mb-1">📚</div>
            <span>Pendidikan</span>
          </a>
          <a href="/fasilitas" className="bg-white hover:bg-[#134225] hover:text-white text-[#134225] font-semibold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 text-center border border-gray-100 group">
            <div className="text-xl mb-1">🏫</div>
            <span>Fasilitas</span>
          </a>
          <a href="/psb" className="bg-[#134225] hover:bg-[#0d2d18] text-white font-semibold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 text-center group">
            <div className="text-xl mb-1">📝</div>
            <span>Daftar PSB</span>
          </a>
        </div>
      </section>

      {/* 4. BAGIAN SAMBUTAN */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#134225] mb-4">
          Selamat Datang di Portal Resmi Ponpes Al Kautsar
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          Pondok Pesantren Al Kautsar terus berkomitmen memberikan pendidikan Islam terbaik, memadukan ilmu keagamaan, pembentukan karakter spiritual, serta pendidikan formal demi masa depan santri yang gemilang.
        </p>
        <div className="w-24 h-1 bg-[#134225] mx-auto mt-6 rounded-full"></div>
      </section>

      {/* 5. BAGIAN PROFIL PIMPINAN & PENDIRI (FULL FRAME) */}
      <section className="pb-16 px-4 max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-[#134225] mb-10">
          Pendiri & Pengasuh
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* KARTU 1: Al Habib H Sholeh Al Iderus */}
          <div className="relative w-full h-[500px] overflow-hidden rounded-3xl shadow-xl bg-[#134225]">
            <img 
              src="/images/habib-sholeh.png" 
              alt="Al Habib H Sholeh Al Iderus" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
              <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-md rounded-full">
                PENDIRI PONDOK PESANTREN
              </span>
              <h4 className="text-2xl font-bold leading-tight mb-2">
                Al Habib H Sholeh Al Iderus
              </h4>
              <p className="text-sm text-gray-200 leading-relaxed">
                Perintis dan perancang awal berdirinya Pondok Pesantren Al Kautsar sejak tahun 2002, meletakkan fondasi dakwah dan pendidikan Islam di Tanah Bumbu.
              </p>
            </div>
          </div>

          {/* KARTU 2: Al Habib H Husein Faishal Iderus */}
          <div className="relative w-full h-[500px] overflow-hidden rounded-3xl shadow-xl bg-[#134225]">
            <img 
              src="/images/habib-husein.png" 
              alt="Al Habib H Husein Faishal Iderus" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
              <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-md rounded-full">
                PENGASUH & PIMPINAN
              </span>
              <h4 className="text-2xl font-bold leading-tight mb-2">
                Al Habib H Husein Faishal Iderus
              </h4>
              <p className="text-sm text-gray-200 leading-relaxed">
                Melanjutkan estafet kepemimpinan serta membimbing perkembangan spiritual, moral, dan pendidikan para santri dengan penuh dedikasi.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. GALERI FOTO TAMBAHAN PENDUKUNG (foto1, foto2, foto3) */}
      <section className="py-16 px-4 max-w-5xl mx-auto bg-gray-100 rounded-3xl mb-16 shadow-inner">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-[#134225] mb-4">
          Galeri & Suasana Ponpes
        </h3>
        <p className="text-center text-gray-600 mb-10 text-sm md:text-base">
          Momen kebersamaan, kegiatan belajar, serta lingkungan asri di Pondok Pesantren Al Kautsar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-2xl shadow-md h-64 bg-white relative group">
            <img src="/images/foto1.png" alt="Galeri Ponpes 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md h-64 bg-white relative group">
            <img src="/images/foto2.png" alt="Galeri Ponpes 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md h-64 bg-white relative group">
            <img src="/images/foto3.png" alt="Galeri Ponpes 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Footer Website (Hanya 1 buah) */}
      <footer className="bg-[#134225] text-white py-6 text-center text-sm">
        <p>&copy; 2026 Pondok Pesantren Al Kautsar. Semua Hak Cipta Dilindungi.</p>
      </footer>
    </main>
  );
}