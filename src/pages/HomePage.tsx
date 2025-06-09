import BgGlow from "components/layout/BgGlow";
import { BeginWithSingleProject } from "components/sections/home/BeginWithSingleProject";
import { BuildPartnership } from "components/sections/home/BuildPartnership";
import { ClientTestimonials } from "components/common/ClientTestimonials";
import { DesignedForEveryone } from "components/sections/home/DesignedForEveryone";
import { EasyForAnyone } from "components/sections/home/EasyForAnyone";
import { ExperienceLightening } from "components/sections/home/ExperienceLightening";
import { FromComplexity } from "components/sections/home/FromComplexity";
import { HeroSection } from "components/sections/home/HeroSection";
import { OnePlatform } from "components/sections/home/OnePlatform";
import { OurMission } from "components/sections/home/OurMission";
import { Ourplatformstreamlines } from "components/sections/home/Ourplatformstreamlines";
import { ReadyToRethink } from "components/sections/home/ReadyToRethink";
import { ThereMoreEnterprises } from "components/sections/home/ThereMoreEnterprises";
import { WorkplaceLeaders } from "components/sections/home/WorkplaceLeaders";
import { JSX } from "react";
import { HoveredCard } from "components/common/hoveredCard";

const HomePage = (): JSX.Element => {
	const cards = [
		{
			key: 4,
			left: "left-0 sm:left-[700px]",
			bg: "bg-bgc outline-[#161a29]",
			text: "",
			title: "Globally Validated",
			desc: "Proven effective through partnerships with global organizations.",
			img: false,
			icon: "globally",
		},
		{
			key: 3,
			left: "left-0 sm:left-[466px]",
			bg: "bg-bgc outline-[#161a29]",
			text: "",
			title: "Simple & Accessible",
			desc: "Clear, actionable insights without complex jargon or barriers.",
			img: false,
			icon: "wifi",
		},
		{
			key: 2,
			left: "left-0 sm:left-[234px]",
			bg: "bg-bgc outline-[#161a29]",
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
	return (
		<div className="relative flex flex-col items-center w-full">
			<div className="w-[1200px] sm:w-full h-[1207.74px] sm:h-[1852.14px] -mt-32 sm:mt-0 absolute bg-[url(/assets/images/bg_circular_lines.svg)] bg-cover bg-[50%_0%]"></div>
			<div className="relative">
				<BgGlow
					variant="secondarySmall"
					className="sm:top-[-211px] sm:left-[-410px] !h-[143px] !w-[143px] sm:!h-[230px] sm:!w-[230px] top-[400px] left-[-100px]"
				/>
				<BgGlow
					variant="secondaryMedium"
					className="bottom-[200px] sm:top-[600px] -right-[70px] sm:right-[-250px] !h-[150px] !w-[150px] sm:!h-[223px] sm:!w-[223px]"
				/>
				<HeroSection />
			</div>
			<Ourplatformstreamlines />
			<BuildPartnership />
			<WorkplaceLeaders />
			<div className="relative">
				<BgGlow variant="secondary" className="top-[0px] sm:-top-[162px] -left-[82px] sm:-left-[60px]" />
				<BgGlow
					variant="primary"
					className="bottom-[-310px] sm:bottom-[-280px] -right-[12px] sm:-right-[60px]"
				/>
				<BgGlow
					variant="secondary"
					className="block sm:hidden top-[670px] sm:-top-[162px] -left-[160px] sm:-left-[100px]"
				/>
				<ClientTestimonials />
			</div>
			<OurMission />
			<div className="relative">
				<BgGlow variant="secondary" className="top-[190px] sm:-top-[162px] -left-[232px] sm:-left-[55px]" />
				<BgGlow
					variant="primary"
					className="bottom-[195px] sm:bottom-[-185px] -right-[132px] sm:-right-[45px]"
				/>
				<OnePlatform />
			</div>
			<FromComplexity />
			<EasyForAnyone />
			<div className="relative container !p-0">
				<BgGlow
					variant="primary"
					className="-top-[110px] sm:top-[-160px] -left-[132px] sm:-left-[60px] z-[1]"
				/>
				<BgGlow
					variant="secondary"
					className="bottom-[-270px] sm:bottom-[-460px] -right-[80px] sm:-right-[10px] !h-[181px] !w-[186px] sm:!w-[619.73px] sm:!h-[602.22px]"
				/>
				<BgGlow
					variant="secondary"
					className="block sm:hidden bottom-[100px] -left-[160px] w-[351px] h-[341px]"
				/>
				<HoveredCard cards={cards} className={"sm:h-[241px]"} classPara={""} />
			</div>
			<DesignedForEveryone />
			<div className="relative">
				<BgGlow
					variant="primary"
					className="-top-[270px] sm:top-[-180px] left-[140px] sm:-left-[130px] z-[1]"
				/>
				<ExperienceLightening />
			</div>
			<div className="relative container !p-0">
				{/* <BgGlow
					variant="primary"
					className="-bottom-[120px] sm:bottom-[-270px] -left-[132px] sm:-left-[120px] hidden sm:block"
				/> */}
				<BgGlow
					variant="secondary"
					className="top-[60px] sm:top-[275px] -left-[142px] sm:left-[550px] !h-[300px] !w-[300px] sm:!w-[619.73px] sm:!h-[602.22px]"
				/>
				<BgGlow
					variant="secondary"
					className="block sm:hidden -bottom-[120px] -right-[180px] !h-[300px] !w-[300px]"
				/>
				<ThereMoreEnterprises />
			</div>
			<BeginWithSingleProject />
			<div className="relative">
				<BgGlow className="-bottom-[49px] sm:bottom-[78px] -right-[137px] sm:right-[0px] sm:!scale-[3] blur-[30px] sm:blur-none" />
				<BgGlow
					variant="secondary"
					className="hidden sm:block -top-[279px] sm:top-[-190px] -left-[107px] sm:left-[100px] sm:!scale-[3]"
				/>
				<ReadyToRethink />
			</div>
		</div>
	);
};
export default HomePage;
