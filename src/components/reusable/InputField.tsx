import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputFieldProps = {
	label: string;
	type?: string;
	register: UseFormRegisterReturn;
	error?: FieldError;
};

const InputField = ({ label, type = "text", register, error }: InputFieldProps) => (
	<label>
		{label}
		<input type={type} {...register} />
		{error && <p>{error.message}</p>}
	</label>
);

export default InputField;
