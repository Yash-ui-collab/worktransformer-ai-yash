import BgGlow from "components/layout/BgGlow";
import Icon from "components/utils/Icon";
import React from "react";

export default function PlansDetail() {
	const dataplans = [
		{
			id: 0,
			fea: (
				<p className="font-medium leading-[150%] text-sm sm:text-base text-primary whitespace-nowrap">
					Features / Modules
				</p>
			),
			free: (
				<p className="font-medium leading-[150%] text-sm sm:text-base text-primary whitespace-nowrap">Free</p>
			),
			plus: (
				<p className="font-medium leading-[150%] text-sm sm:text-base text-primary whitespace-nowrap">Plus</p>
			),
			pro: <p className="font-medium leading-[150%] text-sm sm:text-base text-primar whitespace-nowrapy">Pro</p>,
			Enterprise: (
				<p className="font-medium leading-[150%] text-sm sm:text-base text-primary whitespace-nowrap">
					Enterprise
				</p>
			),
		},
		{
			id: 1,
			fea: (
				<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">
					Monthly Token Allowance
				</p>
			),
			free: <p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">100,000</p>,
			plus: <p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">750,000</p>,
			pro: <p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">3,000,000</p>,
			Enterprise: (
				<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">
					Unlimited (customised)
				</p>
			),
		},
		{
			id: 2,
			fea: (
				<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">
					Queries per Month (Standard)
				</p>
			),
			free: <p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">~5-7</p>,
			plus: <p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">~40-50</p>,
			pro: <p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">~150-200</p>,
			Enterprise: <p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">Unlimited</p>,
		},
		{
			id: 3,
			fea: (
				<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">
					Queries per Month (File-based)
				</p>
			),
			free: <p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">~1-2</p>,
			plus: <p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">~10-12</p>,
			pro: <p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">~30-40</p>,
			Enterprise: <p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">Unlimited</p>,
		},
		{
			id: 4,
			fea: (
				<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">
					Ideation Module (Worktransformers.AI)
				</p>
			),
			free: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			plus: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			pro: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			Enterprise: (
				<div className="flex gap-2 sm:gap-[10px]">
					<Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />
					<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">
						Fully customised
					</p>
				</div>
			),
		},
		{
			id: 5,
			fea: (
				<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">
					Calculate Module (Space Calculation)
				</p>
			),
			free: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			plus: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			pro: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			Enterprise: (
				<div className="flex gap-2 sm:gap-[10px]">
					<Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />
					<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">
						Advanced & API integrated
					</p>
				</div>
			),
		},
		{
			id: 6,
			fea: (
				<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">
					Notepad Module (Reports & Plans)
				</p>
			),
			free: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			plus: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			pro: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			Enterprise: (
				<div className="flex gap-2 sm:gap-[10px]">
					<Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />
					<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">
						Enhanced & custom reports
					</p>
				</div>
			),
		},
		{
			id: 7,
			fea: (
				<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">
					Priority Support (Chat/Email)
				</p>
			),
			free: <Icon icon="cross" className="w-4 h-4 sm:h-5 sm:w-5" />,
			plus: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			pro: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			Enterprise: (
				<div className="flex gap-2 sm:gap-[10px]">
					<Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />
					<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">
						Dedicated account manager
					</p>
				</div>
			),
		},
		{
			id: 8,
			fea: (
				<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">Benchmarking Module</p>
			),
			free: <Icon icon="cross" className="w-4 h-4 sm:h-5 sm:w-5" />,
			plus: <Icon icon="cross" className="w-4 h-4 sm:h-5 sm:w-5" />,
			pro: <Icon icon="cross" className="w-4 h-4 sm:h-5 sm:w-5" />,
			Enterprise: (
				<div className="flex gap-2 sm:gap-[10px]">
					<Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />
					<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">
						Exclusive access
					</p>
				</div>
			),
		},
		{
			id: 9,
			fea: (
				<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">
					Enterprise Module (Data Integration)
				</p>
			),
			free: <Icon icon="cross" className="w-4 h-4 sm:h-5 sm:w-5" />,
			plus: <Icon icon="cross" className="w-4 h-4 sm:h-5 sm:w-5" />,
			pro: <Icon icon="cross" className="w-4 h-4 sm:h-5 sm:w-5" />,
			Enterprise: (
				<div className="flex gap-2 sm:gap-[10px]">
					<Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />
					<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">
						Exclusive access
					</p>
				</div>
			),
		},
		{
			id: 10,
			fea: (
				<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">
					Security & Data Privacy
				</p>
			),
			free: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			plus: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			pro: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			Enterprise: (
				<div className="flex gap-2 sm:gap-[10px]">
					<Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />
					<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">
						Enhanced and compliant
					</p>
				</div>
			),
		},
		{
			id: 11,
			fea: (
				<p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">
					Additional Tokens (Top-up Price)
				</p>
			),
			free: (
				<p className="font-medium leading-[150%] w-full sm:w-[150px] sm:whitespace-normal whitespace-nowrap">
					£70 per 200k tokens
				</p>
			),
			plus: (
				<p className="font-medium leading-[150%] sm:whitespace-normal whitespace-nowrap">£55 per 200k tokens</p>
			),
			pro: (
				<p className="font-medium leading-[150%] sm:whitespace-normal hitespace-nowrap">£40 per 200k tokens</p>
			),
			Enterprise: <p className="text-sm sm:text-base font-medium leading-[150%] whitespace-nowrap">Custom</p>,
		},
	];
	return (
		<div className="container">
			<div className="relative">
				<BgGlow
					variant="secondary"
					className="top-[-65px] sm:top-[-150px] left-[7px] sm:left-[-50px]  !h-[201px] !w-[207px] sm:!w-[619.73px] sm:!h-[602.22px] "
				/>
			</div>
			<div className="py-6 sm:pt-0 sm:pb-18 flex flex-col gap-6 sm:gap-12 relative z-1">
				<div className="flex flex-col sm:flex-row sm:justify-between w-full sm:gap-0 gap-4">
					<p className="bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent font-semibold text-[28px] sm:text-5xl leading-[140%] tracking-[-2px] sm:-tracking-normal sm:leading-[62px] w-full sm:w-[554px] text-center sm:text-start self-center">
						Compare Plans in Detail
					</p>
					<p className="w-full sm:w-[370px] font-normal text-base sm:text-lg leading-[150%] text-textSecondary dark:text-textSecondaryDark sm:text-start text-center self-center">
						Flexible pricing structure to suit your particular requirements.
					</p>
				</div>
				<div className="flex sm:flex-nowrap flex-wrap flex-col sm:overflow-x-hidden overflow-x-scroll rounded-2xl sm:rounded-none border  border-textSecondaryDark/70 dark:border-text/6 sm:border-none">
					{dataplans.map((item, index) => {
						const isFirst = index === 0;
						const isLast = index === dataplans.length - 1;
						return (
							<div key={index} className="flex flex-row">
								<div
									className={`w-[287px] h-[45px] sm:h-[56px] sm:w-0 sm:flex-1 p-3 sm:p-4 border   border-textSecondaryDark/70 dark:border-text/6 ${isLast ? "sm:rounded-bl-3xl sm:!h-[80px]" : ""} ${isFirst ? "sm:rounded-tl-3xl" : ""} flex items-center`}>
									{item.fea}
								</div>
								<div
									className={`w-[166px] h-[45px] sm:h-[56px] sm:w-[194px] p-3 sm:p-4 border   border-textSecondaryDark/70 dark:border-text/6 flex items-center  ${isLast ? "sm:!h-[80px]" : ""}`}>
									{item.free}
								</div>
								<div
									className={`w-[166px] h-[45px] sm:h-[56px] sm:w-[186px] p-3 sm:p-4 border   border-textSecondaryDark/70 dark:border-text/6 flex items-center  ${isLast ? "sm:!h-[80px]" : ""}`}>
									{item.plus}
								</div>
								<div
									className={`w-[180px] h-[45px] sm:h-[56px] sm:w-[170px] p-3 sm:p-4 border   border-textSecondaryDark/70 dark:border-text/6 flex items-center ${isLast ? "sm:!h-[80px]" : ""}`}>
									{item.pro}
								</div>
								<div
									className={`w-[243px] h-[45px] sm:h-[56px] sm:w-[280px] p-3 sm:p-4 border   border-textSecondaryDark/70 dark:border-text/6 ${isLast ? "sm:rounded-br-3xl sm:!h-[80px]" : ""} ${isFirst ? "sm:rounded-tr-3xl" : ""} flex items-center`}>
									{item.Enterprise}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
