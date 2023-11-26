import { ReactNode } from "react";
import style from "./style.module.css";

interface ModalProps{
    isOpen?:boolean;
    onClose:()=>void;
    children?: ReactNode;
    title?: string;

}

const Modal = ({isOpen, onClose, children, title}:ModalProps)=>{
    if(!isOpen) return null;

    const handleClose = () => {

        onClose(); 
      };
    return(
        <div className={style.modal}>
            <div className={`${style.modal_content} ${style.animate_zoom} ${style.card4}`}>
                <header className={`${style.container} ${style.teal}`}>
                    <span onClick={handleClose} className={`${style.button} ${style.display_topright}`}
                        >&times;</span>
                    <h2>{title}</h2>
                </header>
                <div className={style.body}>
                    {children}
                    

                </div>

            </div>
        </div>
    )

}

export default Modal;