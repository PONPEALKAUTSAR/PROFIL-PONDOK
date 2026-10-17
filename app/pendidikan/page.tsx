// app/pendidikan/page.tsx
"use client";
import FadeIn from "@/components/FadeIn";

export default function PendidikanPage() {
  const madrasah = [
    { nama: "Madrasah Diniyah (Ula & Wustho)", kepala: "Ustadz Abdul Manaf S.Pd", foto: "/images/ustadz-manaf.png" },
    { nama: "Madrasah Ibtidaiyah (MI)", kepala: "Abdul Hafidz S.Pd", foto: "/images/kepala-mi.png" },
    { nama: "Madrasah Tsanawiyah (MTs)", kepala: "Irwan Subandi S.Pd", foto: "/images/irwan-subandi.png" },
    { nama: "Madrasah Aliyah (MA)", kepala: "Siti Mudrikah S.Pd", foto: "/images/siti-mudrikah.png" }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <FadeIn>
        <h1 className="text-3xl font-bold text-gray-900 mb-12 text-center border-b-4 border-pesantren inline-block pb-2 flex justify-center mx-auto">
          Pendidikan & Program Unggulan
        </h1>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <FadeIn delay={0.2} direction="right">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-pesantren mb-8">Unit Pendidikan Formal & Non-Formal</h2>
            <ul className="space-y-6 text-gray-700">
              {madrasah.map((item, idx) => (
                 <li key={idx} className="flex items-center gap-5 p-4 rounded-xl hover:bg-pesantren-light/30 transition border border-transparent hover:border-pesantren-light">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 shrink-0 border-2 border-pesantren-light relative">
                       <img src={item.foto} alt={item.kepala} className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                       <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-[10px] text-center -z-10">Foto</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{item.nama}</h3>
                      <p className="text-sm text-gray-500 mt-1">{item.kepala}</p>
                    </div>
                 </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} direction="left">
          <div className="bg-pesantren text-white p-8 rounded-2xl shadow-lg h-full">
            <h2 className="text-2xl font-bold mb-8 border-b border-pesantren-light/30 pb-4">Program Unggulan</h2>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-8 bg-white rounded-full"></div>
                  <h3 className="text-xl font-bold">Penguatan Ilmu Al-Qur'an</h3>
                </div>
                <p className="text-gray-100 leading-relaxed pl-5">
                  Program intensif yang dirancang untuk memperkuat bacaan, hafalan, dan pemahaman santri terhadap Al-Qur'an, sehingga mencetak generasi Qur'ani yang berakhlak mulia.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-8 bg-white rounded-full"></div>
                  <h3 className="text-xl font-bold">Penguatan Bahasa Arab</h3>
                </div>
                <p className="text-gray-100 leading-relaxed pl-5">
                  Membiasakan santri berkomunikasi dalam bahasa Arab secara aktif sehari-hari, serta mendalami kitab-kitab salaf (kitab kuning) melalui kurikulum Diniyah pesantren.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}