"use server";

import { Resend } from "resend";
import { z } from "zod";

const emailSchema = z.object({
	fromEmail: z.email("Invalid email address"),
	subject: z.string().min(1, "Subject is required"),
	message: z.string().min(1, "Message is required"),
	honey: z.string().max(0),
});

export async function sendEmail(values: {
	fromEmail: string;
	subject: string;
	message: string;
	honey?: string;
}) {
	const parsed = emailSchema.safeParse(values);

	if (!parsed.success) {
		const errors = z.treeifyError(parsed.error);
		return {
			success: false,
			error: {
				subject: errors.properties?.subject?.errors,
				message: errors.properties?.message?.errors,
				fromEmail: errors.properties?.fromEmail?.errors,
				honey: errors.properties?.honey?.errors,
				general: errors.errors.length > 0 ? errors.errors : undefined,
			},
		};
	}

	if (values.honey) {
		console.warn("Bot submission detected");
		return { success: false, error: { general: ["Spam detected."] } };
	}

	const resend = new Resend(process.env.RESEND_API_KEY);

	try {
		const response = await resend.emails.send({
			from: "noreply@djordjoglogovac.com",
			to: "djordjo.glogovac96@gmail.com",
			replyTo: values.fromEmail,
			subject: values.subject,
			html: `<p>${values.message}</p><p>From: ${values.fromEmail}</p>`,
		});

		return { success: true, data: response };
	} catch (error) {
		console.error("Email send error:", error);
		return { success: false, error: { general: ["Failed to send email."] } };
	}
}
