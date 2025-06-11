import { HoveredCard } from "components/common/hoveredCard";
import BgGlow from "components/layout/BgGlow";
import Icon from "components/utils/Icon";
import { JSX, useState } from "react";

export const WhyOrganisationsWork = (): JSX.Element => {
	const cards = [
		{
			key: 4,
			left: "left-0 sm:left-[700px]",
			bg: "bg-bgc outline-hover",
			text: "",
			title: "Globally Validated",
			desc: "Proven effective through partnerships with global organizations.",
			img: false,
			icon: "globally",
		},
		{
			key: 3,
			left: "left-0 sm:left-[466px]",
			bg: "bg-bgc outline-hover",
			text: "",
			title: "Simple & Accessible",
			desc: "Clear, actionable insights without complex jargon or barriers.",
			img: false,
			icon: "wifi",
		},
		{
			key: 2,
			left: "left-0 sm:left-[234px]",
			bg: "bg-bgc outline-hover",
			text: "",
			title: "Cost-Effective",
			desc: "High-quality workplace strategy at a fraction of traditional consulting costs.",
			img: false,
			icon: "costing",
		},
		{
			key: 1,
			left: "left-0",
			bg: "bg-white outline-white",
			text: "text-bgc",
			title: "Instant Clarity",
			desc: "Replace weeks of data gathering with insights in minutes.",
			img: true,
			icon: "bulb",
		},
	];
	return <HoveredCard cards={cards} />;
};
