import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	CheckCircle,
	AlertTriangle,
	RefreshCw,
	ArrowRight,
	Loader2,
	Leaf,
	Camera,
	ArrowLeft,
} from "lucide-react";

// Components
import ImageUploader from "../components/ui/ImageUploader";
import CameraCapture from "../components/ui/CameraCapture";
import LowConfidenceResult from "../components/features/LowConfidenceResult";

// AI Service
import { identifyPlantDisease, loadModel } from "../services/classifier";

export default function ScanPlant() {
	// State Machine
	const [step, setStep] = useState("select-plant");

	// FIX 2: We will use this variable in the UI so it is not "unused"
	const [selectedPlant, setSelectedPlant] = useState(null);

	const [imagePreview, setImagePreview] = useState(null);
	const [result, setResult] = useState(null);
	const [isCameraOpen, setIsCameraOpen] = useState(false);

	// FIX 1: Initialize as TRUE to avoid "setState in useEffect" warning
	const [isModelLoading, setIsModelLoading] = useState(true);

	// 1. Pre-load AI Model on Mount
	useEffect(() => {
		// Note: We removed setIsModelLoading(true) from here
		loadModel()
			.then(() => console.log("AI Model loaded successfully"))
			.catch((err) => console.error("Failed to load model:", err))
			.finally(() => setIsModelLoading(false));
	}, []);

	// HANDLER: Select Plant Type
	const handlePlantSelect = (plant) => {
		setSelectedPlant(plant);
		setStep("upload");
	};

	// HANDLER: Image Captured/Uploaded
	const handleImageSelect = (previewUrl) => {
		setImagePreview(previewUrl);
		setIsCameraOpen(false);
		setStep("scanning");
	};

	// HANDLER: Reset Flow
	const handleReset = () => {
		setStep("select-plant");
		setSelectedPlant(null);
		setImagePreview(null);
		setResult(null);
		setIsCameraOpen(false);
	};

	// EFFECT: Run AI Analysis
	useEffect(() => {
		if (step === "scanning" && imagePreview) {
			const analyzeImage = async () => {
				try {
					const aiResult = await identifyPlantDisease(imagePreview);

					setTimeout(() => {
						setResult(aiResult);
						setStep("result");
					}, 1500);
				} catch (error) {
					console.error("Analysis failed:", error);
					alert("Could not analyze image. Please try again.");
					setStep("upload");
				}
			};

			analyzeImage();
		}
	}, [step, imagePreview]);

	return (
		<div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
			<div className="max-w-3xl mx-auto">
				{/* NAVIGATION */}
				<div className="mb-6">
					<Link
						to="/"
						className="inline-flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors font-medium"
					>
						<ArrowLeft size={20} />
						Back to Home
					</Link>
				</div>

				{/* HEADER */}
				<div className="text-center mb-10">
					<h1 className="text-3xl font-bold text-gray-900 mb-2">
						Plant Health Detector
					</h1>
					<p className="text-gray-600">
						{step === "select-plant" &&
							"Select a crop to calibrate the AI model"}
						{step === "upload" && "Choose how you want to capture the image"}
						{/* FIX 2: We use 'selectedPlant' here to fix the unused variable warning */}
						{step === "scanning" &&
							`Analyzing ${selectedPlant || "plant"} leaf patterns...`}
						{step === "result" && "Analysis Complete"}
					</p>
				</div>

				{/* MAIN CARD */}
				<div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 min-h-[400px]">
					{/* STEP 1: PLANT SELECTION */}
					{step === "select-plant" && (
						<div className="p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
							<div className="grid md:grid-cols-2 gap-6">
								<button
									onClick={() => handlePlantSelect("potato")}
									disabled={isModelLoading}
									className="group relative p-8 border-2 border-gray-100 rounded-xl hover:border-yellow-400 hover:bg-yellow-50 transition-all text-left disabled:opacity-50 disabled:cursor-wait"
								>
									<div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
										<span className="text-2xl">🥔</span>
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-2">
										Potato
									</h3>
									<p className="text-sm text-gray-500">
										Optimized for blights and scab detection.
									</p>
								</button>

								<button
									onClick={() => handlePlantSelect("tomato")}
									disabled={isModelLoading}
									className="group relative p-8 border-2 border-gray-100 rounded-xl hover:border-red-400 hover:bg-red-50 transition-all text-left disabled:opacity-50 disabled:cursor-wait"
								>
									<div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
										<span className="text-2xl">🍅</span>
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-2">
										Tomato
									</h3>
									<p className="text-sm text-gray-500">
										Specialized in bacterial spots and wilt.
									</p>
								</button>
							</div>
							{isModelLoading && (
								<p className="text-center text-xs text-gray-400 mt-4">
									Initializing AI Engine...
								</p>
							)}
						</div>
					)}

					{/* STEP 2: UPLOAD OR CAMERA */}
					{step === "upload" && (
						<div className="p-8 animate-in fade-in zoom-in-95 duration-300">
							<button
								onClick={() => setStep("select-plant")}
								className="text-sm text-gray-500 hover:text-gray-900 mb-6 flex items-center gap-1"
							>
								<ArrowLeft size={16} /> Back to selection
							</button>

							{isCameraOpen ? (
								<CameraCapture
									onCapture={handleImageSelect}
									onClose={() => setIsCameraOpen(false)}
								/>
							) : (
								<div className="space-y-6">
									<button
										onClick={() => setIsCameraOpen(true)}
										className="w-full flex flex-col items-center justify-center p-8 border-2 border-green-100 bg-green-50 rounded-2xl hover:bg-green-100 hover:border-green-300 transition-all group"
									>
										<div className="bg-green-600 text-white p-4 rounded-full mb-3 shadow-lg group-hover:scale-110 transition-transform">
											<Camera size={32} />
										</div>
										<h3 className="text-lg font-bold text-green-900">
											Use Camera
										</h3>
										<p className="text-green-700">Take a photo directly</p>
									</button>

									<div className="relative flex py-2 items-center">
										<div className="flex-grow border-t border-gray-200"></div>
										<span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">
											OR UPLOAD FILE
										</span>
										<div className="flex-grow border-t border-gray-200"></div>
									</div>

									<ImageUploader onImageSelect={handleImageSelect} />
								</div>
							)}
						</div>
					)}

					{/* STEP 3: SCANNING ANIMATION */}
					{step === "scanning" && (
						<div className="relative h-[400px] w-full bg-black flex flex-col items-center justify-center">
							<div
								className="absolute inset-0 bg-cover bg-center opacity-50 blur-sm"
								style={{ backgroundImage: `url(${imagePreview})` }}
							/>
							<div className="absolute inset-0 z-10 animate-scan bg-gradient-to-b from-transparent via-green-400/50 to-transparent h-[20%] w-full border-b-2 border-green-400 shadow-[0_0_20px_rgba(74,222,128,0.5)]" />
							<div className="relative z-20 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 border border-white/10">
								<Loader2 className="animate-spin text-green-400" />
								<span className="text-white font-mono tracking-widest font-bold">
									ANALYZING...
								</span>
							</div>
						</div>
					)}

					{/* STEP 4: RESULTS */}
					{step === "result" && result && (
						<>
							{result.originalClass === "Low_Confidence_Fallback" ? (
								<LowConfidenceResult
									confidence={result.confidence}
									onRetake={handleReset}
								/>
							) : (
								<div className="bg-white animate-in fade-in slide-in-from-bottom-8 duration-700">
									<div className="h-64 w-full relative group">
										<img
											src={imagePreview}
											alt="Analyzed Plant"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-8">
											<div className="text-white">
												<p className="text-sm opacity-90 uppercase tracking-widest font-semibold mb-2">
													Detected Issue
												</p>
												<h2 className="text-4xl font-bold flex items-center gap-3">
													{result.disease}
													{result.severity === "low" ? (
														<CheckCircle className="text-green-400 h-8 w-8" />
													) : (
														<AlertTriangle className="text-red-400 h-8 w-8" />
													)}
												</h2>
											</div>
										</div>
									</div>

									<div className="p-8">
										<div className="mb-8">
											<div className="flex justify-between text-sm mb-2 font-bold uppercase tracking-wide text-gray-500">
												<span>AI Confidence</span>
												<span className="text-green-600">
													{result.confidence}% Match
												</span>
											</div>
											<div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
												<div
													className="h-full bg-green-600 rounded-full transition-all duration-1000 ease-out"
													style={{ width: `${result.confidence}%` }}
												/>
											</div>
										</div>

										<div className="mb-8">
											<h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-lg">
												<Leaf
													className="text-green-600"
													size={20}
												/>{" "}
												Diagnosis
											</h3>
											<div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-gray-700 leading-relaxed">
												{result.description}
											</div>
										</div>

										<div>
											<h3 className="font-bold text-gray-900 mb-4 text-lg">
												Recommended Treatment
											</h3>
											<ul className="space-y-4">
												{result.treatment.map((step, idx) => (
													<li
														key={idx}
														className="flex items-start gap-4 text-gray-700 bg-white p-3 rounded-lg border border-gray-100 shadow-sm"
													>
														<div className="min-w-[28px] h-7 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold mt-0.5">
															{idx + 1}
														</div>
														<span className="font-medium">{step}</span>
													</li>
												))}
											</ul>
										</div>

										<button
											onClick={handleReset}
											className="w-full mt-12 bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
										>
											<RefreshCw size={20} /> Scan Another Plant
										</button>
									</div>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
}
