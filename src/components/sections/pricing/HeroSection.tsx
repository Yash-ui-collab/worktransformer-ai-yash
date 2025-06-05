import Icon from "components/utils/Icon";
import { useAppState } from "components/utils/useAppState";
import { JSX, useState } from "react";

export const HeroSection = (): JSX.Element => {
	const [{ isDark, userDetails }, setAppState] = useAppState();
	return (
		<section className="container flex flex-col items-center gap-[38px] sm:gap-12 py-6 sm:pt-[50px] sm:pb-[38px] relative z-[1]">
			<div className="flex flex-col items-center gap-5 sm:gap-[30px] ">
				<div className="font-semibold bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)]  bg-clip-text text-transparent text-[52px] sm:text-[90px] w-auto sm:w-[582px] text-center tracking-[-2.00px] leading-[110%] sm:leading-[109px]">
					Simple. Fast. Affordable.
				</div>

				<p className=" w-[327px] sm:w-[620px] font-medium text-base sm:text-lg text-center leading-[150%]">
					Explore flexible plans tailored for individuals, teams, and enterprises. Start free — upgrade
					anytime.
				</p>
			</div>
			<div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4">
				<button className=" inline-flex h-[46px] w-auto sm:w-[246px] sm:h-[56px] items-center justify-center gap-4 pl-[18px] pr-0.5 sm:pl-6 sm:pr-1 py-4 bg-primary rounded-[54px] ring-2 dark:ring-white/10 ring-textSecondaryDark/35 text-text">
					<div className="font-semibold text-sm sm:text-base leading-6 whitespace-nowrap">
						Get Started for Free
					</div>

					<div className="flex w-[42px] h-[42px] sm:w-12 sm:h-12 items-center justify-center gap-3.5 rounded-[40px] [background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)]">
						<Icon icon="send" className="w-[18px] h-[18px] sm:w-5 sm:h-5 " />
					</div>
				</button>

				<button className=" inline-flex w-auto sm:w-[200px] h-[46px] sm:h-[56px] items-center justify-center gap-4 pl-[24px] pr-1 sm:pl-6 sm:pr-1 py-4 dark:bg-[rgb(8,12,29,1)] rounded-[54px] ring dark:ring-text ring-textSecondaryDark/35 z-10">
					<div className="font-semibold text-sm sm:text-base leading-6 whitespace-nowrap">Contact Sales</div>

					<div className="flex w-[42px] h-[42px] sm:w-12 sm:h-12 items-center justify-center gap-3.5 rounded-[40px]  bg-primary">
						<Icon icon="send" className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-text" />
					</div>
				</button>
			</div>

			<div className="hidden sm:flex items-start -mr-6 mt-3 gap-6  relative">
				<div className="relative z-[2] w-[195px] h-[45px] flex items-center gap-2 px-6 py-3 flex-[0_0_auto] bg-primarySecondary dark:bg-white/10 rounded-[50px] border border-solid border-textSecondary/15 dark:border-white/15 backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] ">
					<img className="w-4 h-4" alt="Download" src="/assets/images/download.svg" />

					<div className=" font-normal  text-sm tracking-[0] leading-[21px] whitespace-nowrap">
						Always Accessible
					</div>
				</div>

				<div className="w-[221px] h-[45px] flex items-center gap-2 px-6 py-3 flex-[0_0_auto] bg-primarySecondary dark:bg-white/10 rounded-[50px] border border-solid border-textSecondary/15 dark:border-white/15 backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
					<img className="w-4 h-4" alt="Download" src="/assets/images/download.svg" />

					<div className=" font-normal  text-sm tracking-[0] leading-[21px] whitespace-nowrap">
						Tailored for Every Role
					</div>
				</div>

				<div className="w-[173px] h-[45px] relative z-[2] flex items-center gap-2 px-6 py-3 flex-[0_0_auto] bg-primarySecondary dark:bg-white/10 rounded-[50px] border border-solid border-textSecondary/15 dark:border-white/15 backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
					<img className="w-4 h-4" alt="Download" src="/assets/images/download.svg" />

					<div className="text-sm leading-[21px] whitespace-nowrap font-normal  tracking-[0]">
						Instant Insights
					</div>
				</div>

				<img
					src={`/assets/images/line-5-left${isDark ? "" : "-light"}.svg`}
					className=" z-[1]  absolute w-[183px] h-[310px] -top-[272px] -left-[160px] hidden sm:block"
				/>
				<img
					src={`/assets/images/line-5-right${isDark ? "" : "-light"}.svg`}
					className="absolute  z-[1] -top-[280px] -right-[152px] w-[184px] h-[310px] hidden sm:block"
				/>

				<div className="absolute -top-[328px] -left-[308px] flex flex-col items-center justify-center gap-4 w-[225px] h-[102px] rounded-xl bg-primarySecondary dark:bg-bgcTurnery">
					<Icon icon="diamond-percent" className="w-6 h-6" />
					<div className="text-base font-medium w-[185px] text-center bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent">
						HR & People Teams
					</div>
				</div>
				<div className="absolute -top-[167px] -left-[296px] flex flex-col items-center justify-center gap-4 w-[225px] h-[124px] rounded-xl bg-primarySecondary dark:bg-bgcTurnery">
					<Icon icon="diamond-percent" className="w-6 h-6" />
					<div className="text-base font-medium w-[185px] text-center bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent">
						Corporate Real Estate Leaders
					</div>
				</div>
				<div className="absolute -top-[326px] -right-[327px] flex flex-col items-center justify-center gap-4 w-[225px] h-[124px] rounded-xl bg-primarySecondary dark:bg-bgcTurnery">
					<Icon icon="diamond-percent" className="w-6 h-6" />
					<div className="text-base font-medium w-[185px] text-center bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent">
						Finance & <br /> Operations
					</div>
				</div>
				<div className="absolute -top-[153px] -right-[284px] flex flex-col items-center justify-center gap-4 w-[225px] h-[124px] rounded-xl bg-primarySecondary dark:bg-bgcTurnery">
					<Icon icon="diamond-percent" className="w-6 h-6" />
					<div className="text-base font-medium w-[185px] text-center bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent">
						Design & Change Consultants
					</div>
				</div>
			</div>
		</section>
	);
};
