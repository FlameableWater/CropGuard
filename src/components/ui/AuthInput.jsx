import { useState } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";

export default function AuthInput({
	label,
	type = "text",
	error,
	icon: Icon,
	...props
}) {
	const [showPassword, setShowPassword] = useState(false);
	const isPassword = type === "password";

	return (
		<div className="space-y-1.5 mb-4">
			<label className="text-sm font-semibold text-gray-700 block">
				{label}
			</label>
			<div className="relative">
				{/* Left Icon */}
				{Icon && (
					<div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
						<Icon size={18} />
					</div>
				)}

				<input
					type={isPassword ? (showPassword ? "text" : "password") : type}
					className={`
            w-full pl-10 pr-4 py-3 rounded-lg border bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white transition-all
            ${
							error
								? "border-red-300 focus:ring-2 focus:ring-red-200 focus:border-red-400"
								: "border-gray-200 focus:ring-2 focus:ring-green-100 focus:border-green-500"
						}
          `}
					{...props}
				/>

				{/* Password Toggle Button */}
				{isPassword && (
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
					>
						{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
					</button>
				)}
			</div>

			{/* Error Message */}
			{error && (
				<p className="text-xs text-red-500 font-medium flex items-center gap-1 animate-in slide-in-from-top-1">
					<AlertCircle size={12} /> {error}
				</p>
			)}
		</div>
	);
}
