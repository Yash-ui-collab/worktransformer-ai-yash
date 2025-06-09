import { JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const logos = [
	"/assets/images/waverio.png",
	"/assets/images/square-stone.png",
	"/assets/images/martino.png",
	"/assets/images/virogan.png",
	"/assets/images/vertex.png",
	"/assets/images/aromix.png",
	"/assets/images/fireli.png",
];

export const BuildPartnership = (): JSX.Element => {
	return (
		<section className="container">
			<div className="flex flex-col items-center justify-center gap-6 sm:gap-[72px] py-6 sm:py-[72px] w-full overflow-hidden">
				<div className="flex flex-col sm:flex-row sm:text-start text-center items-center gap-5 sm:gap-0 justify-between w-full">
					<p className="font-semibold sm:w-[670px] text-xl sm:text-[32px] bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent leading-[28px] sm:leading-[42px]">
						Built in partnership with leading organisations globally. Now accessible for your benefit.
					</p>
					<p className="sm:w-[370px] text-textSecondary dark:text-textSecondaryDark font-normal text-base sm:text-lg leading-[24px] sm:leading-[27px]">
						Our proprietary models have been developed through intensive research and rigorous testing to
						ensure you get practical intelligence instantly.{" "}
						<span className="text-textSecondary dark:text-textSecondaryDark underline cursor-pointer">
							Learn more
						</span>
					</p>
				</div>

				{/* Logos Swiper Marquee */}
				<div className="relative w-full overflow-hidden">
					<Swiper
						modules={[Autoplay]}
						slidesPerView={5}
						spaceBetween={32}
						breakpoints={{
							220: { slidesPerView: 2 },
							640: { slidesPerView: 3 },
							768: { slidesPerView: 4 },
							1024: { slidesPerView: 5 },
						}}
						loop={true}
						autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
						speed={3500}
						allowTouchMove={false}
						className="w-full flex items-center">
						{[...logos, ...logos].map((src, idx) => (
							<SwiperSlide key={idx} className="flex items-center justify-center flex-shrink-0">
								<img
									src={src}
									alt={`Logo ${idx}`}
									className="h-9 sm:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
								/>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Background glow effects */}
					<div className="hidden sm:block absolute w-[514px] h-[514px] top-[-242px] z-10 left-[-275px] dark:bg-bgc bg-text rounded-full blur-[100px] " />
					<div className="hidden sm:block absolute w-[514px] h-[514px] top-[-242px] z-10 right-[-275px] bg-text dark:bg-slate-950 rounded-full blur-[100px]" />
				</div>
			</div>
		</section>
	);
};
