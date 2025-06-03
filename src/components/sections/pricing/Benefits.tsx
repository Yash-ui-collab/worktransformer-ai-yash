import Icon from "components/utils/Icon";
import React from "react";

const benefitsData = [
	{
		title: "FREE",
		features: [
			"Monthly allowance for basic exploration",
			"AI-driven workplace insights",
			"Develop space calculation scenarios",
			"Fully secure: Data never used to train AI",
			"Easy token top-ups — no commitment",
		],
	},
	{
		title: "PLUS",
		features: [
			"Expanded monthly capacity for regular insights",
			"Complete access to Ideation and Calculate modules",
			"Priority support (chat/email)",
			"Fully secure: Data never used to train AI",
			"Affordable token top-ups for extra use",
		],
	},
	{
		title: "PRO",
		features: [
			"Extensive monthly usage capacity",
			"Advanced Ideation & Scenario Planning",
			"Enhanced Notepad reporting module",
			"Priority expert support (chat/email)",
			"Fully secure: Data never used to train AI",
			"Discounted token top-ups for extra usage",
		],
	},
	{
		title: "Enterprise",
		features: [
			"Unlimited, customized token usage",
			"Exclusive benchmarking & competitive insights",
			"Advanced API data integration",
			"Dedicated account management",
			"Custom reporting & analytics",
			"Enterprise-grade security and compliance",
		],
	},
];

export default function Benefits() {
	return (
		<div className="container sm:pb-[72px] py-6">
			<div className="flex flex-col gap-6 sm:gap-12 ">
				<div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
					<h1 className="dark:text-white  font-semibold  text-4xl sm:text-5xl self-center">Benefits</h1>
					<p className="dark:text-textSecondaryDark text-textSecondary sm:text-lg font-normal sm:w-[370px] text-[16px] text-center sm:text-start">
						Use cases and benefits are immense. Why not try the capability with a free sign-up?
					</p>
				</div>
				<div className="flex flex-col md:flex-row gap-4 sm:gap-8 justify-center items-stretch relative z-10 ">
					{benefitsData.map(plan => (
						<div
							key={plan.title}
							className="dark:bg-text/5 bg-primarySecondary rounded-2xl sm:p-[30px] p-4 sm:w-[270px] dark:text-white  shadow-blur/50 flex gap-4 sm:gap-8 flex-col border border-[#E4E4E7] dark:border-text/20 w-full">
							<h2 className="text-[20px] font-semibold  dark:text-text text-textDark">{plan.title}</h2>
							<ul className="flex flex-col sm:gap-6 gap-3 ">
								{plan.features.map((feature, idx) => (
									<li key={idx} className="flex items-start gap-[6px] sm:gap-[9px]">
										<Icon
											icon="tick-circle"
											className="w-3 h-3 sm:h-5 sm:w-5 text-primary mt-1 sm:mt-0.5"
										/>
										<span className="sm:text-[14px] dark:text-text text-textDark font-normal w-full  sm:w-[187px] text-[12px]  ">
											{feature}
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
