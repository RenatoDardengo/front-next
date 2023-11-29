import style from "./styles.module.css"
import { InputText } from "@/components/Custom/InputText";
import { Button } from "@/components/Custom/Button";
import { IUserData, IUserProps, ErrorResponse } from "@/types";
import UserService from "@/services/apis/userService";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

const Users = ({ openModal }: IUserProps) => {
    const [users, setUsers] = useState<IUserData[]>([])
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await UserService.getAllUser();
                setUsers(response.data.users)

                
            } catch (error) {
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
                    alert("Erro ao realizar a consulta.");
                }
            }
        }

        fetchData();
    }, []);
    

      

    return (
        <div>
            <div >
                <p className={style.title}> Cadastro de Usuários</p>

            </div>
            <div className={`${style.search_components} ${style.space_element}`}>
                <InputText />
                <Button label="Cadastrar" className="btn_success" onClick={() => openModal('createUser', undefined, "Novo Usuário")} />


            </div>
            <div className={style.table_container}>
                <table className={style.table}>
                    <thead className={style.thead}>
                        <tr>
                            <th>Id</th>
                            <th className={style.th_hide}>Nome</th>
                            <th className={style.th_hide}>Permissão</th>
                            <th>Telefone</th>
                            <th>Função</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>{users!=null ? (
                        users.map((user, idx) =>
                            <tr key={idx}>
                                <td>
                                    {user.id}
                                </td>
                                <td className={style.th_hide}>
                                    {user.name}
                                </td>
                                <td className={style.th_hide}>
                                    {user.level}
                                </td>
                                <td >
                                    {user.phone_number}
                                </td>
                                <td>
                                    {user.job_title}
                                </td>
                                <td className={`${style.table_img} ${style.last_column}`} >
                                    <a href="#"><img src="/img/view3.png" alt="" /></a>
                                    <a onClick={() => openModal('editUser', user, "Editar Usuário")}><img src="/img/edit.png" /></a>
                                    <a href="#"><img src="/img/cancel.png" /></a>
                                </td>
                            </tr>)) : (<tr>
                                <td colSpan={6}>Nenhum usuário encontrado!</td>
                            </tr>)}


                    </tbody>
                </table>
            </div>

        </div >
    )

}

export default Users;