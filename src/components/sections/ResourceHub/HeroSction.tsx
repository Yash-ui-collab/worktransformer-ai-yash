import BgGlow from "components/layout/BgGlow";
import Icon from "components/utils/Icon";
import { useAppState } from "components/utils/useAppState";
import { JSX } from "react";

export const HeroSection = (): JSX.Element => {
	const [{ isDark, userDetails }, setAppState] = useAppState();
	return (
		<section className="container relative  flex flex-col items-center justify-center py-6 sm:pt-[52px] sm:pb-24 z-[1]">
			{/* Heading */}
			<div className=" flex flex-col gap-[30px]">
				<div className="relative sm:leading-[109px] leading-[110%] w-full sm:text-[90px] text-[52px] font-semibold tracking-[-2px]  bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent text-center  ">
					Resource Hub
				</div>
				{/* Subtitle */}
				<p className="text-[18px] font-medium leading-[150%] dark:text-text text-textSecondary text-center w-[620px] sm:block hidden">
					Access practical guides, real-world success stories and strategic insights to transform your
					workplace.
				</p>
			</div>

			{/* Buttons */}
			<div className="flex flex-col sm:flex-row items-center sm:mt-[140px] mt-[38px] sm:gap-4 gap-[14px] relative">
				<button className=" inline-flex h-[46px] w-[209px] sm:w-full  sm:h-[56px] items-center justify-center gap-4 pl-[18px] pr-0.5 sm:pl-6 sm:pr-1 py-4 bg-primary rounded-[54px] ring-2 dark:ring-white/10 ring-textSecondaryDark/35 text-text relative z-[2]">
					<div className="font-semibold text-sm sm:text-base leading-6 whitespace-nowrap">
						Explore Resources
					</div>

					<div className="flex w-[42px] h-[42px] sm:w-12 sm:h-12 items-center justify-center gap-3.5 rounded-[40px] [background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)]">
						<Icon icon="send" className="w-[18px] h-[18px] sm:w-5 sm:h-5 " />
					</div>
				</button>

				<button className=" inline-flex w-auto  h-[46px] sm:h-[56px] items-center justify-center gap-4 pl-[24px] pr-1 sm:pl-6 sm:pr-1 py-4 dark:bg-[rgb(8,12,29,1)] rounded-[54px] ring dark:ring-text ring-textSecondaryDark/35 z-10">
					<div className="font-semibold text-sm sm:text-base leading-6 whitespace-nowrap">Get in touch</div>

					<div className="flex w-[42px] h-[42px] sm:w-12 sm:h-12 items-center justify-center gap-3.5 rounded-[40px]  bg-primary">
						<Icon icon="send" className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-text" />
					</div>
				</button>
				<img
					src={`/assets/images/line-6${isDark ? "" : "-light"}.png`}
					className=" absolute  z-[1] -top-[277px] -left-[187px] w-[286px] h-[280px] hidden sm:block"
				/>
				<img
					src={`/assets/images/line-6${isDark ? "" : "-light"}.png`}
					className="absolute scale-x-[-1] z-[1] top-[-280px] right-[-186px] w-[286px] h-[280px] hidden sm:block"
				/>
			</div>
			{/* Feature Cards */}
			<div className="hidden sm:block  absolute w-full max-w-[1100px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
				{/* Top Left */}
				<div className="absolute left-[-30px] top-[-43px] flex items-center gap-2 bg-primarySecondary dark:bg-bgcTurnery rounded-full pl-2 pr-[20px] py-2  pointer-events-auto w-[250px] h-[62px]">
					<div className="flex w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] items-center justify-center  rounded-full shrink-0 dark:[background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)] [background:linear-gradient(180deg,#ffffff_0%,#eaeaea_100%)]">
						<Icon icon="planning" className="text-textDark dark:text-text w-6 h-6" />
					</div>

					<div>
						<div className="font-semibold dark:text-white text-textDark text-[16px] leading-[1.3]">
							Significant Time Savings
						</div>
					</div>
					<Icon icon="send" className="w-[16.35px] h-[16.35px] shrink-0" />
				</div>
				{/* Top Right */}
				<div className="absolute right-[-30px] top-[-43px] flex items-center gap-2 bg-primarySecondary dark:bg-bgcTurnery rounded-full pl-2 pr-[20px] py-2  pointer-events-auto w-[250px] h-[62px]">
					<div className="flex w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] items-center justify-center  rounded-full shrink-0 dark:[background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)] [background:linear-gradient(180deg,#ffffff_0%,#eaeaea_100%)]">
						<Icon icon="line-chart" className="text-textDark dark:text-text w-6 h-6" />
					</div>
					<div>
						<div className="font-semibold dark:text-white text-textDark text-[16px] leading-[1.3]">
							Customised AI Solutions
						</div>
					</div>
					<Icon icon="send" className="w-[16.35px] h-[16.35px] shrink-0" />
				</div>

				{/* Bottom Left */}
				<div
					className="absolute -left-[111px] top-[-182px]
  bottom-0 flex items-center gap-2 bg-primarySecondary dark:bg-bgcTurnery rounded-full pl-2 pr-[20px] py-2  pointer-events-auto w-[250px] h-[62px]">
					<div className="flex w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] items-center justify-center  rounded-full shrink-0 dark:[background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)] [background:linear-gradient(180deg,#ffffff_0%,#eaeaea_100%)]">
						<Icon icon="bulb" className="text-textDark dark:text-text w-6 h-6" />
					</div>
					<div>
						<div className="font-semibold dark:text-white text-textDark text-[16px] leading-[1.3]">
							Enhanced Security & Privacy
						</div>
					</div>
					<Icon icon="send" className="w-[16.35px] h-[16.35px] shrink-0" />
				</div>
				{/* Bottom Right */}
				<div className="absolute left-[961px] top-[-186px] right-0 bottom-0 flex items-center gap-2 bg-primarySecondary dark:bg-bgcTurnery rounded-full pl-2 pr-[20px] py-2  pointer-events-auto w-[250px] h-[62px]">
					<div className="flex w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] items-center justify-center  rounded-full shrink-0 dark:[background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)] [background:linear-gradient(180deg,#ffffff_0%,#eaeaea_100%)]">
						<Icon icon="calculator" className="text-textDark dark:text-text w-6 h-6" />
					</div>
					<div>
						<div className="font-semibold dark:text-white text-textDark leading-[1.3] text-[16px]">
							Advanced Data Integration
						</div>
					</div>
					<Icon icon="send" className="w-[16.35px] h-[16.35px] shrink-0" />
				</div>
			</div>
		</section>
	);
};
