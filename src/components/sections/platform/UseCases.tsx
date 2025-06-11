import BgGlow from "components/layout/BgGlow";
import Icon from "components/utils/Icon";
import React, { JSX, useState } from "react";

export const UseCases = (): JSX.Element => {
	const [useCases, setUseCases] = useState([
		{
			id: 1,
			title: "Image",
			description: "Analyse uploaded data or partial inputs to quickly identify strategic gaps",
			image: "/assets/images/image-use-case.png",
		},
		{
			id: 2,
			title: "Image",
			description: "Accurately calculate required workspace and generate initial business case costs.",
			image: "/assets/images/image-use-case.png",
		},
		{
			id: 3,
			title: "Image",
			description:
				"Ensure alignment across HR, Corporate Real Estate, Technology, and Executive leadership teams.",
			image: "/assets/images/image-use-case.png",
		},
		{
			id: 4,
			title: "Image",
			description:
				"Efficiently convert strategic insights into compelling presentations and communications via Notepad.",
			image: "/assets/images/image-use-case.png",
		},
		{
			id: 5,
			title: "Image",
			description:
				"Conduct rapid strategic brainstorming with Ideate, leveraging insights across 11 core pillars of worktransformers.ai model.",
			image: "/assets/images/image-use-case.png",
		},
		{
			id: 6,
			title: "Image",
			description:
				"Analyze uploaded data or partiaInstantly benchmark organizational performance against industry standards inputs to quickly identify strategic gaps",
			image: "/assets/images/image-use-case.png",
		},
	]);
	return (
		<section className="container flex-col items-center gap-6 sm:gap-12 py-6 sm:pt-0 sm:pb-[72px] self-stretch w-full rounded-[0px_50px_0px_50px] flex relative flex-[0_0_auto]">
			<div className="flex sm:flex-row flex-col gap-4 sm:gap-0 sm:text-start text-center items-center justify-between sm:w-full flex-[0_0_auto]">
				<div className="sm:w-[770px] bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)]  bg-clip-text text-transparent font-semibold text-[28px] sm:text-5xl leading-[140%] sm:leading-[130%] z-[1]">
					Use cases include...
				</div>

				<p className="sm:w-[370px] font-normal text-[16px] sm:text-lg text-textSecondary dark:text-textSecondaryDark leading-[150%]">
					Quickly ideate, calculate, benchmark, and present your strategy with smart tools that work at your
					speed.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[30px] sm:gap-y-12 gap-4 ">
				{useCases.map(item => (
					<div
						key={item.id}
						className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 relative flex-1 grow bg-primarySecondary dark:bg-bgcTurnery/10 rounded-[10px] sm:rounded-3xl outline outline-solid outline-bgGray backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
						<div className="flex flex-col items-center justify-center px-4 py-6 self-stretch w-full  rounded-[10px] sm:rounded-2xl outline outline-solid outline-bgGray backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] h-[140px] sm:h-[249px] bg-white dark:bg-text/10">
							<div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] justify-center ">
								<div className="relative sm:w-[100px] w-[56px] sm:h-[100px] h-[56px]">
									<Icon icon="galary" className="h-full w-full dark:stroke-textdark" />
								</div>
								<div className="relative self-stretch font-normal text-textDark dark:text-placeholder text-[12px] sm:text-sm text-center leading-[150%]">
									{item.title}
								</div>
							</div>
						</div>
						<div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
							<p className="font-medium text-textSecondary dark:text-textSecondaryDark text-sm sm:text-lg leading-[150%]">
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
