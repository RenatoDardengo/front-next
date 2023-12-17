import { IUserData } from "@/types";
import style from "./styles.module.css";
import { InputText } from "@/components/Custom/InputText";
import { Button } from "@/components/Custom/Button";
import { Select } from "@/components/Custom/Select";
import { useState, ChangeEvent, useEffect } from "react";
import { format } from 'date-fns';
import UserService from "@/services/apis/userService";


interface EditProps {
    userData: IUserData;
    closeModal: () => void;
    fetchUsers: () => Promise<void>;
}
const EditUser = ({ userData, closeModal, fetchUsers }: EditProps)=>{
    const [name, setName] = useState('');
    const [id, setId] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [level, setLevel] = useState<number>(0);
    const [jobTitle, setJobTitle] = useState("");
    useEffect(() => {
        if (userData) {
            setId(userData.id || 0);
            setName(userData.name || '');
            setPhoneNumber(userData.phoneNumber || '');
            setLevel(userData.level || 0);
            setJobTitle(userData.jobTitle || '');
        }
    }, [userData]);
   
    const handleJobTitle = (e: ChangeEvent<HTMLSelectElement>) => {
        setJobTitle(e.target.value);
    }
    const handleLevelChange = (e: ChangeEvent<HTMLSelectElement>) => {
        var value = parseInt(e.target.value);
        setLevel(value);

    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value.toUpperCase());

    };
    
    const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        var value = e.target.value;
        const newValue = value
            .replace('(', '')
            .replace(')', '')
            .replace('-', '')
            .replace(' ', '');
        setPhoneNumber(newValue)


    };
    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {

        event.preventDefault();

        try {
            const updatedDate = format(new Date(), 'yyyy-MM-dd');
            const response = await UserService.updateUser({
                id,
                name,
                level,
                phoneNumber: phoneNumber,
                jobTitle: jobTitle,
                status: true,
                updatedDate: updatedDate
            });

            if (response.status === 200) {
                const data = await response.data;
                alert(data.msg);
                closeModal();
                fetchUsers();


            } else if (response.status === 404 || response.status === 500) {
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

    return (
        <section className={style.user_edit_sec}>
            <form action="">
                <div className={style.user_edit_item}>
                    <label htmlFor="inputName">Nome:</label>
                    <InputText value={name} id="inputName" height={30} onChange={handleNameChange}  />
                </div>

                <div className={style.user_edit_item}>
                    <label htmlFor="inputPhone">Telefone:</label>
                    <InputText value={phoneNumber} id="inputPhone" height={30} mask="(99) 99999-9999"
                        onChange={handlePhoneNumberChange} />
                </div>

                <div className={style.user_edit_item}>
                    <label htmlFor="inputJob">Função:</label>
                    <Select options={[{ value: '', label: '' },
                    { value: 'VENDEDOR', label: "VENDEDOR" }, { value: 'FINANCEIRO', label: 'FINANCEIRO' }]}
                     id="inputJob" height={30}
                     value={jobTitle}
                     onChange={handleJobTitle}/>
                </div>
                <div className={style.user_edit_item}>
                    <label htmlFor="inputLevel">Permissão:</label>
                    <Select options={[
                        { value: 0, label: "" },
                        { value: 0, label: "0" },
                        { value: 1, label: '1' },
                        { value: 2, label: '2' },
                        { value: 3, label: '3' },
                    ]}
                        id="inputLevel"
                        height={30}
                        onChange={handleLevelChange}
                        value={level}
                    />
                </div>
                <Button onClick={handleSubmit} label="Alterar" className="btn_success" />
            </form>
        </section>
    )
}
export default EditUser