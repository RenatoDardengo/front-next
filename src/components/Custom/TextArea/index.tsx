import React, { ChangeEvent } from "react";
import style from "./style.module.css"

interface TextAreaProps {
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    name?: string;
    value?: string | number;
    defaultValue?: string | number;
    id?:string;
}

const TextArea = ({placeholder,onChange,name,value,defaultValue, id}:TextAreaProps)=>{
    return(
        <textarea
        className={style.text_area}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        value={value}
        defaultValue={defaultValue}
        />

        
    )


}

export default TextArea;