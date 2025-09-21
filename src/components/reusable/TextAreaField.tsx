import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type TextAreaFieldProps = {
	label: string;
	register: UseFormRegisterReturn;
	error?: FieldError;
	rows?: number;
};

const TextAreaField = ({ label, register, error, rows = 6 }: TextAreaFieldProps) => (
	<label>
		{label}
		<textarea rows={rows} {...register} />
		{error && <p>{error.message}</p>}
	</label>
);

export default TextAreaField;
