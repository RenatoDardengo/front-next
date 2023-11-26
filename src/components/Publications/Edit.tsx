import { InputText } from "../Custom/InputText";
import TextArea from "../Custom/TextArea";
import style from "./style.module.css"
import { Button } from "../Custom/Button";
import { ProductData } from "@/types";
interface EditPros {
    productData: ProductData;
}
const EditPublication = ({ productData }: EditPros) => {
    return (
        <section className={style.product_edit_sec}>
            <form action="">
                <div className={style.product_edit_item}>
                    <label htmlFor="inputName">Produto:</label>
                    <InputText value={productData.name} id="inputName" />
                </div>

                <div className={style.product_edit_item}>
                    <label htmlFor="inputDescription">Descrição:</label>
                    <TextArea value={productData.description} id="inputDescription" />
                </div>

                <div className={style.product_edit_item}>
                    <label htmlFor="inputDescription">Valor:</label>
                    <InputText value={productData.value} id="inputDescription" />
                </div>

                <Button label="Alterar" />

            </form>



        </section>

    )
}

export default EditPublication;