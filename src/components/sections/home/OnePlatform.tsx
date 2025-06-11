import Icon from "components/utils/Icon";
import { JSX, useState } from "react";

export const OnePlatform = (): JSX.Element => {
	return (
		<>
			<section className="container relative z-[1]">
				<div className="flex flex-col items-center gap-6 sm:gap-12 sm:pt-0 py-6 sm:pb-18 flex-[0_0_auto]">
					<div className="flex flex-col items-start gap-6 flex-[0_0_auto]">
						<p className="sm:w-[1170px] bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent font-semibold sm:text-5xl text-[28px] leading-[39px] sm:leading-[62px]  sm:text-start text-center sm:tracking-normal tracking-[-2px]">
							1 platform, 4 intuitive modules: From questions to insights to actions. Fast.
						</p>

						<p className="font-normal text-textSecondary dark:text-textSecondaryDark text-base sm:text-lg sm:leading-[27px] sm:text-start text-center leading-[24px]">
							WorkTransformers.ai simplifies workplace strategy, transforming your questions and data into
							clear, actionable intelligence. Think of it as your always-available workplace expert
							-accessible, affordable and powerful.
						</p>
					</div>

					<div className="flex flex-col sm:flex-row sm:gap-0 gap-4 justify-between w-full flex-[0_0_auto] items-stretch">
						<div className="flex flex-col w-full sm:w-[270px] items-start justify-center gap-4 sm:gap-3 p-4 sm:p-3 dark:bg-hover bg-primarySecondary rounded-xl sm:rounded-2xl overflow-hidden outline dark:outline-cardBg outline-text">
							<div className="flex flex-col items-start gap-2.5 p-3 w-full flex-[0_0_auto]">
								<div className="flex flex-col items-center gap-3.5 sm:gap-3 w-full flex-[0_0_auto]">
									<Icon icon="lightbulb" className="w-6 h-6" />
									<div className="font-semibold leading-[150%] dark:text-white text-[20px] sm:text-2xl text-center">
										Ideate
									</div>

									<div className="flex items-center gap-[84px] w-full flex-[0_0_auto]">
										<p className="flex-1 font-medium dark:text-white text-[12px] sm:text-sm text-center leading-[150%]">
											Provides tailored recommendations and strategic insights across 11 essential
											workplace pillars.
										</p>
									</div>
								</div>
							</div>

							<div className="flex flex-col sm:h-[150px] items-center gap-4 p-5 sm:p-6 relative self-stretch w-full flex-[0_0_auto] dark:bg-slate-950 bg-text sm:rounded-xl rounded-[14.53px] border border-solid dark:border-cardBg border-text sm:w-auto">
								<div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
									<div className="self-stretch font-semibold dark:text-white text-[16px] sm:text-lg text-center leading-[19.66px]">
										Best for
									</div>

									<div className="self-stretch font-medium text-textSecondary dark:text-textSecondaryDark text-base text-[14px] text-center">
										Strategy development.
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col w-full sm:w-[270px] items-start justify-center gap-4 sm:gap-3 p-4 sm:p-3 dark:bg-hover bg-primarySecondary rounded-xl sm:rounded-2xl overflow-hidden outline dark:outline-cardBg outline-text">
							<div className="flex flex-col items-start gap-2.5 p-3 w-full flex-[0_0_auto]">
								<div className="flex flex-col items-center gap-3.5 sm:gap-3 w-full flex-[0_0_auto]">
									{/* <Lightbulb className="!relative !w-6 !h-6" /> */}
									<Icon icon="diamond-percent" className="w-6 h-6" />

									<div className="font-semibold leading-[150%] dark:text-white text-[20px] sm:text-2xl text-center">
										Calculate
									</div>

									<div className="flex items-center gap-[84px] w-full flex-[0_0_auto]">
										<p className="flex-1 font-medium dark:text-white text-[12px] sm:text-sm text-center leading-[150%]">
											Instantly determine space requirements and generate accurate early-stage
											cost projections.
										</p>
									</div>
								</div>
							</div>

							<div className="flex flex-col sm:h-[150px] items-center gap-4 p-5 sm:p-6 relative self-stretch w-full flex-[0_0_auto] dark:bg-slate-950 bg-text sm:rounded-xl rounded-[14.53px] border border-solid dark:border-cardBg border-text sm:w-auto">
								<div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
									<div className="self-stretch font-semibold dark:text-white text-[16px] sm:text-lg text-center leading-[19.66px]">
										Best for
									</div>

									<div className="self-stretch font-medium text-textSecondary dark:text-textSecondaryDark text-base text-[14px] text-center">
										Numerical scenarios and business cases.
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col w-full sm:w-[270px] items-start justify-center gap-4 sm:gap-3 p-4 sm:p-3 dark:bg-hover bg-primarySecondary rounded-xl sm:rounded-2xl overflow-hidden outline dark:outline-cardBg outline-text">
							<div className="flex flex-col items-start gap-2.5 p-3 w-full flex-[0_0_auto]">
								<div className="flex flex-col items-center gap-3.5 sm:gap-3 w-full flex-[0_0_auto]">
									<Icon icon="flame" className="w-6 h-6" />
									<div className="font-semibold leading-[150%] dark:text-white text-[20px] sm:text-2xl text-center">
										Benchmark
									</div>

									<div className="flex items-center gap-[84px] w-full flex-[0_0_auto]">
										<p className="flex-1 font-medium dark:text-white text-[12px] sm:text-sm text-center leading-[150%]">
											Quickly compare your workplace strategy against industry peers and sector
											benchmarks.
										</p>
									</div>
								</div>
							</div>

							<div className="flex flex-col sm:h-[150px] items-center gap-4 p-5 sm:p-6 relative self-stretch w-full flex-[0_0_auto] dark:bg-slate-950 bg-text sm:rounded-xl rounded-[14.53px] border border-solid dark:border-cardBg border-text sm:w-auto">
								<div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
									<div className="self-stretch font-semibold dark:text-white text-[16px] sm:text-lg text-center leading-[19.66px]">
										Best for
									</div>

									<div className="self-stretch font-medium text-textSecondary dark:text-textSecondaryDark text-base text-[14px] text-center">
										Identifying strategic priorities.
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col w-full sm:w-[270px] items-start  gap-4 sm:gap-0 p-4 sm:p-3 dark:bg-hover bg-primarySecondary rounded-xl  sm:rounded-2xl overflow-hidden outline-1 dark:outline-cardBg outline-text justify-between">
							<div className="flex flex-col items-start gap-2.5 p-3 w-full flex-[0_0_auto]">
								<div className="flex flex-col items-center gap-3.5 sm:gap-3 w-full flex-[0_0_auto]">
									<Icon icon="scan-text" className="w-6 h-6" />
									<div className="font-semibold leading-[150%] dark:text-white text-[20px] sm:text-2xl text-center">
										Enterprise Data
									</div>

									<div className="flex items-center gap-[84px] w-full flex-[0_0_auto]">
										<p className="flex-1 font-medium dark:text-white text-[12px] sm:text-sm text-center leading-[150%]">
											Securely integrate your internal data for precise, real-time insights.
										</p>
									</div>
								</div>
							</div>

							<div className="flex flex-col sm:h-[150px] items-center gap-4 p-5 sm:p-6 relative self-stretch w-full flex-[0_0_auto] dark:bg-slate-950 bg-text sm:rounded-xl rounded-[14.53px] border border-solid dark:border-cardBg border-text sm:w-auto">
								<div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
									<div className="self-stretch font-semibold dark:text-white text-[16px] sm:text-lg text-center leading-[19.66px]">
										Best for
									</div>

									<div className="self-stretch font-medium text-textSecondary dark:text-textSecondaryDark text-base text-[14px] text-center">
										Enhancing internal capabilities with trusted industry intelligence.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
