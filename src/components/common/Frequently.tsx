import Icon from "components/utils/Icon";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export type Props = {
	questions: any;
};
export const Frequently: React.FC<Props> = ({ questions }) => {
	const location = useLocation();
	const [openQuestionIndex, setOpenQuestionIndex] = useState<number>(0); // Start with the first question open

	const toggleQuestion = (index: number) => {
		setOpenQuestionIndex(prevIndex => (prevIndex === index ? -1 : index));
	};

	return (
		<section className="container">
			<div className="py-6 sm:pt-0 sm:pb-[72px] flex-[0_0_auto] flex flex-col items-center gap-6 sm:gap-[48px] relative z-20">
				<div className="flex flex-col gap-6 sm:gap-12 flex-1 grow">
					<div className="text-[28px] sm:text-5xl bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text font-semibold text-transparent text-center leading-[36px] sm:leading-[62px]">
						Frequently Asked Questions
					</div>

					<div className="flex sm:flex-row flex-col items-start gap-4 sm:gap-[24px] relative flex-[0_0_auto]">
						<div className="flex flex-col flex-wrap w-full items-start relative flex-1 grow justify-between gap-4 sm:gap-6">
							{questions.slice(0, 5).map((cur: any, index: number) => {
								const { id, question, answer } = cur;
								return (
									<div key={id} className="self-stretch">
										<div className="flex flex-col items-start sm:w-[573px] relative flex-1 grow">
											<div
												className={`flex flex-col items-center w-full flex-[0_0_auto] ${
													openQuestionIndex === index
														? "gap-[16px] sm:gap-6"
														: "gap-0 sm:gap-0"
												}`}>
												<div className="flex flex-col items-start gap-2.5 sm:px-6 px-4 sm:py-4 py-[14px] relative self-stretch w-full flex-[0_0_auto] dark:bg-text/8 bg-primarySecondary rounded-[0px_8px_8px_0px] border-l-2 [border-left-style:solid] border-primary backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
													<div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
														<div className="inline-flex items-center gap-3 relative flex-[0_0_auto] w-full">
															<div
																onClick={() => toggleQuestion(index)}
																className="inline-flex items-baseline sm:gap-3 relative flex-[0_0_auto] w-full cursor-pointer">
																<p className="font-medium sm:text-xl  leading-[150%] self-start  mr-1 sm:mr-0">
																	{id}.
																</p>
																<p className="font-medium text-base sm:text-xl w-full leading-[24px] sm:leading-[30px]">
																	{question}
																</p>
																{openQuestionIndex === index ? (
																	<Icon
																		icon="minus"
																		className="sm:opacity-100 opacity-0 sm:h-6 sm:w-6 h-4 w-4 sm:block  cursor-pointer self-start sm:mt-0 mt-1"
																	/>
																) : (
																	<Icon
																		icon="plus"
																		className="sm:h-6 sm:w-6 h-4 w-4 cursor-pointer self-start sm:mt-1 mt-1"
																	/>
																)}
															</div>
														</div>
													</div>
												</div>

												<div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
													{openQuestionIndex === index && (
														<p className=" leading-[21px] sm:leading-[24px] text-sm sm:text-base font-normal text-textSecondary dark:text-text">
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
						<div className="flex flex-col flex-wrap w-full items-start relative flex-1 grow justify-between gap-4 sm:gap-6">
							{questions.slice(5, 10).map((cur: any, index: number) => {
								const { id, question, answer } = cur;
								return (
									<div key={id} className="self-stretch">
										<div className="flex flex-col items-start sm:w-[573px] relative flex-1 grow">
											<div
												className={`flex flex-col items-center w-full flex-[0_0_auto] ${
													openQuestionIndex === index + 5
														? "gap-[16px] sm:gap-6"
														: "gap-0 sm:gap-0"
												}`}>
												<div className="flex flex-col items-start gap-2.5 sm:px-6 px-4 sm:py-4 py-[14px] relative self-stretch w-full flex-[0_0_auto] dark:bg-text/8 bg-primarySecondary rounded-[0px_8px_8px_0px] border-l-2 [border-left-style:solid] border-primary backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
													<div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
														<div className="inline-flex items-center gap-3 relative flex-[0_0_auto] w-full">
															<div
																onClick={() => toggleQuestion(index + 5)}
																className="inline-flex items-baseline sm:gap-3 relative flex-[0_0_auto] w-full cursor-pointer">
																<p className="font-medium sm:text-xl  leading-[150%] self-start mr-1 sm:mr-0">
																	{id}.
																</p>
																<p className="font-medium sm:text-xl w-full leading-[150%] text-base ">
																	{question}
																</p>
																{openQuestionIndex === index + 5 ? (
																	<Icon
																		icon="minus"
																		className="sm:h-6 sm:w-6 h-0 w-0 sm:block hidden cursor-pointer self-start sm:mt-0 mt-1"
																	/>
																) : (
																	<Icon
																		icon="plus"
																		className="sm:h-6 sm:w-6 h-4 w-4 cursor-pointer self-start sm:mt-1 mt-1 ml-1"
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
				{location.pathname === "/pricing" && (
					<div className="font-normal sm:text-[18px] text-[14px] leading-[150%] tracking-[0] text-center font-inter text-textSecondary dark:text-text">
						"Gain strategic insights in minutes—not weeks. Generate accurate cost estimates instantly.
						Benchmark your strategy with confidence. Automate reporting to boost team productivity"
					</div>
				)}
			</div>
		</section>
	);
};
