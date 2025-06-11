import Icon from "components/utils/Icon";
import { JSX, useState } from "react";

export const FromComplexity = (): JSX.Element => {
	return (
		<section className="container">
			<div className="flex-col items-center gap-6 sm:gap-12 py-6 sm:pt-0 sm:pb-18 flex-[0_0_auto] flex relative z-[1]">
				<div className="flex sm:flex-row flex-col gap-4 sm:gap-0 sm:text-start text-center items-center justify-between sm:w-full flex-[0_0_auto]">
					<p className="sm:w-[470px] bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent font-semibold text-[28px] sm:text-5xl leading-[39px] sm:leading-[62px]">
						From Complexity to Clarity, in Minutes.
					</p>

					<p className="sm:w-[470px] font-normal text-[16px] sm:text-lg text-textSecondary dark:text-textSecondaryDark leading-[150%]">
						Intensively trained by global workplace experts, our secure technology acts as your 24/7
						intelligence partner, integrating insights across Corporate Real Estate, HR, Operations and
						Leadership at lightning speeds.
					</p>
				</div>

				<div className="flex sm:flex-row flex-col items-center gap-6 sm:gap-[30px] self-stretch w-full flex-[0_0_auto]">
					<div className="flex flex-col sm:w-[570px] sm:h-[444px] items-center sm:items-start justify-start">
						<div className="flex sm:flex-row flex-col items-center self-stretch sm:w-full flex-[0_0_auto]">
							<div className="flex flex-col items-center sm:items-start gap-4 sm:gap-6 p-5 pb-[36px] sm:p-[30px] border-b flex-1 grow sm:border-r border-borderSecondary dark:border-hover">
								<div className="sm:w-8 sm:h-8">
									<Icon
										icon="rightbg"
										className="text-primary sm:w-[32px] w-[28px] sm:h-[32px] h-[28px] top-[3px] left-[3px]"
									/>
								</div>

								<p className="font-medium leading-[150%] text-[16px] sm:text-lg text-center sm:text-start">
									Powered by unified workplace framework grounded in extensive research.
								</p>
							</div>

							<div className="flex flex-col items-center sm:items-start gap-4 sm:gap-6 p-5 sm:p-[30px] py-9 border-b sm:border-none flex-1 grow self-stretch border-borderSecondary dark:border-hover">
								<div className="sm:w-8 sm:h-8">
									<Icon
										icon="rightbg"
										className="text-primary sm:w-[32px] w-[28px] sm:h-[32px] h-[28px] top-[3px] left-[3px]"
									/>
								</div>

								<p className="font-medium leading-[150%] text-[16px] sm:text-lg text-center sm:text-start">
									Self serve approach in natural language eliminating time losses.
								</p>
							</div>
						</div>

						<div className="flex sm:flex-row flex-col items-center self-stretch w-full flex-[0_0_auto] sm:border-t border-borderSecondary dark:border-hover">
							<div className="flex flex-col items-center sm:items-start gap-4 sm:gap-6 p-5 sm:p-[30px] py-9  flex-1 grow sm:border-r sm:border-b-0 border-b border-borderSecondary dark:border-hover">
								<div className="sm:w-8 sm:h-8">
									<Icon
										icon="rightbg"
										className="text-primary sm:w-[32px] w-[28px] sm:h-[32px] h-[28px] top-[3px] left-[3px]"
									/>
								</div>

								<p className="font-medium leading-[150%] text-[16px] sm:text-lg text-center sm:text-start">
									Optional human expert support from Work Transformers.
								</p>
							</div>

							<div className="flex flex-col items-center sm:items-start gap-4 sm:gap-6 p-5 sm:p-[30px] pt-9 flex-1 grow self-stretch">
								<div className="sm:w-8 sm:h-8">
									<Icon
										icon="rightbg"
										className="text-primary sm:w-[32px] w-[28px] sm:h-[32px] h-[28px] top-[3px] left-[3px]"
									/>
								</div>

								<p className="font-medium leading-[150%] text-[16px] sm:text-lg text-center sm:text-start">
									Significant time and cost savings compared to traditional methods.
								</p>
							</div>
						</div>
					</div>

					<div className="sm:w-[570px] sm:h-[444px] bg-hover rounded-2xl overflow-hidden z-10">
						<img
							className="sm:w-[565px] sm:h-[439px] sm:top-[5px] sm:left-[5px] h-[254px] w-[327px]"
							alt="Image"
							src="/assets/images/from-complexity.png"
						/>
					</div>
				</div>

				<button className="inline-flex h-[46px] sm:h-[56px] items-center justify-center gap-4 pl-[18px] pr-0.5 sm:pl-6 sm:pr-1 py-4 bg-primary rounded-[54px] ring-2 ring-white/10 z-10">
					<div className="text-text font-semibold text-sm sm:text-base leading-6 whitespace-nowrap">
						Learn More
					</div>

					<div className="flex w-[42px] h-[42px] sm:w-12 sm:h-12 items-center justify-center gap-3.5 rounded-[40px] [background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)]">
						<Icon icon="send" className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-text " />
					</div>
				</button>
			</div>
		</section>
	);
};
