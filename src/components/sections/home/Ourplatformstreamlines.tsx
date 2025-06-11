import BgGlow from "components/layout/BgGlow";
import Icon from "components/utils/Icon";
import React, { JSX, useState } from "react";

export const Ourplatformstreamlines = (): JSX.Element => {
	const [useCases, setUseCases] = useState([
		{
			id: 1,
			title: "Image",
			subtitle: "Personalised Insights",
			description:
				"Tailored recommendations on hybrid work, well-being, tech, sustainability, inclusion, and leadership.",
		},
		{
			id: 2,
			title: "Image",
			subtitle: "11-Pillar Assessment",
			description:
				"Evaluate your workplace across key areas including demographics, experience, sustainability, innovation, technology, well-being, flexibility, connectivity, space optimisation, inclusion, and leadership.",
		},
		{
			id: 3,
			title: "Image",
			subtitle: "Instant Document Analysis",
			description:
				"Cross check your data or current strategies against best practices, spotting strengths and areas for improvement.",
		},
		{
			id: 4,
			title: "Image",
			subtitle: "Actionable Guidance",
			description: "Easy-to-follow recommendations and practical roadmaps aligned to your goals.",
		},
		{
			id: 5,
			title: "Image",
			subtitle: "Space Scenario Planning",
			description: "Rapidly calculate your space requirements and generate high-level cost models.",
		},
		{
			id: 6,
			title: "Image",
			subtitle: "Regional Support",
			description: "Tailored insights adapted to your specific project location, type, and size.",
		},
	]);
	return (
		<section className="container flex-col items-center gap-6 sm:gap-12 py-6 sm:pt-0 sm:pb-[72px] self-stretch w-full rounded-[0px_50px_0px_50px] flex relative flex-[0_0_auto]">
			<div className="flex sm:flex-row flex-col gap-4 sm:gap-0 sm:text-start text-center items-center justify-between sm:w-full flex-[0_0_auto]">
				<div className=" text-center bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent font-semibold text-[28px] sm:text-5xl tracking-[-2px] leading-[39px] sm:leading-[62px] z-[1]">
					Our platform streamlines your workflow, enabling you to concentrate on high impact work.
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-[30px] sm:gap-y-12 gap-4">
				{useCases.map(item => (
					<div
						key={item.id}
						className="flex flex-col items-center sm:gap-0 gap-[14px] p-[14px] sm:p-4 justify-between relative flex-1 grow bg-primarySecondary dark:bg-white/5 rounded-[10px] sm:rounded-3xl outline outline-solid outline-bgGray backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] sm:h-[484px]">
						<div className="gap-[14px] sm:gap-4 flex flex-col">
							<div className="flex flex-col items-center justify-center p-5 self-stretch w-full  rounded-[10px] sm:rounded-2xl outline outline-solid outline-bgGray bg-text dark:bg-bgc backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] h-[203.46px] sm:h-[230px]">
								<div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] justify-center">
									<div className="relative w-[26px] sm:w-[32px] h-[26px] sm:h-[32px]">
										<Icon
											icon="galary"
											className="w-full h-full sm:w-[32px] sm:h-[32px] dark:stroke-textdark"
										/>
									</div>
									<div className="relative self-stretch font-normal text-textDark dark:text-placeholder sm:text-sm text-[12px] text-center leading-[18px]">
										{item.title}
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
								<p className="font-semibold text-base sm:text-[20px] sm:leading-[27px] leading-[24px]">
									{item.subtitle}
								</p>
							</div>
							<div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
								<p className="font-medium dark:text-textSecondaryDark text-sm sm:text-[16px] leading-[150%] text-textSecondary">
									{item.description}
								</p>
							</div>
						</div>
						<div className="flex flex-col items-end gap-2 relative self-stretch w-full flex-[0_0_auto]">
							<Icon icon="send" className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
