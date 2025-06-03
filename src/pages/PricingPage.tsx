import BgGlow from "components/layout/BgGlow";
import Benefits from "components/sections/pricing/Benefits";
import ChooseThePlan from "components/sections/pricing/ChooseThePlan";
import { ClientTestimonials } from "components/sections/pricing/ClientTestimonials";
import { Frequently } from "components/sections/pricing/Frequently";
import { HeroSection } from "components/sections/pricing/HeroSection";
import { Interested } from "components/sections/pricing/Interested";
import PlansDetail from "components/sections/pricing/PlansDetail";
import { JSX } from "react";

const PricingPage = (): JSX.Element => {
	return (
		<div className="relative flex flex-col items-center w-full">
			<div
				className={`w-[1200px] sm:w-full h-[1192px] sm:h-[1993px] -mt-32 sm:mt-0 absolute bg-[url(/assets/images/bg_circular_lines-light.svg)] dark:bg-[url(/assets/images/bg_circular_lines.svg)] bg-cover bg-[50%_0%] bg-no-repeat`}></div>
			<div className="relative">
				<BgGlow
					variant="secondarySmall"
					className="sm:top-[-200px] sm:-left-[350px] !h-[143px] !w-[143px] sm:!h-[230px] sm:!w-[230px] top-[-150px] left-[50px]"
				/>
				<BgGlow
					variant="secondaryMedium"
					className="bottom-[-50px] sm:bottom-[-50px] -left-[0px] sm:-left-[250px] !h-[150px] !w-[150px] sm:!h-[163px] sm:!w-[163px]"
				/>
				<BgGlow
					variant="secondaryMedium"
					className="bottom-[-150px] sm:bottom-[50px] -right-[0px] sm:-right-[250px] !h-[150px] !w-[150px] sm:!h-[223px] sm:!w-[223px]"
				/>
				<HeroSection />
			</div>
			<div className="relative">
				<BgGlow className="sm:hidden block top-[649px] -right-[107px] blur-[37px]" />
				<ChooseThePlan />
			</div>

			<PlansDetail />
			<div className="relative">
				<BgGlow className="sm:block hidden -bottom-[49px] sm:top-[33.26px] -right-[107px] sm:left-[780px] sm:blur-none blur-[37px] dark:opacity-60" />
				<Benefits />
			</div>
			<div className="relative">
				<BgGlow className="top-[49px] sm:top-[70.26px] -right-[107px] sm:left-[680px] sm:blur-none blur-[37px] sm:!scale-[3]" />
				<ClientTestimonials />
			</div>
			<div className="relative">
				<BgGlow variant="secondary" className="sm:hidden block bottom-[-10px] right-[-100px]" />
				<Frequently />
			</div>
			<div className="relative w-full">
				<BgGlow className="-bottom-[49px] sm:top-[-30.26px] -right-[107px] sm:left-[820px] sm:blur-none blur-[37px]" />
				<Interested />
			</div>
		</div>
	);
};
export default PricingPage;
