import { Button } from "components/utils/Button";
import { Input } from "components/utils/Input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAppState } from "components/utils/useAppState";
import { toast } from "components/utils/toast";
import { useState, useEffect } from "react";
import Icon from "components/utils/Icon";
import OtpInput from "components/common/otpInput";
import CountDown from "components/common/CountDown";
import BgGlow from "components/layout/BgGlow";

function ForgotPasswordPage() {
	const [{ isDark, userDetails }, setAppState] = useAppState();
	const [step, setStep] = useState(1);
	const [countDownTimer, setCountDownTimer] = useState(Date.now() + 10);
	const [currentSlide, setCurrentSlide] = useState(0);
	const navigate = useNavigate();

	const slides = [
		{
			title: "Find High-Quality and Dependable",
			description: "Discover top-rated, reliable suppliers instantly with our AI-powered sourcing tool.",
			image: "/assets/images/auth-bg/login-left.png",
		},
		{
			title: "Connect with Trusted Partners",
			description: "Build lasting relationships with verified suppliers that meet your quality standards.",
			image: "/assets/images/auth-bg/login-left.png",
		},
		{
			title: "Streamline Your Sourcing",
			description: "Save time and reduce costs with our efficient supplier discovery platform.",
			image: "/assets/images/auth-bg/login-left.png",
		},
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide(prev => (prev + 1) % slides.length);
		}, 5000); // Change slide every 5 seconds

		return () => clearInterval(timer);
	}, []);

	const schema = yup.object({
		email: yup.string().email("Invalid email").required("Email is required"),
		otp: yup
			.string()
			.optional()
			.when([], {
				is: () => step === 2,
				then: schema =>
					schema
						.required("OTP is required")
						.matches(/^\d{4}$/, "Invalid OTP. Please enter 4 digits")
						.min(4, "OTP must be 4 digits")
						.max(4, "OTP must be 4 digits"),
				otherwise: schema => schema.optional(),
			}),
		password: yup
			.string()
			.optional()
			.when([], {
				is: () => step === 3,
				then: schema =>
					schema.required("Password is required").min(8, "Password must be at least 8 characters"),
				otherwise: schema => schema.optional(),
			}),
		confirmPassword: yup
			.string()
			.optional()
			.when([], {
				is: () => step === 3,
				then: schema =>
					schema
						.required("Confirm password is required")
						.oneOf([yup.ref("password")], "Passwords must match"),
				otherwise: schema => schema.optional(),
			}),
	});

	type IForgotPasswordFormData = yup.InferType<typeof schema>;

	const {
		register,
		handleSubmit,
		reset,
		setValue,
		trigger,
		getValues,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(schema),
		defaultValues: {
			email: "",
			otp: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = (data: IForgotPasswordFormData) => {
		if (step === 1) {
			// Send OTP to email
			toast.success("OTP sent to your email!");
			setStep(2);
			setCountDownTimer(Date.now() + 60000);
			return;
		}

		if (step === 2) {
			// Verify OTP
			toast.success("OTP verified successfully!");
			setStep(3);
			return;
		}

		if (step === 3) {
			// Reset password
			toast.success("Password reset successfully!");
			setStep(4);
			reset();
			navigate("/login");
			return;
		}
	};

	const resendOtp = () => {
		setCountDownTimer(Date.now() + 60000);
		toast.success("OTP resent to your email!");
	};

	return (
		<div className="relative flex flex-col items-center w-full">
			<div className="w-[480px] sm:w-[calc(100%+206px)] h-[1000.74px] sm:h-[2941.09px] mt-36 sm:mt-32 absolute bg-[url(/assets/images/bg_circular_lines.svg)] bg-[50%_0%]"></div>
			<BgGlow
				variant="secondarySmall"
				className="sm:top-[-211px] sm:left-[-175px] !h-[164px] !w-[164px] sm:!h-[230px] sm:!w-[230px] top-[-200px] left-[-100px] !scale-[4]"
			/>
			<BgGlow
				variant="secondary"
				className="bottom-[20px] sm:top-[600px] -right-[40px] sm:right-[-50px] !h-[118px] !w-[118px] sm:!h-[223px] sm:!w-[223px] sm:!scale-400 z-[2] sm:blur-xl blur-2xl"
			/>
			<BgGlow
				variant="secondaryMedium"
				className="bottom-[20px] sm:bottom-[151px] -right-[70px] sm:left-[-50px] !h-[150px] !w-[150px] sm:!h-[163px] sm:!w-[163px] sm:!scale-400 sm:block hidden"
			/>
			<div className="container flex items-center justify-center py-6 sm:pt-[172px] sm:pb-[196px] pb-[128.5px] pt-[128.5px] ">
				<div className="bg-primarySecondary dark:bg-[#1A1E2D] rounded-2xl shadow-lg sm:p-12 p-4 sm:w-[666px] relative z-[2]">
					<div className="flex flex-col sm:gap-4 gap-4">
						<div className="flex flex-col items-center sm:gap-12 gap-6">
							{step === 1 && (
								<div className="flex flex-col items-center gap-6 sm:gap-12 w-full">
									<div className="flex flex-col items-center sm:gap-4 gap-4">
										<h2 className="w-full sm:text-5xl text-[28px] leading-[110%] font-semibold text-center text-textDark dark:text-text">
											Forgot Password
										</h2>
										<p className="text-center text-textDark/60 dark:text-text/60 leading-[150%] sm:text-base text-[14px]">
											Built for leaders and professionals. Explore this tool of work. Powered by
											advanced research and AI.
										</p>
									</div>

									<div className="flex flex-col items-center w-full gap-4">
										<form
											onSubmit={handleSubmit(onSubmit)}
											className="w-full flex flex-col gap-6 sm:gap-12">
											<div className="flex flex-col gap-4">
												<Input
													type="email"
													label="Email address"
													placeholder="Enter your email address"
													iconPost="email"
													{...register("email")}
													error={errors.email?.message as string}
												/>
											</div>

											<div className="flex items-center justify-center ">
												<Button type="submit" variant="default" className="sm:w-[200px]  ">
													Send OTP
												</Button>
											</div>
										</form>

										<div className="flex justify-center w-[82px]">
											<Link to="/login" className="text-sm flex items-center h-12 sm:h-14 ">
												Back
											</Link>
										</div>
									</div>
								</div>
							)}

							{step === 2 && (
								<div className="flex flex-col items-center gap-6 sm:gap-12 w-full">
									<div className="flex flex-col items-center sm:gap-4 gap-4">
										<h2 className="w-full sm:text-5xl text-[28px] leading-[110%] font-semibold text-center text-textDark dark:text-text">
											Verify Code
										</h2>
										<div className="flex flex-col items-center ">
											<p className="text-center text-textDark dark:text-text/60 leading-[150%] sm:text-base text-[14px]">
												Please enter the code we just sent to email
											</p>
											<p className="text-center text-textDark dark:text-text/60 ">
												{getValues("email")}
											</p>
										</div>
									</div>

									<div className="flex flex-col items-center w-full gap-4">
										<form
											onSubmit={handleSubmit(onSubmit)}
											className="w-full flex flex-col gap-6 sm:gap-12">
											<div className="flex flex-col items-center gap-6">
												<OtpInput
													otpDigit={4}
													className="text-textDark dark:text-text !sm:w-[84px] sm:!h-[62px] !w-[64.75px] !h-[48px]"
													containerClass=""
													onOtpChange={value => {
														setValue("otp", value);
														trigger("otp");
													}}
												/>
												{errors.otp && (
													<p className="text-red-500 text-sm">
														{errors.otp.message as string}
													</p>
												)}
											</div>

											<div className="flex items-center justify-center">
												<Button
													type="submit"
													variant="default"
													className="sm:w-[200px] w-[115px] whitespace-nowrap  ">
													Send OTP
												</Button>
											</div>

											<div className="flex flex-col items-center gap-2">
												<div className="flex items-center sm:-mt-[30px] gap-2">
													<p className="text-textDark/60 dark:text-text/60">
														Didn't receive code?
													</p>
													<CountDown
														targetTime={countDownTimer}
														onCountDownComplete={() => {
															resendOtp();
														}}
													/>
												</div>
												<div className="flex justify-center sm:w-[200px] sm:h-14 h-12   sm:py-[20px]">
													<Link
														to="/login"
														className="text-sm font-medium flex items-center leading-150%   sm:h-[24px]">
														Back
													</Link>
												</div>
											</div>
										</form>
									</div>
								</div>
							)}

							{step === 3 && (
								<div className="flex flex-col items-center gap-6 sm:gap-12 w-full">
									<div className="flex flex-col items-center sm:gap-4 gap-[14px]">
										<h2 className="w-full sm:text-5xl text-[28px] leading-[110%] font-semibold text-center text-textDark dark:text-text">
											New Password
										</h2>
										<p className="text-center text-textDark/60 dark:text-text/60 leading-[150%] sm:text-base text-[14px]">
											Please enter a new password for your account.
										</p>
									</div>

									<div className="flex flex-col items-center w-full sm:gap-4 gap-[12px]">
										<form
											onSubmit={handleSubmit(onSubmit)}
											className="w-full flex flex-col gap-6 sm:gap-12">
											<div className="flex flex-col gap-4 sm:gap-6">
												<Input
													type="password"
													label="New Password"
													placeholder="Enter your new password"
													iconPost="key"
													{...register("password")}
													error={errors.password?.message as string}
												/>
												<Input
													type="password"
													label="Confirm Password"
													placeholder="Confirm your new password"
													iconPost="key"
													{...register("confirmPassword")}
													error={errors.confirmPassword?.message as string}
												/>
											</div>

											<div className="flex items-center justify-center">
												<Button type="submit" variant="default" className="w-[200px]">
													Confirm
												</Button>
											</div>
										</form>
										<div className="flex justify-center">
											<Link to="/login" className="text-sm flex items-center h-12 sm:h-14">
												Back
											</Link>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ForgotPasswordPage;
