// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#051A15] text-gray-300 pt-16 pb-8 text-sm font-sans border-t border-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pembagian 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
          
          {/* KOLOM 1: Logo, Deskripsi & Sosial Media */}
          <div className="md:col-span-5 space-y-8">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden shadow-lg">
              <img src="/images/Al kautsar logo.png" alt="Logo Al Kautsar" className="w-full h-full object-cover" />
            </div>
            
            <p className="leading-relaxed pr-4 text-justify text-gray-300">
              Pondok Pesantren Al Kautsar adalah lembaga pendidikan Islam yang berfokus pada pembentukan karakter dan akhlak mulia, serta pengembangan ilmu pengetahuan agama dan umum.
            </p>

            <div>
              <h4 className="font-semibold text-gray-500 mb-4 text-base">Ikuti Kami</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 transition duration-300">
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 transition duration-300">
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 transition duration-300">
                  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s-.002 3.255-.42 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.812.419-7.812.419s-6.252 0-7.812-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s.002-3.255.42-4.814a2.507 2.507 0 0 1 1.768-1.768C5.748 5 12 5 12 5s6.252 0 7.812.418ZM10 15.5l6-3.5-6-3.5v7Z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 transition duration-300">
                  <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* KOLOM 2: Menu Cepat */}
          <div className="md:col-span-3 md:ml-12">
            <h3 className="text-gray-500 font-semibold mb-6 text-base">Menu Cepat</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-white transition flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Beranda</Link></li>
              <li><Link href="/psb" className="hover:text-white transition flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Pendaftaran (PSB)</Link></li>
              <li><Link href="/profil" className="hover:text-white transition flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Profil</Link></li>
              <li><Link href="/pendidikan" className="hover:text-white transition flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Pendidikan</Link></li>
              <li><Link href="/kitab" className="hover:text-white transition flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Kajian Kitab</Link></li>
              <li><Link href="/fasilitas" className="hover:text-white transition flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Fasilitas</Link></li>
              <li><Link href="/peraturan" className="hover:text-white transition flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Peraturan Asrama</Link></li>
            </ul>
          </div>

          {/* KOLOM 3: Kontak Kami */}
          <div className="md:col-span-4">
            <h3 className="text-gray-500 font-semibold mb-6 text-base">Kontak Kami</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="mt-0.5 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                </span>
                <div>
                  <h4 className="text-white font-medium mb-1">Alamat</h4>
                  <p className="text-gray-400 leading-relaxed">Tanah Laut-Kalimantan Selatan-Indonesia</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.539-4.239-7.135-7.135l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                </span>
                <div>
                  <h4 className="text-white font-medium mb-1">WhatsApp</h4>
                  <p className="text-gray-400">+62 812-3456-7890</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </span>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-gray-400">info@myalkautsar.info</p>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* COPYRIGHT BOTTOM BAR */}
      <div className="border-t border-white/10 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 Pondok Pesantren Al Kautsar. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Kebijakan Privasi</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}