"use client";
import FadeIn from "@/components/FadeIn";

export default function PeraturanPage() {
	return (
		<div className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gray-50 min-h-screen">
			<FadeIn>
				<div className="text-center mb-16">
					<h1 className="text-3xl md:text-5xl font-extrabold text-[#134225] mb-4 drop-shadow-sm uppercase tracking-wide">
						Peraturan Asrama
					</h1>
					<h2 className="text-xl md:text-2xl font-bold text-gray-700 bg-white inline-block px-6 py-2 rounded-full shadow-sm border border-gray-200">
						Santri Dan Santriwati Pondok Pesantren Al Kautsar
					</h2>
				</div>
			</FadeIn>

			<div className="space-y-8">
				{/* SHAPE 1: KETENTUAN UMUM */}
				<FadeIn delay={0.1}>
					<div className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-[#134225]">
						<h3 className="font-extrabold text-xl mb-4 text-[#134225] uppercase tracking-wider">Ketentuan Umum</h3>
						<p className="text-gray-800 leading-relaxed md:text-lg">
							<b>Santri dan Santriwati wajib mentaati, menghormati dan mematuhi</b> Pengasuh, Pimpinan, Ustadz dan Ustadzah, Orang orang yang lebih tua kaka asrama/OSPA, Tata tertib santri dan santriwati Pondok Pesantren Al- Kautsar, Tri Janji Santri, dan Menjaga nama baik Pondok Pesantren Al-kautsar baik di lokasi pondok maupun di luar Pondok Pesantren
						</p>
					</div>
				</FadeIn>

				{/* SHAPE 2: PELANGGARAN RINGAN */}
				<FadeIn delay={0.2}>
					<div className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-yellow-400">
						<h4 className="font-extrabold text-xl mb-6 text-yellow-600 uppercase tracking-wider">A. PELANGGARAN RINGAN</h4>
						<ol className="list-decimal pl-6 space-y-3 text-gray-800">
							<li><b>Dilarang berbahasa daerah</b> dilokasi asrama/pondok</li>
							<li><b>Tidak mempraktikan Bahasa arab</b> dalam pergaulan sehari-hari di lokasi asrama/pondok sesuai dengan ketentuan yang berlakudi pondok pesantren Al-Kautsar</li>
							<li><b>Tidak menyetorkan 15 kosa kata</b>(Bahasa arab) kepada Ustadz-Ustadzah/Mudabbirah kebahasaan</li>
							<li><b>Tidak melakasanakan kegiatan keagamaan di mushalla</b> dengan tertib dan tenang seperti wirid, burdah, habsyi, DLL</li>
							<li><b>Tidak menjaga kebersihan, kerapian, ketenangan dan ketentraman diri</b>, lemari asrama, kamar mandi/wc dan lingkungan di sekitar Pondok Pesantren</li>
							<li><b>Tidak menghentikan semua aktivitas</b> Ketika sirene/lonceng berbunyi</li>
							<li><b>Tidak berkeliaran maksimal jam 10:30 malam</b> setelah diadakan kegiatan rutin</li>
							<li><b>Tidak mengahadiri absen malam 10:30</b></li>
							<li><b>Tidak membayar iuran wajib infak dana asrama</b> tepat waktu</li>
							<li><b>Tidak membawa semua jenis perhiasan</b> kecuali jam tangan dan anting untuk santriwati</li>
							<li><b>Dilarang memakai pakain levis dan ketat</b> (disita)</li>
							<li><b>Dilarang memakai lipstick atau peralatan make up</b>( disita)</li>
							<li><b>Dilarang memakai cat kuku, mengukir tangan(hena) serta mempunyai kuku yang Panjang</b></li>
							<li><b>Dilarang berambut gondrong</b> bagi santri putra</li>
							<li><b>Dilarang menampakan atau mengeluarkan rambut</b> bagi santri putri</li>
						</ol>
					</div>
				</FadeIn>

				{/* SHAPE 3: PELANGGARAN SEDANG */}
				<FadeIn delay={0.3}>
					<div className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-orange-500">
						<h4 className="font-extrabold text-xl mb-6 text-orange-600 uppercase tracking-wider">B. PELANGGARAN SEDANG</h4>
						<ol className="list-decimal pl-6 space-y-3 text-gray-800">
							<li><b>Tidak melaksanakan shalat lima waktu berjamaah</b> di mushalla</li>
							<li><b>Dilarang membuat kegaduhan</b> dilokasi asrama atau pondok pesantren</li>
							<li><b>Dilarang menyemir rambut</b>(di gundul putra/ disemir ulang hitam putri)</li>
							<li><b>Dilarang menemui tamu diluar jam atau hari yang sudah ditentukan</b> di lokasi asrama atau pondok</li>
							<li><b>Tidak melaporkan diri kepada pengasuh asrama</b> Ketika datang ke pondok setelah izin keluar atau pulang</li>
							<li><b>Terlambat datang ke pondok, atau pulang ke rumah sebelum tanggal yang ditentukan</b>( denda 50 ribu setiap harinya.(uang denda menjadi hak milik pondok)</li>
							<li><b>Dilarang membawa/menggunakan alat alat permainan yang tidak mendidik</b> seperti domino, remi, dadu(ular tangga, monopoli DLL</li>
							<li><b>Dilarang mengucapkan kata kata Kotor, kasar, dan memberi gelar yang tidak baik</b> terhadap sesama teman</li>
						</ol>
					</div>
				</FadeIn>

				{/* SHAPE 4: PELANGGARAN BERAT A */}
				<FadeIn delay={0.4}>
					<div className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-red-500">
						<h4 className="font-extrabold text-xl mb-6 text-red-600 uppercase tracking-wider">A. PELANGGARAN BERAT A</h4>
						<ol className="list-decimal pl-6 space-y-3 text-gray-800">
							<li><b>Tidak menghormati</b>( mengucapkan kata kata kotor, kasar dan memberi gelar yang tidak baik) <b>dan mentaati(amanah)</b> terhadap pengasuh, Pimpinan, Kamad, Ustadz dan Ustadzah, staf TU, satpam, Orang tua, kaka kelas, atau pengurus OSPA, dan orang yang pantas Untuk dihormati(diberhentikan)</li>
							<li><b>Mengambil dan memakai tanpa izin barang yang bukan miliknya</b></li>
							<li><b>Berkelahi, melakukan Tindakan kekerasan atau tawuran</b> baik didalam maupun diluar pondok Pesantren</li>
							<li><b>Membawa atau memakai narkoba dan Sejenisnya</b></li>
							<li><b>Melakukan Tindakan asusila</b></li>
							<li><b>Dilarang menjadikan seseorang sebagai kaka angkat atau adik angkat</b> didalam Pondok</li>
							<li><b>Tidak mondok/ mukim diasrama</b>(diberhentikan)</li>
						</ol>
					</div>
				</FadeIn>

				{/* SHAPE 5: PELANGGARAN BERAT B */}
				<FadeIn delay={0.5}>
					<div className="bg-red-50 p-8 rounded-2xl shadow-md border-l-8 border-red-700">
						<h4 className="font-extrabold text-xl mb-6 text-red-800 uppercase tracking-wider">A. PELANGGARAN BERAT B</h4>
						<ol className="list-decimal pl-6 space-y-3 text-gray-900">
							<li>
								<b>Tidak berpakaian yang menutup aurat</b> apabila diluar asrama, maupun diluar lokasi pondok pesantren;
								<ul className="list-[lower-alpha] pl-5 mt-2 space-y-2">
									<li><b>Santri putra :</b> memakai peci putih, baju koko, atau baju kaos, celana Panjang atau sarung, celana pendek minimal dibawah lutut, Ketentuan pakaian yang melindungi dari atas pusar sampai bawah lutut</li>
									<li><b>Santri putri :</b> memakai kerudung lebar yang menutup dada, baju jubah/daster. Ketentuan; pakaian yang menutupi seluruh tubuh kecuali muka dan telapak tangan, tidak transparan, tidak menampakan bentuk tubuh/ ketat</li>
								</ul>
							</li>
							<li><b>KABUR</b> / tidak meminta izin pengasuh asrama Ketika keluar lokasi pondok atau pulang bulanan</li>
							<li><b>Merokok, membawa sajam, elektronik</b>, ( HP, Laptop, Camera), Buku buku yang tidak mendidik dalam syariat islam (Disita dan menjadi hak milik Pondok)</li>
							<li><b>Tidak menggunakan hp saat kunjungan</b>, atau meminjam hp orang lain diluar waktu kunjungan</li>
							<li><b>Bergaul dengan yang bukan mahram, berpacaran, berkirim-kiriman surat dll</b></li>
							<li><b>Tidak memposting Foto, video dan sebagainya yang mencemarkan nama baik Pondok Pesantren</b>.(saat di pondok waktu kunjungan atau saat liburan dirumah)</li>
							<li><b>Merusak barang/ asset pondok</b>(mengganti)</li>
							<li><b>Dilarang membawa kendaraan bermotor</b> baik didalam maupun disekitar lokasi Pondok Pesantren</li>
							<li><b>Tidak Membayar iuran wajib Infaq dab asrama selama 6 bulan berturut</b>(tidak boleh ikut ulangan tanpa konfirmasi adanya Udzur)</li>
							<li><b>Khusus santri yang dinyatakan lulus dan akan mengadakan acara pengukuhan dilarang meninggalkan pondok</b>(pulang, menginap diluar lokasi pondok.)</li>
						</ol>
					</div>
				</FadeIn>

				{/* SHAPE 6: SANKSI PENDIDIKAN */}
				<FadeIn delay={0.6}>
					<div className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-purple-700">
						<h3 className="font-extrabold text-2xl mb-8 text-center text-purple-800 uppercase tracking-wider border-b-2 border-purple-100 pb-4">
							SANKSI PENDIDIKAN
						</h3>

						<div className="mb-8">
							<h4 className="font-extrabold text-lg mb-4 text-purple-700">A. Ketentuan Umum</h4>
							<ol className="list-decimal pl-6 space-y-3 text-gray-800">
								<li><b>Melakukan pelanggaran ringan melebihi batas ketentuan</b> yang ditetapkan oleh setiap seksi keamanan, keagamaan, kebersihan, dan kebahasaan, terhitung 1 (satu) kali pelanggaran sedang.</li>
								<li><b>3 (tiga) kali melakukan pelanggaran sedang</b> terhitung 1 (satu) kali pelanggaran berat</li>
								<li><b>2 (dua) kali melakukan pelanggaran berat B</b>, diberhentikan dari pondok pesantren</li>
								<li><b>1 (satu) kali melakukan pelanggaran berat A</b>, diberhentikan dari pondok pesantren</li>
							</ol>
						</div>

						<div>
							<h4 className="font-extrabold text-lg mb-4 text-purple-700">B. Ketentuan Khusus</h4>
							<ol className="list-decimal pl-6 space-y-4 text-gray-800">
								<li><b>Sanksi ringan :</b> disesuaikan dengan ketentuan peraturan yang ditetapkan oleh pengasuh Asrama.</li>
								<li><b>Sanksi sedang :</b> membuat surat perjanjian yang diketahui oleh ustadz/ustadzah kepengasuhan OSPA, dan Koordinator asrama, selanjutnya diberitahukan kepada orang tua/wali santri
									<ul className="list-disc pl-8 mt-2 space-y-1">
										<li>Tugas mental : gundul untuk santri putra dan memakai kerudung warna-warni untuk santriwati</li>
										<li>Tugas kebersihan dan menghafal</li>
										<li>Administrasi arsip Rp. 10.000</li>
									</ul>
								</li>
								<li value={1}><b>Sanksi berat :</b> Panggilan terhadap orang tua/wali santri, membuat surat pernyataan yang diketahui oleh kordinator asrama dan pengasuh pondok
									<ul className="list-disc pl-8 mt-2 space-y-1">
										<li>Tugas Mental (memakai tanda pelanggaran)</li>
										<li>Tugas kebersihan/melaksanakan tugas tugas piket selama 1 minggu</li>
										<li>Administrasi arsip Rp. 10.000</li>
									</ul>
								</li>
								<li value={2}><b>Sanksi pelanggaran berat</b> berikutnya diberhentikan dari pondok pesantren Al-Kautsar</li>
							</ol>
						</div>
					</div>
				</FadeIn>

				{/* SHAPE 7: LAIN-LAIN */}
				<FadeIn delay={0.7}>
					<div className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-gray-600">
						<h4 className="font-extrabold text-xl mb-6 text-gray-800 uppercase tracking-wider">A. Lain lain</h4>
						<ol className="list-decimal pl-6 space-y-4 text-gray-800">
							<li><b>Hal hal yang berkenaan dengan segala sesuatu yang tidak tercantum dalam tata tertib ini</b>, maka diberlakukan peraturan yang sesuai dengan Syariat Islam dan Akhlakul karimah serta norma norma kemasyarakatan</li>
							<li><b>Segala macam aktivitas kegiatan formal maupun informal</b> dalam pondok pesantren, <b>tidak diperkenannkan adanya gabungan antara santri putra dan putri</b>, karena dianggap melanggar tata tertib pondok</li>
							<li><b>Para santri dan santriwati yang melanggar tata tertib dan peraturan berlaku maka dikenakan hukuman atau sanksi</b>, tanpa terkecuali</li>
							<li><b>Santri dan santriwati yang membawa orang tua,kerabat, orang lain/luar dalam menyelesaikan suatu kesalah pahaman</b> yang terjadi didalam pondok pesantren akan dikeluarkan/temasuk pelanggaran berat</li>
							<li><b>Segala perlengkapan santri dan santriwati yang mana karena bolos, keluar tanpa izin, meninggalkan asrama/lokasi pondok pesantren, sekolah/ruang kelas.</b> Pondok Pesantren tidak bertanggung jawab atas segala barang milik santri tersebut.</li>
							<li><b>Demikian tata tertib ini dibuat untuk dilaksanakan dengan sebaik baiknya.</b></li>
						</ol>
					</div>
				</FadeIn>

				{/* BAGIAN TANDA TANGAN */}
				<FadeIn delay={0.8}>
					<div className="mt-12 text-center font-medium bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
						<div className="flex justify-end mb-12">
							<p className="bg-gray-100 px-6 py-2 rounded-lg text-gray-700">Al- Kautsar, November 2024</p>
						</div>
						<div className="flex flex-col md:flex-row justify-between gap-16 md:gap-4 px-4 md:px-10 text-gray-800">
							<div>
								<p className="mb-24 leading-relaxed">Mengetahui<br/>Pendiri, Pembina, dan Penasehat Pengasuh</p>
								<p className="font-bold text-lg border-b border-gray-400 inline-block px-4 pb-1">Habib H. Shaleh Al Iderus</p>
							</div>
							<div>
								<p className="mb-24 leading-relaxed">Menetapkan</p>
								<p className="font-bold text-lg border-b border-gray-400 inline-block px-4 pb-1">Habib. H. Husien Faisal Al Iderus</p>
							</div>
						</div>
					</div>
				</FadeIn>
			</div>
		</div>
	);
}
