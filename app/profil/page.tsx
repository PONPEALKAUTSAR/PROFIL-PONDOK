// app/profil/page.tsx
"use client";
import FadeIn from "@/components/FadeIn";

export default function ProfilPage() {
  const pimpinan = [
    { nama: "Al Habib H Sholeh Al Iderus", jabatan: "Pendiri Pesantren", foto: "/images/habib-sholeh.png" },
    { nama: "Al Habib H Husein Faishal Iderus", jabatan: "Pengasuh & Pimpinan", foto: "/images/habib-husein.png" }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <FadeIn>
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center border-b-4 border-pesantren inline-block pb-2 mx-auto flex justify-center">
          Profil & Sejarah
        </h1>
      </FadeIn>
      
      <div className="prose prose-lg text-gray-700 max-w-none mb-20">
        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-bold text-pesantren mt-8 mb-4">Sejarah Pendirian</h2>
          <p className="mb-4 text-justify">
            Berdirinya pondok pesantren Al Kautsar diawali pada tanggal 10 Muharram 1419 H (1998 M). Al-Habib H Sholeh mengundang seluruh murid beliau untuk memperingati haul Datuk Husein. Pada momen ini disepakati pembangunan masjid yang peletakan batu pertamanya dilaksanakan pada 12 Rabiul Awal 1419 H.
          </p>
          <p className="mb-4 text-justify">
            Setelah masjid berdiri, penduduk hijrah ke komplek Al Kautsar. Al Habib Sholeh bersama dua muridnya, M. Ridwan Sholeh dan K.H Hasan Effendi mendirikan Pondok Pesantren pada tahun 2002 M dalam bentuk Salafiyah. Seiring pemekaran Kabupaten Tanah Bumbu, pesantren berkembang menjadi penyelenggara Wajar Formal (MI, MTs, dan MA).
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <FadeIn delay={0.4}>
            <div className="bg-pesantren-light p-8 rounded-2xl h-full border-t-4 border-pesantren">
              <h2 className="text-2xl font-bold text-pesantren mb-4">Visi</h2>
              <p className="italic font-medium text-gray-900">
                "Terwujudnya sumber daya manusia yg islami, berakhlak mulia, cerdas, terampil, sehat jasmani dan rohani, bersatu, maju, mandiri, dan unggul."
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
             <div className="bg-white border border-gray-200 p-8 rounded-2xl h-full shadow-sm">
              <h2 className="text-2xl font-bold text-pesantren mb-4">Misi</h2>
              <ol className="list-decimal pl-5 space-y-2 text-base">
                <li>Melaksanakan pembinaan SDM berkualitas melalui pendidikan islam.</li>
                <li>Meningkatkan mutu keterampilan bahasa Arab.</li>
                <li>Melaksanakan tata administrasi berbasis teknologi.</li>
                <li>Menciptakan suasana yg mendukung kreativitas ustadz/ustadzah.</li>
                <li>Meningkatkan kesadaran 7K (ketertiban, keamanan, kebersihan, kesehatan, kekeluargaan, kerindangan, keimanan dan ketaqwaan).</li>
              </ol>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bagian Pengasuh & Pimpinan */}
      <FadeIn delay={0.2}>
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center border-b-4 border-pesantren inline-block pb-2 mx-auto flex justify-center">
          Pendiri & Pengasuh
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {pimpinan.map((item, index) => (
             <div key={index} className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-pesantren-light bg-gray-100 relative">
                   <img src={item.foto} alt={item.nama} className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                   <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs -z-10">Foto</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.nama}</h3>
                <p className="text-pesantren font-medium mt-1">{item.jabatan}</p>
             </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}