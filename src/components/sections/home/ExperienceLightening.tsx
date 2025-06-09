import BgGlow from "components/layout/BgGlow";
import { JSX, useState } from "react";

export const ExperienceLightening = (): JSX.Element => {
	return (
		<section className="container">
			<div className="relative z-[2] flex flex-col items-center gap-6 sm:gap-12 sm:pt-0 sm:pb-20 py-6 flex-[0_0_auto]">
				<div className="absolute w-full h-[106px] sm:h-[338px] bottom-[10px] sm:bottom-[75px] bg-[#161a29] rounded-2xl sm:rounded-3xl overflow-hidden">
					<BgGlow className="bottom-[18px] sm:bottom-[50px] -left-[36px] sm:-left-28 !w-[72px] !h-[72px] sm:!w-[230px] sm:!h-[230px] !blur-[10px] sm:!blur-[30px]" />
					<BgGlow
						variant="secondary"
						className="bottom-[18px] sm:bottom-[50px] -right-[36px] sm:-right-28 !w-[72px] !h-[72px] sm:!w-[230px] sm:!h-[230px] !blur-[10px] sm:!blur-[30px]"
					/>
				</div>

				<div className="flex sm:flex-row flex-col sm:gap-0 gap-4 items-center justify-between w-full">
					<p className="sm:w-[826px] bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent font-semibold text-[28px] sm:text-5xl leading-[36px] sm:leading-[58px] sm:text-start text-center">
						Experience lightening speed of Workplace Strategy in Real-Time.
					</p>

					<p className="sm:w-[347px] font-normal leading-[150%] text-base sm:text-lg dark:text-textSecondaryDark text-textSecondary sm:text-start text-center">
						From regional projects to global HQ strategies, see how worktransformers.ai and Calculate models
						empower teams to make informed workplace decisions.
					</p>
				</div>

				<div className="sm:relative sm:w-[970px] sm:h-[500px] w-[90%] h-[170px] z-10">
					<div className="sm:relative sm:w-[976px] sm:h-[506px]  w-[295px] h-[170px] top-[-3px] left-[-3px] bg-[url(/assets/images/Experience-lightening.svg)] bg-cover bg-[50%_50%] rounded-lg sm:rounded-3xl">
						<div className="flex w-full h-full items-center justify-center">
							<div className="relative sm:w-[93px] sm:h-[93px]  w-[29.6px] h-[29.6px] -top-px -left-px bg-[#080c1d1a] rounded-[46.53px] shadow-[0px_35px_35px_#00000029] backdrop-blur-[5px] backdrop-brightness-[100%]">
								<img
									className="absolute sm:w-full sm:h-full top-0 left-0"
									alt="Vector"
									src="/assets/images/Experience-lightening-play-button.svg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
