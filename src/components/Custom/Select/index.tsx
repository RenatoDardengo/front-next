import React, { ChangeEvent } from "react";
import style from "./styles.module.css";

interface SelectProps {
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string | number; label: string }[]; // Array de opções para o select
    placeholder?: string;
    name?: string;
    value?: string | number;
    defaultValue?: string | number;
    id?: string;
    height?: number;
}

export const Select: React.FC<SelectProps> = ({
    onChange,
    options,
    placeholder,
    name,
    value,
    defaultValue,
    height,
}) => {
    
    return (
        <select
            className={style.input_select} // Utilize sua classe CSS para o select
            onChange={onChange}
            name={name}
            value={value}
            defaultValue={defaultValue}
            style={{ height: height + "px" }}
        >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
