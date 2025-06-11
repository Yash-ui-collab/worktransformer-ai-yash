import Icon from "components/utils/Icon";
import { JSX, useState, useEffect } from "react";
import { useAppState } from "components/utils/useAppState";

export const DesignedForEveryone = (): JSX.Element => {
	const [{ isDark, userDetails }, setAppState] = useAppState();
	const cards = [
		{
			index: 1,
			title: "Corporate Real Estate Leaders",
			desc: "Quickly align spaces with business goals.",
			tooltipTitle: "Corporate Real Estate Leaders",
			tooltipDesc: "Quickly align spaces with business goals.",
		},
		{
			index: 2,
			title: "HR & People Teams",
			desc: "Effortlessly improve employee well-being and engagement.",
			tooltipTitle: "HR & People Teams",
			tooltipDesc: "Well-being and engagement.",
		},
		{
			index: 3,
			title: "Finance & Operations",
			desc: "Make smarter, cost-effective workplace decisions.",
			tooltipTitle: "Finance & Operations",
			tooltipDesc: "Make smarter, cost-effective workplace decisions.",
		},
		{
			index: 4,
			title: "Design & Change Consultants",
			desc: "Deliver powerful strategic insights to your clients.",
			tooltipTitle: "Design & Change Consultants",
			tooltipDesc: "Deliver powerful strategic insights to your clients.",
		},
		{
			index: 5,
			title: "Anyone Facing Workplace Change",
			desc: "Simplify your strategy and make informed decisions instantly.",
			tooltipTitle: "Anyone Facing Workplace Change",
			tooltipDesc: "Simplify your strategy and make informed decisions instantly.",
		},
	];
	const [hoveredIndex, setHoveredIndex] = useState(1);
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	useEffect(() => {
		const handleResize = () => {
			setSelectedIndex(null);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<section className="w-full">
			<div className="flex flex-col items-center sm:gap-12 gap-6 sm:pt-0 sm:pb-[75px] px-0 py-6 pb-[27px] flex-[0_0_auto]">
				<div className="items-center justify-center gap-2.5 py-0 self-stretch sm:w-full flex relative flex-[0_0_auto]">
					<p className="bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent sm:font-bold font-semibold text-center sm:text-start text-[28px] sm:text-5xl tracking-[-2.00px] leading-[34px] sm:leading-[58px] sm:p-0 px-6">
						Designed for Everyone Shaping the Future of Work
					</p>
				</div>

				<div className="flex flex-col w-full">
					{cards.map((item, index) => (
						<div
							key={index}
							className={`py-4 sm:py-[30px] sm:h-[114px] group w-full flex ${hoveredIndex === index || selectedIndex === index ? "bg-primarySecondary dark:bg-hover" : ""} cursor-pointer transition-all relative`}
							onClick={() => setSelectedIndex(index)}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(1)}>
							<div className="container flex w-full items-center justify-between relative sm:gap-20 gap-6">
								{/* Hover div */}
								<div
									className={`!hidden sm:flex-col w-[225px] min-h-10 max-h-[200px] items-center gap-4 p-5 absolute -top-[30px] z-[1] left-[305px] bg-text dark:bg-slate-950 rounded-xl border border-solid border-borderSecondary dark:border-hover rotate-[10.91deg] shadow-[0px_30px_30px_#ffffff0f] ${hoveredIndex === index || selectedIndex === index ? "sm:!flex sm:!flex-col" : "!hidden"}`}>
									<div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
										<Icon icon="diamond-percent" className="w-6 h-6 self-center" />
										<div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
											<div className="relative self-stretch bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text font-semibold text-transparent text-lg text-center leading-[22px]">
												{item.tooltipTitle}
											</div>

											<div className="relative self-stretch font-medium text-textSecondary  dark:text-textSecondaryDark text-base text-center leading-5">
												{item.tooltipDesc}
											</div>
										</div>
									</div>
								</div>
								{/* END Hover div */}

								<div className="flex sm:flex-row sm:gap-0 gap-2 flex-col justify-between flex-1 items-start sm:items-center sm:max-w-[1022px]">
									<div className="bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent font-semibold text-[20px] sm:text-3xl  leading-[26px] sm:leading-[39px]">
										{item.title}
									</div>

									<div className="inline-flex items-center gap-[100px] relative flex-[0_0_auto]">
										<p className="sm:w-[452px] font-medium text-[14px] sm:text-lg leading-[150%]">
											{item.desc}
										</p>
									</div>
								</div>
								{hoveredIndex === index || selectedIndex === index ? (
									<div className="relative w-8 h-8 sm:w-12 sm:h-12  ">
										<div className="relative ">
											<img
												className="absolute w-8 h-8 sm:w-12 sm:h-12 top-0 left-0"
												alt="Ellipse"
												src={`/assets/images/DesignedforEveryoneCross${isDark ? "" : "Light"}.svg`}
											/>
										</div>
									</div>
								) : (
									<div className="relative justify-center self-center w-8 h-8 sm:w-12 sm:h-12 ">
										{/* <div className="relative h-12"> */}
										<img
											className="w-8 h-8 sm:w-12 sm:h-12"
											alt="Ellipse"
											src={`/assets/images/DesignedforEveryoneRight${isDark ? "" : "Light"}.svg`}
										/>
										{/* </div> */}
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
