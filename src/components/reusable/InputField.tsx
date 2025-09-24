import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputFieldProps = {
	label: string;
	placeholder?: string;
	type?: string;
	register?: UseFormRegisterReturn;
	error?: FieldError;
	className?: string;
	value?: string;
	disabled?: boolean;
};

const InputField = ({
	className,
	placeholder,
	label,
	type = "text",
	register,
	error,
	disabled,
	value,
}: InputFieldProps) => (
	<div className={`input ${className}`}>
		<label className="input__label">
			{label}
			{error && <span className="input__error">{error.message}</span>}
		</label>
		<input
			value={value}
			type={type}
			{...register}
			className="input__box"
			placeholder={placeholder}
			disabled={disabled}
		/>
	</div>
);

export default InputField;
