// app/pendidikan/page.tsx
"use client";
import FadeIn from "@/components/FadeIn";

const unitPendidikan = [
  { 
    nama: "Madrasah Diniyah (Ula & Wustho)", 
    kepala: "Ustadz Abdul Manaf S.Pd", 
    foto: "/images/abdul-manaf.png" 
  },
  { 
    nama: "Madrasah Ibtidaiyah (MI)", 
    kepala: "Abdul Hafidz S.Pd", 
    foto: "/images/abdul-hafidz.png" 
  },
  { 
    nama: "Madrasah Tsanawiyah (MTs)", 
    kepala: "Irwan Subandi S.Pd", 
    foto: "/images/irwan-subandi.png" 
  },
  { 
    nama: "Madrasah Aliyah (MA)", 
    kepala: "Siti Mudrikah S.Pd", 
    foto: "/images/siti-mudrikah.png" 
  },
];

export default function PendidikanPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <FadeIn>
        <h1 className="text-3xl md:text-4xl font-bold text-pesantren mb-12 border-b-4 border-pesantren inline-block pb-3">
          Unit Pendidikan Formal & Non-Formal
        </h1>
      </FadeIn>

      <div className="space-y-6">
        {unitPendidikan.map((item, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              {/* Bagian Foto Profil Kepala Madrasah */}
              <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-pesantren-light shadow-inner relative bg-gray-100">
                <img 
                  src={item.foto} 
                  alt={item.kepala} 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              
              {/* Bagian Teks Nama dan Unit */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-pesantren mb-1">
                  {item.nama}
                </h2>
                <p className="text-base md:text-lg text-gray-700 font-medium">
                  Kepala Sekolah: <span className="text-gray-900 font-semibold">{item.kepala}</span>
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}