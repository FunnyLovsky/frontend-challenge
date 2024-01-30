import { NavLink, Outlet } from "react-router-dom"
import { RoutesName } from "../../router/routes"
import styles from "./style.module.scss";
import './style.scss';

const Header = () => {
    return(
        <>
                    <header className={styles.header}>
            <NavLink 
                to={RoutesName.MAIN} 
                className='link'
            >
                Все котики
            </NavLink>
            <NavLink 
                to={RoutesName.LIKE} 
                className='link'
            >
                Любимые котики
            </NavLink>
        </header>
        <Outlet/>
        </>

    )
}

export default Header;