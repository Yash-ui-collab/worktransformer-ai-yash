import Documentation from "components/sections/ResourceHub/Documentation";
import { HeroSection } from "components/sections/ResourceHub/HeroSction";
import Insight from "components/sections/ResourceHub/Insight";
import SuccessStories from "components/sections/ResourceHub/SuccessStories";
import React from "react";

export default function ResourceHubPage() {
	return (
		<>
			<HeroSection />
			<Documentation />
			<SuccessStories />
			<Insight />
		</>
	);
}
