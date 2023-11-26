import React, { ChangeEvent } from "react";
import style from "./style.module.css"
import { type } from "os";

interface InputTextProps {
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    value?: string | number;
    defaultValue?: string | number;
    id?:string;
    type?:string;
    height?: number;
}

export const InputText: React.FC<InputTextProps> = ({
    placeholder,
    onChange,
    name,
    value,
    defaultValue,
    type,
    height
}) => {
    return (
        <input
            className={style.input_text}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            value={value}
            defaultValue={defaultValue}
            type={type}
            style={{ height: height + "px" }}
        />
    );
};