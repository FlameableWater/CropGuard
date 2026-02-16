import { useState, useRef } from "react";
import { UploadCloud, Image as ImageIcon, X, Camera } from "lucide-react";
import { cn } from "../../lib/utils";

export default function ImageUploader({ onImageSelect, error }) {
	const [isDragging, setIsDragging] = useState(false);
	const fileInputRef = useRef(null);

	const handleFile = (file) => {
		// 1. Validate Type
		if (!file.type.startsWith("image/")) {
			alert("Please upload an image file (JPG, PNG).");
			return;
		}
		// 2. Validate Size (Max 5MB)
		if (file.size > 5 * 1024 * 1024) {
			alert("File size must be less than 5MB.");
			return;
		}
		// 3. Create Preview URL
		const reader = new FileReader();
		reader.onload = (e) => onImageSelect(e.target.result, file);
		reader.readAsDataURL(file);
	};

	const onDragOver = (e) => {
		e.preventDefault();
		setIsDragging(true);
	};

	const onDragLeave = (e) => {
		e.preventDefault();
		setIsDragging(false);
	};

	const onDrop = (e) => {
		e.preventDefault();
		setIsDragging(false);
		if (e.dataTransfer.files?.[0]) {
			handleFile(e.dataTransfer.files[0]);
		}
	};

	return (
		<div className="w-full">
			<div
				onDragOver={onDragOver}
				onDragLeave={onDragLeave}
				onDrop={onDrop}
				onClick={() => fileInputRef.current?.click()}
				className={cn(
					"relative group cursor-pointer flex flex-col items-center justify-center w-full h-64 rounded-2xl border-2 border-dashed transition-all duration-300 bg-white",
					isDragging
						? "border-green-500 bg-green-50 scale-[1.02]"
						: "border-gray-300 hover:border-green-400 hover:bg-gray-50",
					error ? "border-red-500 bg-red-50" : "",
				)}
			>
				<div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
					<div className="mb-4 p-4 rounded-full bg-green-100 text-green-600 group-hover:scale-110 transition-transform">
						<UploadCloud size={32} />
					</div>
					<p className="mb-2 text-lg font-semibold text-gray-700">
						Click to upload or drag & drop
					</p>
					<p className="text-sm text-gray-500">
						SVG, PNG, JPG or GIF (max. 5MB)
					</p>

					<div className="flex items-center gap-2 mt-4 text-xs text-gray-400 font-medium uppercase tracking-wider">
						<div className="h-px bg-gray-300 w-12" />
						<span>OR</span>
						<div className="h-px bg-gray-300 w-12" />
					</div>

					<button className="mt-4 flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors md:hidden">
						<Camera size={18} />
						Open Camera
					</button>
				</div>

				{/* Hidden Input - Priority for Mobile Camera */}
				<input
					ref={fileInputRef}
					type="file"
					className="hidden"
					accept="image/*"
					capture="environment" // Forces rear camera on mobile
					onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
				/>
			</div>

			{error && (
				<p className="mt-2 text-sm text-red-600 font-medium flex items-center gap-1">
					<X size={14} /> {error}
				</p>
			)}
		</div>
	);
}
