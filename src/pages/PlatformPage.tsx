import BgGlow from "components/layout/BgGlow";
import { Additional } from "components/sections/platform/Additional";
import { Empowering } from "components/sections/platform/Empowering";
import { Frequently } from "components/common/Frequently";
import { GoAhead } from "components/sections/platform/GoAhead";
import { HeroPlatformSection } from "components/sections/platform/HeroPlatformSection";
import { LearnMore } from "components/sections/platform/LearnMore";
import { UseCases } from "components/sections/platform/UseCases";
import { JSX } from "react";
import { HoveredCard } from "components/common/hoveredCard";

const PlatformPage = (): JSX.Element => {
	const questions = [
		{
			id: 1,
			question: "What benefits will my team see first?",
			answer: "Instant productivity gains. Planning that once took weeks can now be completed in hours. Most queries are resolved in minutes—no more chasing subject-matter experts. Plus, our built-in Notepad automates admin tasks like note-taking and action logs, freeing your team to focus on what matters.",
		},
		{
			id: 2,
			question: "Why is the traditional workplace strategy approach broken?",
			answer: "The traditional approach is flawed. It doesn’t account for the unique needs of each organization, and it fails to recognize the importance of data-driven decision-making. The RIBA Plan of Work is a comprehensive framework that provides a structured approach to addressing these challenges.",
		},
		{
			id: 3,
			question: "How accurate are the cost estimates?",
			answer: "The traditional approach is flawed. It doesn’t account for the unique needs of each organization, and it fails to recognize the importance of data-driven decision-making. The RIBA Plan of Work is a comprehensive framework that provides a structured approach to addressing these challenges.",
		},
		{
			id: 4,
			question: "Can I get started without having all my data?",
			answer: "The traditional approach is flawed. It doesn’t account for the unique needs of each organization, and it fails to recognize the importance of data-driven decision-making. The RIBA Plan of Work is a comprehensive framework that provides a structured approach to addressing these challenges.",
		},
		{
			id: 5,
			question: "Will my data be used to train AI or other models?",
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
	const cards = [
		{
			key: 4,
			left: "left-0 sm:left-[700px]",
			bg: "bg-bgc border-hover",
			text: "",
			title: "Notepad",
			desc: "Streamline administrative tasks by converting your conversations, strategic ideas, and analytical insights into polished, professional-grade board reports, detailed emails, actionable plans, and clear milestone tracking—all in real-time.",
			icon: "notepad",
			img: false,
		},
		{
			key: 3,
			left: "left-0 sm:left-[466px]",
			bg: "bg-bgc border-hover",
			text: "",
			title: "Benchmark",
			desc: "Conduct rapid strategic assessments to prioritise critical actions and benchmark your organisation's workplace performance against top-performing industry peers. Instantly gain clarity on your strategic position and areas for improvement.",
			icon: "line-chart",
			img: false,
		},
		{
			key: 2,
			left: "left-0 sm:left-[234px]",
			bg: "bg-bgc border-hover",
			text: "",
			title: "Calculate",
			desc: "Quickly determine accurate office space requirements and conduct detailed scenario analyses, including desk counts, hybrid working patterns, and preliminary cost estimates. Utilise current global data on fit-out costs and rental benchmarks to build robust business cases.",
			icon: "calculator",
			img: false,
		},
		{
			key: 1,
			left: "left-0",
			bg: "bg-white border-white",
			text: "text-bgc",
			title: "Ideate",
			desc: "Leverage natural language interactions to seamlessly explore strategic opportunities, uncover gaps, and access deep insights across 11 essential workplace strategy pillars. Gain immediate, actionable recommendations tailored specifically to your organisational needs",
			icon: "bulb",
			img: true,
		},
	];

	return (
		<div className="relative flex flex-col items-center w-full">
			<div className="w-[1200px] sm:w-full h-[1207.74px] sm:h-[1852.14px] -mt-32 sm:mt-0 absolute bg-[url(/assets/images/bg_circular_lines.svg)] bg-cover bg-[50%_0%]"></div>
			<div className="relative">
				<BgGlow
					variant="secondarySmall"
					className="sm:top-[-222px] sm:left-[-435px] !h-[143px] !w-[143px] sm:!h-[230px] sm:!w-[230px] top-[-150px] left-[-50px] sm:block hidden"
				/>
				<BgGlow
					variant="secondaryMedium"
					className="bottom-[100px] sm:bottom-[535px] -left-[115px] sm:left-[-250px] !h-[150px] !w-[150px] sm:!h-[163px] sm:!w-[163px]"
				/>
				<BgGlow
					variant="secondaryMedium"
					className="bottom-[190px] sm:bottom-[535px] -right-[90px] sm:right-[-250px] !h-[150px] !w-[150px] sm:!h-[223px] sm:!w-[223px] sm:scale-[230px] !scale-400"
				/>
				<HeroPlatformSection />
			</div>
			<GoAhead />
			<div className="relative">
				<BgGlow
					variant="secondary"
					className="sm:top-[-162.87px] sm:left-[-50px] sm:!w-[619.73px] sm:!h-[602.22px] !w-[252px] !h-[245px] left-[-20px] top-[90px] sm:!scale-[230px] !scale-400"
				/>
				<BgGlow className="sm:bottom-[-20px] sm:right-[-135px] opacity-[50%] sm:!w-[619.73px] sm:!h-[602.22px] !w-[309px] !h-[300px] bottom-10 right-[-10px] sm:!scale-[230px] !scale-400" />
				<UseCases />
			</div>
			<Empowering />
			<div className="relative w-full">
				<BgGlow
					variant="primary"
					className="sm:top-[126.87px] sm:left-[160px] z-[1] sm:!w-[619.73px] !w-[308.73px] sm:!h-[602.22px] !h-[300px] left-[-193px] top-[-109px]"
				/>
				<BgGlow
					variant="secondary"
					className="sm:top-[279.74px] top-[1100px] right-[-80px] sm:left-[685px] sm:!w-[619.73px] !h-[181px] !w-[186px] sm:!h-[602.22px] sm:!scale-[2.3] !scale-[3.5]"
				/>
				<div className="sm:pt-18">
					<HoveredCard cards={cards} className={"sm:h-[337px]"} classPara={"!h-full"} />
				</div>
			</div>
			<div className="relative">
				<BgGlow
					variant="secondary"
					className="sm:!w-[619.73px] !w-[186px] !h-[181px] bottom-[-90.5px] right-[-93px] sm:!h-[602.22px] sm:top-[352px] sm:left-[-63px] sm:blur-none sm:!scale-[2.3] !scale-[3.5]"
				/>
				<BgGlow
					variant="secondary"
					className="sm:!w-[619.73px] !w-[186px] !h-[181px] bottom-[-90.5px] right-[-93px] sm:!h-[602.22px] sm:top-[428.89px] sm:left-[-180px] sm:blur-none blur-180 sm:block hidden"
				/>
				<Frequently questions={questions} />
			</div>
			<Additional />
			<div className="relative w-full">
				<BgGlow className="bottom-[-130px] sm:top-[30px] -right-[104px] sm:right-[0px] sm:blur-none blur-[37px] !w-[283px] !h-[274px] sm:!w-[619.73px] sm:!h-[602.22px] z-[1] sm:!scale-[3]" />
				<LearnMore />
			</div>
		</div>
	);
};
export default PlatformPage;
