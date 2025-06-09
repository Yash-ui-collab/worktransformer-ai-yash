import BgGlow from "components/layout/BgGlow";
import Icon from "components/utils/Icon";
import { JSX, useState } from "react";

export const HeroSection = (): JSX.Element => {
	return (
		<section className="container flex flex-col items-center gap-6 sm:gap-12 py-6 sm:pt-[50px] sm:pb-[80px] relative z-[1] ">
			<div className="flex flex-col sm:gap-12 gap-[38px] items-center">
				<div className="flex flex-col items-center gap-5 sm:gap-6 ">
					<div className="h-[179px] sm:h-[186px] sm:block hidden">
						<div className="font-semibold bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)]  bg-clip-text text-transparent text-[52px] sm:text-[90px] text-center leading-[100%] tracking-[-2px]">
							Instant Workplace
						</div>
						<div className="font-semibold bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)]  bg-clip-text text-transparent text-[52px] sm:text-[90px] text-center leading-[115%] sm:mt-[-9px] tracking-[-2px]">
							Intelligence.
						</div>
					</div>
					<div className="font-semibold bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)]  bg-clip-text text-transparent text-[52px] sm:text-[90px] text-center leading-[57.2px] tracking-[-2px] sm:hidden block h-[179px]">
						Instant Workplace Intelligence.
					</div>

					<p className=" w-auto sm:w-[497px] font-medium text-base sm:text-lg text-center leading-[24px] sm:leading-[27px]">
						An industry first Workplace Strategy platform providing instant insights in natural language.
						Built to assist all leaders and professionals shaping future of work.
					</p>
				</div>

				<button className=" inline-flex h-[46px] sm:h-[56px] items-center justify-center gap-4 pl-[18px] pr-0.5 sm:pl-6 sm:pr-1 py-4 bg-primary rounded-[54px] ring-2 ring-white/10">
					<div className="font-semibold text-sm sm:text-base leading-6 whitespace-nowrap text-text">
						Book a Demo
					</div>

					<div className="flex w-[42px] h-[42px] sm:w-12 sm:h-12 items-center justify-center gap-3.5 rounded-[40px] [background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)]">
						<Icon icon="send" className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-text" />
					</div>
				</button>
			</div>

			<div className="relative h-[106px] hidden sm:block">
				<div className="inline-flex items-center gap-2 pl-2 pr-5 py-2 absolute top-[-175px] right-[300px] bg-primarySecondary dark:bg-hover rounded-[46px] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)]">
					<div className=" w-[46px] h-[46px] rounded-[23px]">
						<div className="flex w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] items-center justify-center gap-3.5 rounded-[40px] dark:[background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)] [background:linear-gradient(180deg,#ffffff_0%,#eaeaea_100%)]">
							{/* <img src="/assets/images/ideate.svg" className="w-6 h-6" /> */}
							<Icon icon="bulb" className="w-6 h-6" />
						</div>
					</div>

					<div className="inline-flex flex-col items-start justify-center gap-0.5 flex-[0_0_auto]">
						<div className="font-bold whitespace-nowrap">Ideate</div>

						<div className="font-normal text-xs tracking-[0] leading-[15.6px] whitespace-nowrap">
							Guided by robust framework
						</div>
					</div>

					<Icon icon="send" className="w-[16.35px] h-[16.35px]" />
				</div>

				<div className="inline-flex items-center gap-2 pl-2 pr-5 py-2 absolute top-[-170px] left-[300px] bg-primarySecondary dark:bg-hover rounded-[46px] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)]">
					<div className=" w-[46px] h-[46px] rounded-[23px]">
						<div className="flex w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] items-center justify-center gap-3.5 rounded-[40px] dark:[background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)] [background:linear-gradient(180deg,#ffffff_0%,#eaeaea_100%)]">
							<Icon icon="line-chart" className="w-6 h-6" />
						</div>
					</div>

					<div className="inline-flex flex-col items-start justify-center gap-0.5  self-stretch flex-[0_0_auto] w-[188.65px]">
						<div className="font-bold whitespace-nowrap">Benchmark</div>

						<div className="font-normal text-xs tracking-[0] leading-[15.6px] whitespace-nowrap">
							Against sector and geography
						</div>
					</div>

					<Icon icon="send" className="w-[16.35px] h-[16.35px]" />
				</div>

				<div className="inline-flex items-center gap-2 pl-2 pr-5 py-2 absolute top-0 right-[225px] bg-primarySecondary dark:bg-hover rounded-[46px] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)]">
					<div className=" w-[46px] h-[46px] rounded-[23px]">
						<div className="flex w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] items-center justify-center gap-3.5 rounded-[40px] dark:[background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)] [background:linear-gradient(180deg,#ffffff_0%,#eaeaea_100%)]">
							{/* <img src="/assets/images/calculator.svg" className="w-6 h-6" /> */}
							<Icon icon="calculator" className="w-6 h-6" />
						</div>
					</div>

					<div className="inline-flex flex-col items-start justify-center gap-0.5  self-stretch flex-[0_0_auto]">
						<div className="font-bold whitespace-nowrap">Calculate</div>

						<div className="font-normal text-xs tracking-[0] leading-[15.6px] whitespace-nowrap">
							Using benchmarked data
						</div>
					</div>

					<Icon icon="send" className="w-[16.35px] h-[16.35px]" />
				</div>

				<div className="inline-flex items-center gap-2 pl-2 pr-5 py-2 absolute top-0 left-[225px] bg-primarySecondary dark:bg-hover rounded-[46px] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)]">
					<div className=" w-[46px] h-[46px] rounded-[23px]">
						<div className="flex w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] items-center justify-center gap-3.5 rounded-[40px] dark:[background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)] [background:linear-gradient(180deg,#ffffff_0%,#eaeaea_100%)]">
							{/* <img src="/assets/images/enterprise-data.svg" className="w-6 h-6" /> */}
							<Icon icon="EnterpriseData" className="w-6 h-6" />
						</div>
					</div>

					<div className="inline-flex flex-col items-start justify-center gap-0.5  self-stretch flex-[0_0_auto]">
						<div className="font-bold whitespace-nowrap">Enterprise Data</div>

						<div className="font-normal text-xs tracking-[0] leading-[15.6px] whitespace-nowrap">
							Securely connect your information
						</div>
					</div>

					<Icon icon="send" className="w-[16.35px] h-[16.35px]" />
				</div>
			</div>

			<div className="sm:mt-0 w-auto sm:w-[970px] h-auto sm:h-auto p-0 sm:p-2 bg-white/5 rounded-lg sm:rounded-[19.56px] shadow-[0px_35px_35px_#0000001a] relative">
				<img
					src="/assets/images/line-1.svg"
					className="absolute bottom-full left-[185px] w-[183px] h-[304px] hidden sm:block "
				/>
				<img
					src="/assets/images/line-2.svg"
					className="absolute bottom-[99%] left-[266px] w-[75px] h-[149px] hidden sm:block "
				/>

				<img
					src="/assets/images/line-1.svg"
					className="absolute bottom-full right-[185px] w-[183px] h-[304px] hidden sm:block scale-x-[-1]"
				/>
				<img
					src="/assets/images/line-2.svg"
					className="absolute bottom-[99%] right-[266px] w-[75px] h-[149px] hidden sm:block scale-x-[-1]"
				/>
				<img
					className="w-full sm:w-full rounded-sm sm:rounded-[19.56px] h-[199px] sm:h-auto"
					alt="Image"
					src="/assets/images/hero-img.svg"
				/>
			</div>
		</section>
	);
};
