import { useRef, useState, useEffect } from "react";
import { X, RefreshCw } from "lucide-react";

export default function CameraCapture({ onCapture, onClose }) {
	const videoRef = useRef(null);
	const [stream, setStream] = useState(null);
	const [error, setError] = useState(null);

	// DEFINITIONS MOVED UP (Before useEffect)
	const startCamera = async () => {
		try {
			const mediaStream = await navigator.mediaDevices.getUserMedia({
				video: { facingMode: "environment" }, // Prefer back camera
			});
			setStream(mediaStream);
			if (videoRef.current) {
				videoRef.current.srcObject = mediaStream;
			}
			setError(null);
		} catch (err) {
			console.error("Camera Error:", err);
			setError(
				"Camera access denied. Please allow permissions or upload a file.",
			);
		}
	};

	const stopCamera = () => {
		if (stream) {
			stream.getTracks().forEach((track) => track.stop());
			setStream(null);
		}
	};

	const takePhoto = () => {
		if (!videoRef.current) return;

		const canvas = document.createElement("canvas");
		canvas.width = videoRef.current.videoWidth;
		canvas.height = videoRef.current.videoHeight;
		const ctx = canvas.getContext("2d");

		ctx.drawImage(videoRef.current, 0, 0);
		const imageUrl = canvas.toDataURL("image/jpeg");

		stopCamera();
		onCapture(imageUrl);
	};

	// USE EFFECT MOVED DOWN (After definitions)
	useEffect(() => {
		startCamera();
		return () => stopCamera(); // Cleanup on unmount
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="relative w-full h-[400px] bg-black rounded-2xl overflow-hidden flex flex-col items-center justify-center shadow-2xl ring-1 ring-gray-900/5">
			{error ? (
				<div className="text-white text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl mx-4">
					<p className="mb-4 text-red-300 font-medium">{error}</p>
					<button
						onClick={onClose}
						className="text-white bg-red-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
					>
						Close Camera
					</button>
				</div>
			) : (
				<>
					<video
						ref={videoRef}
						autoPlay
						playsInline
						muted
						className="absolute inset-0 w-full h-full object-cover"
					/>

					{/* Overlay Guide (Visual only) */}
					<div className="absolute inset-0 border-2 border-white/30 m-8 rounded-lg pointer-events-none" />
					<p className="absolute top-4 bg-black/50 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wide border border-white/10">
						Align leaf within frame
					</p>

					{/* Controls */}
					<div className="absolute bottom-8 flex items-center gap-10 z-20">
						<button
							onClick={onClose}
							className="bg-black/40 p-3.5 rounded-full text-white backdrop-blur-md hover:bg-black/60 transition-all border border-white/10"
							title="Close Camera"
						>
							<X size={24} />
						</button>

						<button
							onClick={takePhoto}
							className="group relative"
							title="Take Photo"
						>
							<div className="w-16 h-16 bg-white rounded-full border-4 border-transparent transition-all group-hover:scale-105 group-active:scale-95 shadow-lg shadow-black/20" />
							<div className="absolute inset-0 rounded-full border-2 border-white/50 m-1" />
						</button>

						<button
							onClick={() => {
								stopCamera();
								startCamera();
							}}
							className="bg-black/40 p-3.5 rounded-full text-white backdrop-blur-md hover:bg-black/60 transition-all border border-white/10"
							title="Switch/Restart Camera"
						>
							<RefreshCw size={24} />
						</button>
					</div>
				</>
			)}
		</div>
	);
}
