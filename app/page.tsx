export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#134225] mb-2">Pondok Pesantren Al Kautsar</h1>
        <p className="text-gray-600">Profil Pimpinan dan Pendiri Pondok Pesantren</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        
        {/* KARTU 1: Al Habib H Sholeh Al Iderus */}
        <div className="relative w-full h-[450px] overflow-hidden rounded-3xl shadow-xl bg-[#134225]">
          <img 
            src="/images/habib-sholeh.png" 
            alt="Al Habib H Sholeh Al Iderus" 
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
            <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-md rounded-full">
              PENDIRI PONDOK PESANTREN
            </span>
            <h3 className="text-2xl font-bold leading-tight mb-2">
              Al Habib H Sholeh Al Iderus
            </h3>
            <p className="text-sm text-gray-200 line-clamp-3">
              Perintis dan perancang awal berdirinya Pondok Pesantren Al Kautsar sejak tahun 2002.
            </p>
          </div>
        </div>

        {/* KARTU 2: Al Habib H Husein Faishal Iderus */}
        <div className="relative w-full h-[450px] overflow-hidden rounded-3xl shadow-xl bg-[#134225]">
          <img 
            src="/images/habib-husein.png" 
            alt="Al Habib H Husein Faishal Iderus" 
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
            <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-md rounded-full">
              PENGASUH & PIMPINAN
            </span>
            <h3 className="text-2xl font-bold leading-tight mb-2">
              Al Habib H Husein Faishal Iderus
            </h3>
            <p className="text-sm text-gray-200 line-clamp-3">
              Melanjutkan estafet kepemimpinan serta membimbing perkembangan spiritual dan pendidikan santri.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}