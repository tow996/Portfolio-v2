"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Section from "@/components/reusable/Section";
import InputField from "@/components/reusable/InputField";
import TextAreaField from "@/components/reusable/TextAreaField";
import content from "../../../content/content.json";
import { sendEmail } from "@/server/actions/sendEmail";

type FormValues = {
	fromEmail: string;
	subject: string;
	message: string;
	honey?: string;
};

const ContactMe = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>();

	const [status, setStatus] = useState("");

	const onSubmit = async (data: FormValues) => {
		setStatus("");

		const result = await sendEmail(data);

		if (result.success) {
			setStatus("Email sent successfully.");
			reset();
		} else {
			const error =
				typeof result.error === "object" && "general" in result.error
					? result.error.general?.[0]
					: "Failed to send email.";
			setStatus(error || "Failed to send email.");
		}
	};

	return (
		<Section
			id="contact"
			title={content.contactMe.title}
			description={content.contactMe.description}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* Honeypot */}
				<input
					type="text"
					{...register("honey")}
					style={{ display: "none" }}
					aria-hidden="true"
				/>

				<InputField
					label="Your Email:"
					type="email"
					register={register("fromEmail", { required: "Your email is required" })}
					error={errors.fromEmail}
				/>

				<InputField
					label="Subject:"
					register={register("subject", { required: "Subject is required" })}
					error={errors.subject}
				/>

				<TextAreaField
					label="Message:"
					register={register("message", { required: "Message is required" })}
					error={errors.message}
				/>

				<button type="submit" disabled={isSubmitting}>
					{isSubmitting ? "Sending..." : "Send Email"}
				</button>

				{status && <p>{status}</p>}
			</form>
		</Section>
	);
};

export default ContactMe;
