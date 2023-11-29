import React, { MouseEventHandler, ReactNode } from "react";
import style from "./style.module.css"

interface ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    label?: string;
    className?: string;
    type?: "button" | "submit" | "reset";
    icon?: ReactNode;
  
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, className, type, icon}) => {
    var selectClass:string="";
    const defaultClass = style.btn;
    switch(className){

        case 'btn_primary':
            selectClass = style.btn_primary
        break;
        case 'btn_danger':
            selectClass = style.btn_danger
        break;
        case 'btn_success':
            selectClass = style.btn_success
            break;
        case 'btn-warning':
            selectClass = style.btn_warning
        break;
        default:
            selectClass = style.btn_default
            break;
        


    }
     
    const buttonClass = className ? `${defaultClass} ${selectClass}` : defaultClass;
    return (
        <button className={buttonClass} onClick={onClick} type={type}>
            {icon}
            {label}
        </button>
    );
};