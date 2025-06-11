import BgGlow from "components/layout/BgGlow";
import Icon from "components/utils/Icon";
import { cn } from "lib/utils";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export type Props = {
	cards: any;
	className: any;
	classPara: any;
};
export const HoveredCard: React.FC<Props> = ({ cards, className, classPara }) => {
	const [hovered, setHovered] = useState<number | null>(null);
	const location = useLocation();

	const renderCards = () => {
		let ordered = [...cards];
		const isMobile = window.innerWidth <= 768;
		if (!isMobile && hovered !== null) {
			const idx = ordered.findIndex(c => c.key === hovered);
			if (idx !== -1) {
				const [card] = ordered.splice(idx, 1);
				ordered.push(card);
			}
		}
		return ordered.map((card, i) => {
			const isFirst = card.key === 1;
			const isHovered = hovered === card.key;
			const isOtherHovered = hovered !== null && hovered !== card.key;
			let bgClass = "";
			let borderClass = "";
			let textClass = card.text;
			if (isFirst) {
				if (hovered && hovered !== 1) {
					bgClass = "dark:bg-bgc bg-text";
					borderClass = "outline-white dark:outline-hover";
					textClass = "text-textDark dark:text-white";
				} else {
					bgClass = "bg-textDark dark:bg-white";
					borderClass = "outline-hover dark:outline-white";
					textClass = "text-text dark:text-bgc";
				}
			} else if (isHovered) {
				bgClass = "dark:bg-white bg-textDark";
				borderClass = "dark:outline-white outline-hover";
				textClass = "text-text dark:text-bgc";
			} else {
				bgClass = "dark:bg-bgc bg-text";
				borderClass = "outline-text dark:outline-hover";
				textClass = "text-textDark dark:text-white";
			}

			const showGlowAndImg = isHovered || (isFirst && hovered === null);
			return (
				<div
					key={card.key}
					className={cn(
						`group flex flex-col sm:w-[470px] items-start gap-5 sm:gap-[30px] p-5 sm:p-[30px] relative sm:absolute top-0 h-full ${card.left} ${bgClass} ${borderClass} rounded-3xl overflow-hidden shadow-[10px_0px_35px_#0000000d] outline z-[${isHovered ? 50 : 10}] transition-all duration-200 ${isHovered ? "scale-100" : ""}`,
						className,
					)}
					onMouseEnter={() => setHovered(card.key)}
					onMouseLeave={() => setHovered(null)}
					style={{ zIndex: isHovered ? 50 : 10 }}>
					{showGlowAndImg && (
						<>
							<BgGlow
								variant="primarySmall"
								className="-top-[-49px] sm:top-[-78px] right-[-107px] sm:right-[20px] !w-[155px] !h-[155px] sm:!w-[230px] sm:!h-[230px]"
							/>
							<img
								className="absolute w-[244px] h-[156px] top-[-40px] left-[167px]"
								alt="Vector"
								src="/assets/images/org-bg.svg"
							/>
						</>
					)}
					<div className="flex items-start justify-between w-full">
						<div className="relative sm:w-[60px] sm:h-[60px] w-[48px] h-[48px] bg-primary/10 rounded-[30px] flex items-center justify-center">
							<Icon
								icon={card.icon}
								className={`w-[30px] h-[30px] ${showGlowAndImg && "dark:!stroke-black !stroke-text"}`}
							/>
						</div>
						<div
							className={`whitespace-nowrap  bg-gradient-to-r from-bgc to-hoverGradient dark:bg-gradient-to-r dark:from-white dark:to-grayGradient bg-clip-text text-transparent text-lg sm:text-3xl font-semibold group-hover:from-bgc group-hover:to-hoverGradient ${showGlowAndImg && "dark:!from-bgc dark:!to-hoverGradient !from-text !to-grayGradient "}`}>{`0${card.key}`}</div>
					</div>
					<div className="flex-col items-start gap-2 sm:gap-3 self-stretch w-full flex-[0_0_auto] flex relative sm:h-auto">
						<div
							className={`font-semibold bg-gradient-to-r from-bgc to-hoverGradient dark:bg-gradient-to-r dark:from-white dark:to-grayGradient bg-clip-text text-transparent text-lg sm:text-2xl group-hover:from-bgc group-hover:to-hoverGradient leading-[26px] sm:leading-[31px] ${showGlowAndImg && "dark:!from-bgc dark:!to-hoverGradient !from-text !to-grayGradient "}`}>
							{card.title}
						</div>
						<p
							className={cn(
								`relative text-sm sm:text-base font-medium leading-[150%] sm:h-auto h-[63px] ${textClass}`,
								classPara,
							)}>
							{card.desc}
						</p>
					</div>
				</div>
			);
		});
	};

	return (
		<section className="container">
			<div className="flex-col items-start gap-6 sm:gap-12 sm:pt-0 sm:pb-[72px] rounded-[0px_50px_0px_50px] flex relative flex-[0_0_auto] z-[2] py-6">
				<p className="w-full bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent font-semibold text-[28px] sm:text-5xl leading-[36px] sm:leading-[62px] text-center sm:text-left">
					{/* Why organizations work with us */}
					{location.pathname === "/platform"
						? "From insight to action in four intuitive modules."
						: "Why organizations work with us"}
				</p>
				<div className={cn(`relative self-stretch w-full`, className)}>
					<div className="relative w-full flex gap-4 flex-col-reverse">{renderCards()}</div>
				</div>
				{location.pathname === "/platform" && (
					<p className="font-normal text-textSecondary dark:text-textSecondaryDark sm:text-lg sm:leading-[27px] text-base leading-[24px] text-center">
						Gain strategic insights in minutes—not weeks. General business cases instantly. Benchmark your
						strategy with confidence. Automate reporting to boost team productivity.
					</p>
				)}
			</div>
		</section>
	);
};
