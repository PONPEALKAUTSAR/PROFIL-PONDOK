"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const links = [
		{ name: "Beranda", path: "/" },
		{ name: "Profil", path: "/profil" },
		{ name: "Pendidikan", path: "/pendidikan" },
		{ name: "Fasilitas", path: "/fasilitas" },
		{ name: "PSB", path: "/psb" },
	];

	return (
		<nav className="sticky top-0 z-50 bg-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-20">
					<div className="flex items-center">
						<Link href="/" className="flex items-center gap-3">
							{/* TODO: Ganti src dengan /images/Al kautsar logo.png */}
							<div className="w-10 h-10 bg-pesantren rounded-full flex items-center justify-center text-white font-bold">
								AK
							</div>
							<span className="font-bold text-xl text-gray-900">
								Ponpes Al Kautsar
							</span>
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center space-x-8">
						{links.map((link) => (
							<Link
								key={link.name}
								href={link.path}
								className="text-gray-700 hover:text-pesantren font-medium transition-colors"
							>
								{link.name}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<div className="flex items-center md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-700"
							aria-label={isOpen ? "Tutup menu" : "Buka menu"}
							aria-expanded={isOpen}
						>
							{isOpen ? <X size={28} /> : <Menu size={28} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-white border-t">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{links.map((link) => (
							<Link
								key={link.name}
								href={link.path}
								onClick={() => setIsOpen(false)}
								className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pesantren hover:bg-pesantren-light rounded-md"
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
