import Icon from "components/utils/Icon";
import React, { useState } from "react";

const PRICING = {
	FREE: {
		monthly: 0,
		yearly: 0,
		topUpPrice: 70,
		tokenAllowance: 100000,
		queriesStandard: "5–7",
	},
	PLUS: {
		monthly: 59,
		yearly: 637,
		topUpPrice: 55,
		tokenAllowance: 750000,
		queriesStandard: "40–50",
		queriesFile: "10–12",
	},
	PRO: {
		monthly: 229,
		yearly: 2473,
		topUpPrice: 40,
		tokenAllowance: 3000000,
		queriesStandard: "150–200",
		queriesFile: "30–40",
	},
};

const formatPrice = (price: number, type: "yearly" | "monthly") => {
	return `£${price}/${type === "yearly" ? "year" : "month"}`;
};

export default function ChooseThePlan() {
	const [planType, setPlanType] = useState<"yearly" | "monthly">("monthly");
	return (
		<div className="container flex flex-col items-center gap-12 flex-[0_0_auto] py-6 sm:py-[72px]">
			<div className="flex flex-col items-start gap-6 sm:gap-12 relative self-stretch w-full flex-[0_0_auto]">
				<div className="flex flex-col sm:flex-row sm:justify-between w-full sm:gap-0 gap-4">
					<p className="bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent font-semibold text-[28px] sm:text-5xl leading-[140%] tracking-[-2px] sm:-tracking-normal sm:leading-[62px] w-full sm:w-[554px] text-center sm:text-start">
						Choose the Plan That Fits Your Workflow
					</p>
					<p className="w-full sm:w-[370px] font-normal text-base sm:text-lg leading-[150%] text-textSecondary dark:text-textSecondaryDark sm:self-center sm:text-start text-center">
						This is our introductory phase pricing. Prices may increase, so a quick yearly sign-up is
						recommended.
					</p>
				</div>

				<div className="flex flex-col items-center gap-6 sm:gap-[50px] relative self-stretch w-full flex-[0_0_auto]">
					{/* Tabs */}
					<div className="inline-flex flex-col items-center gap-4 relative flex-[0_0_auto]">
						<div className="inline-flex items-center p-[2.5px] sm:p-1 relative flex-[0_0_auto] bg-ChooseBtn rounded-[100px]">
							<button
								type="button"
								onClick={() => setPlanType("yearly")}
								className={`inline-flex items-center justify-center gap-[7.26px] px-[17px] py-2 relative flex-[0_0_auto] rounded-[72.58px] transition-colors ${
									planType === "yearly"
										? "bg-text text-textDark shadow-[0px_2.9px_2.9px_#00000040]"
										: ""
								}`}
								style={{ border: "none", outline: "none" }}>
								<div className="flex flex-col items-center">
									<div className="text-sm sm:text-base text-center font-semibold tracking-[0] leading-[21px] sm:leading-[24px] whitespace-nowrap">
										Yearly
									</div>
								</div>
							</button>

							<button
								type="button"
								onClick={() => setPlanType("monthly")}
								className={`inline-flex items-center justify-center gap-[7.26px] px-3.5 sm:px-[17px] py-2 relative flex-[0_0_auto] rounded-[72.58px] transition-colors self-stretch ${
									planType === "monthly"
										? "bg-text text-textDark shadow-[0px_2.9px_2.9px_#00000040] !py-[9px]"
										: ""
								}`}
								style={{ border: "none", outline: "none" }}>
								<div className="flex flex-col items-center">
									<div className="text-sm sm:text-base text-center font-semibold tracking-[0] leading-[21px] sm:leading-[24px] whitespace-nowrap">
										Monthly
									</div>
								</div>
							</button>
						</div>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-4 gap-[14px] sm:gap-[30px] w-full">
						<div className="flex flex-col items-start gap-6 relative w-full sm:h-[841px]">
							<div className="flex flex-col items-start gap-4 sm:gap-8 p-4 sm:p-[30px] relative self-stretch w-full flex-[0_0_auto] bg-primarySecondary dark:bg-text/10 rounded-2xl overflow-hidden border border-solid border-textSecondary/5 dark:border-textSecondary/70 backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
								<div className="inline-flex flex-col items-start gap-3.5 sm:gap-4 relative flex-[0_0_auto] ">
									<div className="font-semibold text-xl text-center tracking-[0] leading-[150%] sm:leading-[150%] whitespace-nowrap">
										FREE
									</div>

									<div className="inline-flex flex-col items-start gap-3 sm:gap-4 relative flex-[0_0_auto]">
										<div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
											<div className="relative self-stretch font-normal text-primary text-[10px] sm:text-xs tracking-[0] leading-[150%] sm:leading-[18px]">
												Tier 1
											</div>

											<div className="font-semibold text-xl sm:text-2xl tracking-[0] leading-[150%] sm:leading-[150%]">
												{formatPrice(PRICING.FREE[planType], planType)}
											</div>
										</div>

										<p className="relative w-full sm:w-[216px] font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
											Individuals and professionals eager to experience the power of
											WorkTransformers.ai.
										</p>
									</div>
								</div>

								<div className="flex items-center justify-center gap-2.5 px-6 py-2.5 sm:py-3.5 relative self-stretch w-full flex-[0_0_auto] bg-primary rounded-[14px] shadow-[0px_5px_11px_#0000001a,0px_19px_19px_#00000017,0px_44px_26px_#0000000d,0px_77px_31px_#00000003,0px_121px_34px_transparent] text-text">
									<div className="relative w-fit font-normal text-sm sm:text-base tracking-[0] leading-[150%] whitespace-nowrap">
										Choose Plan
									</div>
								</div>

								<div className="flex flex-col items-start gap-4 sm:gap-6 relative self-stretch w-full flex-[0_0_auto]">
									<div className="font-semibold text-base sm:text-xl tracking-[0] leading-[150%] sm:leading-[150%]">
										Features
									</div>

									<div className="flex flex-col items-start gap-3 sm:gap-4 relative self-stretch w-full flex-[0_0_auto]">
										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Monthly Token Allowance: 100,000
											</div>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Queries per Month (Standard): ~5–7
											</p>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Ideation Module (Worktransformers.AI)
											</div>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Calculate Module (Space Calculation)
											</div>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Notepad Module (Reports &amp; Plans)
											</p>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Enhanced Security &amp; Data Privacy
											</p>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Top-up Price: £70 per 200k tokens (excl. VAT)
												<br />
												(No commitment. Pay-as-you-go)
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col items-start gap-6 relative w-full sm:h-[936px]">
							<div className="flex flex-col items-start gap-4 sm:gap-8 p-4 sm:p-[30px] relative self-stretch w-full flex-[0_0_auto] bg-primarySecondary dark:bg-text/10 rounded-2xl overflow-hidden border border-solid border-textSecondary/5 dark:border-textSecondary/70 backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
								<div className="inline-flex flex-col items-start gap-3.5 sm:gap-4 relative flex-[0_0_auto] ">
									<div className="font-semibold text-xl text-center tracking-[0] leading-[150%] sm:leading-[150%] whitespace-nowrap">
										PLUS
									</div>

									<div className="inline-flex flex-col items-start gap-3 sm:gap-4 relative flex-[0_0_auto]">
										<div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
											<div className="relative self-stretch font-normal text-primary text-[10px] sm:text-xs tracking-[0] leading-[150%] sm:leading-[18px]">
												Tier 2
											</div>

											<div className="font-semibold text-xl sm:text-2xl tracking-[0] leading-[150%] sm:leading-[150%] whitespace-nowrap">
												{formatPrice(PRICING.PLUS[planType], planType)}
											</div>
										</div>

										<p className="w-full sm:w-[216px] font-normal relative text-xs sm:text-sm tracking-[0] leading-[150%]">
											Workplace strategists, small consultancy teams, and corporate real estate
											managers.
										</p>
									</div>
								</div>

								<div className="flex items-center justify-center gap-2.5 px-6 py-2.5 sm:py-3.5 relative self-stretch w-full flex-[0_0_auto] bg-primary rounded-[14px] shadow-[0px_5px_11px_#0000001a,0px_19px_19px_#00000017,0px_44px_26px_#0000000d,0px_77px_31px_#00000003,0px_121px_34px_transparent] text-text">
									<div className="relative w-fit font-normal text-sm sm:text-base tracking-[0] leading-[150%] whitespace-nowrap">
										Choose Plan
									</div>
								</div>

								<div className="flex flex-col items-start gap-4 sm:gap-6 relative self-stretch w-full flex-[0_0_auto]">
									<div className="font-semibold text-base sm:text-xl tracking-[0] leading-[150%] sm:leading-[150%]">
										Features
									</div>

									<div className="flex flex-col items-start gap-3 sm:gap-4 relative self-stretch w-full flex-[0_0_auto]">
										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Monthly Token Allowance: 750,000
											</div>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Queries per Month (Standard): ~40–50
											</p>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Queries per Month (File-based): ~10–12
											</p>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Top-up Price: £55 per 200k tokens (10% off on annual subscription)
											</p>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Ideation Module (Worktransformers.AI)
											</div>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Calculate Module (Space Calculation)
											</div>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Notepad Module (Reports &amp; Plans)
											</p>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Enhanced Security &amp; Data Privacy
											</p>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Top-up Price: £55 per 200k tokens
											</p>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Priority Support (Chat/Email)
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col items-start gap-6 relative w-full sm:h-[936px]">
							<div className="flex flex-col items-start gap-4 sm:gap-8  p-4 sm:p-[30px] relative self-stretch w-full flex-[0_0_auto] dark:bg-textDark rounded-2xl overflow-hidden border border-solid border-textSecondary/10 dark:border-textSecondary/70 backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
								<div className="inline-flex flex-col items-start gap-3.5 sm:gap-4 relative flex-[0_0_auto] ">
									<div className="font-semibold text-xl text-center tracking-[0] leading-[150%] sm:leading-[150%] whitespace-nowrap">
										PRO
									</div>

									<div className="inline-flex flex-col items-start gap-3 sm:gap-4 relative flex-[0_0_auto]">
										<div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
											<div className="relative self-stretch font-normal text-primary text-[10px] sm:text-xs tracking-[0] leading-[150%] sm:leading-[18px]">
												Tier 3
											</div>

											<div className="font-semibold text-xl sm:text-2xl tracking-[0] leading-[150%] sm:leading-[150%] whitespace-nowrap">
												{formatPrice(PRICING.PRO[planType], planType)}
											</div>
										</div>

										<p className="relative w-full sm:w-[216px] font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
											Larger teams, consultancy firms, and frequent, intensive users.
										</p>
									</div>
								</div>

								<div className="flex items-center justify-center gap-2.5 px-6 sm:py-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-textDark dark:bg-text  rounded-[14px] shadow-[0px_5px_11px_#0000001a,0px_19px_19px_#00000017,0px_44px_26px_#0000000d,0px_77px_31px_#00000003,0px_121px_34px_transparent]">
									<div className="relative w-fit font-normal text-primary text-sm sm:text-base tracking-[0] leading-[150%] whitespace-nowrap">
										Choose Plan
									</div>
								</div>

								<div className="flex flex-col items-start gap-4 sm:gap-6 relative self-stretch w-full flex-[0_0_auto]">
									<div className="font-semibold text-base sm:text-xl tracking-[0] leading-[150%] sm:leading-[150%]">
										Features
									</div>

									<div className="flex flex-col items-start gap-3 sm:gap-4 relative self-stretch w-full flex-[0_0_auto]">
										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Monthly Token Allowance: 3,000,000
											</div>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Queries per Month (Standard): ~150–200
											</p>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Queries per Month (File-based): ~30–40
											</p>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Top-up Price: £40 per 200k tokens (10% off on annual subscription)
											</p>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Ideation Module (Worktransformers.AI)
											</div>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Calculate Module (Space Calculation)
											</div>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Notepad Module (Reports &amp; Plans)
											</p>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Enhanced Security &amp; Data Privacy
											</p>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Top-up Price: £40 per 200k tokens
											</p>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Priority Support (Chat/Email)
											</div>
										</div>
									</div>
								</div>

								<div className="flex w-[150px] h-[27px] items-center justify-center gap-2.5 px-2.5 py-1 absolute top-[22px] left-[210px] sm:top-5 sm:left-[159px] bg-primary text-text rotate-[41deg]">
									<div className="relative w-fit font-normal text-[10px] text-center tracking-[0] leading-4 whitespace-nowrap">
										Most Popular
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col items-start gap-6 relative w-full sm:h-[942px]">
							<div className="flex flex-col items-start gap-4 sm:gap-8 p-4 sm:p-[30px] relative self-stretch w-full flex-[0_0_auto] bg-primarySecondary dark:bg-text/10 rounded-2xl overflow-hidden border border-solid border-textSecondary/5 dark:border-textSecondary/70 backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
								<div className="inline-flex flex-col items-start gap-3.5 sm:gap-4 relative flex-[0_0_auto] ">
									<div className="font-semibold text-xl text-center tracking-[0] leading-[150%] sm:leading-[150%] whitespace-nowrap">
										ENTERPRISE
									</div>

									<div className="inline-flex flex-col items-start gap-3 sm:gap-4 relative flex-[0_0_auto]">
										<div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
											<div className="relative self-stretch font-normal text-primary text-[10px] sm:text-xs tracking-[0] leading-[150%] sm:leading-[18px]">
												Tier 4
											</div>

											<div className="font-semibold text-xl sm:text-2xl tracking-[0] leading-[150%] sm:leading-[150%] whitespace-nowrap">
												Custom
											</div>
										</div>

										<p className="relative w-full sm:w-[216px] font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
											Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										</p>
									</div>
								</div>

								<div className="flex items-center justify-center gap-2.5 px-6 py-2.5 sm:py-3.5 relative self-stretch w-full flex-[0_0_auto] bg-primary rounded-[14px] shadow-[0px_5px_11px_#0000001a,0px_19px_19px_#00000017,0px_44px_26px_#0000000d,0px_77px_31px_#00000003,0px_121px_34px_transparent] text-text">
									<div className="relative w-fit font-normal text-sm sm:text-base tracking-[0] leading-[150%] whitespace-nowrap">
										Choose Plan
									</div>
								</div>

								<div className="flex flex-col items-start gap-4 sm:gap-6 relative self-stretch w-full flex-[0_0_auto]">
									<div className="font-semibold text-base sm:text-xl tracking-[0] leading-[150%] sm:leading-[150%]">
										Features
									</div>

									<div className="flex flex-col items-start gap-3 sm:gap-4 relative self-stretch w-full flex-[0_0_auto]">
										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="flex-1 font-normal relative text-xs sm:text-sm tracking-[0] leading-[150%]">
												Monthly Token Allowance: Unlimited (Customized)
											</p>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Queries: Unlimited
											</div>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Top-up Price: Custom
											</div>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Fully customized platform
											</div>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Advanced &amp; API integrations
											</div>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Enhanced &amp; custom reports
											</div>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%]  whitespace-nowrap">
												Dedicated account manager
											</div>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Benchmarking Module – Exclusive Access
											</p>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<p className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Enterprise Module – Exclusive Access
											</p>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Enhanced &amp; Compliant Security
											</div>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Priority Support
											</div>
										</div>

										<div className="flex items-start gap-1.5 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
											<Icon
												icon="tick-circle"
												className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-primary shrink-0  mt-1"
											/>

											<div className="relative flex-1 font-normal text-xs sm:text-sm tracking-[0] leading-[150%] ">
												Custom Analytics
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
