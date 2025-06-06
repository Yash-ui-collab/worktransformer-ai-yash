import { cn } from "lib/utils";
import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "outline" | "link" | "none";
	size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant = "default", size = "default", ...props }, ref) => {
		const baseClasses =
			"h-[48px] sm:h-[56px] text-white font-semibold rounded-full  sm:px-9 px-6  border-2 border-textSecondaryDark dark:border-textSecondaryDark/5 bg-primary text-sm sm:text-base leading-[150%]";

		const variantClasses = {
			default: "border !border-primary bg-primary text-text hover:bg-primary/90",
			outline: "border border-[#676767] bg-transparent dark:text-textDark",
			link: "text-primary",
			none: "",
		};

		const sizeClasses = {
			default: "px-4 py-[11px] sm:py-3.5",
			sm: "px-3 py-2 !rounded-lg",
			lg: "px-8 sm:py-[15px] py-[10px]",
		};

		return (
			<button
				type="button"
				className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button };
