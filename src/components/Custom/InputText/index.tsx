import React, { ChangeEvent } from "react";
import style from "./style.module.css"
import InputMask from "react-input-mask";

export interface InputTextProps {
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    value?: string | number|null;
    defaultValue?: string | number;
    id?: string;
    type?: string;
    height?: number;
    mask?: string;

}


export const InputText: React.FC<InputTextProps> = ({
    placeholder,
    onChange,
    name,
    value,
    defaultValue,
    type,
    height,
    mask,

}) => {
    
    if (mask) {
        return (
            <InputMask
                className={style.input_text}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                value={value}
                defaultValue={defaultValue}
                type={type}
                mask={mask} 
                style={{ height: height + "px" }}
                
            />
        );
    }
  
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