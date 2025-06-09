import { JSX, useState } from "react";

export const OurMission = (): JSX.Element => {
	return (
		<section className="container relative z-[1]">
			<div className="flex items-center justify-between sm:py-0 py-6 sm:pt-0 sm:pb-18 flex-[0_0_auto] sm:flex-row flex-col sm:gap-0 gap-6">
				<div className="flex-col w-auto sm:w-[570px] sm:text-start text-center items-start gap-4 sm:gap-6 flex relative">
					<p
						className="bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent font-semibold
						text-[28px] sm:text-5xl leading-[39px] sm:leading-[62px] self-center tracking-[-1px]">
						Our mission: Simplify access to global intelligence to make a better world of work accessible by
						everyone.
					</p>

					<div className="flex-col sm:text-start text-center items-start gap-3 w-full flex-[0_0_auto] flex">
						<p className="sm:text-lg leading-[150%] text-textSecondary dark:text-textSecondaryDark font-normal text-[16px]">
							Many organisations struggle with slow decisions, costly consultants, and complex workplace
							planning.
						</p>

						<p className="sm:text-lg leading-[150%] text-textSecondary dark:text-textSecondaryDark font-normal text-[16px]">
							Unlike traditional consultancy methods, our platform is fast, affordable, and easy to
							use—offering clear, actionable advice in everyday language.
						</p>
					</div>
				</div>

				<div className="relative w-auto sm:w-[570px]">
					<img className="w-full sm:h-auto h-[258px]" alt="Image" src="/assets/images/our-mission-img.svg" />
				</div>
			</div>
		</section>
	);
};
