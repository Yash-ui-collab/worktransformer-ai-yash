import Icon from "components/utils/Icon";
import { JSX, useState } from "react";

export const ThereMoreEnterprises = (): JSX.Element => {
	return (
		<section className="container sm:h-[632px]">
			<div className="flex flex-col items-start gap-12 py-6 sm:py-[120px] relative flex-[0_0_auto] z-[1]">
				{/* <div className="top-[-168px] left-[-2704px] bg-primary absolute w-[620px] h-[602px] rounded-[309.87px/301.11px] blur-[250px]" /> */}

				{/* <div className="absolute w-[620px] h-[602px] top-[280px] left-[692px] bg-slate-600 rounded-[309.87px/301.11px] blur-[250px]" /> */}

				<div className="flex sm:flex-row flex-col items-center gap-6 sm:gap-[30px] w-full justify-center">
					<div className="flex flex-col items-start gap-5 sm:gap-12 relative">
						<div className="flex flex-col items-start justify-center gap-4 sm:gap-6 flex-[0_0_auto] text-center sm:text-left">
							<p className="font-semibold sm:w-full sm:dark:text-white bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent sm:text-5xl text-[28px] leading-[39px] sm:leading-[62px] sm:tracking-normal tracking-[-2px]">
								There&#39;s more: Enterprises can also evaluate their strategy against industry peers.
							</p>

							<p className="relative sm:w-[392px] font-normal text-textSecondary dark:text-textSecondaryDark text-[16px] sm:text-[18px] tracking-[0] leading-[150%]">
								Benchmark your workplace performance across 11 unique pillars and drive impactful
								change.
							</p>
						</div>

						<div className="flex w-full items-center justify-center sm:justify-start">
							<button className="flex h-[46px] sm:h-[56px] items-center justify-center gap-4 pl-[18px] pr-0.5 sm:pl-6 sm:pr-1 py-4 bg-primary rounded-[54px] ring-2 ring-white/10 self-center">
								<div className="font-semibold text-sm sm:text-base leading-6 whitespace-nowrap text-text">
									Explore Enterprise features
								</div>

								<div className="flex w-[42px] h-[42px] sm:w-12 sm:h-12 items-center justify-center gap-3.5 rounded-[40px] [background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)]">
									<Icon icon="send" className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-text" />
								</div>
							</button>
						</div>
					</div>

					<div className="relative sm:min-w-[355px] self-stretch w-full">
						<img
							className="relative sm:absolute block sm:!min-w-[555.5px] sm:!min-h-[533.59px] w-full sm:top-[-71px] sm:-right-5 h-[315px]"
							src="assets/images/ThereMoreEnterprises.svg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
