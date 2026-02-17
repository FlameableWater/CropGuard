export const MODEL_URL =
	"https://teachablemachine.withgoogle.com/models/7GRN400_b/";

export const PLANT_DISEASES = {
	"Tomato-Healthy": {
		disease: "Healthy",
		confidence: 0, // Will be filled dynamically
		severity: "low",
		description:
			"Your tomato plant looks vigorous and healthy. The leaves are vibrant green with no signs of spotting or yellowing.",
		treatment: [
			"Continue consistent watering schedule",
			"Ensure 6-8 hours of sunlight",
			"Apply compost every 4-6 weeks",
		],
	},
	"Tomato-Mosaic-Virus": {
		disease: "Mosaic Virus",
		confidence: 0, // Will be filled dynamically
		severity: "high",
		description:
			"Your tomato plant is showing signs of Mosaic Virus. The leaves have a mottled appearance with light and dark green patches, and may be distorted.",
		treatment: [
			"Remove and destroy infected plants to prevent spread",
			"Control aphids which can transmit the virus",
			"Use virus-free seeds and resistant varieties in the future",
		],
	},
	"Tomato-Leaf-Mold": {
		disease: "Leaf Mold",
		confidence: 0, // Will be filled dynamically
		severity: "medium",
		description:
			"Your tomato plant is affected by Leaf Mold. The underside of the leaves has yellow spots that turn into fuzzy gray mold, while the upper side remains green.",
		treatment: [
			"Improve air circulation around plants",
			"Avoid overhead watering to keep leaves dry",
			"Apply fungicides labeled for leaf mold control",
		],
	},
	"Tomato-Septoria-Leaf-Spot": {
		disease: "Septoria Leaf Spot",
		confidence: 0, // Will be filled dynamically
		severity: "medium",
		description:
			"Your tomato plant is infected with Septoria Leaf Spot. The leaves have small, circular spots with dark borders and gray centers, which can lead to leaf yellowing and drop.",
		treatment: [
			"Remove and destroy affected leaves to reduce spread",
			"Apply fungicides containing chlorothalonil or copper",
			"Practice crop rotation and avoid planting tomatoes in the same soil each year",
		],
	},
	"Tomato-Early-Blight": {
		disease: "Early Blight",
		confidence: 0, // Will be filled dynamically
		severity: "high",
		description:
			"Your tomato plant is suffering from Early Blight. The leaves show concentric rings forming a target-like pattern, often starting on older leaves and progressing upwards.",
		treatment: [
			"Remove and destroy infected leaves to slow spread",
			"Apply fungicides containing chlorothalonil or copper",
			"Ensure proper spacing for air circulation and avoid overhead watering",
		],
	},
	"Tomato-Yellow-Leaf-Curl-Virus": {
		disease: "Yellow Leaf Curl Virus",
		confidence: 0, // Will be filled dynamically
		severity: "high",
		description:
			"Your tomato plant is affected by Yellow Leaf Curl Virus. The leaves are curled upwards and have a yellowing appearance, which can stunt growth and reduce yield.",
		treatment: [
			"Remove and destroy infected plants to prevent spread",
			"Control whiteflies which transmit the virus",
			"Use virus-free seeds and resistant varieties in future plantings",
		],
	},
	"Tomato-Target-Spot": {
		disease: "Target Spot",
		confidence: 0, // Will be filled dynamically
		severity: "medium",
		description:
			"Your tomato plant is showing signs of Target Spot. The leaves have small, circular spots with dark borders and tan centers, which can lead to leaf yellowing and drop.",
		treatment: [
			"Remove and destroy affected leaves to reduce spread",
			"Apply fungicides containing chlorothalonil or copper",
			"Practice crop rotation and avoid planting tomatoes in the same soil each year",
		],
	},
	"Tomato-Two-Spotted-Spider-Mite": {
		disease: "Two-Spotted Spider Mite",
		confidence: 0, // Will be filled dynamically
		severity: "medium",
		description:
			"Your tomato plant is infested with Two-Spotted Spider Mites. The leaves have tiny yellow or white speckles and may develop webbing on the undersides, leading to leaf drop.",
		treatment: [
			"Spray plants with a strong jet of water to dislodge mites",
			"Apply insecticidal soap or neem oil to affected areas",
			"Introduce natural predators like ladybugs or predatory mites",
		],
	},
	"Tomato-Late-Blight": {
		disease: "Late Blight",
		confidence: 0, // Will be filled dynamically
		severity: "high",
		description:
			"Your tomato plant is infected with Late Blight. The leaves have large, irregularly shaped dark brown or black lesions that can rapidly spread and cause plant collapse.",
		treatment: [
			"Remove and destroy infected plants immediately to prevent spread",
			"Apply fungicides containing chlorothalonil or copper",
			"Ensure proper spacing for air circulation and avoid overhead watering",
		],
	},
	"Tomato-Bacterial-Spot": {
		disease: "Bacterial Spot",
		confidence: 0, // Will be filled dynamically
		severity: "medium",
		description:
			"Your tomato plant is affected by Bacterial Spot. The leaves have small, water-soaked spots that turn dark and may be surrounded by yellow halos, leading to leaf drop.",
		treatment: [
			"Remove and destroy affected leaves to reduce spread",
			"Apply copper-based bactericides to control the disease",
			"Practice crop rotation and avoid planting tomatoes in the same soil each year",
		],
	},
};
