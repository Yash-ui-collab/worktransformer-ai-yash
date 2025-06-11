import Icon from "components/utils/Icon";
import { useAppState } from "components/utils/useAppState";
import { JSX, useState } from "react";

export const HeroSection = (): JSX.Element => {
	const [{ isDark }, setAppState] = useAppState();
	return (
		<section className="container flex flex-col items-center gap-[38px] sm:gap-20 py-6 sm:pt-[25px] sm:pb-[56px] relative z-[1]">
			<div className="flex flex-col items-center gap-5 sm:gap-[30px] ">
				<div className="font-semibold bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)]  bg-clip-text text-transparent text-[52px] sm:text-[90px] w-auto sm:w-[582px] text-center tracking-[-2.00px] leading-[110%] sm:leading-[109px]">
					AI. Delivered responsibly.
				</div>

				<p className=" w-[327px] sm:w-[620px] font-medium text-base text-textSecondary dark:text-text sm:text-lg text-center leading-[150%]">
					We take privacy, security and compliance seriously. Our solution meets enterprise standards to ensure your data stays safe and in your control.
				</p>
			</div>

			<div className="flex sm:flex-row flex-col items-center sm:items-start -mr-6 mt-3 gap-4 relative">
				<button className=" inline-flex h-[46px] w-auto sm:w-[246px] sm:h-[56px] items-center justify-center gap-4 pl-[18px] pr-0.5 sm:pl-6 sm:pr-1 py-4 bg-primary rounded-[54px] ring-2 dark:ring-white/10 ring-textSecondaryDark/35 text-text">
					<div className="font-semibold text-sm sm:text-base leading-6 whitespace-nowrap">
						Get Started for Free
					</div>

					<div className="flex w-[42px] h-[42px] sm:w-12 sm:h-12 items-center justify-center gap-3.5 rounded-[40px] [background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)]">
						<Icon icon="send" className="w-[18px] h-[18px] sm:w-5 sm:h-5 " />
					</div>
				</button>

				<button className=" inline-flex w-auto sm:w-[200px] h-[46px] sm:h-[56px] items-center justify-center gap-4 pl-[24px] pr-1 sm:pl-6 sm:pr-1 py-4 bg-white dark:bg-[rgb(8,12,29,1)] rounded-[54px] ring dark:ring-text ring-textSecondaryDark/35 z-10">
					<div className="font-semibold text-sm sm:text-base leading-6 whitespace-nowrap">Privacy policy</div>

					<div className="flex w-[42px] h-[42px] sm:w-12 sm:h-12 items-center justify-center gap-3.5 rounded-[40px]  bg-primary">
						<Icon icon="send" className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-text" />
					</div>
				</button>

				<img
					src={`/assets/images/line-6${isDark ? "" : "-light"}.png`}
					className=" absolute  -z-[1] -top-[230px] -left-[175px] w-[286px] h-[280px] hidden sm:block"
				/>
				<img
					src={`/assets/images/line-6${isDark ? "" : "-light"}.png`}
					className="absolute scale-x-[-1] z-[1] top-[-230px] right-[-168px] w-[286px] h-[280px] hidden sm:block"
				/>

				<div className="hidden sm:inline-flex items-center gap-2 pl-2 pr-5 py-2 absolute top-[-250px] right-[643px] bg-primarySecondary dark:bg-hover rounded-[46px] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)]">
					<div className=" w-[46px] h-[46px] rounded-[23px]">
						<div className="flex w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] items-center justify-center gap-3.5 rounded-[40px] dark:[background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)] [background:linear-gradient(180deg,#ffffff_0%,#eaeaea_100%)]">
							<Icon icon="bulb" className="w-6 h-6" />
						</div>
					</div>

					<div className="inline-flex flex-col w-[143.66px] items-start justify-center gap-0.5 flex-[0_0_auto]">
						<div className="font-semibold whitespace-nowrap">Security</div>

						<div className="font-semibold whitespace-nowrap">
							Measures
						</div>
					</div>

					<Icon icon="send" className="w-[16.35px] h-[16.35px]" />
				</div>
				<div className="hidden sm:inline-flex items-center gap-2 pl-2 pr-5 py-2 absolute top-[-252px] left-[636px] bg-primarySecondary dark:bg-hover rounded-[46px] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)]">
					<div className=" w-[46px] h-[46px] rounded-[23px]">
						<div className="flex w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] items-center justify-center gap-3.5 rounded-[40px] dark:[background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)] [background:linear-gradient(180deg,#ffffff_0%,#eaeaea_100%)]">
							<Icon icon="line-chart" className="w-6 h-6" />
						</div>
					</div>

					<div className="inline-flex flex-col w-[143.66px] items-start justify-center gap-0.5  self-stretch flex-[0_0_auto]">
						<div className="font-semibold whitespace-nowrap">Support & </div>

						<div className="font-semibold whitespace-nowrap">
							Reporting
						</div>
					</div>

					<Icon icon="send" className="w-[16.35px] h-[16.35px]" />
				</div>

				<div className="hidden sm:inline-flex items-center gap-2 pl-2 pr-5 py-2 absolute -top-[111px] right-[554px] bg-primarySecondary dark:bg-hover rounded-[46px] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)]">
					<div className=" w-[46px] h-[46px] rounded-[23px]">
						<div className="flex w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] items-center justify-center gap-3.5 rounded-[40px] dark:[background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)] [background:linear-gradient(180deg,#ffffff_0%,#eaeaea_100%)]">
							{/* <img src="/assets/images/calculator.svg" className="w-6 h-6" /> */}
							<Icon icon="calculator" className="w-6 h-6" />
						</div>
					</div>

					<div className="inline-flex flex-col w-[143.66px] items-start justify-center gap-0.5  self-stretch flex-[0_0_auto]">
						<div className="font-semibold whitespace-nowrap">Data Privacy</div>

						<div className="font-semibold whitespace-nowrap">
							Principles
						</div>
					</div>

					<Icon icon="send" className="w-[16.35px] h-[16.35px]" />
				</div>

				<div className="hidden sm:inline-flex items-center gap-2 pl-2 pr-5 py-2 absolute -top-[112px] left-[554px] bg-primarySecondary dark:bg-hover rounded-[46px] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)]">
					<div className=" w-[46px] h-[46px] rounded-[23px]">
						<div className="flex w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] items-center justify-center gap-3.5 rounded-[40px] dark:[background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)] [background:linear-gradient(180deg,#ffffff_0%,#eaeaea_100%)]">
							<Icon icon="EnterpriseData" className="w-6 h-6" />
						</div>
					</div>

					<div className="inline-flex flex-col items-start w-[143.66px] justify-center gap-0.5  self-stretch flex-[0_0_auto]">
						<div className="font-semibold whitespace-nowrap">Transparency</div>

						{/* <div className="font-normal text-xs tracking-[0] leading-[15.6px] whitespace-nowrap">
							Securely connect your information
						</div> */}
					</div>

					<Icon icon="send" className="w-[16.35px] h-[16.35px]" />
				</div>
			</div>
		</section>
	);
};
