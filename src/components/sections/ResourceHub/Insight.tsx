import BgGlow from "components/layout/BgGlow";
import Icon from "components/utils/Icon";
import React, { JSX, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

const Insight = (): JSX.Element => {
	const [useCases] = useState([
		{
			id: 1,
			title: "Image",
			description: "5 Keys to Future-Proof Your Hybrid Workplace",
			text: "May 10, 2025",
			buttonText: "Read More",
		},
		{
			id: 2,
			title: "Image",
			description: "Leveraging AI for Workplace Strategy Success",
			text: "April 28, 2025",
			buttonText: "Read More",
		},
		{
			id: 3,
			title: "Image",
			description: "Integrating ESG and DEIB for Sustainable Workplaces",
			text: "May 5, 2025",
			buttonText: "Read More",
		},
		{
			id: 4,
			title: "Image",
			description: "Integrating ESG and DEIB for Sustainable Workplaces",
			text: "May 5, 2025",
			buttonText: "Read Full Story",
		},
	]);
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef<any>(null);

	return (
		<section className=" flex flex-col items-center gap-6 sm:gap-12 py-6 sm:pt-0 sm:pb-[72px] self-stretch w-full rounded-[0px_50px_0px_50px] relative flex-[0_0_auto]">
			<div className="container flex flex-col sm:flex-row sm:justify-between w-full sm:gap-0 gap-4">
				<p className="bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent font-semibold text-[28px] sm:text-5xl leading-[140%] tracking-[-2px] sm:-tracking-normal sm:leading-[62px] w-full sm:w-[554px] text-center sm:text-start">
					Insights
				</p>
				<p className="w-full sm:w-[570px] font-normal text-base sm:text-lg leading-[150%] text-textSecondary dark:text-textSecondaryDark sm:self-center sm:text-start text-center">
					Stay informed with expert analysis, current trends, and valuable resources designed to sharpen your
					workplace strategies and ensure competitive advantage.
				</p>
			</div>

			<div className="container block w-full sm:w-[1170px]">
				<Swiper
					onSwiper={swiper => (swiperRef.current = swiper)}
					onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
					slidesPerView={'auto'}
					grabCursor={true}
					centeredSlides={false}
					spaceBetween={16}
					breakpoints={{
						375: { spaceBetween: 16, },
						1440: { spaceBetween: 30 },
					}}
					className="w-full !pl-[-2%]">
					{useCases.map(card => (
						<SwiperSlide className="!w-[295px] sm:!w-[370px] p-px" key={card.id}>
							<div className="flex flex-col items-center sm:gap-[30px] gap-[12px] p-[12px] sm:p-4 justify-between relative flex-1  bg-primarySecondary dark:bg-white/4 rounded-[10px] sm:rounded-3xl outline outline-solid outline-bgGray backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] sm:h-[414px] ">
								<div className="gap-[14px] sm:gap-[30px] flex flex-col">
									<div className="flex flex-col items-center justify-center sm:p-6 p-4 self-stretch  rounded-[24px] sm:rounded-2xl outline outline-solid outline-bgGray bg-text dark:bg-bgc backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] h-[151px] sm:h-[180px] w-full">
										<div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] justify-center">
											<div className="relative w-[32px] sm:w-[32px] h-[32px] sm:h-[32px]">
												<Icon
													icon="galary"
													className="w-full h-full sm:w-[32px] sm:h-[32px] dark:stroke-textdark"
												/>
											</div>
											<div className="relative self-stretch font-normal text-textDark dark:text-placeholder sm:text-sm text-[12px] text-center leading-[18px]">
												{card.title}
											</div>
										</div>
									</div>
									<div className="flex flex-col items-start sm:gap-2 gap-1 relative self-stretch w-full flex-[0_0_auto]">
										<p className="font-bold bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparentDark text-[16px] sm:text-[20px] sm:leading-[130%] leading-[150%] ">
											{card.description}
										</p>
										<p className="font-medium sm:text-[16px] text-[12px] leading-[150%] text-textSecondary dark:text-text">
											{card.text}
										</p>
									</div>
								</div>
								<div className="flex justify-end gap-4 relative self-stretch w-full mt-3">
									<button className="w-full py-3 sm:py-3 sm:px-9 px-6  dark:bg-primary bg-primary text-white font-semibold rounded-full text-base sm:text-lg focus:outline-none border-2 border-transparent flex items-center justify-center transition-colors duration-200 sm:h-12 ">
										<span className="flex items-center gap-4">
											{card.buttonText}
											<Icon icon="send" className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
										</span>
									</button>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="inline-flex items-center gap-4 flex-[0_0_auto]">
				<div
					className={`flex w-9 h-9 sm:w-14 sm:h-14 items-center justify-center rounded-[50px] border border-solid border-primary rotate-180 text-primary ${activeIndex !== 0 && "bg-primary cursor-pointer !text-text"}`}
					onClick={() => swiperRef.current?.slidePrev()}>
					<Icon
						icon="arrow-left"
						className={`w-3 h-3 sm:w-[18px] sm:h-[18px] rotate-180 ${activeIndex !== 0 && "bg-primary text-text"}`}
					/>
				</div>
				<div
					className={`flex w-9 h-9 sm:w-14 sm:h-14 items-center justify-center rounded-[50px] border border-solid border-primary rotate-180 ${activeIndex + 3 !== useCases.length && "bg-primary text-text cursor-pointer"}`}
					onClick={() => swiperRef.current?.slideNext()}>
					<Icon
						icon="arrow-left"
						className={`w-3 h-3 sm:w-[18px] sm:h-[18px] ${activeIndex + 3 === useCases.length && "text-primary"}`}
					/>
				</div>
			</div>
		</section>
	);
};

export default Insight;
