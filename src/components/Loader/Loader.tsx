import { FC } from "react";
import styles from "./style.module.scss";

interface IProps {
    children: React.ReactNode
}

const Loader: FC<IProps> = ({children}) => {
    return(
        <div className={styles.loader}>
            <span></span>
            <h1>{children}</h1>
        </div>
    )
}

export default Loader;