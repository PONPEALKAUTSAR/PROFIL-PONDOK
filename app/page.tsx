// app/profil/page.tsx
"use client";
import FadeIn from "@/components/FadeIn";

export default function ProfilPage() {
  const pimpinan = [
    { 
      nama: "Al Habib H Sholeh Al Iderus", 
      jabatan: "Pendiri Pondok Pesantren", 
      foto: "/images/habib-sholeh.png",
      deskripsi: "Perintis dan perancang awal berdirinya Pondok Pesantren Al Kautsar sejak tahun 2002."
    },
    { 
      nama: "Al Habib H Husein Faishal Iderus", 
      jabatan: "Pengasuh & Pimpinan", 
      foto: "/images/habib-husein.png",
      deskripsi: "Melanjutkan estafet kepemimpinan serta membimbing perkembangan spiritual dan pendidikan santri."
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      <FadeIn>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center border-b-4 border-pesantren inline-block pb-2 mx-auto flex justify-center">
          Profil & Sejarah
        </h1>
      </FadeIn>
      
      {/* Sejarah, Visi, Misi */}
      <div className="prose prose-lg text-gray-700 max-w-none mb-24">
        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-bold text-pesantren mt-8 mb-4">Sejarah Pendirian</h2>
          <p className="mb-4 text-justify leading-relaxed">
            Berdirinya pondok pesantren Al Kautsar diawali pada tanggal 10 Muharram 1419 H (1998 M). Al-Habib H Sholeh mengundang seluruh murid beliau untuk memperingati haul Datuk Husein. Pada momen ini disepakati pembangunan masjid yang peletakan batu pertamanya dilaksanakan pada 12 Rabiul Awal 1419 H.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            Setelah masjid berdiri, penduduk hijrah ke komplek Al Kautsar. Al Habib Sholeh bersama dua muridnya, M. Ridwan Sholeh dan K.H Hasan Effendi mendirikan Pondok Pesantren pada tahun 2002 M dalam bentuk Salafiyah. Seiring pemekaran Kabupaten Tanah Bumbu, pesantren berkembang menjadi penyelenggara Wajar Formal (MI, MTs, dan MA).
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <FadeIn delay={0.4}>
            <div className="bg-pesantren-light p-8 rounded-2xl h-full border-t-4 border-pesantren shadow-sm">
              <h2 className="text-2xl font-bold text-pesantren mb-4">Visi</h2>
              <p className="italic font-medium text-gray-900 leading-relaxed">
                "Terwujudnya sumber daya manusia yg islami, berakhlak mulia, cerdas, terampil, sehat jasmani dan rohani, bersatu, maju, mandiri, dan unggul."
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
             <div className="bg-white border border-gray-200 p-8 rounded-2xl h-full shadow-sm">
              <h2 className="text-2xl font-bold text-pesantren mb-4">Misi</h2>
              <ol className="list-decimal pl-5 space-y-2 text-base leading-relaxed">
                <li>Melaksanakan pembinaan SDM berkualitas melalui pendidikan islam.</li>
                <li>Meningkatkan mutu keterampilan bahasa Arab.</li>
                <li>Melaksanakan tata administrasi berbasis teknologi.</li>
                <li>Menciptakan suasana yg mendukung kreativitas ustadz/ustadzah.</li>
                <li>Meningkatkan kesadaran 7K (ketertiban, kebersihan, kesehatan, dll).</li>
              </ol>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bagian Pimpinan: Full Body Tanpa Frame dengan Gradasi Hijau Pesantren */}
      <FadeIn delay={0.2}>
        <div className="text-center mb-16">
          <span className="text-pesantren font-bold uppercase tracking-wider text-sm bg-pesantren-light px-4 py-1.5 rounded-full">
            tokoh utama pondok pesantren
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
            Pendiri & Pimpinan Ponpes Al Kautsar
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-2">
            Figur teladan yang membimbing perjalanan ilmu dan akhlak santri di Pondok Pesantren Al Kautsar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {pimpinan.map((item, index) => (
            <FadeIn key={index} delay={index * 0.3} direction={index === 0 ? "right" : "left"}>
              {/* Kartu dengan latar belakang gradasi hijau pesantren, tanpa frame bulat */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-pesantren via-pesantren-dark to-[#0f381e] flex flex-col justify-end text-white min-h-[520px] group border border-green-700/50">
                
                {/* Efek Cahaya Halus di Latar Belakang */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-black/70 pointer-events-none"></div>

                {/* Foto Full Body Tanpa Bingkai / Tanpa Frame Bulat */}
                <div className="absolute inset-0 flex items-end justify-center pt-8 overflow-hidden">
                  <img 
                    src={item.foto} 
                    alt={item.nama} 
                    className="max-h-[460px] w-auto object-contain object-bottom filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-105" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Teks Petunjuk jika file foto belum ada */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white/40 text-sm font-medium -z-10 bg-pesantren-dark/90">
                    <svg className="w-16 h-16 mb-2 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    <span>Letakkan foto full body (PNG) di:</span>
                    <b className="font-mono text-green-300 mt-1">{item.foto}</b>
                  </div>
                </div>

                {/* Gradasi Overlay Bawah agar Teks Terbaca Kontras & Menyatu */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none"></div>

                {/* Informasi Teks di Bagian Bawah */}
                <div className="relative z-10 p-8 text-center sm:text-left">
                  <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1 rounded-full mb-3 uppercase tracking-wider shadow-sm">
                    {item.jabatan}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
                    {item.nama}
                  </h3>
                  <p className="text-gray-200 text-sm mt-2 leading-relaxed drop-shadow">
                    {item.deskripsi}
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}