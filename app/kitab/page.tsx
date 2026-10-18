// app/kitab/page.tsx
"use client";
import FadeIn from "@/components/FadeIn";

// Daftar semua kitab kuning dijadikan satu kesatuan
const daftarSemuaKitab = [
  "Bidayatul Hidayah",
  "Muroqil Ubudiyyah",
  "Matan Jurumiyyah",
  "Is’afuttholibin",
  "Kaylani",
  "Khulasah Nurul Yaqin",
  "Rohiqul Makhtum",
  "Jalalain",
  "Mukhtashor Husnussiyaghoh",
  "Is’aful Haa’id",
  "Syarah ‘Arrobiyah",
  "Mabadi Awwaliyah",
  "Al-Waroqot",
  "Alluma’",
  "Risalatani",
  "Zubdatul Itqon",
  "Al-Adzkar An-Nawawi",
  "Muhawwarah"
];

export default function KitabPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#134225] mb-4 border-b-4 border-[#134225] inline-block pb-3">
            Kajian Kitab Kuning
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Daftar kitab-kitab salaf (kitab kuning) yang dikaji dan dipelajari secara komprehensif di Pondok Pesantren Al Kautsar.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-[#134225] mb-8 text-center border-b pb-4">
            Kitab Kuning Pondok Pesantren Al Kautsar
          </h2>
          
          {/* Grid responsif: 1 kolom di HP, 2 kolom di Tablet, 3 kolom di Laptop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {daftarSemuaKitab.map((namaKitab, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 text-gray-700 text-base font-medium bg-gray-50 hover:bg-green-50 p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-md transition duration-300"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#134225]/10 text-[#134225] text-sm flex-shrink-0">
                  📖
                </span> 
                <span>{namaKitab}</span>
              </div>
            ))}
          </div>
          
        </div>
      </FadeIn>
    </div>
  );
}