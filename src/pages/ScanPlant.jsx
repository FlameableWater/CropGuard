import React, { useRef, useState } from "react";
import { Leaf, Camera, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ScanPlant() {
    const fileInputRef = useRef(null);
    const [selectedPlant, setSelectedPlant] = useState(null);

    const handleButtonClick = (plant) => {
        setSelectedPlant(plant);
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log("Plant:", selectedPlant);
            console.log("File:", file);
        }
    };

    return (
        <div className="min-h-screen bg-[#c7d8cf]">
            {/* Navbar */}
            <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
                <Link to="/">
                    <div className="flex items-center gap-2">
                        <Leaf className="text-green-600" />
                        <span className="font-semibold text-gray-800">PlantHealth</span>
                    </div>
                </Link>
                <a href="/" className="text-gray-600 hover:text-green-600">
                    Home
                </a>
            </nav>
            <div className="min-h-screen bg-[#c7d8cf] flex flex-col items-center px-4 py-10">
                {/* Logo */}
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Leaf className="text-white" size={28} />
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                    Plant Health Detector
                </h1>
                <p className="text-gray-600 mt-2 text-center">
                    Select a plant category to begin analysis
                </p>

                {/* Main Card */}
                <div className="bg-gray-100 rounded-2xl shadow-md p-8 mt-10 w-full max-w-4xl">

                    <h2 className="text-xl font-semibold text-center mb-8">
                        Choose Plant Type
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Potato Card */}
                        <div className="border-2 border-yellow-400 rounded-xl p-8 bg-yellow-50 flex flex-col items-center text-center">
                            <div className="text-5xl mb-4">🥔</div>
                            <h3 className="text-xl font-semibold mb-2">Potato</h3>
                            <p className="text-gray-600 mb-6">
                                Detect potato diseases and leaf issues
                            </p>

                            <button
                                onClick={() => handleButtonClick("potato")}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition"
                            >
                                Select Potato
                            </button>

                        </div>

                        {/* Tomato Card */}
                        <div className="border-2 border-red-300 rounded-xl p-8 bg-red-50 flex flex-col items-center text-center">
                            <div className="text-5xl mb-4">🍅</div>
                            <h3 className="text-xl font-semibold mb-2">Tomato</h3>
                            <p className="text-gray-600 mb-6">
                                Identify tomato plant health issues
                            </p>

                            <button
                                onClick={() => handleButtonClick("tomato")}
                                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition"
                            >
                                Select Tomato
                            </button>

                        </div>

                        <input
                            type="file"
                            accept="image/*"
                            capture="environment"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                        />

                    </div>
                </div>

                {/* Features Section */}
                <div className="grid md:grid-cols-3 gap-6 mt-10 w-full max-w-4xl">

                    <FeatureCard
                        icon={<Camera size={24} />}
                        title="Take a Photo"
                        text="Use your device camera for instant analysis"
                    />

                    <FeatureCard
                        icon={<Leaf size={24} />}
                        title="AI Analysis"
                        text="Advanced detection of plant health issues"
                    />

                    <FeatureCard
                        icon={<CheckCircle size={24} />}
                        title="Get Advice"
                        text="Receive personalized care recommendations"
                    />

                </div>
            </div>
        </div>
    );
}

/* ---------- Feature Card ---------- */

function FeatureCard({ icon, title, text }) {
    return (
        <div className="bg-gray-100 rounded-xl p-6 shadow-sm text-center">
            <div className="text-green-600 mb-3 flex justify-center">
                {icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{text}</p>
        </div>
    );
}