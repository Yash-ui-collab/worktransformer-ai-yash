import { JSX, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useAppState } from "components/utils/useAppState";

export const ClientTestimonials = (): JSX.Element => {
	const [{ isDark, userDetails }, setAppState] = useAppState();
	const [testimonials, setTestimonials] = useState([
		{
			name: "Jane Cooper",
			title: "Workplace Director",
			avatar: "/assets/images/jane-cooper.png",
			quote: "This completely changed how quickly we make workplace decisions. What used to take weeks, we now do in hours.",
			vector: "/assets/images/vector.svg",
		},
		{
			name: "Esther Howard",
			title: "VP of Real Estate",
			avatar: "/assets/images/esther-howard.png",
			quote: "We love how simple yet powerful the insights are. Our leadership team now fully understands workplace strategy—without the usual complexity.",
			vector: "/assets/images/vector.svg",
		},
		{
			name: "Cameron Williamson",
			title: "Head of HR",
			avatar: "/assets/images/cameron-williamson.png",
			quote: "It made aligning our global offices around employee needs effortless. This was impossible before Work Transformers.ai.",
			vector: "/assets/images/vector.svg",
		},
	]);

	return (
		<section className="container flex flex-col items-center gap-[20px] sm:gap-[48px] py-6 sm:py-0 sm:pb-[72px] relative z-[1]">
			<div className="flex flex-col sm:flex-row sm:text-start text-center items-center gap-4 sm:gap-0 justify-between w-full">
				<p className="font-semibold w-auto sm:w-[670px] text-[28px] tracking-[-2px] sm:tracking-normal leading-[140%] sm:leading-[62px] sm:text-5xl bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent ">
					Client Testimonials
				</p>
				<p className="w-auto sm:w-[370px] text-textSecondary dark:text-textSecondaryDark font-normal text-base sm:text-lg leading-[27px]">
					This is what our clients say after signing up
				</p>
			</div>

			<div className="block w-[335px] sm:w-full">
				<Swiper
					navigation={true}
					spaceBetween={16}
					slidesPerView={1}
					grabCursor={true}
					breakpoints={{
						220: { slidesPerView: 1 },
						640: { slidesPerView: 1 },
						768: { slidesPerView: 1 },
						1024: { slidesPerView: 3 },
					}}
					modules={[Navigation]}
					className="w-full">
					{testimonials.map((item: any, index) => (
						<SwiperSlide className="w-full px-1" key={index}>
							<div className="bg-text dark:bg-bgc ring ring-white/20 dark:ring-textSecondary/50 rounded-[12px] sm:rounded-2xl shadow-[0px_4px_12px_0px_#00000014] p-5 sm:p-[30px] w-full !h-[350px] sm:!h-[393px] flex flex-col !justify-between sm:my-[0.5px] my-0.5">
								<div className="flex flex-col gap-8 sm:gap-[42px]">
									<div className="flex justify-between items-center">
										<img
											src={item.avatar}
											alt="Avatar"
											className="w-[52px] h-[52px] sm:w-16 sm:h-16"
										/>
										<img
											src={`/assets/images/logo-ipsum${isDark ? "" : "-dark"}.svg`}
											alt="Logo"
											className="w-[84px] h-8 sm:w-[105px] sm:h-10"
										/>
									</div>
									<div className="flex flex-col gap-5 sm:gap-6">
										<img src={item.vector} alt="Vector" className=" w-[18px] h-3.5 sm:w-6 sm:h-4" />
										<p className="dark:text-textSecondaryDark text-textSecondary text-sm sm:text-base font-medium leading-[150%]">
											{item.quote}
										</p>
									</div>
								</div>
								<div className="border-l-[1.77px] sm:border-l-2 border-primary pl-4 flex sm:gap-1 gap-0.5 flex-col">
									<div className="text-base sm:text-lg font-medium leading-[150%]">{item.name}</div>
									<div className="dark:text-textSecondaryDark text-textSecondary text-xs sm:text-sm font-medium opacity-75 leading-[150%]">
										{item.title}
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
