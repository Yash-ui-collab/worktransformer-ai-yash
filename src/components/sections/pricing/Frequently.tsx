import Icon from "components/utils/Icon";
import { JSX, useState } from "react";

export const Frequently = (): JSX.Element => {
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
	const [openQuestionIndex, setOpenQuestionIndex] = useState<number>(0); // Start with the first question open

	const toggleQuestion = (index: number) => {
		setOpenQuestionIndex(prevIndex => (prevIndex === index ? -1 : index));
	};

	return (
		<section className="container">
			<div className="py-6 sm:pt-0 sm:pb-[72px] flex-[0_0_auto] flex flex-col items-center gap-6 sm:gap-[48px] relative z-20">
				<div className="flex flex-col gap-6 sm:gap-12 flex-1 grow">
					<div className="text-[28px] sm:text-5xl bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text font-semibold text-transparent text-center leading-[130%]">
						Frequently Asked Questions
					</div>

					<div className="flex sm:flex-row flex-col items-start gap-[24px] relative flex-[0_0_auto]">
						<div className="flex flex-col flex-wrap w-full items-start relative flex-1 grow justify-between gap-4 sm:gap-6">
							{questions.slice(0, 5).map((cur, index) => {
								const { id, question, answer } = cur;
								return (
									<div key={id} className="self-stretch">
										<div className="flex flex-col items-start sm:w-[573px] relative flex-1 grow">
											<div
												className={`flex flex-col items-center w-full flex-[0_0_auto] ${
													openQuestionIndex === index ? "gap-4 sm:gap-6" : "gap-0 sm:gap-0"
												}`}>
												<div className="flex flex-col items-start gap-2.5 sm:px-6 px-4 sm:py-4 py-[14px] relative self-stretch w-full flex-[0_0_auto]  rounded-[0px_8px_8px_0px] border-l-2 [border-left-style:solid] border-[#f97968] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] dark:bg-[#ffffff14] bg-primarySecondary">
													<div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
														<div className="inline-flex items-center gap-3 relative flex-[0_0_auto] w-full">
															<div
																onClick={() => toggleQuestion(index)}
																className="inline-flex items-center gap-3 relative flex-[0_0_auto] w-full cursor-pointer">
																<p className="font-medium sm:text-xl  leading-[30px] self-start">
																	{id}.
																</p>
																<p className="font-medium sm:text-xl w-full leading-[150%]">
																	{question}
																</p>
																{openQuestionIndex === index ? (
																	<Icon
																		icon="minus"
																		className="h-6 w-6 cursor-pointer"
																	/>
																) : (
																	<Icon
																		icon="plus"
																		className="h-6 w-6 cursor-pointer"
																	/>
																)}
															</div>
														</div>
													</div>
												</div>

												<div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
													{openQuestionIndex === index && (
														<p className=" leading-[150%] text-sm sm:text-base font-normal text-textSecondary dark:text-text">
															{answer}
														</p>
													)}
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<div className="flex flex-col flex-wrap w-full items-start relative flex-1 grow justify-between gap-6">
							{questions.slice(5, 10).map((cur, index) => {
								const { id, question, answer } = cur;
								return (
									<div key={id} className="self-stretch">
										<div className="flex flex-col items-start sm:w-[573px] relative flex-1 grow">
											<div
												className={`flex flex-col items-center w-full flex-[0_0_auto] ${
													openQuestionIndex === index + 5
														? "gap-4 sm:gap-6"
														: "gap-0 sm:gap-0"
												}`}>
												<div className="flex flex-col items-start gap-2.5 sm:px-6 px-4 sm:py-4 py-[14px] relative self-stretch w-full flex-[0_0_auto] dark:bg-[#ffffff14] bg-primarySecondary rounded-[0px_8px_8px_0px] border-l-2 [border-left-style:solid] border-[#f97968] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
													<div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
														<div className="inline-flex items-center gap-3 relative flex-[0_0_auto] w-full">
															<div
																onClick={() => toggleQuestion(index + 5)}
																className="inline-flex items-center gap-3 relative flex-[0_0_auto] w-full cursor-pointer">
																<p className="font-medium sm:text-xl  leading-[30px] self-start">
																	{id}.
																</p>
																<p className="font-medium sm:text-xl w-full leading-[150%]">
																	{question}
																</p>
																{openQuestionIndex === index + 5 ? (
																	<Icon
																		icon="minus"
																		className="sm:h-6 sm:w-6 h-0 w-0 sm:block hidden cursor-pointer"
																	/>
																) : (
																	<Icon
																		icon="plus"
																		className="h-6 w-6 cursor-pointer"
																	/>
																)}
															</div>
														</div>
													</div>
												</div>

												<div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
													{openQuestionIndex === index + 5 && (
														<p className="leading-[150%] text-sm sm:text-base font-normal text-textSecondary dark:text-text">
															{answer}
														</p>
													)}
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="font-normal sm:text-[18px] text-[14px] leading-[150%] tracking-[0] text-center font-inter text-textSecondary dark:text-text">
					Gain strategic insights in minutes—not weeks. Generate accurate cost estimates instantly. Benchmark
					your strategy with confidence. Automate reporting to boost team productivity
				</div>
			</div>
		</section>
	);
};
