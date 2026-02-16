import { CheckCircle2, Leaf } from "lucide-react";
import { supportedPlants } from "../../data/Home"; // Import our plant data
import { cn } from "../../lib/utils"; // Remember our helper?

export default function SupportedPlants() {
	return (
		<section className="py-24 bg-slate-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Supported Crops
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						Currently optimized for the world's most popular staple crops.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{supportedPlants.map((plant) => (
						<div
							key={plant.name}
							className={cn(
								"relative overflow-hidden rounded-2xl p-8 border-2 transition-all hover:shadow-lg",
								plant.color, // Dynamically applies the color (red or yellow)
							)}
						>
							<div className="relative z-10">
								<h3 className={cn("text-3xl font-bold mb-2", plant.iconColor)}>
									{plant.name}
								</h3>
								<p className="text-gray-700 mb-6 font-medium">
									{plant.description}
								</p>

								<div className="space-y-3">
									<p className="text-sm font-semibold uppercase tracking-wider opacity-70">
										Detects:
									</p>
									<ul className="space-y-2">
										{plant.diseases.map((disease) => (
											<li
												key={disease}
												className="flex items-center gap-2"
											>
												<CheckCircle2
													size={18}
													className={plant.iconColor}
												/>
												<span className="text-gray-800 font-medium">
													{disease}
												</span>
											</li>
										))}
									</ul>
								</div>
							</div>

							{/* Decorative Background Icon */}
							<Leaf
								className={cn(
									"absolute -bottom-4 -right-4 w-40 h-40 opacity-10 rotate-12",
									plant.iconColor,
								)}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
