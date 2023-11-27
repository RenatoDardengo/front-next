'use client'
import { InputText } from "@/components/Custom/InputText";
import { Button } from "@/components/Custom/Button";
import style from "./page.module.css";
import axios, { AxiosError } from "axios";
import { useState } from 'react';
import Cookie from 'js-cookie';
import { ErrorResponse } from "@/types";
import { useRouter } from "next/navigation";
import UserService from "@/services/apis/userService";


export default function Login() {
    const [name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { push } = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const payload = {
            name,
            password
        };
        try {

            const response = await UserService.authentication({ userName: name, password: password })

            if (response.status === 200) {
                const tokenFromAPI = response.data.token;
                Cookie.set('auth_token', tokenFromAPI);
                alert(`Usuário ${name} atenticado com sucesso!`)
                push("/admin/home");

            }

        } catch (error: any) {

            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError<ErrorResponse>;
                if (axiosError.response?.status === 401) {
                    const msg = axiosError.response.data.msg;
                    alert(msg);
                } else if (axiosError.response?.status === 400) {
                    const msg = axiosError.response.data.msg;
                    alert(msg);
                }
            } else {

                alert("Erro ao tentar fazer login.");
            }

        }
    };
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleGoToHome = () => {
        push("/");
    }

    return (
        <div className={style.appContainer}>
            <div className={style.login_container}>
                <h2> Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className={style.input_frm}>
                        <label htmlFor="userName" className={style.lbl}>Email: </label>
                        <InputText
                            height={30}
                            type="text"
                            name="name"
                            id="userName"
                            placeholder="Digite usuário"
                            value={name}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className={style.input_frm}>
                        <label htmlFor="userPassword" className={style.lbl}>Senha: </label>
                        <InputText
                            height={30}
                            type="password"
                            name="password"
                            id="userPassword"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className={style.btn_frm}>
                        <Button label="Entrar" type="submit" className="btn_primary" />
                        <Button label="Home" className="btn-warning" type="button" onClick={handleGoToHome} />
                    </div>
                </form>
            </div>
        </div>
    );

}