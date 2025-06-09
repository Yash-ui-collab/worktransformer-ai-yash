import BgGlow from "components/layout/BgGlow";
import Icon from "components/utils/Icon";
import { JSX, useState } from "react";
import { useAppState } from "components/utils/useAppState";

export const HeroPlatformSection = (): JSX.Element => {
	const [{ isDark, userDetails }, setAppState] = useAppState();
	return (
		<section className="container flex flex-col items-center gap-[38px] sm:gap-[48px] py-6 sm:pt-[26px] sm:pb-[80px]  z-[1]">
			<div className="flex flex-col items-center gap-5 sm:gap-[30px] ">
				<div className="font-semibold bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent text-[52px] sm:text-[90px] text-center leading-[59.67px] sm:leading-[109px] w-full sm:w-[886px] tracking-[-2px]">
					Meet your intelligence copilot.
				</div>

				<p className=" w-auto sm:w-[497px] font-medium text-textSecondary dark:text-text text-base sm:text-lg text-center sm:leading-[27px] leading-[24px]">
					Unbiased and independent. Multiple abilities and use cases. Removing traditional barriers,
					accelerating clarity.
				</p>
			</div>

			<button className=" inline-flex h-[46px] sm:h-[56px] items-center justify-center gap-4 pl-[18px] pr-0.5 sm:pl-6 sm:pr-1 py-4 bg-primary rounded-[54px] ring-2 ring-white/10">
				<div className="font-semibold text-sm sm:text-base text-white leading-6 whitespace-nowrap">
					Book a Demo
				</div>

				<div className="flex w-[42px] h-[42px] sm:w-12 sm:h-12 items-center justify-center gap-3.5 rounded-[40px] [background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)]">
					<Icon icon="send" className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-white" />
				</div>
			</button>

			<div className="hidden sm:flex items-start gap-6 mt-[36px] relative ">
				<div className="flex items-center gap-2 px-6 py-3 flex-[0_0_auto] bg-primarySecondary dark:dark:bg-bgcTurnery rounded-[50px] outline outline-solid outline-[#ffffff1f] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] ">
					<img className="w-4 h-4" alt="Download" src="/assets/images/download.svg" />

					<div className=" font-normal  text-sm tracking-[0] leading-[21px] whitespace-nowrap">
						Always Accessible
					</div>
				</div>

				<div className="flex items-center gap-2 px-6 py-3 flex-[0_0_auto] bg-primarySecondary dark:bg-bgcTurnery rounded-[50px] outline outline-solid outline-[#ffffff1f] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
					<img className="w-4 h-4" alt="Download" src="/assets/images/download.svg" />

					<div className=" font-normal text-sm tracking-[0] leading-[21px] whitespace-nowrap">
						Tailored for Every Role
					</div>
				</div>

				<div className="flex items-center gap-2 px-6 py-3 flex-[0_0_auto] bg-primarySecondary dark:dark:bg-bgcTurnery rounded-[50px] outline outline-solid outline-[#ffffff1f] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
					<img className="w-4 h-4" alt="Download" src="/assets/images/download.svg" />

					<div className="text-sm leading-[21px] whitespace-nowrap font-normal  tracking-[0]">
						Instant Insights
					</div>
				</div>

				<img
					src="/assets/images/line-3.svg"
					className="absolute bottom-full z-[1] -top-[113px] -left-[4px] w-[104px] h-[165px] hidden sm:block "
				/>
				<img
					src="/assets/images/line-4.svg"
					className="absolute bottom-full z-[1] -top-[164px] -right-[21px] w-[183px] h-[305px] hidden sm:block  "
				/>

				<div className="flex flex-col items-start gap-6 p-6 absolute -top-[234px] -left-[333px] bg-primarySecondary dark:bg-bgcTurnery rounded-2xl border border-solid border-[#ffffff1f] rotate-[-4.61deg] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]">
					<div className="inline-flex flex-col items-start justify-center gap-2 relative flex-[0_0_auto]">
						<div className="flex flex-col w-[286px] items-start gap-8 relative flex-[0_0_auto]  self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-textDark dark:text-textSecondaryDark text-sm tracking-[0] leading-[21px]">
							Slow Decisions &amp; Outdated Data
						</div>

						<div className="flex flex-col w-[286px] items-start gap-8 relative flex-[0_0_auto]  self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-textDark dark:text-textSecondaryDark  text-xs tracking-[0] leading-[18px]">
							Traditional strategies can take weeks or months, delivering outdated insights.
						</div>
					</div>

					<div className="inline-flex flex-col items-start justify-center gap-2 relative flex-[0_0_auto]">
						<div className="flex flex-col w-[286px] items-start gap-8 relative flex-[0_0_auto]  self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary text-sm tracking-[0] leading-[21px]">
							Our Solution
						</div>

						<div className="flex flex-col w-[286px] items-start gap-8 relative flex-[0_0_auto]  self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-textDark dark:text-textSecondaryDark text-xs tracking-[0] leading-[18px]">
							Get real-time, actionable intelligence instantly, dramatically reducing decision-making time
							from months to minutes.
						</div>
					</div>
				</div>

				<div className="inline-flex flex-col items-start gap-6 p-6 absolute -top-[240px] -right-[346px] bg-primarySecondary dark:bg-bgcTurnery rounded-2xl border border-solid border-[#ffffff1f] rotate-[5.26deg] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]">
					<div className="inline-flex flex-col items-start justify-center gap-2 relative flex-[0_0_auto]">
						<div className="flex flex-col w-[286px] items-start gap-8 relative flex-[0_0_auto]  self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-textDark dark:text-textSecondaryDark text-sm tracking-[0] leading-[21px]">
							Fragmented and Inconsistent Standards
						</div>

						<div className="flex flex-col w-[286px] items-start gap-8 relative flex-[0_0_auto]  self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-textDark dark:text-textSecondaryDark text-xs tracking-[0] leading-[18px]">
							Existing frameworks lack clarity, leaving organisations confused.
						</div>
					</div>

					<div className="inline-flex flex-col items-start justify-center gap-2 relative flex-[0_0_auto]">
						<div className="flex flex-col w-[286px] items-start gap-8 relative flex-[0_0_auto]  self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary text-sm tracking-[0] leading-[21px]">
							Our Solution
						</div>

						<div className="flex flex-col w-[286px] items-start gap-8 relative flex-[0_0_auto]  self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-textDark dark:text-textSecondaryDark text-xs tracking-[0] leading-[18px]">
							Get real-time, actionable intelligence instantly, dramatically reducing decision-making time
							from months to minutes.
						</div>
					</div>
				</div>
			</div>

			<div className="-mt-[14px] sm:mt-[-10px] w-auto sm:w-[970px] p-2 bg-white/5 rounded-lg sm:rounded-[19.56px] shadow-[0px_35px_35px_#0000001a] sm:h-[585.75px] h-[199px]">
				<img
					className="w-full sm:w-full rounded-sm sm:rounded-[19.56px]"
					alt="Image"
					src={`/assets/images/platform-hero-img${isDark ? "" : "-light"}.svg`}
				/>
			</div>
		</section>
	);
};
