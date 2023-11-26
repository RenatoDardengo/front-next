import React from 'react';
import style from "./style.module.css"
type MenuProps = {
    collapsed: boolean;
    onItemClick: (menuItem: string) => void;

};

const MenuOptions = ({ collapsed, onItemClick }:MenuProps)=>{
    const handleItemClick = (menuItem:string)=>{
        onItemClick(menuItem);
    }

    return(
        <div className={style.menu}>
             <div className={style.menu_item } onClick={() => handleItemClick('home')}>
                <img src="/img/home.png"></img>
                <span className={`${collapsed?style.menu_item_text:style.menu_item_text_none}`}> Inicio</span>
                
            </div>
            <div className={style.menu_item} onClick={() => handleItemClick('users')}>
                <img src="/img/user.png"></img>
                <span className={`${collapsed?style.menu_item_text:style.menu_item_text_none}`}> Usuário</span>
                
            </div>
            <div className={style.menu_item} onClick={() => handleItemClick('products')}>
                <img src="/img/product.png"></img>
                <span className={`${collapsed?style.menu_item_text:style.menu_item_text_none}`}> Produtos</span>
            
            </div>
            <div className={style.menu_item} onClick={() => handleItemClick('publications')}>
                <img src="/img/post.png"></img>
                <span className={`${collapsed?style.menu_item_text:style.menu_item_text_none}`}> Publicações</span>
            </div>

        </div>
    )


}

export {MenuOptions};