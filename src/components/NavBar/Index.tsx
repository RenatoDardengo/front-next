
import style from "./style.module.css"
import { useRouter } from "next/navigation";
import Cookie from 'js-cookie';
import jwt from 'jsonwebtoken';
import { ExitButtonProps } from "@/types";
import { NavbarProps } from "@/types";
import React, { useState, useEffect } from 'react';




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



const NavBar = ({ onCollapse}: NavbarProps) => {
    const [userName, setUserName] = useState<string>("");

    useEffect(() => {
        const authToken = Cookie.get('auth_token');

        let decodedUserName = "";
        if (authToken) {
            try {
                const decodedToken = jwt.decode(authToken) as { name?: string };
                decodedUserName = decodedToken?.name || "";
                setUserName(decodedUserName); // Atualiza o estado do nome do usuário
            } catch (error) {
                console.error('Erro ao decodificar o token:', error);
            }
        }
    }, []); 
    
    return (
        <div className={style.navbar}>
            <div>
                <img src="/img/menu.png" alt="menu" onClick={onCollapse} />
            </div>
            <div>Olá, {userName}</div>
            <ExitButton onExit={onCollapse} />
        </div>
    );
};

export default NavBar;
