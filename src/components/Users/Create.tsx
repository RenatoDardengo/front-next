import style from "./styles.module.css";
import { Button } from "@/components/Custom/Button";
import { InputText } from "@/components/Custom/InputText";
import { Select } from "@/components/Custom/Select";
import { useState, ChangeEvent } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import UserService from "@/services/apis/userService";

const CreateUser=()=>{
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [level, setLevel]=useState<number>(0);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [jobTitle, setJobTitle]= useState ("");
   
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const handleJobTitle = (e: ChangeEvent<HTMLSelectElement>)=>{
        setJobTitle(e.target.value);
    }
    const handleLevelChange = (e: ChangeEvent<HTMLSelectElement>)=>{
        var value = parseInt(e.target.value);
        setLevel(value);

    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value.toUpperCase());
        
    };
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
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
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        console.log("entrou handleSubmit")

        event.preventDefault();

        try {

            const response = await UserService.storeUser({ name, password,level,phone_number:phoneNumber,job_title:jobTitle,
            created_date: new Date() })

            if (response.status === 200) {
                alert(`Usuário ${name} cadastrado com sucesso!`);
                

            } else if (response.status === 401 || response.status === 400) {
                const data = await response.data;
                const msg = data.msg;
                alert(msg);
            } else {
                console.log("erro do if")
                alert("Erro ao conectar-se com o servidor. Por favor tente mais tarde.")
            }

        } catch (error: any) {
            console.log("erro do catch")
            if (error.response && (error.response.status === 401 || error.response.status === 400)) {
                const data = error.response.data;
                const msg = data.msg;
                alert(msg);
            } else {
                console.error('Erro inesperado:', error);
                alert("Erro ao tentar fazer login.");
            }
        }

    };
    return (
        <section className={style.user_edit_sec}>
            <form onSubmit={handleSubmit}>
                <div className={style.user_edit_item}>
                    <label htmlFor="inputName">Nome:</label>
                    <InputText value={name} id="inputName" height={30} onChange={handleNameChange} />
                </div>
                <div className={style.user_edit_item}>
                    <label htmlFor="inputPassword">Senha:</label>
                    <InputText value={password} id="inputPassword" height={30} type={passwordVisible ? 'text' : 'password'}
                     onChange={handlePasswordChange}
                      />
                    <div className={style.toggle_password}>
                        <button onClick={togglePasswordVisibility} style={{ background: 'transparent' ,border:'none'}} type="button">
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>

                </div>

                <div className={style.user_edit_item}>
                    <label htmlFor="inputPhone">Telefone:</label>
                    <InputText value={phoneNumber} id="inputPhone" height={30} mask="(99) 99999-9999" onChange={handlePhoneNumberChange} />
                </div>

                <div className={style.user_edit_item}>
                    <label htmlFor="inputJob">Função:</label>
                    <Select options={[{value:'', label:''},{value:'VENDEDOR', label:"VENDEDOR"},{value:'FINANCEIRO', label:'FINANCEIRO'} ]} id="inputJob"  height={30}
                    onChange={handleJobTitle}
                    />
                    
                </div>
                <div className={style.user_edit_item}>
                    <label htmlFor="inputLevel">Permissão:</label>
                    <Select options={[
                        { value: 0, label: "" },
                        { value: 0, label: "0"  },
                        { value: 1, label: '1' },
                        { value: 2, label: '2' },
                        { value: 3, label: '3' },
                        ]}
                        id="inputLevel"
                        height={30}
                        onChange={handleLevelChange}
                        />
                </div>
                <button type="submit"> cadastrar</button>

                {/*<Button type="submit" label="Cadastrar" className="btn_success"  />*/}

            </form>



        </section>

    )
}

export default CreateUser;