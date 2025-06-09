import { cn } from "lib/utils";
import * as React from "react";
import Icon from "./Icon";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	iconPost?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type = "text", label, error, iconPost, ...props }, ref) => {
		// const methods = useFormContext();
		const inputType = type || "";
		const [showPassword, setShowPassword] = React.useState(false);

		return (
			<div className="w-full flex flex-col">
				{label ? (
					<label
						className=" sm:text-base text-[14px] mb-[6px] text-[080C1D] leading-[150%] sm:mb-2"
						htmlFor="email">
						{label}
					</label>
				) : (
					""
				)}
				<div className="relative ">
					<input
						type={inputType == "password" && showPassword ? "text" : inputType}
						className={cn(
							`w-full rounded-full border px-[24px] h-[48px] placeholder:text-textDark dark:placeholder:text-placeholder sm:px-8 sm:h-[56px] dark:bg-text/10 dark:border-text/12  bg-text border-borderSecondary focus-visible:ring-1 outline-0`,
							className,
							error
								? "!border !border-red-500 focus-visible:!ring-red-500"
								: "dark:focus-visible:ring-text/20 focus-visible:ring-textDark/20",
						)}
						ref={ref}
						{...props}
					/>
					{inputType == "password" && (
						<Icon
							icon={showPassword ? "eye-slash" : "eye"}
							onClick={() => setShowPassword(!showPassword)}
							className="absolute sm:top-7 top-[24px] right-[30px] z-10 w-5 h-5 sm:w-[24px] sm:h-[24px] -translate-y-1/2 cursor-pointer"
						/>
					)}
					{iconPost && (
						<Icon
							icon={iconPost}
							className="absolute sm:top-7 top-[24px] right-[30px] z-10 w-5 h-5 sm:w-[24px] sm:h-[24px] -translate-y-1/2 cursor-pointer"
						/>
					)}
					{error && (
						<span className="text-red-500 px-8 inline-block">
							{error && (
								<>
									<span>{error}</span>
								</>
							)}
							&nbsp;
						</span>
					)}
				</div>
			</div>
		);
	},
);

Input.displayName = "Input";

export { Input };
