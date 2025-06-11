import Icon from "components/utils/Icon";
import { useAppState } from "components/utils/useAppState";
import React, { useState } from "react";

export default function DataPrivacy() {
	const [{ isDark }, setAppState] = useAppState();

	const dataPrivacyPrinciples = [
		{
			"title": "Data Privacy Principles",
			"image": "/assets/images/dataSecure-dark.svg",
			"principles": [
				{
					"title": "No AI Training from Your Data",
					"description": "Conversations, files, and any data you share are never used to train or improve our AI models"
				},
				{
					"title": "Session-based Data Handling",
					"description": "Uploaded documents and session conversations are retained only temporarily for your active session and securely deleted immediately after."
				},
				{
					"title": "Data Ownership",
					"description": "You retain complete ownership and control of your data at all times."
				}
			]
		},
		{
			"title": "Security Measures",
			"image": "/assets/images/lock-file-dark.svg",
			"principles": [
				{
					"title": "Encryption",
					"description": "Data encrypted at rest and in transit using advanced encryption standards (AES256 for data at rest and TLS 1.3 for data in transit)."
				},
				{
					"title": "Access Controls",
					"description": "Strict internal policies and role-based access controls limit data access to authorised personnel only."
				},
				{
					"title": "Regular Security Audits",
					"description": "Continuous monitoring and periodic internal reviews ensure our security standards remain robust and effective."
				}
			]
		},
		{
			"title": "Transparency",
			"image": "/assets/images/Group-dark.svg",
			"principles": [
				{
					"title": "Clear Policies",
					"description": "Open and easily accessible data handling, privacy, and security policies."
				},
				{
					"title": "User Consent",
					"description": "Clear user consent processes with transparent communication about data usage."
				}
			]
		},
		{
			"title": "Future Compliance Commitment",
			"image": "/assets/images/lock-document-dark.svg",
			"principles": [
				{
					"title": "Compliance Roadmap",
					"description": "We are committed to aligning with industry-leading standards, including GDPR, ISO 27001, and SOC 2 compliance, as we grow and resources permit."
				}
			]
		},
		{
			"title": "Support & Reporting",
			"image": "/assets/images/report-dark.svg",
			"principles": [
				{
					"title": "Dedicated Security Contact",
					"description": "Easily reachable support for any questions or concerns about data security and privacy."
				},
				{
					"title": "Incident Response",
					"description": "Established procedures for prompt, transparent communication and resolution of any potential incidents."
				}
			]
		}
	]

	return (
		<div className="container flex flex-col items-center gap-12 flex-[0_0_auto] py-6 sm:py-[72px]">
			<div className="flex flex-col items-start gap-6 sm:gap-12 relative self-stretch w-full flex-[0_0_auto]">
				<div className="flex flex-col sm:flex-row sm:justify-between w-full sm:gap-0 gap-4">
					<p className="bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent font-semibold text-[28px] sm:text-5xl leading-[140%] tracking-[-2px] sm:-tracking-normal sm:leading-[62px] w-full sm:w-[670px] text-center sm:text-start">
						Our Commitment to Your Privacy and Data Security
					</p>
					<p className="w-full sm:w-[450px] font-normal text-base sm:text-lg leading-[150%] text-textSecondary dark:text-textSecondaryDark sm:self-center sm:text-start text-center">
						At WorkTransformers.ai, your privacy and trust are paramount. Our approach is simple and transparent:

					</p>
				</div>
				{dataPrivacyPrinciples.map((data, index) => (
					<div key={index}
						className={`w-full flex flex-col sm:flex-row justify-center gap-4 sm:gap-[30px] ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
							}`}>
						<div className="flex flex-col gap-4 sm:gap-6 w-full p-4 sm:p-6 rounded-[10px] sm:rounded-2xl outline outline-solid outline-borderSecondary dark:outline-bgGray sm:w-[570px]">
							<div className="flex justify-between">
								<span className="bg-[linear-gradient(92.77deg,#080C1D_7.73%,#7E808C_99.72%)] dark:bg-[linear-gradient(92.99deg,#FFFFFF_14.12%,#AAAAAA_96.26%)] bg-clip-text text-transparent font-semibold text-lg sm:text-[24px] py-[5px]">{data.title}</span>
								<div className="flex w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] items-center justify-center gap-3.5 rounded-[40px] dark:[background:linear-gradient(180deg,rgba(8,12,29,1)_0%,rgba(42,43,51,1)_100%)] [background:linear-gradient(180deg,#ffffff_0%,#eaeaea_100%)]">
									{isDark ?
										<img
											src={data.image.replace('-light.svg', '-dark.svg')}
											alt={data.title}
											className="w-[24px] h-[24px]"
										/>
										:
										<img
											src={data.image.replace('-dark.svg', '-light.svg')}
											alt={data.title}
											className="w-[24px] h-[24px]"
										/>
									}
								</div>
							</div>
							{data.principles.map((principle, idx) => (
								<div key={idx} className="flex flex-col gap-2.5">
									<div className="text-textSecondary dark:text-textSecondaryDark font-semibold">{principle.title}</div>
									<div className="text-textSecondary dark:text-textSecondary">{principle.description}</div>
								</div>
							))}
						</div>
						<div className="flex flex-col items-center justify-center p-4 sm:p-5 self-stretch w-full sm:w-[570px] sm:h-[412px] rounded-[10px] sm:rounded-2xl outline outline-solid outline-borderSecondary dark:outline-bgGray bg-text dark:bg-bgc backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] h-[236.36px]">
							<div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] justify-center">
								<div className="relative w-[26px] sm:w-[56px] h-[26px] sm:h-[56px]">
									<Icon
										icon="galary"
										className="w-full h-full sm:w-[56px] sm:h-[56px] dark:stroke-textdark"
									/>
								</div>
								<div className="relative self-stretch font-normal text-textDark dark:text-placeholder sm:text-sm text-[12px] text-center leading-[18px]">
									Image{/* {item.title} */}
								</div>
							</div>
						</div>
					</div>
				))}

			</div>
		</div>
	);
}
