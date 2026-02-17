import * as tmImage from "@teachablemachine/image";
import { MODEL_URL, PLANT_DISEASES } from "../data/modelData";

let model = null;
const CONFIDENCE_THRESHOLD = 0.75; // 75% Safety Margin

export const loadModel = async () => {
	if (model) return model;
	try {
		const modelURL = MODEL_URL + "model.json";
		const metadataURL = MODEL_URL + "metadata.json";
		model = await tmImage.load(modelURL, metadataURL);
		return model;
	} catch (error) {
		console.error("Model Error:", error);
		throw new Error("Failed to load AI model");
	}
};

export const identifyPlantDisease = async (imageSrc) => {
	if (!model) await loadModel();

	const imgElement = new Image();
	imgElement.src = imageSrc;

	// Wait for image to load to avoid "width of 0" errors
	await new Promise((resolve) => (imgElement.onload = resolve));

	const predictions = await model.predict(imgElement);

	// Sort predictions by probability
	predictions.sort((a, b) => b.probability - a.probability);

	const topResult = predictions[0];
	const confidence = Math.round(topResult.probability * 100);

	// SAFETY CHECK: Low Confidence Interception
	if (topResult.probability < CONFIDENCE_THRESHOLD) {
		return {
			disease: "Unsure / Low Confidence",
			confidence: confidence,
			severity: "low",
			description:
				"Our AI analysis is inconclusive. The image might be blurry, poorly lit, or contain a plant not in our database.",
			treatment: [
				"Ensure the leaf is the main subject",
				"Avoid shadows or direct glare",
				"Try scanning a different leaf from the same plant",
			],
			originalClass: "Low_Confidence_Fallback",
		};
	}

	// Normal Flow
	const result =
		PLANT_DISEASES[topResult.className] || PLANT_DISEASES["Unknown"];
	return {
		...result,
		confidence: confidence,
		originalClass: topResult.className,
	};
};
