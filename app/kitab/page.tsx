"use client";

import FadeIn from "@/components/FadeIn";

const daftarKitab = [
	{
		unit: "Madrasah Diniyah (Ula & Wustho)",
		kitab: ["Bidayatul Hidayah", "Muroqil Ubudiyyah", "Matan Jurumiyyah", "Mabadi Awwaliyah", "Muhawwarah"],
	},
	{
		unit: "Madrasah Ibtidaiyah (MI)",
		kitab: ["Khulasah Nurul Yaqin", "Muhawwarah"],
	},
	{
		unit: "Madrasah Tsanawiyah (MTs)",
		kitab: ["Kaylani", "Rohiqul Makhtum", "Mukhtashor Husnussiyaghoh", "Is’aful Haa’id", "Al-Waroqot", "Muhawwarah"],
	},
	{
		unit: "Madrasah Aliyah (MA Al Kautsar)",
		kitab: ["Is’afuttholibin", "Jalalain", "Syarah ‘Arrobiyah", "Alluma’", "Risalatani", "Zubdatul Itqon", "Al-Adzkar An-Nawawi", "Muhawwarah"],
	},
];

export default function KitabPage() {
	return (
		<div className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
			<FadeIn>
				<div className="text-center mb-16">
					<h1 className="text-3xl md:text-4xl font-bold text-pesantren mb-4 border-b-4 border-pesantren inline-block pb-3">
						Kajian Kitab Kuning
					</h1>
					<p className="text-gray-600 max-w-2xl mx-auto text-base">
						Daftar kitab-kitab salaf (kitab kuning) yang dikaji dan dipelajari oleh para santri di setiap tingkatan pendidikan Pondok Pesantren Al Kautsar.
					</p>
				</div>
			</FadeIn>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{daftarKitab.map((item, index) => (
					<FadeIn key={index} delay={index * 0.1}>
						<div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 h-full">
							<h2 className="text-xl font-bold text-pesantren border-b-2 border-gray-100 pb-4 mb-5">
								{item.unit}
							</h2>
							<ul className="space-y-3">
								{item.kitab.map((namaKitab, idx) => (
									<li key={idx} className="flex items-center gap-3 text-gray-700 text-base font-medium bg-gray-50 p-3 rounded-xl border border-gray-100">
										<span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#134225]/10 text-[#134225] text-sm">📖</span>
										{namaKitab}
									</li>
								))}
							</ul>
						</div>
					</FadeIn>
				))}
			</div>
		</div>
	);
}
