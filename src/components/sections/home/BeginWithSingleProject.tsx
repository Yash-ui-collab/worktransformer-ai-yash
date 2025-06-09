import Icon from "components/utils/Icon";
import { JSX, useState } from "react";

export const BeginWithSingleProject = (): JSX.Element => {
	return (
		<section className="container">
			<div className="flex flex-col items-center gap-6 sm:gap-12 py-6 sm:pt-18 sm:pb-0 flex-[0_0_auto]">
				<div className="flex sm:flex-row flex-col items-center justify-between relative self-stretch w-full flex-[0_0_auto] text-center sm:text-start sm:gap-0 gap-4">
					<p className="sm:w-[670px] bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent font-semibold text-[28px] sm:text-5xl leading-[36px] sm:leading-[62px]">
						Begin with a Single Project and Scale Rapidly.
					</p>

					<p className="relative sm:w-[416px] font-normal text-textSecondary dark:text-textSecondaryDark text-[16px] sm:text-lg leading-[150%]">
						No need for a company-wide rollout. Start with one person, one site, or one region, and expand
						your strategy from there.
					</p>
				</div>

				<img
					className="relative self-stretch w-full object-cover z-10 sm:h-[698.75px] h-[196px]"
					alt="Image"
					src="/assets/images/BeginWithSingleProject.svg"
				/>

				<button className=" inline-flex h-[46px] sm:h-[56px] items-center justify-center gap-4 pl-[18px] pr-0.5 sm:pl-6 sm:pr-1 py-4 bg-primary rounded-[54px] ring-2 ring-white/10 z-10">
					<div className="font-semibold text-sm sm:text-base leading-6 whitespace-nowrap text-text">
						Get Started
					</div>

					<div className="flex w-[42px] h-[42px] sm:w-12 sm:h-12 items-center justify-center gap-3.5 rounded-[40px] [background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)]">
						<Icon icon="send" className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-text" />
					</div>
				</button>
			</div>
		</section>
	);
};
