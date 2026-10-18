// app/profil/page.tsx
"use client";
import FadeIn from "@/components/FadeIn";

export default function ProfilPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24">
      
      {/* HEADER PROFIL */}
      <FadeIn>
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#134225] mb-4 border-b-4 border-[#134225] inline-block pb-3">
            Profil Pondok Pesantren
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Mengenal lebih dekat visi, misi, sejarah, dan jajaran pimpinan Pondok Pesantren Al Kautsar.
          </p>
        </div>
      </FadeIn>

      {/* BAGIAN VISI & MISI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <FadeIn delay={0.1}>
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-full">
            <h2 className="text-2xl font-bold text-[#134225] mb-5 flex items-center gap-3">
              <span className="bg-[#134225]/10 p-2.5 rounded-xl text-[#134225]">
                {/* Ikon Visi Modern (Mata / Fokus) */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
              Visi
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg font-medium italic">
              "Menjadi lembaga pendidikan Islam yang unggul dalam mencetak generasi Rabbani yang berakhlak mulia, menguasai keilmuan salaf (kitab kuning), dan mampu beradaptasi dengan sains dan teknologi."
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-full">
            <h2 className="text-2xl font-bold text-[#134225] mb-5 flex items-center gap-3">
              <span className="bg-[#134225]/10 p-2.5 rounded-xl text-[#134225]">
                {/* Ikon Misi Modern (Bendera / Pencapaian) */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </span>
              Misi
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#134225] font-bold bg-[#134225]/10 w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 text-sm">1</span>
                <span>Menyelenggarakan sistem pendidikan terpadu antara ilmu agama dan ilmu pengetahuan umum.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#134225] font-bold bg-[#134225]/10 w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 text-sm">2</span>
                <span>Membina akhlakul karimah melalui pembiasaan ibadah dan kedisiplinan ala pesantren.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#134225] font-bold bg-[#134225]/10 w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 text-sm">3</span>
                <span>Melestarikan kajian kitab kuning sebagai referensi utama keislaman.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#134225] font-bold bg-[#134225]/10 w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 text-sm">4</span>
                <span>Mempersiapkan santri agar mandiri, berilmu, dan bermanfaat bagi masyarakat.</span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>

      {/* BAGIAN SEJARAH SINGKAT */}
      <FadeIn delay={0.3}>
        <div className="bg-[#134225]/5 p-8 md:p-12 rounded-3xl border border-[#134225]/10">
          <h2 className="text-2xl font-bold text-[#134225] mb-4 text-center">Sejarah Singkat</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Pondok Pesantren Al Kautsar didirikan dengan niat tulus untuk menyebarkan syiar Islam dan mencetak kader ulama. Berawal dari majelis ilmu dan pengajian kitab kuning, pesantren ini terus berkembang menjadi lembaga pendidikan yang mengabdi penuh kepada umat dan bangsa, menyatukan pendidikan formal dan salafiyah.
          </p>
        </div>
      </FadeIn>

      {/* BAGIAN PIMPINAN & PENGURUS */}
      <div>
        <FadeIn delay={0.4}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#134225] border-b-4 border-[#134225] inline-block pb-2">
              Pimpinan & Pengurus
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* 1. Pendiri */}
          <FadeIn delay={0.5}>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition h-full flex flex-col">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#134225]/20 mb-6 shadow-md bg-gray-100 flex-shrink-0">
                {/* Penambahan object-top di sini agar kepalanya tidak terpotong */}
                <img src="/images/habib-sholeh.png" alt="Al Habib H Sholeh Al Iderus" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-bold text-[#134225] mb-2">Al Habib H. Sholeh Al Iderus</h3>
              <p className="text-gray-600 font-medium mt-auto">Pendiri Pondok Pesantren</p>
            </div>
          </FadeIn>

          {/* 2. Pengasuh */}
          <FadeIn delay={0.6}>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition h-full flex flex-col">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#134225]/20 mb-6 shadow-md bg-gray-100 flex-shrink-0">
                <img src="/images/habib-husein.png" alt="Al Habib H Husein Faishal Iderus" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-bold text-[#134225] mb-2">Al Habib H. Husein Faishal Iderus</h3>
              <p className="text-gray-600 font-medium mt-auto">Pengasuh & Pimpinan</p>
            </div>
          </FadeIn>

          {/* 3. Penasehat */}
          <FadeIn delay={0.7}>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition h-full flex flex-col">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#134225]/20 mb-6 shadow-md bg-gray-100 flex-shrink-0 relative">
                <img 
                  src="/images/hasan-effendy.png" 
                  alt="KH Hasan Effendy" 
                  className="w-full h-full object-cover object-top" 
                  onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=KH+Hasan&background=134225&color=fff&size=160'; }}
                />
              </div>
              <h3 className="text-xl font-bold text-[#134225] mb-2">KH. Hasan Effendy MR., S.Pd., M.Pd.</h3>
              <p className="text-gray-600 font-medium mt-auto">Penasehat Pesantren</p>
            </div>
          </FadeIn>
        </div>
      </div>

    </div>
  );
}