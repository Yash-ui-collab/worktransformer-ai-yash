import { JSX, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useAppState } from "components/utils/useAppState";

export const WorkplaceLeaders = (): JSX.Element => {
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef<any>(null);
	const [{ isDark, userDetails }, setAppState] = useAppState();

	const [leaders, setLeaders] = useState([
		{
			name: "Sarah Johnson",
			title: "Head of Workplace Strategy",
			company: "TechGlobal",
			image: "/assets/images/trusted-img.png",
			logo: "/assets/images/square-stone-white.svg",
			quote: "This platform has transformed how we approach workplace planning. What used to take weeks now takes minutes.",
		},
		{
			name: "Michael Chen",
			title: "Director of Operations",
			company: "InnovateCorp",
			image: "/assets/images/trusted-img.png",
			logo: "/assets/images/square-stone-white.svg",
			quote: "The insights provided by this platform have revolutionized our decision-making process in workplace strategy.",
		},
		{
			name: "Emily Rodriguez",
			title: "Global Workplace Manager",
			company: "FutureWorks",
			image: "/assets/images/trusted-img.png",
			logo: "/assets/images/square-stone-white.svg",
			quote: "We've seen remarkable improvements in our workplace efficiency since implementing this solution.",
		},
	]);

	return (
		<section className="container flex flex-col items-center gap-6 sm:gap-[72px] py-6 sm:pb-[72px] sm:pt-0">
			<div className="flex flex-col items-center justify-center gap-6 sm:gap-[72px]  w-full overflow-hidden">
				<div className="flex flex-col sm:flex-row sm:text-start text-center items-center gap-4 sm:gap-0 justify-between w-full">
					<p className="font-bold w-auto sm:w-[670px] text-[28px] tracking-[-2px] leading-[39px] sm:leading-[58px] sm:text-5xl dark:bg-gradient-to-r from-white to-grayGradient bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] bg-clip-text text-transparent">
						Trusted by forward-thinking workplace leaders.
					</p>
					<p className="w-auto sm:w-[370px] text-textSecondary dark:text-textSecondaryDark font-normal text-base sm:text-lg sm:leading-[27px] leading-[24px]">
						Explore the benefits further to understand how you can also benefit from accessing speed and
						clarity, while saving time and money.{" "}
						<span className="text-textSecondary dark:text-textSecondaryDark underline cursor-pointer">
							Learn more
						</span>
					</p>
				</div>
			</div>

			<div className="block w-[320px] sm:w-full h-auto sm:h-[452px]">
				<Swiper
					onSwiper={swiper => (swiperRef.current = swiper)}
					// navigation={true}
					spaceBetween={16}
					slidesPerView={1}
					grabCursor={true}
					onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
					breakpoints={{
						220: { slidesPerView: 1 },
						640: { slidesPerView: 1 },
						768: { slidesPerView: 1 },
						1024: { slidesPerView: 1 },
					}}
					// modules={[Navigation]}
					className="w-full">
					{leaders.map((item: any, index) => (
						<SwiperSlide className="w-full p-px" key={index}>
							<div className="flex flex-col md:flex-row h-auto md:h-[452px] items-center gap-6 sm:gap-12 p-4 sm:p-8 sm:pr-[72px] relative w-full bg-primarySecondary dark:bg-hover rounded-2xl sm:rounded-[30px]">
								<img
									className="w-full sm:w-[370px] h-[310px] sm:h-[388px] object-cover rounded-2xl sm:rounded-3xl"
									alt="Testimonial"
									src={item.image}
								/>

								<div className="flex flex-col flex-1 items-center sm:items-start gap-6 md:gap-12">
									<div className="px-4 py-3 sm:px-6 sm:py-4 bg-slate-950 rounded-full">
										<div className="w-[106px] h-[22px] sm:w-[124.13px] sm:h-[26px] bg-[url('/assets/images/square-stone-white.svg')] bg-contain bg-no-repeat" />
									</div>

									<p className="text-2xl sm:text-3xl text-center sm:text-start font-bold  bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent leading-[31px] sm:leading-[39px]">
										{item.quote}&#34;
									</p>

									<div className="flex flex-col md:flex-row justify-between items-center sm:items-start md:items-end w-full gap-6 sm:gap-4">
										<div className="flex flex-col w-full items-center sm:items-start md:w-[325px] gap-1 sm:gap-1.5">
											<div className="text-xl sm:text-2xl font-bold text-transparent dark:bg-gradient-to-r from-white to-grayGradient bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] bg-clip-text leading-[26px] sm:leading-[31px]">
												{item.name}
											</div>
											<p
												className="text-base sm:text-lg font-medium text-center sm:text-start leading-[24px] sm:leading-[27px]
">
												{item.title}, {item.company}
											</p>
										</div>

										<div className="flex items-center gap-6">
											<img
												className={`w-[50px] h-2.5 sm:w-[63.17px] sm:h-[14.14px] ${activeIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
												alt="Left arrows"
												src={`/assets/images/arrow-left${isDark ? "" : "-light"}.svg`}
												onClick={() => swiperRef.current?.slidePrev()}
											/>

											<div className="flex items-center gap-2">
												{leaders.map((_, index) => (
													<div
														key={index}
														className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${index === activeIndex ? "bg-primary" : "bg-slate-950"} rounded-full`}
													/>
												))}
											</div>

											<img
												className={`w-[50px] h-2.5 sm:w-[63.17px] sm:h-[14.14px] ${activeIndex === leaders.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
												alt="Right arrows"
												src={`/assets/images/arrow-right${isDark ? "" : "-light"}.svg`}
												onClick={() => swiperRef.current?.slideNext()}
											/>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};
