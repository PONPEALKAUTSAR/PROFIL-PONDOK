// app/profil/page.tsx
"use client";
import FadeIn from "@/components/FadeIn";

export default function ProfilPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#134225] mb-4 border-b-4 border-[#134225] inline-block pb-3">
            Profil & Pimpinan Pesantren
          </h1>
        </div>
      </FadeIn>

      {/* Grid diubah menjadi 3 kolom untuk layar besar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        
        {/* 1. Pendiri */}
        <FadeIn delay={0.1}>
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition h-full flex flex-col">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#134225]/20 mb-6 shadow-md bg-gray-100 flex-shrink-0">
              <img src="/images/habib-sholeh.png" alt="Al Habib H Sholeh Al Iderus" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-bold text-[#134225] mb-2">Al Habib H. Sholeh Al Iderus</h2>
            <p className="text-gray-600 font-medium mt-auto">Pendiri Pondok Pesantren Al Kautsar</p>
          </div>
        </FadeIn>

        {/* 2. Pengasuh */}
        <FadeIn delay={0.2}>
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition h-full flex flex-col">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#134225]/20 mb-6 shadow-md bg-gray-100 flex-shrink-0">
              <img src="/images/habib-husein.png" alt="Al Habib H Husein Faishal Iderus" className="w-full h-full object-cover object-top" />
            </div>
            <h2 className="text-xl font-bold text-[#134225] mb-2">Al Habib H. Husein Faishal Iderus</h2>
            <p className="text-gray-600 font-medium mt-auto">Pengasuh & Pimpinan Pondok Pesantren</p>
          </div>
        </FadeIn>

        {/* 3. Penasehat (BARU) */}
        <FadeIn delay={0.3}>
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition h-full flex flex-col">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#134225]/20 mb-6 shadow-md bg-gray-100 flex-shrink-0 relative">
              {/* Gambar ini akan mencari file hasan-effendy.png di folder public/images */}
              <img 
                src="/images/hasan-effendy.png" 
                alt="KH Hasan Effendy" 
                className="w-full h-full object-cover object-top" 
                // Jika foto belum ada, akan otomatis menampilkan inisial
                onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=KH+Hasan&background=134225&color=fff&size=160'; }}
              />
            </div>
            <h2 className="text-xl font-bold text-[#134225] mb-2">KH. Hasan Effendy MR., S.Pd., M.Pd.</h2>
            <p className="text-gray-600 font-medium mt-auto">Penasehat Pondok Pesantren</p>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}