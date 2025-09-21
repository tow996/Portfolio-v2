import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type TextAreaFieldProps = {
	label: string;
	register: UseFormRegisterReturn;
	placeholder?: string;
	error?: FieldError;
	rows?: number;
};

const TextAreaField = ({ placeholder, label, register, error, rows = 6 }: TextAreaFieldProps) => (
	<div className="input">
		<label className="input__label" htmlFor="">
			{label} {error && <span className="input__error">{error.message}</span>}
		</label>
		<textarea rows={rows} {...register} className="input__box" placeholder={placeholder} />
	</div>
);

export default TextAreaField;
