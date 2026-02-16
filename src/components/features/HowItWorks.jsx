import { howItWorksSteps } from "../../data/Home";

export default function HowItWorks() {
	return (
		<section className="py-24 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
						Diagnosis in 3 Simple Steps
					</h2>
					<p className="text-lg text-gray-600">
						You don't need to be an expert to save your plants. Our AI handles
						the hard work.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 relative">
					{howItWorksSteps.map((step, index) => {
						const Icon = step.icon;
						return (
							<div
								key={step.id}
								className="relative group"
							>
								<div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 h-full">
									<div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
										<Icon size={28} />
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-3">
										{step.title}
									</h3>
									<p className="text-gray-600 leading-relaxed">
										{step.description}
									</p>
								</div>

								{/* Connecting Line (Desktop Only) */}
								{index !== howItWorksSteps.length - 1 && (
									<div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 z-10" />
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
