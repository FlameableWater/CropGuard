import { AlertCircle, RefreshCw, Sun, Focus, Move } from "lucide-react";

export default function LowConfidenceResult({ confidence, onRetake }) {
	return (
		<div className="bg-white animate-in fade-in slide-in-from-bottom-8 duration-700">
			{/* Warning Header */}
			<div className="bg-amber-50 p-8 text-center border-b border-amber-100">
				<div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
					<AlertCircle className="text-amber-600 h-8 w-8" />
				</div>
				<h2 className="text-2xl font-bold text-gray-900 mb-2">
					Analysis Inconclusive
				</h2>
				<p className="text-gray-600">
					We are only{" "}
					<span className="font-bold text-amber-600">
						{confidence}% confident
					</span>{" "}
					in this result.
					<br />
					For your plant's safety, we need a clearer image.
				</p>
			</div>

			{/* Photography Tips */}
			<div className="p-8">
				<h3 className="font-semibold text-gray-900 mb-6 text-center">
					How to get a better scan:
				</h3>

				<div className="grid sm:grid-cols-3 gap-6 mb-10">
					<div className="flex flex-col items-center text-center">
						<div className="bg-gray-100 p-3 rounded-full mb-3 text-gray-700">
							<Sun size={24} />
						</div>
						<p className="text-sm font-medium text-gray-900">Lighting</p>
						<p className="text-xs text-gray-500 mt-1">
							Avoid dark shadows or blinding glare.
						</p>
					</div>

					<div className="flex flex-col items-center text-center">
						<div className="bg-gray-100 p-3 rounded-full mb-3 text-gray-700">
							<Focus size={24} />
						</div>
						<p className="text-sm font-medium text-gray-900">Focus</p>
						<p className="text-xs text-gray-500 mt-1">
							Tap your screen to focus on the leaf spots.
						</p>
					</div>

					<div className="flex flex-col items-center text-center">
						<div className="bg-gray-100 p-3 rounded-full mb-3 text-gray-700">
							<Move size={24} />
						</div>
						<p className="text-sm font-medium text-gray-900">Distance</p>
						<p className="text-xs text-gray-500 mt-1">
							Get close, but keep the whole leaf in frame.
						</p>
					</div>
				</div>

				<button
					onClick={onRetake}
					className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center gap-2"
				>
					<RefreshCw size={20} /> Try Again
				</button>
			</div>
		</div>
	);
}
