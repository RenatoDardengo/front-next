import style from "./style.module.css"
type NavbarProps = {
    onCollapse: () => void;
};
const NavBar = ({ onCollapse }: NavbarProps) => {
    
    const handleCollapse = () => {
        onCollapse();
    };
    return (
        <div className={style.navbar}>
            <div>
                <img src="/img/menu.png" alt="menu" onClick={handleCollapse} />
            </div>
            <div>Olá, "usuário logado"</div>
            <span>
                Sair
            </span>
           
        </div>
    )

}

export default NavBar;