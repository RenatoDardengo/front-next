import { ReactNode } from "react";
import style from "./style.module.css"
interface MainProps {
    children: ReactNode;
    
}
const Content =({ children}:MainProps)=>{
    return(
        <div className={style.content}>
            {children}
        </div>
    )

}

export default Content;