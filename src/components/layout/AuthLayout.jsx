import { Link, Outlet } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function AuthLayout() {
	return (
		<div className="min-h-screen grid lg:grid-cols-2">
			{/* LEFT SIDE: Visual Branding (Fixed) */}
			<div className="hidden lg:flex flex-col justify-between bg-green-900 text-white p-12 relative overflow-hidden">
				{/* Abstract Background Elements */}
				<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
					<div className="absolute top-10 left-10 w-64 h-64 bg-green-400 rounded-full blur-3xl" />
					<div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
				</div>

				{/* Logo */}
				<Link
					to="/"
					className="flex items-center gap-2 relative z-10 w-fit"
				>
					<div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm border border-white/20">
						<Leaf
							className="text-green-300"
							size={24}
						/>
					</div>
					<span className="text-2xl font-bold tracking-tight">CropGuard</span>
				</Link>

				{/* Testimonial / Value Prop */}
				<div className="relative z-10 max-w-md">
					<h2 className="text-3xl font-bold mb-4">
						"The AI detection saved my entire tomato harvest last season."
					</h2>
					<p className="text-green-200 text-lg opacity-90">
						Join 10,000+ farmers protecting their crops with precision AI
						technology.
					</p>
				</div>

				{/* Footer */}
				<div className="relative z-10 text-sm text-green-300/60">
					© 2026 CropGuard AI Inc.
				</div>
			</div>

			{/* RIGHT SIDE: The Form Content (Dynamic) */}
			<div className="flex flex-col justify-center items-center p-6 sm:p-12 bg-gray-50">
				<div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
					<Outlet /> {/* <--- This is where SignIn/SignUp will be injected */}
				</div>
			</div>
		</div>
	);
}
