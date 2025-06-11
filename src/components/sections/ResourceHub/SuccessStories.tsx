import Icon from "components/utils/Icon";
import { JSX, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

const SuccessStories = (): JSX.Element => {
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef<any>(null);

	const [useCases, setUseCases] = useState([
		{
			id: 1,
			title: "Image",
			subtitle: "Accelerating Workplace Decision-Making in Financial Services",
			description: "Weeks to hours in decision-making",
		},
		{
			id: 2,
			title: "Image",
			subtitle: "Optimising Global Office Strategies for Tech Companies",
			description: "30% cost reduction",
		},
		{
			id: 3,
			title: "Image",
			subtitle: "Achieving Seamless Global Alignment for a Consulting Group",
			description: "40% improved employee satisfaction",
		},
		{
			id: 4,
			title: "Image",
			subtitle: "Accelerating Workplace Decision-Making in Financial Services",
			description: "Weeks to hours in decision-making",
		},
		{
			id: 5,
			title: "Image",
			subtitle: "Optimising Global Office Strategies for Tech Companies",
			description: "30% cost reduction",
		},
		{
			id: 6,
			title: "Image",
			subtitle: "Achieving Seamless Global Alignment for a Consulting Group",
			description: "40% improved employee satisfaction",
		},
	]);
	return (
		<section>
			<div className=" flex-col items-center gap-6 sm:gap-12 sm:pt-0 py-6 sm:pb-[72px] flex ">
				<div className="container flex items-center gap-2.5  self-stretch w-full flex-[0_0_auto]">
					<div className="items-center justify-between w-full grow flex  flex-col sm:flex-row gap-4">
						<p className="sm:w-[470px] w-full bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent font-semibold text-[28px] sm:text-5xl leading-[36px] sm:leading-[62px] sm:text-start text-center">
							Success Stories
						</p>

						<p className=" w-full sm:w-[570px] mt-[-1.00px] dark:text-textSecondaryDark text-textSecondary text-base sm:text-lg mb-4 sm:mb-0 leading-[24px] sm:leading-[27px] sm:text-start text-center">
							Discover how leading organisations around the globe have leveraged to significantly enhance
							their workplace strategy outcomes - achieving greater efficiency, cost savings, and employee
							satisfaction.
						</p>
					</div>
				</div>

				<div className="container block sm:w-[1170px]">
					<Swiper
						onSwiper={swiper => (swiperRef.current = swiper)}
						onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
						centeredSlides={false}
						slidesPerView={'auto'}
						grabCursor={true}
						spaceBetween={16}
						// slidesOffsetBefore={window.innerWidth * 0.03}
						breakpoints={{
							375: { spaceBetween: 16 },
							1440: { spaceBetween: 30 },
						}}
						className="w-full !pl-[-2%]">
						{useCases.map(card => (
							<SwiperSlide className="!w-[295px] sm:!w-[370px] p-px" key={card.id}>
								<div
									key={card.id}
									className="flex flex-col items-center sm:gap-[30px] gap-[12px] p-[12px] sm:p-4 relative flex-1 grow bg-primarySecondary dark:bg-hover rounded-[10px] sm:rounded-3xl outline outline-solid outline-bgGray backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
									<div className="gap-[12px] sm:gap-[30px] flex flex-col">
										<div className="flex flex-col items-center justify-center p-5 self-stretch w-full  rounded-[10px] sm:rounded-2xl outline outline-solid outline-bgGray bg-text dark:bg-bgc backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] h-[180px] sm:h-[230px]">
											<div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] justify-center">
												<div className="relative w-[26px] sm:w-[32px] h-[26px] sm:h-[32px]">
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
										<div className="gap-[10px] sm:gap-3 flex flex-col">
											<div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
												<p className="font-semibold text-base sm:text-[20px] sm:leading-[26px] leading-[21px] bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] text-transparent bg-clip-text">
													{card.subtitle}
												</p>
											</div>
											<div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
												<p className="font-medium  text-sm sm:text-[16px] leading-[150%] ">
													{card.description}
												</p>
											</div>
										</div>
									</div>
									<div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
										<button className="bg-primary py-3 px-9 self-stretch rounded-full">
											Read Full Story
										</button>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className="inline-flex items-center gap-4  flex-[0_0_auto]">
					<div
						className={`flex w-9 h-9 sm:w-14 sm:h-14 items-center justify-center rounded-[50px] border border-solid border-primary rotate-180 text-primary ${activeIndex !== 0 && "bg-primary cursor-pointer !text-text"}`}
						onClick={() => swiperRef.current?.slidePrev()}>
						<Icon
							icon="arrow-left"
							className={` w-3 h-3 sm:w-[18px] sm:h-[18px] rotate-180 ${activeIndex !== 0 && "bg-primary text-text"}`}
						/>
					</div>
					<div
						className={`flex w-9 h-9 sm:w-14 sm:h-14 items-center justify-center rounded-[50px] border border-solid border-primary rotate-180 ${activeIndex + 3 !== useCases.length && "bg-primary text-text cursor-pointer"}`}
						onClick={() => swiperRef.current?.slideNext()}>
						<Icon
							icon="arrow-left"
							className={` w-3 h-3 sm:w-[18px] sm:h-[18px] ${activeIndex + 3 === useCases.length && "sm:text-primary"}`}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SuccessStories;
