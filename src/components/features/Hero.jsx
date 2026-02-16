import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Activity } from "lucide-react";
// Make sure this file actually exists in your assets folder!
import heroImage from "../../assets/plant.jpg";

export default function Hero() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white pt-16 pb-20 lg:pt-32 lg:pb-28">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
					{/* Text Content */}
					<div className="max-w-2xl">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
							<Leaf size={16} />
							<span>AI-Powered Disease Detection</span>
						</div>

						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
							Protect Your Harvest <br />
							<span className="text-green-600">With Precision AI</span>
						</h1>

						<p className="text-lg text-gray-600 mb-8 leading-relaxed">
							Identify diseases in your potato and tomato plants instantly. Get
							expert treatment advice and prevent crop loss before it spreads.
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<Link to="/scan">
								<button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-200">
									Start Scanning
									<ArrowRight size={20} />
								</button>
							</Link>
							<Link to="/learn">
								<button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all">
									Learn More
								</button>
							</Link>
						</div>
					</div>

					{/* Hero Image / Visual */}
					<div className="relative lg:ml-auto">
						<div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
							{/* Image with fallback in case the import fails */}
							<img
								src={
									heroImage ||
									"https://images.unsplash.com/photo-1591857177580-dc82b9ac4e10?q=80&w=1000"
								}
								alt="Farmer checking plants"
								className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700 ease-in-out"
							/>

							{/* Floating Badge */}
							<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-3 rounded-lg shadow-lg flex items-center gap-3">
								<div className="bg-green-100 p-2 rounded-full">
									<Activity className="text-green-600 h-6 w-6" />
								</div>
								<div>
									<p className="text-xs text-gray-500 font-medium">
										System Status
									</p>
									<p className="text-sm font-bold text-gray-900">
										Active & Scanning
									</p>
								</div>
							</div>
						</div>

						{/* Decorative blob background */}
						<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-200/30 blur-3xl rounded-full" />
					</div>
				</div>
			</div>
		</section>
	);
}
