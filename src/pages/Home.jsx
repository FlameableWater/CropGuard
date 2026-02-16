import Hero from "../components/features/Hero";
import HowItWorks from "../components/features/HowItWorks";
import SupportedPlants from "../components/features/SupportedPlants";
import { Link } from "react-router-dom";
import { Camera } from "lucide-react";

// Simple CTA Component
function CTA() {
	return (
		<section className="py-20 bg-green-600">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-3xl font-bold text-white mb-6">
					Ready to save your harvest?
				</h2>
				<p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
					Join thousands of farmers using AI to detect diseases early. It's
					free, fast, and accurate.
				</p>
				<Link to="/scan">
					<button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-colors shadow-lg">
						Start Scanning Now
					</button>
				</Link>
			</div>
		</section>
	);
}

export default function Home() {
	return (
		<div className="animate-in fade-in duration-500 relative">
			<Hero />
			<HowItWorks />
			<SupportedPlants />
			<CTA />

			{/* FLOATING CAMERA BUTTON (THE REQUESTED FEATURE) */}
			<Link to="/scan">
				<button className="fixed bottom-8 right-8 z-40 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 hover:scale-110 transition-all border-4 border-white">
					<Camera size={28} />
					<span className="sr-only">Open Scanner</span>
				</button>
			</Link>
		</div>
	);
}
