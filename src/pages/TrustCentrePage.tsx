import BgGlow from "../components/layout/BgGlow";
import { LearnMore } from "../components/sections/TrustCenter/LearnMore";
import DataPrivacy from "../components/sections/TrustCenter/DataPrivacy";
import { HeroSection } from "../components/sections/TrustCenter/HeroSection";
import { JSX } from "react";

const TrustCenterPage = (): JSX.Element => {

	return (
		<div className="relative flex flex-col items-center w-full">
			<div
				className={`w-[1200px] sm:w-full h-[1207.74px] sm:h-[1852.14px] -mt-32 sm:mt-0 absolute
			bg-[url(/assets/images/bg_circular_lines-light.svg)] dark:bg-[url(/assets/images/bg_circular_lines.svg)]
			bg-cover bg-[50%_0%]`}></div>

			<div className="relative">
				<BgGlow
					variant="secondarySmall"
					className="sm:top-[-211px] sm:left-[-600px] !h-[143px] !w-[143px] sm:!h-[230px] sm:!w-[230px] top-[-150px] left-[-50px]"
				/>
				<BgGlow
					variant="secondaryMedium"
					className="bottom-[-125px] sm:bottom-[-135px] -left-[115px] sm:left-[-475px] !h-[150px] !w-[150px] sm:!h-[163px] sm:!w-[163px]"
				/>
				<BgGlow
					variant="secondaryMedium"
					className="bottom-[-55px] sm:bottom-[-165px] -right-[90px] sm:right-[-525px] !h-[150px] !w-[150px] sm:!h-[223px] sm:!w-[223px]"
				/>
				<HeroSection />
			</div>
			<div className="relative">
				<BgGlow className="sm:hidden block top-[698px] -right-[67px] blur-[70px]" />
				<DataPrivacy />
			</div>
			<div className="relative w-full">
				<BgGlow className="bottom-[15px] sm:top-[-40.26px] -right-[44px] sm:right-[0px] sm:blur-none blur-[37px] !w-[283px] !h-[274px] sm:!w-[619.73px] sm:!h-[602.22px] dark:sm:!scale-[3] z-[1]" />
				<LearnMore />
			</div>
		</div>
	);
};
export default TrustCenterPage;
