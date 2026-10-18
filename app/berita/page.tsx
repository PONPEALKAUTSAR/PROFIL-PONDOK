// app/berita/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

// Data contoh berita yang dikelompokkan berdasarkan unit pendidikan
const daftarBerita = [
  {
    id: "1",
    judul: "Penerimaan Santri Baru (PSB) Tahun Ajaran 2026/2027 Resmi Dibuka",
    unit: "Semua Unit",
    tanggal: "15 Juni 2026",
    ringkasan: "Pondok Pesantren Al Kautsar membuka pendaftaran santri baru untuk seluruh jenjang mulai dari TK Alwiyah hingga Madrasah Aliyah...",
    kategori: "Informasi Resmi",
    slug: "penerimaan-santri-baru-2026"
  },
  {
    id: "2",
    judul: "Kegiatan Pesantren Ramadhan dan Khataman Al-Quran Santri MTs",
    unit: "MTs",
    tanggal: "28 Maret 2026",
    ringkasan: "Santri Madrasah Tsanawiyah mengikuti rangkaian kegiatan pesantren ramadhan yang ditutup dengan khotmil quran bersama dewan guru.",
    kategori: "Kegiatan Siswa",
    slug: "khataman-alquran-mts"
  },
  {
    id: "3",
    judul: "Pelatihan Kaligrafi dan Seni Lukis Islam di Madrasah Diniyah",
    unit: "Madrasah Diniyah",
    tanggal: "10 Mei 2026",
    ringkasan: "Meningkatkan kreativitas santri non-formal melalui pelatihan dasar seni kaligrafi Arab yang dibimbing langsung oleh ustadz senior.",
    kategori: "Prestasi & Seni",
    slug: "pelatihan-kaligrafi-diniyah"
  },
  {
    id: "4",
    judul: "Kunjungan Edukatif dan Praktik Manasik Haji Cilik TK Alwiyah",
    unit: "TK Alwiyah",
    tanggal: "20 April 2026",
    ringkasan: "Anak-anak TK Alwiyah tampak antusias mengikuti simulasi manasik haji cilik untuk mengenalkan rukun Islam sejak usia dini.",
    kategori: "Kegiatan Anak",
    slug: "manasik-haji-cilik-tk"
  },
  {
    id: "5",
    judul: "Olimpiade Sains Nasional Tingkat Kabupaten Diikuti Siswa MA Al Kautsar",
    unit: "MA Al Kautsar",
    tanggal: "02 Mei 2026",
    ringkasan: "Delegasi Madrasah Aliyah Al Kautsar berhasil menorehkan prestasi membanggakan pada ajang seleksi sains tingkat kabupaten.",
    kategori: "Prestasi",
    slug: "olimpiade-sains-ma"
  },
  {
    id: "6",
    judul: "Peringatan Isra Mi'raj dan Santunan Anak Yatim di MI Al Kautsar",
    unit: "MI",
    tanggal: "15 Februari 2026",
    ringkasan: "Madrasah Ibtidaiyah mengadakan pengajian akbar serta bakti sosial menyantuni anak yatim piatu di sekitar lingkungan pondok.",
    kategori: "Keagamaan",
    slug: "isra-miraj-mi"
  }
];

const unitList = ["Semua", "TK Alwiyah", "Madrasah Diniyah", "MI", "MTs", "MA Al Kautsar"];

export default function BeritaPage() {
  const [selectedUnit, setSelectedUnit] = useState("Semua");

  // Filter berita berdasarkan unit yang dipilih
  const filteredBerita = selectedUnit === "Semua" 
    ? daftarBerita 
    : daftarBerita.filter(item => item.unit === selectedUnit || item.unit === "Semua Unit");

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <FadeIn>
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-[#134225] mb-4 border-b-4 border-[#134225] inline-block pb-3">
            Berita & Pengumuman Pesantren
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Ikuti perkembangan terbaru, informasi kegiatan akademik, serta prestasi dari seluruh unit pendidikan di Pondok Pesantren Al Kautsar.
          </p>
        </div>
      </FadeIn>

      {/* Tombol Filter Unit */}
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {unitList.map((unit) => (
            <button
              key={unit}
              onClick={() => setSelectedUnit(unit)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedUnit === unit
                  ? "bg-[#134225] text-white shadow-[0_0_15px_rgba(19,66,37,0.4)] scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {unit}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Grid Kartu Berita */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBerita.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.1}>
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full group">
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                
                {/* Kategori & Tanggal */}
                <div className="flex items-center justify-between text-xs font-semibold mb-3">
                  <span className="bg-[#134225]/10 text-[#134225] px-3 py-1 rounded-full">
                    {item.unit}
                  </span>
                  <span className="text-gray-400">{item.tanggal}</span>
                </div>

                {/* Judul Berita */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#134225] transition line-clamp-2">
                  {item.judul}
                </h3>

                {/* Ringkasan */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {item.ringkasan}
                </p>

                {/* Tombol Baca Selengkapnya */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.kategori}</span>
                  <span className="text-sm font-semibold text-[#134225] group-hover:translate-x-1 transition flex items-center gap-1">
                    Baca Selengkapnya &rarr;
                  </span>
                </div>

              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}