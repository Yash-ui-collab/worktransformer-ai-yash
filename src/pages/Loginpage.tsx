import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import Icon from "components/utils/Icon";
import { Input } from "components/utils/Input";
import { Button } from "components/utils/Button";
import { toast } from "components/utils/toast";
import BgGlow from "components/layout/BgGlow";

type LoginFormInputs = {
	email: string;
	password: string;
};

const schema = yup.object().shape({
	email: yup.string().email("Invalid email address").required("Email is required"),
	password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function LoginPage() {
	const [showPassword, setShowPassword] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormInputs>({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data: LoginFormInputs) => {
		// Handle login logic here
		toast.success("Login successful!");
	};

	return (
		<div className="relative flex flex-col items-center w-full">
			<div className="w-[calc(100%+305px)] sm:w-[calc(100%+206px)] h-[1215px] sm:h-[2941.09px] mt-40 sm:mt-32 absolute bg-[url(/assets/images/bg_circular_lines.svg)] bg-[50%_0%]"></div>
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
			<div className="container flex items-center justify-center py-6 sm:pt-[76px] sm:pb-[68px] relative">
				<div className="bg-primarySecondary dark:bg-bgAuth rounded-2xl shadow-lg sm:p-12 p-4 sm:w-[666px]">
					<div className="flex flex-col sm:gap-4 gap-4">
						<div className="flex flex-col items-center sm:gap-12 gap-6">
							<div className="flex flex-col items-center sm:gap-4 gap-[14px]">
								<h2 className="w-full sm:text-5xl text-[28px] leading-[110%] font-semibold text-center">
									Log In
								</h2>
								<p className="  text-center text-[080C1D] leading-[150%] sm:text-base text-[14px]">
									Built for leaders and professionals shaping the future of work. Powered by extensive
									research and AI.
								</p>
							</div>
							<form
								className="w-full flex flex-col gap-6 sm:gap-[52px]"
								onSubmit={handleSubmit(onSubmit)}
								noValidate>
								<div className="flex flex-col  sm:gap-6 gap-4">
									<Input
										label={"Email address"}
										iconPost={"email"}
										placeholder="Enter your email address"
										className=""
										{...register("email")}
										error={errors?.email?.message?.toString()}
									/>
									<Input
										type={"password"}
										label="Password"
										placeholder="Enter your password"
										className=""
										{...register("password")}
										error={errors?.password?.message?.toString()}
									/>
									<div className="flex justify-end -mt-2 sm:-mt-4">
										<Link
											to="/forgot-password"
											className="sm:text-base text-[14px] font-medium leading-[150%] hover:underline">
											Forgot Password?
										</Link>
									</div>
								</div>
								<div className="flex items-center justify-center">
									<Button type="submit" className="!w-[200px]">
										Log In
									</Button>
								</div>
							</form>
						</div>
						<div className="flex items-center justify-center gap-2 w-full">
							<hr className=" border-borderSecondary dark:border-borderDark w-[50px] h-[2px] shrink-0" />
							<span className="leading-[150%] text-textSecondary sm:text-base text-[14px] dark:text-placeholder">
								or continue with
							</span>
							<hr className=" border-borderSecondary dark:border-borderDark w-[50px] h-[2px] shrink-0" />
						</div>
						<div className="flex justify-center gap-4 sm:gap-[34px]">
							<button
								className="flex items-center justify-center size-[48px] sm:size-[56px] border-[1.4px] border-textSecondaryDark dark:border-textSecondaryDark/5 p-2 rounded-full bg-textDark dark:bg-text "
								type="button">
								{/* Google icon */}
								<img src="/assets/images/google.svg" className="size-[20.57px] sm:size-6" />
							</button>
							<button
								className="flex items-center justify-center size-[48px] sm:size-[56px] border-[1.4px] border-textSecondaryDark dark:border-textSecondaryDark/5 p-2 rounded-full bg-textDark dark:bg-text "
								type="button">
								{/* Apple icon */}
								<Icon
									icon="apple"
									className="w-[20.57px] h-[20.57px] sm:w-[24px] sm:h-[24px] text-text dark:text-textDark"
								/>
							</button>
						</div>
						<div className="text-center sm:text-base">
							Don't have an account?{" "}
							<Link
								to="/signup"
								className="bg:text-text text-[textDark] sm:text-base text-[14px] leading-[150%] font-semibold hover:underline">
								Sign up
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
