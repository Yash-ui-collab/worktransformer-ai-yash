import { cn } from "lib/utils";
import Icon from "./Icon";
import { SelectHTMLAttributes, forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";

export interface SelectOption {
	value: string;
	label: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
	label?: string;
	error?: string;
	options: SelectOption[];
	register?: UseFormRegister<any>;
	name: string;
	placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({ className, label, error, options, placeholder = "Please select", register, ...props }, ref) => {
		return (
			<div className="flex flex-col gap-[6px] sm:gap-[8px] relative">
				{label && (
					<label className="block sm:text-[16px] text-[14px] leading-[150%] dark:text-text text-textDark">
						{label}
					</label>
				)}
				<div className="relative">
					<select
						className={cn(
							`appearance-none w-full rounded-full border px-8 h-[48px] sm:h-[56px] text-textDark dark:text-placeholder dark:bg-text/10 dark:border-text/12 bg-text border-borderSecondary focus-visible:ring-1 outline-0`,
							error
								? "!border !border-red-500 focus-visible:!ring-red-500"
								: "dark:focus-visible:ring-text/20 focus-visible:ring-textDark/20",
							className,
						)}
						{...(register ? register(props.name) : {})}
						ref={ref}
						{...props}>
						<option value="" disabled hidden>
							{placeholder}
						</option>
						<option value="">{placeholder}</option>
						{options.map(option => (
							<option
								key={option.value}
								value={option.value}
								className="text-textDark dark:text-text bg-text dark:bg-textDark">
								{option.label}
							</option>
						))}
					</select>
					<span className="pointer-events-none absolute right-8 sm:right-8 sm:top-4 top-3.5">
						<Icon
							icon="arrow-down"
							className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] text-textDark dark:text-text/50"
						/>
					</span>
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

Select.displayName = "Select";

export default Select;
