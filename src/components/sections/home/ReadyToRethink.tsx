import BgGlow from "components/layout/BgGlow";
import Icon from "components/utils/Icon";
import { JSX, useState } from "react";

export const ReadyToRethink = (): JSX.Element => {
	return (
		<section className="w-full relative">
			<div className="flex flex-col items-center justify-center gap-2.5 flex-[0_0_auto] relative z-[1]">
				<div className="flex flex-col items-center gap-12 sm:pl-[111px] pl-6 sm:pr-[100px] pr-0 py-6 sm:py-[100px] self-stretch w-full flex-[0_0_auto] rounded-[0px_50px_0px_50px]">
					<div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-[90px] flex-[0_0_auto] sm:mr-[-151.00px]">
						<div className="flex flex-col items-start sm:gap-12 pr-6 sm:pr-0 gap-4 relative flex-[0_0_auto]">
							<div className="flex flex-col sm:w-[570px] w-full items-start gap-6 relative flex-[0_0_auto]">
								<p className="font-semibold text-[28px] sm:text-5xl leading-[36px] sm:leading-[62px] text-center sm:text-left px-2 sm:px-0">
									Ready to rethink your workplace strategy with advanced technology?
								</p>
							</div>

							<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 relative flex-[0_0_auto] w-full">
								<button className="flex h-[46px] sm:h-[56px] items-center justify-center gap-4 pl-[18px] pr-0.5 sm:pl-6 sm:pr-1 py-4 bg-primary rounded-[54px] ring-2 ring-white/10">
									<div className="font-semibold text-sm text-text sm:text-base leading-6 whitespace-nowrap">
										Start Free Today
									</div>

									<div className="flex w-[42px] h-[42px] sm:w-12 sm:h-12 items-center justify-center gap-3.5 rounded-[40px] [background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)]">
										<Icon icon="send" className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-text" />
									</div>
								</button>

								<button className=" inline-flex h-[46px] sm:h-[56px] items-center justify-center gap-4 pl-[18px] pr-0.5 sm:pl-6 sm:pr-1 py-4 bg-[rgb(8,12,29,1)] rounded-[54px] ring-2 ring-white/50 z-10">
									<div className="font-semibold text-sm text-text sm:text-base leading-6 whitespace-nowrap">
										Request Your Demo
									</div>

									<div className="flex w-[42px] h-[42px] sm:w-12 sm:h-12 items-center justify-center gap-3.5 rounded-[40px]  bg-primary">
										<Icon icon="send" className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-text" />
									</div>
								</button>
							</div>
						</div>

						<img
							className="relative w-[375px] h-[223.96px] sm:w-[720px] sm:h-[430px] object-cover z-10"
							alt="Image"
							src="/assets/images/hero-img.svg"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
