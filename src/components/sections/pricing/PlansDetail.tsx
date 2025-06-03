import BgGlow from "components/layout/BgGlow";
import Icon from "components/utils/Icon";
import React from "react";

export default function PlansDetail() {
	const dataplans = [
		{
			id: 0,
			fea: <p className="font-medium leading-[150%] text-sm sm:text-base text-primary">Features / Modules</p>,
			free: <p className="font-medium leading-[150%] text-sm sm:text-base text-primary">Free</p>,
			plus: <p className="font-medium leading-[150%] text-sm sm:text-base text-primary">Plus</p>,
			pro: <p className="font-medium leading-[150%] text-sm sm:text-base text-primary">Pro</p>,
			Enterprise: <p className="font-medium leading-[150%] text-sm sm:text-base text-primary">Enterprise</p>,
		},
		{
			id: 1,
			fea: <p className="text-sm sm:text-base font-medium leading-[150%]">Monthly Token Allowance</p>,
			free: <p className="text-sm sm:text-base font-medium leading-[150%]">100,000</p>,
			plus: <p className="text-sm sm:text-base font-medium leading-[150%]">750,000</p>,
			pro: <p className="text-sm sm:text-base font-medium leading-[150%]">3,000,000</p>,
			Enterprise: <p className="text-sm sm:text-base font-medium leading-[150%]">Unlimited (customised)</p>,
		},
		{
			id: 2,
			fea: <p className="text-sm sm:text-base font-medium leading-[150%]">Queries per Month (Standard)</p>,
			free: <p className="text-sm sm:text-base font-medium leading-[150%]">~5-7</p>,
			plus: <p className="text-sm sm:text-base font-medium leading-[150%]">~40-50</p>,
			pro: <p className="text-sm sm:text-base font-medium leading-[150%]">~150-200</p>,
			Enterprise: <p className="text-sm sm:text-base font-medium leading-[150%]">Unlimited</p>,
		},
		{
			id: 3,
			fea: <p className="text-sm sm:text-base font-medium leading-[150%]">Queries per Month (File-based)</p>,
			free: <p className="text-sm sm:text-base font-medium leading-[150%]">~1-2</p>,
			plus: <p className="text-sm sm:text-base font-medium leading-[150%]">~10-12</p>,
			pro: <p className="text-sm sm:text-base font-medium leading-[150%]">~30-40</p>,
			Enterprise: <p className="text-sm sm:text-base font-medium leading-[150%]">Unlimited</p>,
		},
		{
			id: 4,
			fea: (
				<p className="text-sm sm:text-base font-medium leading-[150%]">Ideation Module (Worktransformers.AI)</p>
			),
			free: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			plus: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			pro: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			Enterprise: (
				<div className="flex gap-2 sm:gap-[10px]">
					<Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />
					<p className="text-sm sm:text-base font-medium leading-[150%]">Fully customised</p>
				</div>
			),
		},
		{
			id: 5,
			fea: (
				<p className="text-sm sm:text-base font-medium leading-[150%]">Calculate Module (Space Calculation)</p>
			),
			free: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			plus: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			pro: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			Enterprise: (
				<div className="flex gap-2 sm:gap-[10px]">
					<Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />
					<p className="text-sm sm:text-base font-medium leading-[150%]">Advanced & API integrated</p>
				</div>
			),
		},
		{
			id: 6,
			fea: <p className="text-sm sm:text-base font-medium leading-[150%]">Notepad Module (Reports & Plans)</p>,
			free: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			plus: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			pro: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			Enterprise: (
				<div className="flex gap-2 sm:gap-[10px]">
					<Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />
					<p className="text-sm sm:text-base font-medium leading-[150%]">Enhanced & custom reports</p>
				</div>
			),
		},
		{
			id: 7,
			fea: <p className="text-sm sm:text-base font-medium leading-[150%]">Priority Support (Chat/Email)</p>,
			free: <Icon icon="cross" className="w-4 h-4 sm:h-5 sm:w-5" />,
			plus: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			pro: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			Enterprise: (
				<div className="flex gap-2 sm:gap-[10px]">
					<Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />
					<p className="text-sm sm:text-base font-medium leading-[150%]">Dedicated account manager</p>
				</div>
			),
		},
		{
			id: 8,
			fea: <p className="text-sm sm:text-base font-medium leading-[150%]">Benchmarking Module</p>,
			free: <Icon icon="cross" className="w-4 h-4 sm:h-5 sm:w-5" />,
			plus: <Icon icon="cross" className="w-4 h-4 sm:h-5 sm:w-5" />,
			pro: <Icon icon="cross" className="w-4 h-4 sm:h-5 sm:w-5" />,
			Enterprise: (
				<div className="flex gap-2 sm:gap-[10px]">
					<Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />
					<p className="text-sm sm:text-base font-medium leading-[150%]">Exclusive access</p>
				</div>
			),
		},
		{
			id: 9,
			fea: (
				<p className="text-sm sm:text-base font-medium leading-[150%]">Enterprise Module (Data Integration)</p>
			),
			free: <Icon icon="cross" className="w-4 h-4 sm:h-5 sm:w-5" />,
			plus: <Icon icon="cross" className="w-4 h-4 sm:h-5 sm:w-5" />,
			pro: <Icon icon="cross" className="w-4 h-4 sm:h-5 sm:w-5" />,
			Enterprise: (
				<div className="flex gap-2 sm:gap-[10px]">
					<Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />
					<p className="text-sm sm:text-base font-medium leading-[150%]">Exclusive access</p>
				</div>
			),
		},
		{
			id: 10,
			fea: <p className="text-sm sm:text-base font-medium leading-[150%]">Security & Data Privacy</p>,
			free: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			plus: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			pro: <Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />,
			Enterprise: (
				<div className="flex gap-2 sm:gap-[10px]">
					<Icon icon="right" className="text-[#17BA2A] h-4 w-4  sm:h-5 sm:w-5" />
					<p className="text-sm sm:text-base font-medium leading-[150%]">Enhanced and compliant</p>
				</div>
			),
		},
		{
			id: 11,
			fea: <p className="text-sm sm:text-base font-medium leading-[150%]">Additional Tokens (Top-up Price)</p>,
			free: <p className="font-medium leading-[150%] w-full sm:w-[150px]">£70 per 200k tokens</p>,
			plus: <p className="font-medium leading-[150%]">£55 per 200k tokens</p>,
			pro: <p className="font-medium leading-[150%]">£40 per 200k tokens</p>,
			Enterprise: <p className="text-sm sm:text-base font-medium leading-[150%]">Custom</p>,
		},
	];
	return (
		<div className="container">
			<div className="relative">
				<BgGlow variant="secondary" className="top-[-50px] sm:top-[-50px] left-[-20px] sm:-left-[150px]" />
			</div>
			<div className="py-6 sm:pb-18 flex flex-col gap-6 sm:gap-12 relative z-1">
				<div className="flex flex-col sm:flex-row sm:justify-between w-full sm:gap-0 gap-4">
					<p className="bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent font-semibold text-[28px] sm:text-5xl leading-[140%] tracking-[-2px] sm:-tracking-normal sm:leading-[130%] w-full sm:w-[554px] text-center sm:text-start">
						Compare Plans in Detail
					</p>
					<p className="w-full sm:w-[370px] font-normal sm:text-lg leading-[150%] text-textSecondary dark:text-textSecondaryDark sm:text-start text-center">
						Flexible pricing structure to suit your particular requirements.
					</p>
				</div>
				<div className="flex sm:flex-nowrap flex-wrap flex-col sm:overflow-x-hidden overflow-x-scroll rounded-2xl sm:rounded-none border border-textSecondaryDark/70 dark:border-text/6 sm:border-none">
					{dataplans.map((item, index) => {
						const isFirst = index === 0;
						const isLast = index === dataplans.length - 1;
						return (
							<div key={index} className="flex flex-row">
								<div
									className={`w-[287px] sm:w-0 sm:flex-1 p-3 sm:p-4 border border-textSecondaryDark/70 dark:border-text/6 ${isLast ? "sm:rounded-bl-3xl" : ""} ${isFirst ? "sm:rounded-tl-3xl" : ""} flex items-center`}>
									{item.fea}
								</div>
								<div className="w-[166px] sm:w-[194px] p-3 sm:p-4 border border-textSecondaryDark/70 dark:border-text/6 flex items-center">
									{item.free}
								</div>
								<div className="w-[166px] sm:w-[186px] p-3 sm:p-4 border border-textSecondaryDark/70 dark:border-text/6 flex items-center">
									{item.plus}
								</div>
								<div className="w-[180px] sm:w-[170px] p-3 sm:p-4 border border-textSecondaryDark/70 dark:border-text/6 flex items-center">
									{item.pro}
								</div>
								<div
									className={`w-[243px] sm:w-[280px] p-3 sm:p-4 border border-textSecondaryDark/70 dark:border-text/6 ${isLast ? "sm:rounded-br-3xl" : ""} ${isFirst ? "sm:rounded-tr-3xl" : ""} flex items-center`}>
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
