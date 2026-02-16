import {
	Camera,
	Leaf,
	Activity,
	Scan,
	Sprout,
	AlertTriangle,
} from "lucide-react";

export const howItWorksSteps = [
	{
		id: 1,
		title: "Choose Plant Type",
		description:
			"Select whether you are scanning a potato or tomato plant to ensure accurate detection.",
		icon: Sprout,
	},
	{
		id: 2,
		title: "Upload Photo",
		description:
			"Take a clear photo of the affected leaves or upload one from your gallery.",
		icon: Camera,
	},
	{
		id: 3,
		title: "Get AI Analysis",
		description:
			"Our AI instantly diagnoses diseases like Late Blight or Bacterial Spots.",
		icon: Scan,
	},
];

export const supportedPlants = [
	{
		name: "Potato",
		description: "Vulnerable to blights that can devastate harvests.",
		diseases: ["Late Blight", "Early Blight", "Scab"],
		color: "bg-yellow-50 border-yellow-200 text-yellow-700",
		iconColor: "text-yellow-600",
	},
	{
		name: "Tomato",
		description: "Prone to bacterial spots and viral infections.",
		diseases: ["Bacterial Spot", "Mosaic Virus", "Leaf Curl"],
		color: "bg-red-50 border-red-200 text-red-700",
		iconColor: "text-red-600",
	},
];
