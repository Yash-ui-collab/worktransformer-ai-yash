import BgGlow from "components/layout/BgGlow";
import Documentation from "components/sections/ResourceHub/Documentation";
import { HeroSection } from "components/sections/ResourceHub/HeroSction";
import Insight from "components/sections/ResourceHub/Insight";
import SuccessStories from "components/sections/ResourceHub/SuccessStories";
import Icon from "components/utils/Icon";
import React, { useRef, useState } from "react";

export default function ResourceHubPage() {
	const [activeTab, setActiveTab] = useState("all");
	const tabs = [
		{ label: "ALL", value: "all" },
		{ label: "Documentation", value: "documentation" },
		{ label: "Success Stories", value: "success" },
		{ label: "Insights", value: "insights" },
	];
	return (
		<div className="relative flex flex-col items-center w-full">
			<div className="w-[1200px] sm:w-full h-[1207.74px] sm:h-[1852.14px] -mt-32 sm:mt-0 absolute bg-[url(/assets/images/bg_circular_lines.svg)] bg-cover bg-[50%_0%]"></div>
			<HeroSection />
			<div className="container sm:pt-[72px]">
				{/* Tab Bar */}
				<div className="flex flex-col sm:flex-row items-center gap-6 sm:h-[57px] sm:mb-12">
					<div className="flex items-center gap-2 bg-[#23263A] rounded-full p-1 sm:p-1.5 w-[100%] overflow-x-auto sm:w-[881px] ">
						{tabs.map(tab => (
							<button
								key={tab.value}
								className={`px-6 sm:py-3 w-[211.25px] h-[45px] rounded-full font-medium text-[14px] leading-[150%] transition-all ${activeTab === tab.value
									? "bg-[#181B2A] text-white border border-primary"
									: "bg-transparent text-[#B0B3C7] hover:text-white"
									}`}
								onClick={() => setActiveTab(tab.value)}>
								{tab.label}
							</button>
						))}
					</div>
					<div className="flex gap-[20px] w-[265px] h-[56px] ">
						<div className="flex items-center bg-[#23263A] rounded-full px-6 py-4 gap-[10px] text-[#B0B3C7] cursor-pointer w-[130px] whitespace-nowrap">
							Sort by
							<Icon icon="arrow-down" className="w-6 h-6  " />
						</div>
						<div className="flex items-center bg-[#23263A] rounded-full px-6 py-4 w-[115px] text-[#B0B3C7] gap-[10px] cursor-pointer">
							Filter
							<Icon icon="tune" className="w-6 h-6 " />
						</div>
					</div>
				</div>
			</div>

			{/* Conditional Section Rendering */}
			<BgGlow className="top-[500px] -left-[200px] sm:top-[640px] sm:-left-[380px] sm:blur-none blur-none !w-[283px] !h-[274px] sm:!w-[619.73px] sm:!h-[602.22px] dark:sm:!scale-[3] z-[1]" />
			{activeTab === "all" && (
				<>
					<BgGlow className="bottom-[700px] -right-[200px] sm:top-[1700px] sm:-right-[450px] sm:blur-none blur-none !w-[283px] !h-[274px] sm:!w-[619.73px] sm:!h-[602.22px] dark:sm:!scale-[3] z-[1]" />
					<Documentation />
					<SuccessStories />
					<Insight />
				</>
			)}
			{activeTab === "documentation" && <Documentation />}
			{activeTab === "success" && <SuccessStories />}
			{activeTab === "insights" && <Insight />}
		</div>
	);
}
