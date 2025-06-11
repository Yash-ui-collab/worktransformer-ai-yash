import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Icon from "components/utils/Icon";
import { toast } from "components/utils/toast";
import BgGlow from "components/layout/BgGlow";
import { Input } from "components/utils/Input";
import Select from "components/utils/Select";
import OtpInput from "components/common/otpInput";

// Step 1: Basic Info form type
type BasicInfoInputs = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	company: string;
	jobTitle: string;
	orgSize: string;
	bestDescribes: string;
	intendedUse: string;
	achieveMost: string;
	communications: string;
	role: string;
	hearAbout: string;
};

// Step 3: 2FA Verification form type
type VerifyAuthInputs = {
	code: string;
};

// Step 4: Security Information form type
type SecurityInfoInputs = {
	password: string;
	confirmPassword: string;
};

// Combined form data type
type FormData = BasicInfoInputs & VerifyAuthInputs & SecurityInfoInputs;

const orgSizeOptions = [
	{ value: "1-10", label: "1-10" },
	{ value: "11-50", label: "11-50" },
	{ value: "51-200", label: "51-200" },
	{ value: "201-500", label: "201-500" },
	{ value: "501-1000", label: "501-1000" },
	{ value: "1000+", label: "1000+" },
];

const bestDescribesOptions = [
	{ value: "HR", label: "HR" },
	{ value: "IT", label: "IT" },
	{ value: "Leadership", label: "Leadership" },
	{ value: "Employee", label: "Employee" },
	{ value: "Other", label: "Other" },
];

const intendedUseOptions = [
	{ value: "Research", label: "Research" },
	{ value: "Adoption", label: "Adoption" },
	{ value: "Evaluation", label: "Evaluation" },
	{ value: "Other", label: "Other" },
];

const achieveMostOptions = [
	{ value: "Productivity", label: "Productivity" },
	{ value: "Engagement", label: "Engagement" },
	{ value: "Innovation", label: "Innovation" },
	{ value: "Other", label: "Other" },
];

const communicationOptions = [
	{ value: "Product Updates", label: "Product Updates" },
	{ value: "Newsletter", label: "Newsletter" },
	{ value: "Events", label: "Events" },
	{ value: "None", label: "None" },
];

const roleOptions = [
	{ value: "Decision Maker", label: "Decision Maker" },
	{ value: "Influencer", label: "Influencer" },
	{ value: "User", label: "User" },
	{ value: "Other", label: "Other" },
];

const hearAboutOptions = [
	{ value: "Google", label: "Google" },
	{ value: "LinkedIn", label: "LinkedIn" },
	{ value: "Colleague", label: "Colleague" },
	{ value: "Event", label: "Event" },
	{ value: "Other", label: "Other" },
];

const departmentOptions = [
	{ value: "Sales", label: "Sales" },
	{ value: "Marketing", label: "Marketing" },
	{ value: "Engineering", label: "Engineering" },
	{ value: "Finance", label: "Finance" },
	{ value: "HR", label: "HR" },
	{ value: "IT", label: "IT" },
	{ value: "Operations", label: "Operations" },
	{ value: "Other", label: "Other" },
];

// Step 1: Basic Info validation schema
const basicInfoSchema = yup.object().shape({
	firstName: yup.string().required("First name is required"),
	lastName: yup.string().required("Last name is required"),
	email: yup.string().email("Invalid email").required("Email is required"),
	phone: yup
		.string()
		.required("Phone number is required")
		.matches(/^\+?[1-9]\d{7,14}$/, "Invalid phone number format")
		.min(8, "Phone number is too short")
		.max(15, "Phone number is too long"),
	company: yup.string().required("Company name is required"),
	jobTitle: yup.string().required("Job Title is required"),
	orgSize: yup.string().required("Organization Size is required"),
	bestDescribes: yup.string().required("This field is required"),
	intendedUse: yup.string().required("This field is required"),
	achieveMost: yup.string().required("This field is required"),
	communications: yup.string().required("This field is required"),
	role: yup.string().required("This field is required"),
	hearAbout: yup.string().required("This field is required"),
});

// Step 3: 2FA Verification validation schema
const verifyAuthSchema = yup.object().shape({
	code: yup
		.string()
		.required("Authentication code is required")
		.matches(/^\d{6}$/, "Invalid code. Please enter 6 digits")
		.min(6, "Code must be 6 digits")
		.max(6, "Code must be 6 digits"),
});

// Step 4: Security Information validation schema
const securityInfoSchema = yup.object().shape({
	password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password")], "Passwords must match")
		.required("Please confirm your password"),
});

export default function SignUpPage() {
	const [currentStep, setCurrentStep] = useState(1);
	const [copied, setCopied] = useState(false);
	const [formData, setFormData] = useState<Partial<FormData>>({});

	const secretKey = "89J64S8459F224"; // In a real app, this would be generated server-side
	const lightQr = "/assets/images/lightQr.svg";
	const darkQr = "/assets/images/Qr.svg";

	const navigate = useNavigate();

	// Step 1: Basic Info form
	const basicInfoForm = useForm<BasicInfoInputs>({
		resolver: yupResolver(basicInfoSchema),
		defaultValues: formData,
	});

	// Step 3: 2FA Verification form
	const verifyAuthForm = useForm<VerifyAuthInputs>({
		resolver: yupResolver(verifyAuthSchema),
	});

	// Step 4: Security Information form
	const securityInfoForm = useForm<SecurityInfoInputs>({
		resolver: yupResolver(securityInfoSchema),
	});

	const handleCopy = () => {
		navigator.clipboard.writeText(secretKey);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	const handleBasicInfoSubmit = async (data: BasicInfoInputs) => {
		setFormData({ ...formData, ...data });
		setCurrentStep(2);
	};

	const handleVerifyAuthSubmit = async (data: VerifyAuthInputs) => {
		setFormData({ ...formData, ...data });
		setCurrentStep(4);
	};

	const handleSecurityInfoSubmit = async (data: SecurityInfoInputs) => {
		const finalData = { ...formData, ...data };
		// Here you would typically send the data to your backend
		toast.success("Signup successful!");
		navigate("/login");
	};

	const handleBack = () => {
		setCurrentStep(currentStep - 1);
	};

	const handleContinue = () => {
		if (currentStep === 2) {
			setCurrentStep(3);
		}
	};

	const renderStep = () => {
		switch (currentStep) {
			case 1:
				return (
					<div className="flex flex-col items-center sm:gap-12 gap-6 sm:w-full">
						<div className="flex flex-col items-center sm:gap-4 gap-[14px]">
							<h2 className="w-full sm:text-5xl text-[28px] sm:leading-[53px] leading-[31px] font-semibold text-center">
								Sign Up
							</h2>
							<p className="  text-center leading-[150%] sm:text-base text-[14px]">
								Built for leaders and professionals shaping the future of work. Powered by extensive
								research and AI.
							</p>
						</div>
						<form
							onSubmit={basicInfoForm.handleSubmit(handleBasicInfoSubmit)}
							noValidate
							className="flex flex-col sm:gap-12 gap-6 w-full">
							<div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 gap-6 ">
								{/* First Name */}
								<div>
									<Input
										type="text"
										label="First Name"
										placeholder="Enter your first name"
										iconPost="profile"
										aria-label="First name input"
										{...basicInfoForm.register("firstName")}
										error={basicInfoForm.formState.errors.firstName?.message as string}
									/>
								</div>

								{/* Last Name */}
								<div>
									<Input
										type="text"
										label="Last Name"
										placeholder="Enter your last name"
										iconPost="profile"
										aria-label="Last name input"
										{...basicInfoForm.register("lastName")}
										error={basicInfoForm.formState.errors.lastName?.message as string}
									/>
								</div>

								{/* Email */}
								<div>
									<Input
										type="email"
										label="Email Address (personal or corporate allowed)"
										placeholder="Enter your email address"
										iconPost="email"
										aria-label="Email address input"
										{...basicInfoForm.register("email")}
										error={basicInfoForm.formState.errors.email?.message as string}
										autoComplete="email"
									/>
								</div>

								{/* Phone */}
								<div>
									<Input
										type="tel"
										label="Phone Number"
										placeholder="Enter your phone number"
										iconPost="number"
										aria-label="Phone number input"
										{...basicInfoForm.register("phone")}
										error={basicInfoForm.formState.errors.phone?.message as string}
										autoComplete="tel"
										inputMode="numeric"
										maxLength={20}
									/>
								</div>

								{/* Company */}
								<div>
									<Input
										type="text"
										label="Company / Organisation Name"
										placeholder="Enter your company name"
										iconPost="company"
										aria-label="Company or organization name input"
										{...basicInfoForm.register("company")}
										error={basicInfoForm.formState.errors.company?.message as string}
									/>
								</div>

								{/* Job Title */}
								<Select
									label="Job Title / Role"
									placeholder="Please select"
									options={departmentOptions}
									error={basicInfoForm.formState.errors.jobTitle?.message as string}
									{...basicInfoForm.register("jobTitle")}
								/>

								{/* Organization Size */}
								<Select
									label="Organization Size"
									placeholder="Please select"
									options={orgSizeOptions}
									error={basicInfoForm.formState.errors.orgSize?.message as string}
									{...basicInfoForm.register("orgSize")}
								/>

								{/* Best Describes */}
								<Select
									label="Which role best describes you"
									placeholder="Please select"
									options={bestDescribesOptions}
									error={basicInfoForm.formState.errors.bestDescribes?.message as string}
									{...basicInfoForm.register("bestDescribes")}
								/>

								{/* Intended Use */}
								<Select
									label="What is your intended use of the platform?"
									placeholder="Please select"
									options={intendedUseOptions}
									error={basicInfoForm.formState.errors.intendedUse?.message as string}
									{...basicInfoForm.register("intendedUse")}
								/>

								{/* Achieve Most */}
								<Select
									label="What do you hope to achieve most with our platform?"
									placeholder="Please select"
									options={achieveMostOptions}
									error={basicInfoForm.formState.errors.achieveMost?.message as string}
									{...basicInfoForm.register("achieveMost")}
								/>

								{/* Communications */}
								<Select
									label="Select communications you'd like to receive:"
									placeholder="Please select"
									options={communicationOptions}
									error={basicInfoForm.formState.errors.communications?.message as string}
									{...basicInfoForm.register("communications")}
								/>

								{/* Role */}
								<Select
									label="Your role in choosing or approving workplace technology"
									placeholder="Please select"
									options={roleOptions}
									error={basicInfoForm.formState.errors.role?.message as string}
									{...basicInfoForm.register("role")}
								/>

								{/* Hear About */}
								<Select
									label="How did you hear about WorkTransformers.ai?"
									placeholder="Please select"
									options={hearAboutOptions}
									error={basicInfoForm.formState.errors.hearAbout?.message as string}
									{...basicInfoForm.register("hearAbout")}
								/>
							</div>

							<div className="flex flex-col gap-[14px] sm:gap-[16px] items-center">
								<button
									type="submit"
									disabled={basicInfoForm.formState.isSubmitting}
									className="w-[200px] h-[48px] sm:h-[56px] text-white font-semibold rounded-full sm:px-9 px-6 border-2 border-textSecondaryDark dark:border-textSecondaryDark/5 bg-primary text-sm sm:text-base leading-[150%]">
									{basicInfoForm.formState.isSubmitting ? "Submitting..." : "Continue"}
								</button>
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
										to="/login"
										className="bg:text-text text-[textDark] sm:text-base text-[14px] leading-[150%] font-semibold hover:underline">
										Log In
									</Link>
								</div>
							</div>
						</form>
					</div>
				);
			case 2:
				return (
					<div className="flex flex-col items-center gap-6 sm:gap-12">
						<div className="flex flex-col items-center sm:gap-4 gap-4">
							<h2 className="text-[28px] sm:text-5xl leading-[110%] text-textDark dark:text-text font-semibold text-center">
								Set Up Authenticator
							</h2>
							<p className="w-full sm:w-[450px] text-center text-sm sm:text-base text-textDark dark:text-text leading-[150%]">
								Scan the QR code below with your authenticator app (Google Authenticator, Authy, etc.).
							</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-[195.54px] h-[226.22px] sm:w-[244.01px] sm:h-[276px] bg-text dark:bg-text/10 flex justify-center items-center border border-text/10 rounded-3xl sm:mb-4 mb-3">
								<img
									src={lightQr}
									alt="QR Code Light"
									className="w-[147.54px] h-[147.54px] sm:w-[180px] sm:h-[180px] rounded block dark:hidden"
								/>
								<img
									src={darkQr}
									alt="QR Code Dark"
									className="w-[147.54px] h-[147.54px] sm:w-[180px] sm:h-[180px] rounded hidden dark:block"
								/>
							</div>
							<div className="flex items-center justify-center gap-2 sm:gap-3">
								<div>
									<span className="text-sm sm:text-base text-textDark dark:text-text leading-[150%]">
										Secret Key:
									</span>
									<span className="text-sm sm:text-base text-textDark dark:text-text leading-[150%]">
										{secretKey}
									</span>
								</div>
								<button
									onClick={handleCopy}
									className="rounded transition flex items-center"
									title="Copy secret key">
									<Icon icon="copy" className="w-4 h-4 sm:w-6 sm:h-6 text-textDark dark:text-text" />
								</button>
								{copied && (
									<span className="ml-2 text-green-500 text-xs flex items-center">Copied!</span>
								)}
							</div>
						</div>
						<div className="flex sm:w-[200px]">
							<button
								onClick={handleContinue}
								className="flex-1 bg-primary text-white rounded-full px-6 py-3.5 sm:px-9 sm:py-4 font-semibold text-sm sm:text-base hover:bg-primary/90 leading-[150%] transition flex items-center justify-center">
								Continue
							</button>
						</div>
					</div>
				);
			case 3:
				return (
					<form
						onSubmit={verifyAuthForm.handleSubmit(handleVerifyAuthSubmit)}
						className="flex flex-col items-center gap-6 sm:gap-12">
						<div className="flex flex-col items-center sm:gap-4 gap-[14px]">
							<h2 className="w-full sm:text-5xl text-[28px] leading-[110%] font-semibold text-center text-textDark dark:text-text">
								Verify Authenticator Code
							</h2>
							<p className="text-center text-textDark dark:text-text leading-[150%] sm:text-base text-[14px] w-full">
								Please enter the code from your authenticator app
							</p>
						</div>
						<div className="flex flex-col items-center w-full sm:gap-12 gap-6">
							<div className="flex flex-col items-center sm:gap-6 gap-3">
								<OtpInput
									otpDigit={6}
									className="text-textDark dark:text-text bg-text"
									containerClass=""
									onOtpChange={value => {
										verifyAuthForm.setValue("code", value);
										verifyAuthForm.trigger("code");
									}}
								/>
								{verifyAuthForm.formState.errors.code && (
									<p className="text-red-500 text-sm">
										{verifyAuthForm.formState.errors.code.message}
									</p>
								)}
							</div>
							<div className="flex items-center justify-center w-[200px]">
								<button
									type="submit"
									className="bg-primary text-white rounded-full px-6 py-3.5 sm:px-9 sm:py-4 font-semibold text-sm sm:text-base hover:bg-primary/90 leading-[150%] transition">
									Continue
								</button>
							</div>
						</div>
						<button
							type="button"
							onClick={handleBack}
							className="sm:text-[16px] text-[14px] font-medium leading-[150%] flex items-center sm:pt-0 sm:pb-0 pt-0.5 pb-[14px]">
							Back
						</button>
					</form>
				);
			case 4:
				return (
					<form
						onSubmit={securityInfoForm.handleSubmit(handleSecurityInfoSubmit)}
						className="flex flex-col items-center gap-6 sm:gap-12">
						<div className="flex flex-col items-center sm:gap-4 gap-[14px]">
							<h2 className="w-full sm:text-5xl text-[28px] leading-[110%] font-semibold text-center text-textDark dark:text-text">
								Security Information
							</h2>
							<p className="text-center text-textDark dark:text-text/60 leading-[150%] sm:text-base text-[14px] sm:w-[450px]">
								Secure your account to compete with confidence and protect your progress.
							</p>
						</div>
						<div className="w-full flex flex-col gap-[16px] sm:gap-6 leading-[150%]">
							<div className="relative">
								<Input
									type={"password"}
									label="Password"
									placeholder="Enter your password"
									className="bg-text dark:bg-text dark:placeholder:placeholder"
									{...securityInfoForm.register("password")}
									error={securityInfoForm.formState.errors?.password?.message}
								/>
							</div>
							<div className="relative">
								<Input
									type={"password"}
									label="Confirm Password"
									placeholder="Enter your password"
									className="bg-text dark:bg-text/10 dark:placeholder:placeholder"
									{...securityInfoForm.register("confirmPassword")}
									error={securityInfoForm.formState.errors?.confirmPassword?.message}
								/>
							</div>
						</div>
						<div className="flex items-center justify-center">
							<button
								type="submit"
								className="bg-primary text-white rounded-full px-6 py-3.5 sm:px-9 sm:py-4 font-semibold text-sm sm:text-base hover:bg-primary/90 leading-[150%] transition w-[200px] sm:w-[200px]">
								Sign Up
							</button>
						</div>
					</form>
				);
			default:
				return null;
		}
	};

	return (
		<div className="relative flex flex-col items-center w-full">
			{currentStep === 1 ? (
				<div className="w-[calc(100%+305px)] sm:w-[calc(100%+206px)] h-[1215px] sm:h-[5201.72px] mt-40 sm:mt-32 absolute bg-[url(/assets/images/bg_circular_lines.svg)] bg-[50%_0%]"></div>
			) : (
				<div className="w-[calc(100%+305px)] sm:w-[calc(100%+206px)] h-[1215px] sm:h-[2941.09px] mt-40 sm:mt-32 absolute bg-[url(/assets/images/bg_circular_lines.svg)] bg-[50%_0%]"></div>
			)}
			<BgGlow
				variant="secondarySmall"
				className="sm:top-[-211px] sm:left-[-175px] !h-[164px] !w-[164px] sm:!h-[230px] sm:!w-[230px] top-[-200px] left-[-100px] !z-[2] !scale-[4]"
			/>
			<BgGlow
				variant="secondary"
				className="top-[450px] sm:top-[600px] -right-[70px] sm:right-[-50px] !h-[178px] !w-[178px] sm:!h-[223px] sm:!w-[223px] !z-[2] sm:!scale-400 blur-xl"
			/>
			<BgGlow
				variant="secondaryMedium"
				className="bottom-[20px] sm:top-[600px] -right-[70px] sm:left-[-50px] !h-[150px] !w-[150px] sm:!h-[223px] sm:!w-[223px] !z-[2] sm:!scale-400 sm:block hidden"
			/>
			<div
				className={`container flex items-center justify-center ${
					currentStep === 1
						? "sm:pt-[36px] sm:pb-[65px] py-6"
						: currentStep === 2
							? "sm:py-[110px] py-[66.39px]"
							: currentStep === 3
								? "py-[137px] sm:pt-[186.5px] sm:pb-[186.5px]"
								: "py-6 sm:pt-[168px] sm:pb-[168px] sm:py-[123px]"
				}`}>
				<div
					className={`bg-primarySecondary dark:bg-bgAuth rounded-2xl p-[16px] sm:p-12 flex flex-col gap-4 relative z-[1] ${
						currentStep === 1
							? "w-full"
							: currentStep === 2
								? "w-[327px] sm:w-[666px]"
								: currentStep === 3
									? "w-full sm:w-[666px]"
									: "w-[327px] sm:w-[666px]"
					}`}>
					{renderStep()}
				</div>
			</div>
		</div>
	);
}
