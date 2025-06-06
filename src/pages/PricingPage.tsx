import BgGlow from "components/layout/BgGlow";
import Benefits from "components/sections/pricing/Benefits";
import ChooseThePlan from "components/sections/pricing/ChooseThePlan";
import { ClientTestimonials } from "components/common/ClientTestimonials";
import { Frequently } from "components/common/Frequently";
import { HeroSection } from "components/sections/pricing/HeroSection";
import { Interested } from "components/sections/pricing/Interested";
import PlansDetail from "components/sections/pricing/PlansDetail";
import { JSX } from "react";

const PricingPage = (): JSX.Element => {
	const questions = [
		{
			id: 1,
			question: "How do tokens work across modules?",
			answer: "Instant productivity gains. Planning that once took weeks can now be completed in hours. Most queries are resolved in minutes—no more chasing subject-matter experts. Plus, our built-in Notepad automates admin tasks like note-taking and action logs, freeing your team to focus on what matters.",
		},
		{
			id: 2,
			question: "What happens when I run out of tokens?",
			answer: "The traditional approach is flawed. It doesn’t account for the unique needs of each organization, and it fails to recognize the importance of data-driven decision-making. The RIBA Plan of Work is a comprehensive framework that provides a structured approach to addressing these challenges.",
		},
		{
			id: 3,
			question: "Can I upgrade or downgrade my plan anytime?",
			answer: "The traditional approach is flawed. It doesn’t account for the unique needs of each organization, and it fails to recognize the importance of data-driven decision-making. The RIBA Plan of Work is a comprehensive framework that provides a structured approach to addressing these challenges.",
		},
		{
			id: 4,
			question: "Is my data safe and private?",
			answer: "The traditional approach is flawed. It doesn’t account for the unique needs of each organization, and it fails to recognize the importance of data-driven decision-making. The RIBA Plan of Work is a comprehensive framework that provides a structured approach to addressing these challenges.",
		},
		{
			id: 5,
			question: "Do you offer annual pricing discounts?",
			answer: "The traditional approach is flawed. It doesn’t account for the unique needs of each organization, and it fails to recognize the importance of data-driven decision-making. The RIBA Plan of Work is a comprehensive framework that provides a structured approach to addressing these challenges.",
		},
		{
			id: 6,
			question: "Does worktransformers.ai replace consultants?",
			answer: "The traditional approach is flawed. It doesn’t account for the unique needs of each organization, and it fails to recognize the importance of data-driven decision-making. The RIBA Plan of Work is a comprehensive framework that provides a structured approach to addressing these challenges.",
		},
		{
			id: 7,
			question: "How long does onboarding take?",
			answer: "The traditional approach is flawed. It doesn’t account for the unique needs of each organization, and it fails to recognize the importance of data-driven decision-making. The RIBA Plan of Work is a comprehensive framework that provides a structured approach to addressing these challenges.",
		},
		{
			id: 8,
			question: "What kind of support do we get after launch?",
			answer: "The traditional approach is flawed. It doesn’t account for the unique needs of each organization, and it fails to recognize the importance of data-driven decision-making. The RIBA Plan of Work is a comprehensive framework that provides a structured approach to addressing these challenges.",
		},
		{
			id: 9,
			question: "Doesn’t the RIBA Plan of Work already give us a framework?",
			answer: "The traditional approach is flawed. It doesn’t account for the unique needs of each organization, and it fails to recognize the importance of data-driven decision-making. The RIBA Plan of Work is a comprehensive framework that provides a structured approach to addressing these challenges.",
		},
		{
			id: 10,
			question: "Why was worktransformers.ai model created?",
			answer: "The traditional approach is flawed. It doesn’t account for the unique needs of each organization, and it fails to recognize the importance of data-driven decision-making. The RIBA Plan of Work is a comprehensive framework that provides a structured approach to addressing these challenges.",
		},
	];

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
				<ChooseThePlan />
			</div>
			<PlansDetail />
			<div className="relative">
				<BgGlow className="sm:block hidden -bottom-[49px] sm:bottom-0 -right-[107px] sm:right-[-125px] sm:blur-none blur-[37px] dark:opacity-60" />
				<Benefits />
			</div>
			<div className="relative">
				<BgGlow className="top-[47px] sm:top-[70.26px] -right-[57px] sm:right-[-60px] sm:blur-none blur-[37px] sm:!scale-[3] !w-[314px] !h-[305px] sm:!w-[619.73px] sm:!h-[602.22px]" />
				<ClientTestimonials />
			</div>
			<div className="relative">
				<BgGlow
					variant="secondary"
					className="sm:hidden block bottom-[-10px] right-[-100px] !w-[186px] !h-[181px]"
				/>
				<Frequently questions={questions} />
			</div>
			<div className="relative w-full">
				<BgGlow className="bottom-[15px] sm:top-[-40.26px] -right-[44px] sm:right-[0px] sm:blur-none blur-[37px] !w-[283px] !h-[274px] sm:!w-[619.73px] sm:!h-[602.22px] dark:sm:!scale-[3] z-[1]" />
				<Interested />
			</div>
		</div>
	);
};
export default PricingPage;
