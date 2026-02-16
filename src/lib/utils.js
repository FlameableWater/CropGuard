// src/lib/utils.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// "cn" stands for "classNames"
// It lets you merge default classes with custom ones safely
export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
