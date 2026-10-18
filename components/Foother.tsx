import Link from "next/link";

export default function Footer() {
	return (
		<footer className="border-t border-green-900 bg-[#051A15] pt-16 pb-8 text-sm font-sans text-gray-300">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
					<div className="space-y-8 md:col-span-5">
						<div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-lg">
							<img
								src="/images/Al kautsar logo.png"
								alt="Logo Al Kautsar"
								className="h-full w-full object-cover"
							/>
						</div>
						<p className="pr-4 text-justify leading-relaxed text-gray-300">
							Pondok Pesantren Al Kautsar adalah lembaga pendidikan Islam yang
							berfokus pada pembentukan karakter dan akhlak mulia, serta
							pengembangan ilmu pengetahuan agama dan umum.
						</p>
						<div>
							<h4 className="mb-4 text-base font-semibold text-gray-500">
								Ikuti Kami
							</h4>
							<div className="flex gap-3">
								<a
									href="#"
									aria-label="Facebook Al Kautsar"
									className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 transition duration-300 hover:bg-white/20"
								>
									<svg className="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
									</svg>
								</a>
								<a
									href="#"
									aria-label="Instagram Al Kautsar"
									className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 transition duration-300 hover:bg-white/20"
								>
									<svg className="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
									</svg>
								</a>
							</div>
						</div>
					</div>

					<div className="md:col-span-3 md:col-start-7">
						<h4 className="mb-5 text-base font-semibold text-white">Navigasi</h4>
						<ul className="space-y-3">
							<li><Link href="/" className="transition hover:text-white">Beranda</Link></li>
							<li><Link href="/tentang" className="transition hover:text-white">Tentang Kami</Link></li>
							<li><Link href="/program" className="transition hover:text-white">Program</Link></li>
							<li><Link href="/kontak" className="transition hover:text-white">Kontak</Link></li>
						</ul>
					</div>

					<div className="md:col-span-3">
						<h4 className="mb-5 text-base font-semibold text-white">Hubungi Kami</h4>
						<address className="space-y-3 not-italic leading-relaxed">
							<p>Pondok Pesantren Al Kautsar</p>
							<a href="mailto:info@alkautsar.sch.id" className="block transition hover:text-white">
								info@alkautsar.sch.id
							</a>
						</address>
					</div>
				</div>

				<div className="border-t border-white/10 pt-6 text-center text-xs text-gray-500">
					© {new Date().getFullYear()} Pondok Pesantren Al Kautsar. Hak cipta dilindungi.
				</div>
			</div>
		</footer>
	);
}
