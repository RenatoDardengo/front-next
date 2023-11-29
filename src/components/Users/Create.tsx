import style from "./styles.module.css";
import { Button } from "@/components/Custom/Button";
import { InputText } from "@/components/Custom/InputText";
import { Select } from "@/components/Custom/Select";
import { useState, ChangeEvent } from "react";
const CreateUser=()=>{
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [level, setLevel]=useState<number>(0);

    const handleLevelChange = (e: ChangeEvent<HTMLSelectElement>)=>{
        var value = parseInt(e.target.value)
        setLevel(value)
        console.log (value)
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
    return (
        <section className={style.user_edit_sec}>
            <form action="">
                <div className={style.user_edit_item}>
                    <label htmlFor="inputName">Nome:</label>
                    <InputText value={name} id="inputName" height={30} onChange={handleNameChange} />
                </div>
                <div className={style.user_edit_item}>
                    <label htmlFor="inputPassword">Senha:</label>
                    <InputText value={password} id="inputPassword" height={30} type="password" onChange={handlePasswordChange} />
                </div>

                <div className={style.user_edit_item}>
                    <label htmlFor="inputPhone">Telefone:</label>
                    <InputText value={phoneNumber} id="inputPhone" height={30} mask="(99) 99999-9999" onChange={handlePhoneNumberChange} />
                </div>

                <div className={style.user_edit_item}>
                    <label htmlFor="inputJob">Função:</label>
                    <Select options={[{value:'', label:''},{value:'VENDEDOR', label:"VENDEDOR"},{value:'FINANCEIRO', label:'FINANCEIRO'} ]} id="inputJob"  height={30}/>
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

                <Button label="Alterar" className="btn_success" />

            </form>



        </section>

    )
}

export default CreateUser;