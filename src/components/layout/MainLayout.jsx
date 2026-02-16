import Navbar from "./Navbar";

export default function MainLayout({ children }) {
	return (
		<div className="min-h-screen flex flex-col bg-slate-50">
			<Navbar />
			{/* flex-grow ensures the content pushes the footer down 
        even if the page content is short 
      */}
			<main className="flex-grow w-full">{children}</main>

			{/* Simple Footer (Optional but recommended) */}
			<footer className="bg-white border-t py-8 text-center text-gray-500 text-sm">
				<p>© 2026 CropGuard AI. Protecting harvests everywhere.</p>
			</footer>
		</div>
	);
}
