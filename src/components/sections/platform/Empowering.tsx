import { JSX } from "react";

export const Empowering = (): JSX.Element => {
	const cards = [
		{
			title: "Corporate Real Estate Leaders",
			desc: '"How can we maximise the efficiency of our office space portfolio for hybrid teams?',
			benifits: [
				"Rapidly optimise workspace use, reducing unnecessary space by 20–30%.",
				"Instantly calculate exact space requirements, accommodating flexible work policies.",
				"Easily ensure global compliance with workspace standards and local building codes.",
			],
			img: "/assets/images/Empowering1.svg",
			reverse: false,
		},
		{
			title: "HR & People Teams",
			desc: '"What are the best practices to boost employee engagement in hybrid environments?',
			benifits: [
				"Quickly implement proven employee well-being and engagement strategies.",
				"Customise actionable insights specifically for your organisational culture.",
				"Efficiently adapt people strategies for diverse teams, locations, and hybrid scenarios.",
			],
			img: "/assets/images/Empowering2.svg",
			reverse: true,
		},
		{
			title: "Finance & Operations Teams",
			desc: '"Can you provide an accurate budget forecast for relocating 300 employees to a new space in London?',
			benifits: [
				"Instantly access precise, benchmark-driven cost estimates for accurate budget planning.",
				"Minimise financial risk through real-time utilisation and scenario analysis",
				"Streamline financial forecasting processes and eliminate costly budgeting errors",
			],
			img: "/assets/images/Empowering3.svg",
			reverse: false,
		},
		{
			title: "Design & Change Consultants",
			desc: `"Review this client's document and identify the key areas for improvement.`,
			benifits: [
				"Quickly uncover critical gaps in existing strategies, RFP’s etc boosting response effectiveness.",
				"Leverage instant best practice against top industry benchmarks to provide strategic advice.",
				"Accelerate client delivery and your effectiveness with reliable, AI-driven recommendations.",
			],
			img: "/assets/images/Empowering4.svg",
			reverse: true,
		},
		{
			title: "Cross-Functional Teams (All Users)",
			desc: '"How should our CRE, HR, and Technology teams collaborate effectively for our next workplace initiative?',
			benifits: [
				"Achieve seamless strategic alignment across diverse teams and departments",
				"Utilise the Ideate module to rapidly generate holistic strategic recommendations.",
				"Turn insights instantly into clear, actionable reports, communications, and plans using the Notepad tool.",
			],
			img: "/assets/images/Empowering5.svg",
			reverse: false,
		},
	];
	return (
		<section className="container">
			<div className="flex flex-col items-start gap-6 sm:gap-12 py-6 sm:pt-12 sm:pb-18 flex-[0_0_auto]">
				<div className="flex sm:flex-row flex-col items-center sm:gap-[30px] gap-4 relative flex-[0_0_auto] text-center sm:text-left">
					<p className="w-full sm:w-[670px] bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)]  bg-clip-text text-transparent font-semibold sm:font-normal text-[28px] sm:text-5xl leading-[39px] sm:leading-[62px] tracking-[-2px]">
						Empowering everyone shaping the future of work
					</p>

					<div className="gap-3 flex flex-col w-full sm:w-[470px] items-start">
						<p className="font-normal sm:text-lg sm:leading-[27px] text-textSecondary dark:text-textSecondaryDark text-base leading-[24px]">
							Built for every leader shaping tomorrow’s workplace. Get instant insights, role-specific
							strategies, and real-time analysis to make smarter, faster decisions.
						</p>
					</div>
				</div>
				<div className="flex flex-col items-start gap-4 sm:gap-12 w-full flex-[0_0_auto]">
					{cards.map((card, index) => {
						return (
							<div
								key={index}
								className={`flex ${card.reverse ? "sm:flex-row-reverse" : "sm:flex-row"} flex-col items-start justify-center gap-4 sm:gap-[26px] relative self-stretch flex-[0_0_auto]`}>
								<div className="flex flex-col items-center justify-center p-4 sm:p-6 gap-2.5 sm:gap-3  bg-primarySecondary dark:bg-bgcTurnery/10 rounded-2xl sm:rounded-3xl outline outline-solid outline-textSecondary/5 dark:outline-text/10  w-full sm:w-[570px]">
									<div className="bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)]  bg-clip-text font-semibold text-textDark dark:text-textSecondaryDark self-start sm:text-2xl text-base leading-[150%]">
										{card.title}
									</div>

									<div className="flex flex-col items-start gap-2 sm:gap-2.5 p-2.5 sm:p-3 relative self-stretch w-full flex-[0_0_auto] rounded-[10px] sm:rounded-xl outline outline-solid outline-primary/10 ">
										<div className="font-medium text-primary sm:text-sm text-[12px] leading-[150%]">
											Prompt
										</div>

										<div className="flex flex-col items-start gap-3 w-full flex-[0_0_auto]">
											<div className="flex items-center gap-[84px] w-full flex-[0_0_auto]">
												<p className="flex-1 text-sm sm:text-base leading-[150%] font-medium text-textSecondary dark:text-textSecondaryDark">
													{card.desc}
												</p>
											</div>
										</div>
									</div>

									<div className="flex flex-col items-start gap-2.5 p-2.5 sm:p-3 relative self-stretch w-full flex-[0_0_auto] rounded-[10px] sm:rounded-xl outline outline-solid outline-primary/10 ">
										<div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
											<div className="flex flex-col items-start gap-2.5 px-0 py-3 relative self-stretch w-full flex-[0_0_auto]">
												<div className="flex flex-col items-start gap-4 w-full flex-[0_0_auto]">
													<div className=" font-medium text-primary sm:text-sm text-[12px] leading-[150%]">
														Immediate Benefits:
													</div>
													<ul className="list-disc flex flex-col items-start justify-center gap-2.5 sm:gap-3 relative self-stretch w-full flex-[0_0_auto]">
														{card.benifits.map((item, index) => (
															<li
																key={index}
																className="font-medium list-item ml-6 sm:ml-5 sm:text-base text-sm leading-[150%] text-textSecondary dark:text-textSecondaryDark">
																{item}
															</li>
														))}
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="flex flex-col items-center justify-center gap-6 relative w-full sm:w-[570px]">
									<div
										style={{ backgroundImage: `url(${card.img})` }}
										className={` bg-cover bg-[50%_50%] relative self-stretch h-[266px] w-full sm:h-[464px] rounded-[12px] sm:rounded-2xl outline outline-solid outline-[#ffffff1f]`}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
