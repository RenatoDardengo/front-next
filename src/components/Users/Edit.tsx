import { IUserData } from "@/types";
import style from "./styles.module.css";
import { InputText } from "@/components/Custom/InputText";
import { Button } from "@/components/Custom/Button";

interface EditProps {
    userData: IUserData;
}
const EditUser = ({ userData}: EditProps)=>{
    return (
        <section className={style.user_edit_sec}>
            <form action="">
                <div className={style.user_edit_item}>
                    <label htmlFor="inputName">Nome:</label>
                    <InputText value={userData.name} id="inputName" />
                </div>

                <div className={style.user_edit_item}>
                    <label htmlFor="inputDescription">Telefone:</label>
                    <InputText value={userData.phone_number} id="inputDescription" />
                </div>

                <div className={style.user_edit_item}>
                    <label htmlFor="inputDescription">Função:</label>
                    <InputText value={userData.job_title} id="inputDescription" />
                </div>

                <Button label="Alterar" className="btn_success" />

            </form>



        </section>

    )

}
export default EditUser