import BgGlow from "components/layout/BgGlow";
import Icon from "components/utils/Icon";
import { JSX } from "react";

export const Additional = (): JSX.Element => {
	return (
		<section className="container relative">
			<div className="justify-around gap-[67px] pt-0 pb-6 sm:pb-[72px] flex-[0_0_auto] flex items-center">
				<div className="flex flex-col items-start gap-2.5 py-[14px] px-4 sm:p-6 relative flex-1 grow bg-primarySecondary dark:dark:bg-bgcTurnery rounded-2xl sm:rounded-3xl outline outline-solid outline-[#ffffff1f] ">
					<div className="flex items-center justify-center gap-6 flex-[0_0_auto]">
						<div className="flex flex-col items-center justify-center gap-4 sm:gap-6 relative flex-1 grow">
							<p className="font-medium text-center text-[20px] text-textDark dark:text-textSecondaryDark sm:text-[32px] leading-[150%] z-[1]">
								Additional human support available through workplace experts at Work Transformers and a
								network of experts.
							</p>

							<button className=" inline-flex h-[46px] sm:h-[56px] items-center justify-center gap-4 pl-[18px] pr-0.5 sm:pl-6 sm:pr-1 py-4 bg-primary rounded-[54px] ring-2 ring-white/10 z-[1]">
								<div className="font-semibold text-sm sm:text-base leading-6 whitespace-nowrap text-text">
									Sign Up
								</div>

								<div className="flex w-[42px] h-[42px] sm:w-12 sm:h-12 items-center justify-center gap-3.5 rounded-[40px] [background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)]">
									<Icon icon="send" className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-text" />
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
			<BgGlow variant="secondary" className="sm:hidden block !w-[350px] !h-[341px] left-[-166px] top-[20px]" />
		</section>
	);
};
