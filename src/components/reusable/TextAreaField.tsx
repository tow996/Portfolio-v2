import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type TextAreaFieldProps = {
	label: string;
	register: UseFormRegisterReturn;
	placeholder?: string;
	error?: FieldError;
	rows?: number;
	className?: string;
	name?: string;
};

const TextAreaField = ({
	className,
	placeholder,
	label,
	register,
	error,
	name,
	rows = 6,
}: TextAreaFieldProps) => (
	<div className={`input ${className}`}>
		<label className="input__label" htmlFor={`id-${name}`}>
			{label} {error && <span className="input__error">{error.message}</span>}
		</label>
		<textarea
			id={`id-${name}`}
			rows={rows}
			{...register}
			className="input__box"
			placeholder={placeholder}
		/>
	</div>
);

export default TextAreaField;
