"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/reusable/InputField";
import TextAreaField from "@/components/reusable/TextAreaField";
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

	const [status, setStatus] = React.useState("");

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

	useEffect(() => {
		const modal = document.querySelector(".contact-modal__content");
		modal?.classList.add("modal-fade-in");
	}, []);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="contact">
			<h1 className="section__title">Contact Me</h1>
			<div className="section__title_separator"></div>
			<input
				type="text"
				{...register("honey")}
				style={{ display: "none" }}
				aria-hidden="true"
			/>

			<InputField
				type="text"
				value="djordjo.glogovac96@gmail.com"
				label="To:"
				disabled={true}
			/>

			<InputField
				label="Your E-Mail*"
				type="email"
				placeholder="Enter your e-mail address..."
				register={register("fromEmail", { required: "Your email is required" })}
				error={errors.fromEmail}
			/>

			<InputField
				label="Subject*"
				placeholder="What's this about?"
				register={register("subject", { required: "Subject is required" })}
				error={errors.subject}
			/>

			<TextAreaField
				label="Message*"
				placeholder="Write your message here..."
				register={register("message", { required: "Message is required" })}
				error={errors.message}
			/>

			<div className="contact__submit">
				<button type="submit" disabled={isSubmitting} className="contact__submit__button">
					{isSubmitting ? "Sending..." : "Send Email"}
				</button>
				{status && <p className="contact__submit__status">{status}</p>}
			</div>
		</form>
	);
};

export default ContactMe;
