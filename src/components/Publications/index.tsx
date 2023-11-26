import { Children, useState } from "react";
import style from "./style.module.css";
import { ProductData } from "@/src/types";
import { InputText } from "../Custom/InputText";
import { Button } from "../Custom/Button";

interface PublicationsProps{
    openModal: (param: string, data?: ProductData, title?:string) => void;
    
    
}

const Publications = ({openModal}:PublicationsProps)=>{
    const products :Array<ProductData>=[
        { name: "Carro 01", description: "Esse é o carro de número 01", value: "R$ 25.000,00" },
        { name: "Carro 02", description: "Esse é o carro de número 02", value: "R$ 30.000,00" },
        { name: "Carro 03", description: "Esse é o carro de número 03", value: "R$ 35.000,00" }
    ]
    return (
        <div>
            <div >
                <p className={style.title}> Minhas publicações</p>

            </div>
            <div className={`${style.search_components} ${style.space_element}`}>
                <InputText />
                <Button label="Adicionar" className="btn_success" onClick={()=>openModal('createPublication', undefined, "Cadastrar publicação")} />


            </div>
            <div className={style.product_grid}>
               
                { products.length?(
                    products.map((prod, idx)=>
                        <div className={style.product}>
                            <img src="/img/car3.jpg" alt="Product 1" />
                            <h3>{prod.name}</h3>
                            <p>{prod.description}</p>
                            <p>{prod.value}</p>
                            <div className={style.option_delete_edit}>
                                <p> <Button label="Editar" className={'btn_primary'} onClick={() => openModal('editPublication',prod, "Editar publicação")} /></p>
                                <p> <Button label="Excluir" className="btn_danger" /></p>
                            </div>
                        </div>

                    )):(
                        <> Não foi encontrado nehum produto</>
                    )}                            
                
                
            </div>
        </div>
    )
}
export default Publications;