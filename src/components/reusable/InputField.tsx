import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputFieldProps = {
	label: string;
	placeholder?: string;
	type?: string;
	register: UseFormRegisterReturn;
	error?: FieldError;
	className?: string;
};

const InputField = ({
	className,
	placeholder,
	label,
	type = "text",
	register,
	error,
}: InputFieldProps) => (
	<div className={`input ${className}`}>
		<label className="input__label">
			{label}
			{error && <span className="input__error">{error.message}</span>}
		</label>
		<input type={type} {...register} className="input__box" placeholder={placeholder} />
	</div>
);

export default InputField;
