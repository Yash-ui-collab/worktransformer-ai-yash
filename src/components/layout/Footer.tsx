import { Button } from "components/utils/Button";
import Icon from "components/utils/Icon";
import { useAppState } from "components/utils/useAppState";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
	const [{ isDark, userDetails, premiumStep }, setAppState] = useAppState();
	const [isAuthPage, setIsAuthPage] = useState(false);
	const location = useLocation();

	// Navigation menu items
	const navItems = [
		{ title: "Home", href: "/", authRequired: false },
		{ title: "Radar & Maps", href: "#", authRequired: true },
		{ title: "Weather A.I.", href: "/weather-ai", authRequired: false },
		{ title: "Go Premium", href: "/premium-plan", authRequired: true },
		{ title: "Top Stories", href: "#", authRequired: false },
		{ title: "Alerts", href: "/alerts", authRequired: false },
	];

	useEffect(() => {
		setIsAuthPage(
			prev =>
				location.pathname === "/login" ||
				location.pathname === "/register" ||
				location.pathname === "/forgot-password",
		);
		return () => {
			true;
		};
	}, [location.pathname]);

	useEffect(() => {
		// setAppState({ userDetails: JSON.parse(localStorage.getItem("auth") || "{}") });
		// Check for dark mode preference
		if (localStorage.theme === "dark") {
			setThemeMode(true);
			setAppState({ isDark: true });
		}
		if (window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage?.theme === undefined) {
			setThemeMode(true);
			setAppState({ isDark: true });
		}
	}, []);

	const setThemeMode = (isDark: boolean) => {
		if (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			document.documentElement.classList.add("dark");
			isDark = true;
		}
		if (isDark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		setAppState({ isDark: isDark });
	};

	return (
		<footer className={`container relative z-[1] flex flex-col w-full items-start `}>
			{location.pathname !== "/login" && location.pathname !== "/signup" && (
				<div className="flex flex-col items-center gap-5 sm:gap-10 py-6 sm:py-[72px]  self-stretch w-full flex-[0_0_auto]">
					<Link to={"/"} className="inline-flex items-center gap-2.5  flex-[0_0_auto]">
						<img className="object-cover  w-10 h-10" alt="Image" src="/assets/images/logo.png" />

						<div className="text-sm sm:text-lg font-semibold">worktransformers.ai</div>
					</Link>

					<div className="flex sm:flex-row flex-col sm:gap-[30px] gap-5">
						<div className="inline-flex items-center font-medium gap-5 sm:gap-[30px]  flex-wrap justify-center">
							<Link to={"/"} className=" whitespace-nowrap">
								Features
							</Link>

							<Link to={"/"} className=" whitespace-nowrap">
								Model
							</Link>

							<Link to={"/pricing"} className=" whitespace-nowrap">
								Pricing
							</Link>

							<Link to={"/"} className=" whitespace-nowrap">
								Enterprise
							</Link>

							<Link to={"/"} className=" whitespace-nowrap">
								Trust Centre
							</Link>

							<Link to={"/"} className=" whitespace-nowrap">
								Company
							</Link>
						</div>
						<div className="flex items-center justify-center">
							<button
								type="button"
								aria-label="Toggle theme"
								className="flex items-center bg-textSecondaryDark/20 dark:bg-primary rounded-full p-1 w-auto h-[32px] sm:h-[56px] ">
								<span
									onClick={() => {
										localStorage.setItem("theme", "light");
										setThemeMode(false);
									}}
									className={`flex items-center justify-center w-6 h-6 sm:w-12 sm:h-12 rounded-full transition-colors shrink-0 ${
										!isDark
											? "bg-text shadow-[0_2px_8px_#f9796822] cursor-default"
											: "cursor-pointer"
									}`}>
									<Icon
										icon="cloudsun"
										className={`w-4 h-4 sm:w-6 sm:h-6 ${!isDark ? "text-primary" : "text-textDark dark:text-text"}`}
									/>
								</span>
								<span
									onClick={() => {
										localStorage.setItem("theme", "dark");
										setThemeMode(true);
									}}
									className={`flex items-center justify-center w-6 h-6 sm:w-12 sm:h-12 rounded-full transition-colors shrink-0 ${
										isDark ? "bg-bgc shadow-[0_2px_8px_#f9796822] cursor-default" : "cursor-pointer"
									}`}>
									<Icon
										icon="cloudmoon"
										className={`w-4 h-4 sm:w-6 sm:h-6 ${isDark ? "text-text" : "text-textDark dark:text-text"}`}
									/>
								</span>
							</button>
						</div>
					</div>

					<div className="inline-flex items-center gap-4  flex-[0_0_auto]">
						<Link to={"/"} className="h-11 w-11 flex items-center justify-center bg-primary rounded-full">
							<Icon icon="facebook" className="w-5 h-5 text-text " />
						</Link>
						<Link to={"/"} className="h-11 w-11 flex items-center justify-center bg-primary rounded-full">
							<Icon icon="instagram" className="w-5 h-5 text-text" />
						</Link>
						<Link to={"/"} className="h-11 w-11 flex items-center justify-center bg-primary rounded-full">
							<Icon icon="linkedin" className="w-5 h-5 text-text" />
						</Link>
						<Link to={"/"} className="h-11 w-11 flex items-center justify-center bg-primary rounded-full">
							<Icon icon="youtube" className="w-5 h-5 text-text" />
						</Link>
						<Link to={"/"} className="h-11 w-11 flex items-center justify-center bg-primary rounded-full">
							<Icon icon="twitter" className="w-5 h-5 text-text" />
						</Link>
					</div>
				</div>
			)}

			<div className=" w-[calc(100%+80px)] -mx-10 h-px bg-textSecondary/10 dark:bg-border" />

			<div className="flex flex-col sm:flex-row gap-4 h-auto sm:h-[74px] items-center justify-between  self-stretch w-full font-medium py-4 px-6 sm:px-0">
				<p className=" whitespace-nowrap">© 2025 worktransformers.ai. All rights reserved.</p>

				<div className="inline-flex items-center gap-4">
					<div className="whitespace-nowrap">Privacy Policy</div>

					<div className="whitespace-nowrap">Terms &amp; Conditions</div>
				</div>
			</div>
		</footer>
	);
}
