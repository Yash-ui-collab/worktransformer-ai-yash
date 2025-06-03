import { useAppState } from "components/utils/useAppState";
import { cn } from "lib/utils";
import React from "react";

type RequestType = {
	variant?: "primary" | "secondary" | "secondaryMedium" | "primarySmall" | "secondarySmall";
	className?: string;
};

const BgGlow: React.FC<RequestType> = ({ variant = "primary", className }) => {
	const [{ isDark }] = useAppState();

	const variantClassesDark = {
		primary: "bg-[url('/assets/images/glow-dark/glow-orange.png')]",
		secondary: "bg-[url('/assets/images/glow-dark/glow-light-blue.png')]",
		secondaryMedium: "bg-[url('/assets/images/glow-dark/glow-light-blue-medium.png')]",
		primarySmall: "bg-[url('/assets/images/glow-dark/glow-orange-small.png')]",
		secondarySmall: "bg-[url('/assets/images/glow-dark/glow-light-blue-small.png')]",
	};
	const variantClassesLight = {
		primary: "bg-[url('/assets/images/glow-light/glow-orange.png')]",
		secondary: "bg-[url('/assets/images/glow-light/glow-light-blue.png')]",
		secondaryMedium: "bg-[url('/assets/images/glow-light/glow-light-blue-medium.png')]",
		primarySmall: "bg-[url('/assets/images/glow-light/glow-orange-small.png')]",
		secondarySmall: "bg-[url('/assets/images/glow-light/glow-light-blue-small.png')]",
	};

	return (
		<>
			<div
				className={cn(
					"absolute z-0 w-[308px] scale-[3] sm:scale-[2.3] h-[300px] sm:w-[619.73px] sm:h-[602.22px] bg-no-repeat bg-contain bg-center pointer-events-none select-none",
					"",
					isDark ? variantClassesDark[variant] : variantClassesLight[variant],
					className,
				)}></div>
			{/* <div
				className={cn(
					"absolute rounded-full blur-[140px] sm:blur-[500px] z-0 w-[308px] h-[300px] sm:w-[619.73px] sm:h-[602.22px]",
					variantClasses[variant],
					className,
				)}></div> */}
		</>
	);
};

export default BgGlow;
