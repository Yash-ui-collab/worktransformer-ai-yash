import BgGlow from "components/layout/BgGlow";
import Icon from "components/utils/Icon";
import React, { JSX, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

const Documentation = (): JSX.Element => {
	const [useCases] = useState([
		{
			id: 1,
			title: "Image",
			description: "Destination 2.0 Comprehensive User Guide",
			text: "View Guide",
		},
		{
			id: 2,
			title: "Image",
			description: "Calculate Module Specifications and Instructions",
			text: "View Guide",
		},
		{
			id: 3,
			title: "Image",
			description: "Benchmark Module Quick Reference",
			text: "View Guide",
		},
		{
			id: 4,
			title: "Image",
			description: "Enterprise Integration Guide",
			text: "View Guide",
		},
	]);
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef<any>(null);

	return (
		<section className="flex flex-col items-center gap-6 sm:gap-12 py-6 sm:pt-0 sm:pb-[72px] self-stretch w-full rounded-[0px_50px_0px_50px] relative flex-[0_0_auto]">
			<div className=" container flex flex-col sm:flex-row sm:justify-between w-full sm:gap-0 gap-4">
				<p className="bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent font-semibold text-[28px] sm:text-5xl leading-[39px] tracking-[-2px] sm:-tracking-normal sm:leading-[62px] w-full sm:w-[554px] text-center sm:text-start">
					Documentation
				</p>
				<p className="w-full sm:w-[570px] font-normal text-base sm:text-lg leading-[150%] text-textSecondary dark:text-textSecondaryDark sm:self-center sm:text-start text-center">
					Explore detailed guides and technical documentation to help you quickly understand and maximise the
					potential of WorkTransformers.ai and the Destination 2.0 framework.
				</p>
			</div>

			<div className="container  block w-full h-full">
				<Swiper
					onSwiper={swiper => (swiperRef.current = swiper)}
					onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
					centeredSlides={false}
					slidesPerView={'auto'}
					grabCursor={true}
					spaceBetween={16}
					// slidesOffsetBefore={window.innerWidth * 0.04}
					breakpoints={{
						375: { spaceBetween: 16 },
						1440: { spaceBetween: 30 },
					}}
					className="w-full !pl-[-2%]">
					{useCases.map(item => (
						<SwiperSlide className="!w-[295px] sm:!w-[370px] p-px" key={item.id}>
							<div className="flex flex-col items-center sm:gap-4 gap-[14px] p-3 sm:p-4 justify-between relative flex-1 grow bg-primarySecondary dark:bg-white/4 rounded-[10px] sm:rounded-3xl outline outline-solid outline-bgGray backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] h-[301.41px] sm:h-[378px]">
								<div className="gap-[14px] sm:gap-4 flex flex-col w-full">
									<div className="flex flex-col items-center justify-center p-6 self-stretch rounded-[10px] sm:rounded-2xl outline outline-solid outline-bgGray bg-text dark:bg-bgc backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] h-[184.41px] sm:h-[230px] w-full">
										<div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] justify-center">
											<div className="relative w-[26px] sm:w-[32px] h-[26px] sm:h-[32px]">
												<Icon
													icon="galary"
													className="w-full h-full sm:w-[32px] sm:h-[32px] dark:stroke-textdark"
												/>
											</div>
											<div className="relative self-stretch font-normal text-textDark dark:text-placeholder sm:text-sm text-[12px] text-center leading-[18px]">
												{item.title}
											</div>
										</div>
									</div>
									<div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
										<p className="font-semibold dark:text-textSecondaryDark text-sm sm:text-[20px] leading-[24px] text-textSecondary">
											{item.description}
										</p>
									</div>
								</div>
								<div className="flex justify-end gap-4 relative self-stretch w-full">
									<p className="font-semibold sm:text-base text-sm leading-[150%]">{item.text}</p>
									<Icon icon="send" className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="inline-flex items-center gap-4 flex-[0_0_auto]">
				<div
					className={`flex w-9 h-9 sm:w-14 sm:h-14 items-center justify-center rounded-[50px] border border-solid border-primary rotate-180 text-primary${activeIndex !== 0 ? " bg-primary cursor-pointer !text-text" : ""
						}`}
					onClick={() => {
						if (activeIndex !== 0) swiperRef.current?.slidePrev();
					}}>
					<Icon
						icon="arrow-left"
						className={`w-3 h-3 sm:w-[18px] sm:h-[18px] rotate-180${activeIndex !== 0 ? " bg-primary text-text" : ""
							}`}
					/>
				</div>
				<div
					className={`flex w-9 h-9 sm:w-14 sm:h-14 items-center justify-center rounded-[50px] border border-solid border-primary rotate-180${activeIndex === useCases.length - 1 ? "" : " bg-primary text-text cursor-pointer"
						}`}
					onClick={() => {
						if (activeIndex !== useCases.length - 1) swiperRef.current?.slideNext();
					}}>
					<Icon
						icon="arrow-left"
						className={`w-3 h-3 sm:w-[18px] sm:h-[18px]${activeIndex === useCases.length - 1 ? " text-primary" : ""
							}`}
					/>
				</div>
			</div>
		</section>
	);
};

export default Documentation;
