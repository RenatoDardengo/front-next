import {MenuOptions} from "./MenuOptions";
import style from "./style.module.css";
type SidebarProps = {
    collapsed: boolean;
    onItemClick: (menuItem: string) => void;
};
const SideBar = ({ collapsed, onItemClick }: SidebarProps)=>{
    return(
        <span className={` ${collapsed ? style.sidebar : style.sidebar_collapsed}`}>

            <MenuOptions collapsed={collapsed} onItemClick={onItemClick} />

        </span>
    )

}

export default SideBar;