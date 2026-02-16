import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, Loader2 } from "lucide-react";
import AuthInput from "../components/ui/AuthInput";

export default function SignUp() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({});
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		password: "",
		confirmPassword: "",
		terms: false,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors({});
		const newErrors = {};

		// 1. ROBUST VALIDATION
		if (!formData.fullName) newErrors.fullName = "Full name is required";
		if (!formData.email) newErrors.email = "Email is required";
		if (formData.password.length < 8)
			newErrors.password = "Password must be at least 8 chars";
		if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = "Passwords do not match";
		}
		if (!formData.terms) newErrors.terms = "You must accept the terms";

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		// 2. MOCK REGISTRATION
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			navigate("/scan");
		}, 1500);
	};

	return (
		<div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
			<div className="text-center mb-8">
				<h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
				<p className="text-gray-500 text-sm mt-2">
					Join thousands of farmers today
				</p>
			</div>

			<form onSubmit={handleSubmit}>
				<AuthInput
					label="Full Name"
					icon={User}
					placeholder="John Doe"
					value={formData.fullName}
					onChange={(e) =>
						setFormData({ ...formData, fullName: e.target.value })
					}
					error={errors.fullName}
				/>

				<AuthInput
					label="Email Address"
					type="email"
					icon={Mail}
					placeholder="you@example.com"
					value={formData.email}
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
					error={errors.email}
				/>

				<AuthInput
					label="Password"
					type="password"
					icon={Lock}
					placeholder="Create a password"
					value={formData.password}
					onChange={(e) =>
						setFormData({ ...formData, password: e.target.value })
					}
					error={errors.password}
				/>

				<AuthInput
					label="Confirm Password"
					type="password"
					icon={Lock}
					placeholder="Confirm password"
					value={formData.confirmPassword}
					onChange={(e) =>
						setFormData({ ...formData, confirmPassword: e.target.value })
					}
					error={errors.confirmPassword}
				/>

				<div className="mb-6">
					<label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
						<input
							type="checkbox"
							className="mt-1 rounded border-gray-300 text-green-600 focus:ring-green-500"
							checked={formData.terms}
							onChange={(e) =>
								setFormData({ ...formData, terms: e.target.checked })
							}
						/>
						<span>
							I agree to the{" "}
							<Link
								to="#"
								className="text-green-600 hover:underline"
							>
								Terms of Service
							</Link>{" "}
							and{" "}
							<Link
								to="#"
								className="text-green-600 hover:underline"
							>
								Privacy Policy
							</Link>
						</span>
					</label>
					{errors.terms && (
						<p className="text-xs text-red-500 mt-1 font-medium">
							{errors.terms}
						</p>
					)}
				</div>

				<button
					type="submit"
					disabled={loading}
					className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
				>
					{loading ? <Loader2 className="animate-spin" /> : "Create Account"}
				</button>
			</form>

			<p className="mt-8 text-center text-sm text-gray-600">
				Already have an account?{" "}
				<Link
					to="/signin"
					className="font-semibold text-green-600 hover:text-green-700"
				>
					Sign in
				</Link>
			</p>
		</div>
	);
}
