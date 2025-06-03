import Icon from "components/utils/Icon";
import React, { JSX, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BgGlow from "./BgGlow";
import { useAppState } from "components/utils/useAppState";

export const Header = (): JSX.Element => {
	const [{ isDark, userDetails }, setAppState] = useAppState();
	const [navItems] = useState([
		{ title: "Features", href: "/" },
		{ title: "Models", href: "/" },
		{ title: "Pricing", href: "/pricing" },
		{ title: "Enterprise", href: "/" },
		{ title: "Trust Centre", href: "/" },
		{ title: "Resource Hub", href: "/" },
		{ title: "Company", href: "/" },
	]);

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
		<>
			<header className="w-full bg-transparent px-6 py-8 sm:py-6 sm:px-0 flex sm:items-center justify-between sm:justify-center gap-[30px] rounded-bl-[50px]">
				<BgGlow
					variant="secondaryMedium"
					className="hidden sm:block -top-[107px] sm:top-[-107px] -left-[107px] sm:-left-[107px] !h-[230px] !w-[230px]"
				/>

				{/* Logo Section */}
				<div className="flex items-center gap-2.5">
					<img
						className="w-[34px] h-[34px] sm:w-10 sm:h-10 object-cover"
						alt="Logo"
						src="/assets/images/logo.png"
					/>
					<span className="text-textDark dark:text-white  text-base sm:text-lg font-normal font-inter">
						worktransformers.ai
					</span>
				</div>

				<div className="block sm:hidden">
					<Icon icon="menu" className="w-8 h-8 " />
				</div>

				{/* Nav Menu */}
				<nav className="hidden sm:flex h-[56px] gap-5 px-[30px] py-4 bg-textSecondaryDark/20 dark:bg-hover  rounded-[46px] backdrop-blur-[15px] backdrop-brightness-100">
					{navItems.map((item, index) => (
						<Link
							to={item.href}
							key={index}
							className="text-textDark dark:text-text text-sm font-medium leading-[21px] whitespace-nowrap font-inter">
							{item.title}
						</Link>
					))}
				</nav>

				<div className="hidden sm:flex items-center">
					<button
						type="button"
						aria-label="Toggle theme"
						className="flex items-center bg-textSecondaryDark/20 dark:bg-hover rounded-full p-1 w-auto h-[56px] ">
						<span
							onClick={() => {
								localStorage.setItem("theme", "light");
								setThemeMode(false);
							}}
							className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors shrink-0 ${
								!isDark ? "bg-text shadow-[0_2px_8px_#f9796822] cursor-default" : "cursor-pointer"
							}`}>
							<Icon
								icon="cloudsun"
								className={`w-6 h-6 ${!isDark ? "text-primary" : "text-textDark dark:text-text"}`}
							/>
						</span>
						<span
							onClick={() => {
								localStorage.setItem("theme", "dark");
								setThemeMode(true);
							}}
							className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors shrink-0 ${
								isDark ? "bg-text shadow-[0_2px_8px_#f9796822] cursor-default" : "cursor-pointer"
							}`}>
							<Icon
								icon="cloudmoon"
								className={`w-6 h-6 ${isDark ? "text-primary" : "text-textDark dark:text-text"}`}
							/>
						</span>
					</button>
				</div>

				{/* Action Buttons */}
				<div className="hidden sm:inline-flex items-center gap-4  flex-[0_0_auto]">
					<Link
						to="/"
						className="inline-flex h-[56px] items-center justify-center gap-4 px-9 py-4 flex-[0_0_auto] rounded-[54px] border border-solid border-textDark dark:border-text font-normal text-textDark dark:text-text text-sm  whitespace-nowrap">
						Log In
					</Link>

					<Link
						to="/"
						className="inline-flex h-[56px] items-center justify-center gap-4 px-9 py-4 flex-[0_0_auto]  bg-[#f97968] rounded-[54px] border-2 border-solid border-transparent font-normal text-white text-sm  whitespace-nowrap">
						Sign Up
					</Link>
				</div>
			</header>
		</>
	);
};
