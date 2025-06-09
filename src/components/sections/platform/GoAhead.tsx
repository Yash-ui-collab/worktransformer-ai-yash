import Icon from "components/utils/Icon";
import { JSX, useState } from "react";

export const GoAhead = (): JSX.Element => {
	return (
		<section className="container">
			<div className="flex-col items-center gap-6 sm:gap-12 py-6 sm:pt-0 sm:pb-18 flex-[0_0_auto] flex">
				<div className="flex sm:flex-row flex-col gap-4 sm:gap-0 sm:text-start text-center items-center justify-between sm:w-full flex-[0_0_auto]">
					<p className="sm:w-[670px] bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)]  bg-clip-text text-transparent font-semibold text-[28px] sm:text-5xl leading-[39px] sm:leading-[62px]">
						Go ahead, enter your query...
					</p>

					<p className="sm:w-[470px] font-normal text-[16px] sm:text-lg text-textSecondary dark:text-textSecondaryDark leading-[150%]">
						Then develop your cross functional approach from there on and let it co-create solutions with
						your inputs.
					</p>
				</div>

				<div className="flex sm:flex-row flex-col items-center gap-6 sm:gap-[30px] self-stretch w-full flex-[0_0_auto]">
					<div className="flex flex-col sm:w-[570px] sm:h-[417px] items-center sm:items-start justify-start">
						<div className="flex sm:flex-row flex-col items-center self-stretch sm:w-full flex-[0_0_auto]">
							<div className="flex flex-col items-center sm:items-start gap-4 sm:gap-6 p-5 sm:p-[30px] border-b sm:border-b-0 flex-1 grow sm:border-r border-[#D5C7C3] dark:border-hover">
								<div className="w-8 h-8">
									<img
										className="sm:w-[27px] w-[23.33px] sm:h-[27px] h-[23.33px] top-[3px] left-[3px]"
										alt="Layer"
										src="https://c.animaapp.com/mafgsxlnPAP1p3/img/layer-43.png"
									/>
								</div>

								<p className="font-medium leading-[150%] text-[16px] text-textDark dark:text-textSecondaryDark sm:text-lg text-center sm:text-start w-full sm:w-[225px]">
									Conduct comprehensive strategic assessments rapidly.
								</p>
							</div>

							<div className="flex flex-col items-center sm:items-start gap-4 sm:gap-6 p-5 sm:p-[30px] py-9 border-b sm:border-none flex-1 grow self-stretch border-[#D5C7C3] dark:border-hover">
								<div className="w-8 h-8">
									<img
										className="sm:w-[27px] w-[23.33px] sm:h-[27px] h-[23.33px] top-[3px] left-[3px]"
										alt="Layer"
										src="https://c.animaapp.com/mafgsxlnPAP1p3/img/layer-43.png"
									/>
								</div>

								<p className="font-medium leading-[150%] text-[16px] sm:text-lg text-textDark dark:text-textSecondaryDark text-center sm:text-start w-full sm:w-[225px]">
									Develop detailed strategic scenarios and plans leveraging AI
								</p>
							</div>
						</div>

						<div className="flex sm:flex-row flex-col items-center self-stretch w-full flex-[0_0_auto] sm:border-t border-[#D5C7C3] dark:border-hover">
							<div className="flex flex-col items-center sm:items-start gap-4 sm:gap-6 p-5 sm:p-[30px] py-9  flex-1 grow sm:border-r sm:border-b-0 border-b border-[#D5C7C3] dark:border-hover">
								<div className="w-8 h-8">
									<img
										className="sm:w-[27px] w-[23.33px] sm:h-[27px] h-[23.33px] top-[3px] left-[3px]"
										alt="Layer"
										src="https://c.animaapp.com/mafgsxlnPAP1p3/img/layer-43.png"
									/>
								</div>

								<p className="font-medium leading-[150%] text-[16px] text-textDark dark:text-textSecondaryDark sm:text-lg text-center sm:text-start w-full sm:w-[225px]">
									Monitor performance, impacts, and adapt strategies in real-time.
								</p>
							</div>

							<div className="flex flex-col items-center sm:items-start gap-4 sm:gap-6 p-5 sm:p-[30px] pt-9 flex-1 grow self-stretch">
								<div className="w-8 h-8">
									<img
										className="sm:w-[27px] w-[23.33px] sm:h-[27px] h-[23.33px] top-[3px] left-[3px]"
										alt="Layer"
										src="https://c.animaapp.com/mafgsxlnPAP1p3/img/layer-43.png"
									/>
								</div>

								<p className="font-medium leading-[150%] text-[16px] text-textDark dark:text-textSecondaryDark sm:text-lg text-center sm:text-start w-full sm:w-[225px]">
									Benchmark organizational performance regionally and by sector.
								</p>
							</div>
						</div>
					</div>

					<div className="sm:w-[570px] sm:h-[417px] bg-hover rounded-[10px] sm:rounded-2xl overflow-hidden z-10">
						<img
							className="sm:w-[565px] sm:h-[439px] sm:top-[5px] sm:left-[5px]"
							alt="Image"
							src="/assets/images/from-complexity.png"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
