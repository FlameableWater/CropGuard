import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const isActive = (path) => location.pathname === path;

	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "Learn", path: "/learn" },
	];

	return (
		<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-green-100">
			{/* FIX: Changed 'max-w-7xl' to 'container' 
         This ensures the logo aligns perfectly with the Hero text below it.
      */}
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link
						to="/"
						className="flex items-center gap-2 group"
					>
						<div className="bg-green-600 p-1.5 rounded-lg group-hover:bg-green-700 transition-colors">
							<Leaf className="text-white h-5 w-5" />
						</div>
						<span className="text-xl font-bold text-gray-900 tracking-tight">
							CropGuard
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								className={cn(
									"text-sm font-medium transition-colors hover:text-green-600",
									isActive(link.path) ? "text-green-600" : "text-gray-600",
								)}
							>
								{link.name}
							</Link>
						))}

						<div className="flex items-center gap-4">
							<Link to="/signin">
								<button className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
									Sign In
								</button>
							</Link>
							<Link to="/scan">
								<button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-all shadow-sm hover:shadow-md">
									Scan Plant
								</button>
							</Link>
						</div>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu Dropdown */}
			{isOpen && (
				<div className="md:hidden border-t border-gray-100 bg-white">
					<div className="container mx-auto px-4 pt-2 pb-6 space-y-2">
						{navLinks.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								onClick={() => setIsOpen(false)}
								className={cn(
									"block px-3 py-3 rounded-md text-base font-medium",
									isActive(link.path)
										? "bg-green-50 text-green-700"
										: "text-gray-600 hover:bg-gray-50",
								)}
							>
								{link.name}
							</Link>
						))}
						<div className="grid grid-cols-2 gap-4 mt-4 px-3">
							<Link
								to="/signin"
								onClick={() => setIsOpen(false)}
							>
								<button className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50">
									Sign In
								</button>
							</Link>
							<Link
								to="/scan"
								onClick={() => setIsOpen(false)}
							>
								<button className="w-full px-4 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700">
									Scan Now
								</button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
