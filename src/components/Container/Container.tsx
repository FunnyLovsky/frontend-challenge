import { FC } from "react";
import styles from "./style.module.scss";

interface IProps {
    children: React.ReactNode
}

const Container: FC<IProps> = ({children}) => {
    return(
        <div className={styles.inner}>
            {children}
        </div>
    )
}

export default Container;