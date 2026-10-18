// app/pendidikan/page.tsx
"use client";
import FadeIn from "@/components/FadeIn";

const unitPendidikan = [
  { 
    nama: "Madrasah Diniyah ( pendidikan non - formal )", 
    kepala: "Ustadz Abdul Manaf S.Pd", 
    foto: "/images/abdul-manaf.png",
    deskripsi: "Pendidikan keagamaan mendasar yang memfokuskan pada pendalaman ilmu fiqih, akidah akhlak, tauhid, serta dasar-dasar pembacaan kitab kuning dan Al-Quran bagi santri pemula.",
    unggulan: [" Lughah arabiyah", "Dasar Kitab Kuning", "Praktik Ibadah Harian" , " Kalighrafi "]
  },
  { 
    nama: "Madrasah Ibtidaiyah (MI)", 
    kepala: "Abdul Hafidz S.Pd", 
    foto: "/images/abdul-hafidz.png",
    deskripsi: "Pendidikan formal tingkat dasar yang memadukan kurikulum nasional (Kementerian Agama) dengan pembentukan karakter nilai-nilai Islam sejak usia dini.",
    unggulan: ["Kurikulum Nasional & Agama", "Bimbingan Sholat Berjamaah", "Dasar Bahasa Arab & Inggris"]
  },
  { 
    nama: "Madrasah Tsanawiyah (MTs)", 
    kepala: "Irwan Subandi S.Pd", 
    foto: "/images/irwan-subandi.png",
    deskripsi: "Pendidikan tingkat menengah pertama yang membekali santri dengan penguasaan ilmu pengetahuan umum serta pendalaman ilmu agama dan kedisiplinan pesantren.",
    unggulan: ["Kurikulum Nasional & Nahwu Shorof", "Ekstrakurikuler Pramuka ", "Pembinaan Akhlak Remaja"],
    akreditasi: "Terakreditasi B"
  },
  { 
    nama: "Madrasah Aliyah (MA Al Kautsar)", 
    kepala: "Siti Mudrikah S.Pd", 
    foto: "/images/siti-mudrikah.png",
    deskripsi: "Pendidikan tingkat menengah atas yang mempersiapkan santri agar siap melanjutkan ke perguruan tinggi unggulan sekaligus memiliki kemandirian dakwah dan keilmuan matang.",
    unggulan: ["Extrakulikuler Pramuka", "Keterampilan Teknologi & Komputer", "Bimbingan Masuk Perguruan Tinggi"],
    akreditasi: "Terakreditasi A"
  },
];

export default function PendidikanPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-pesantren mb-4 border-b-4 border-pesantren inline-block pb-3">
            Unit Pendidikan Formal & Non-Formal
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Pondok Pesantren Al Kautsar menyelenggarakan sistem pendidikan terpadu yang memadukan ilmu pengetahuan umum dan ilmu keislaman mendalam.
          </p>
        </div>
      </FadeIn>

      <div className="space-y-12">
        {unitPendidikan.map((item, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-gray-100 pb-6 mb-6">
                <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-4 border-pesantren-light shadow-md relative bg-gray-100">
                  <img src={item.foto} alt={item.kepala} className="w-full h-full object-cover object-top" />
                </div>
                <div className="text-center sm:text-left flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                    <h2 className="text-2xl font-bold text-pesantren">{item.nama}</h2>
                    {item.akreditasi && (
                      <span className="inline-block bg-[#134225] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm w-fit mx-auto sm:mx-0">
                        {item.akreditasi}
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-gray-700 font-medium mb-3">
                    Kepala Sekolah: <span className="text-gray-900 font-semibold">{item.kepala}</span>
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.deskripsi}</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-pesantren uppercase tracking-wider mb-3">Program & Keunggulan Unit:</h4>
                <div className="flex flex-wrap gap-2">
                  {item.unggulan.map((program, idx) => (
                    <span key={idx} className="bg-[#134225]/10 text-[#134225] font-semibold text-xs sm:text-sm px-3.5 py-1.5 rounded-full border border-[#134225]/20">
                      ✨ {program}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}