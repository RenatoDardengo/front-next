import style from "./styles.module.css";
import { IUserData } from "@/types";
import { useState, useEffect } from "react";
import { Button } from "@/components/Custom/Button";
import UserService from "@/services/apis/userService";

interface DeleteProps {
    userData: IUserData;
    closeModal: () => void;
    fetchUsers: () => Promise<void>;
}

const DeleteUser = ({ userData, closeModal, fetchUsers }: DeleteProps)=>{
    const [id, setId] = useState(0);

    useEffect(()=>{
        if(userData){
            setId(userData.id || 0);
        }
    },[userData]);
    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {

        event.preventDefault();

        try {
            const response = await UserService.deleteUser(id);

            if (response.status === 200) {
                const data = await response.data;
                alert(data.msg);
                closeModal();
                fetchUsers();


            } else if (response.status === 404 || response.status === 500 || response.status === 400 || response.status === 401) {
                const data = await response.data;
                const msg = data.msg;
                alert(msg);
            } else {
                alert("Erro ao conectar-se com o servidor. Por favor tente mais tarde.")
            }

        } catch (error: any) {

            if (error.response && (error.response.status === 401 || error.response.status === 400)) {
                const data = error.response.data;
                const msg = data.msg;
                alert(msg);
            } else {
                console.error('Erro inesperado:', error);
                alert("Ocorreu um erro ao concluir a operação!");
            }
        }

    };
    return(
        <section>
            <p className={style.user_msg_delete}> Deseja excluir o usuário {userData.name}? </p>
            <div className={style.user_btn_delete}>
                <Button onClick={handleSubmit} label="Excluir" className="btn-warning" />

            </div>
        </section>

    )

}
export default DeleteUser;