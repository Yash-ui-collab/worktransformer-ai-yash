import { cn } from "lib/utils";
import * as React from "react";
import Icon from "./Icon";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type = "text", error, ...props }, ref) => {
	// const methods = useFormContext();
	const inputType = type || "";
	const [showPassword, setShowPassword] = React.useState(false);

	return (
		<div className="relative ">
			<input
				type={inputType == "password" && showPassword ? "text" : inputType}
				className={cn(
					"bg-fgc dark:bg-fgcDark flex w-full rounded-xl text-sm sm:text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-textSecondary dark:placeholder:text-textDark/50  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border border-transparent py-[10px] sm:py-[17px] px-5 font-normal text-text dark:text-textDark",
					className,
					error ? "!border !border-red-500 focus-visible:!ring-red-500" : "focus-visible:ring-neutral-300",
				)}
				ref={ref}
				{...props}
			/>
			{inputType == "password" && (
				<Icon
					icon={showPassword ? "eye" : "eye-slash"}
					onClick={() => setShowPassword(!showPassword)}
					className="absolute sm:top-7 top-[22px] right-3 z-10 h-5 w-5 -translate-y-1/2 cursor-pointer  text-neutral-400"
				/>
			)}
			{error && (
				<span className="text-red-500 px-5 inline-block">
					{error && (
						<>
							<span>{error}</span>
						</>
					)}
					&nbsp;
				</span>
			)}
		</div>
	);
});

Input.displayName = "Input";

export { Input };
