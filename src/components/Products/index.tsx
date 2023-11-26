import { Children, useState } from "react";
import style from "./style.module.css"
import { InputText } from "../Custom/InputText";
import { Button } from "../Custom/Button";
import { ProductData } from "@/types";

interface ProductProps {
    openModal: (param: string, data?: ProductData, title?: string) => void;


}
const Products = ({ openModal }: ProductProps) => {

    const products: Array<ProductData> = [
        { id: 1, name: "Carro 01", quantity:10, description: "Esse é o carro de número 01", value: "R$ 25.000,00" },
        { id:2, name: "Carro 02", quantity:2, description: "Esse é o carro de número 02", value: "R$ 30.000,00" },
        { id:3, name: "Carro 03", quantity:0, description: "Esse é o carro de número 03", value: "R$ 35.000,00" }
    ]
    return (
        <div>
            <div >
                <p className={style.title}> Cadastro de produtos</p>

            </div>
            <div className={`${style.search_components} ${style.space_element}`}>
                <InputText />
                <Button label="Cadastrar" className="btn_success" onClick={() => openModal('createProduct', undefined, "Cadastrar produto")} />


            </div>
            <div className={style.table_container}>
                <table className={style.table}>
                    <thead className={style.thead}>
                        <tr>
                            <th>Id</th>
                            <th className={style.th_hide}>Nome</th>
                            <th className={style.th_hide}>Qtde</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>{products.length?(
                        products.map((prod, idx)=>
                            <tr key={idx}>
                                <td>
                                    {prod.id}
                                </td>
                                <td className={style.th_hide}>
                                    {prod.name}
                                </td>
                                <td className={style.th_hide}>
                                    {prod.quantity}
                                </td>
                                <td >
                                    {prod.description}
                                </td>
                                <td>
                                    {prod.value}
                                </td>
                                <td className={`${style.table_img} ${style.last_column}`} >
                                    <a href="#"><img src="/img/view3.png" alt="" /></a>
                                    <a onClick={() => openModal('editProduct', prod, "Editar produto")}><img src="/img/edit.png" /></a>
                                    <a href="#"><img src="/img/cancel.png" /></a>
                                </td>
                            </tr>)) : (<tr>
                                <td colSpan={6}>Nenhum produto encontrado!</td>
                            </tr>)}
                        
                   
                </tbody>
            </table>
        </div>

        </div >
    )

}

export default Products;