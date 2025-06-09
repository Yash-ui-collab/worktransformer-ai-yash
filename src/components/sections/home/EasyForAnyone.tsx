import Icon from "components/utils/Icon";
import { JSX, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

export const EasyForAnyone = (): JSX.Element => {
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef<any>(null);

	const [cards] = useState([
		{
			icon: "bulb-easy",
			title: "Strategic Trends",
			description: "What are the latest trends in hybrid workplace strategy?",
		},
		{
			icon: "search-easy",
			title: "Gap Analysis",
			description:
				"Can you scan our uploaded workplace strategy document and highlight gaps and improvement opportunities?",
		},
		{
			icon: "users-easy",
			title: "Employee Well-being",
			description: "What specific actions can strengthen employee well-being in our offices?",
		},
		{
			icon: "bulb-easy",
			title: "Cost Optimization",
			description: "How can we optimize our workplace costs while maintaining productivity?",
		},
		{
			icon: "search-easy",
			title: "Sustainability Goals",
			description: "What steps can we take to make our workplace more sustainable?",
		},
		{
			icon: "users-easy",
			title: "Change Management",
			description: "How do we manage change effectively during workplace transformation?",
		},
		{
			icon: "bulb-easy",
			title: "Remote Collaboration",
			description: "What tools and practices enhance remote team collaboration?",
		},
		{
			icon: "search-easy",
			title: "Space Utilization",
			description: "How can we better utilize our existing office space?",
		},
	]);
	return (
		<section className="container">
			<div className="flex-col items-center gap-6 sm:gap-12 sm:pt-0 py-6 sm:pb-[72px] flex ">
				<div className="flex items-center gap-2.5  self-stretch w-full flex-[0_0_auto]">
					<div className="items-center justify-between w-full grow flex  flex-col sm:flex-row gap-4">
						<p className="sm:w-[470px] w-full bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent font-semibold text-[28px] sm:text-5xl leading-[36px] sm:leading-[62px] sm:text-start text-center">
							Easy for anyone in your team to use.
						</p>

						<p className=" w-full sm:w-[470px] mt-[-1.00px] dark:text-textSecondaryDark text-textSecondary text-base sm:text-lg mb-4 sm:mb-0 leading-[24px] sm:leading-[27px] sm:text-start text-center">
							Use natural language to effortlessly explore ideas, strategise, interpret workplace data,
							calculate accurate space requirements, benchmark performance, and effectively align your
							cross-functional teams, all within one intuitive platform.
						</p>
					</div>
				</div>

				<div className="block w-[320px] sm:w-full">
					<Swiper
						onSwiper={swiper => (swiperRef.current = swiper)}
						onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
						spaceBetween={30}
						slidesPerView={3}
						grabCursor={true}
						breakpoints={{
							220: { slidesPerView: 1 },
							640: { slidesPerView: 1 },
							768: { slidesPerView: 1 },
							1024: { slidesPerView: 3 },
						}}
						// modules={[Navigation]}
						className="w-full">
						{cards.map((card, index) => (
							<SwiperSlide className="w-full p-px" key={index}>
								<div className="flex-col items-start gap-4 sm:gap-[30px] p-5 sm:p-[30px] grow dark:bg-[#161a29] bg-text rounded-3xl shadow-[0px_20px_35px_#0000000d] flex  text-center sm:text-left">
									<div className="w-full flex items-center justify-center sm:justify-start">
										<div className=" flex w-[48px] h-[48px] sm:w-[70px] sm:h-[70px] items-center justify-center gap-3.5 rounded-[40px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(234,234,234,1)_100%)] dark:bg-[linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)]">
											<Icon icon={card.icon} className="w-[22px] h-[22px] sm:w-8 sm:h-8" />
										</div>
									</div>
									<div className="flex-col items-start gap-2 sm:gap-3 self-stretch w-full flex-[0_0_auto] flex ">
										<p className="font-bold text-xl sm:text-2xl w-full leading-[26px] sm:leading-[31px]">
											{card.title}
										</p>
										<p className="font-medium h-auto sm:h-[72px] text-sm sm:text-base leading-[21px] sm:leading-[24px]">
											{card.description}
										</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className="inline-flex items-center gap-4 -mt-4 sm:mt-0  flex-[0_0_auto]">
					<div
						className={`flex w-9 h-9 sm:w-14 sm:h-14 items-center justify-center rounded-[50px] border border-solid border-primary rotate-180 text-primary ${activeIndex !== 0 && "bg-primary cursor-pointer !text-text"}`}
						onClick={() => swiperRef.current?.slidePrev()}>
						<Icon
							icon="arrow-left"
							className={` w-3 h-3 sm:w-[18px] sm:h-[18px] rotate-180 ${activeIndex !== 0 && "bg-primary text-text"}`}
						/>
					</div>
					<div
						className={`flex w-9 h-9 sm:w-14 sm:h-14 items-center justify-center rounded-[50px] border border-solid border-primary rotate-180 ${activeIndex + 3 !== cards.length && "bg-primary text-text cursor-pointer"}`}
						onClick={() => swiperRef.current?.slideNext()}>
						<Icon
							icon="arrow-left"
							className={` w-3 h-3 sm:w-[18px] sm:h-[18px] ${activeIndex + 3 === cards.length && "text-primary"}`}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
