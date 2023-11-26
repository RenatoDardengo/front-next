'use client'
import style from "./style.module.css"
import { useRouter } from "next/navigation";
import Cookie from 'js-cookie';
import { ExitButtonProps } from "@/types";
import { NavbarProps } from "@/types";


const ExitButton = ({ onExit }: ExitButtonProps) => {
    const router = useRouter();

    const handleExit = () => {
        router.push("/admin");
        Cookie.remove('auth_token');
        onExit();
    };

    return (
        <span onClick={handleExit}>
            Sair
        </span>
    );
};



const NavBar = ({ onCollapse, username }: NavbarProps) => {
    return (
        <div className={style.navbar}>
            <div>
                <img src="/img/menu.png" alt="menu" onClick={onCollapse} />
            </div>
            <div>Olá, {username}</div>
            <ExitButton onExit={onCollapse} />
        </div>
    );
};

export default NavBar;
