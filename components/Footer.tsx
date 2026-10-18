import Link from "next/link";

const quickLinks = [
	["Beranda", "/"],
	["Pendaftaran (PSB)", "/psb"],
	["Profil", "/profil"],
	["Pendidikan", "/pendidikan"],
	["Kajian Kitab", "/kitab"],
	["Fasilitas", "/fasilitas"],
	["Peraturan Asrama", "/peraturan"],
];

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
							<h2 className="mb-4 text-base font-semibold text-gray-500">
								Ikuti Kami
							</h2>
							<div className="flex gap-3">
								{[
									{ label: "Facebook", icon: "f" },
									{ label: "Instagram", icon: "◎" },
									{ label: "YouTube", icon: "▶" },
									{ label: "Website", icon: "↗" },
								].map(({ label, icon }) => (
									<a
										key={label}
										href="#"
										aria-label={label}
										className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-gray-300 transition hover:bg-white/20"
									>
										<span aria-hidden="true">{icon}</span>
									</a>
								))}
							</div>
						</div>
					</div>

					<nav aria-label="Menu cepat" className="md:col-span-3 md:ml-12">
						<h2 className="mb-6 text-base font-semibold text-gray-500">
							Menu Cepat
						</h2>
						<ul className="space-y-4">
							{quickLinks.map(([label, href]) => (
								<li key={href}>
									<Link
										href={href}
										className="flex items-center gap-3 transition hover:text-white"
									>
										<span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
										{label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<div className="md:col-span-4">
						<h2 className="mb-6 text-base font-semibold text-gray-500">
							Kontak Kami
						</h2>
						<div className="flex items-start gap-4">
							<span className="mt-0.5 text-gray-400" aria-hidden="true">
								<svg
									className="h-5 w-5"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
									/>
								</svg>
							</span>
							<div>
								<h3 className="mb-1 font-medium text-white">Alamat</h3>
								<p className="text-xs leading-relaxed text-gray-400">
									Al Kautsar, Kec. Satui, Kabupaten Tanah Bumbu, Kalimantan
									Selatan 72275
								</p>
								<p className="mt-1 text-xs text-gray-500">Koordinat: 7F2G+MCQ</p>
								<a
									href="https://maps.google.com/?q=7F2G+MCQ,+Al+Kautsar,+Kec.+Satui,+Kabupaten+Tanah+Bumbu,+Kalimantan+Selatan+72275"
									target="_blank"
									rel="noopener noreferrer"
									className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-green-400 underline underline-offset-4 transition hover:text-green-300"
								>
									<span aria-hidden="true">🌍</span> Buka di Google Earth / Maps
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-white/10 pt-6 text-center text-xs text-gray-500">
					© 2026 Pondok Pesantren Al Kautsar. Hak cipta dilindungi.
					dilindungi.
				</div>
			</div>
		</footer>
	);
}
