import { FC } from "react";
import styles from "./style.module.scss";
import { PiSmileySadThin } from "react-icons/pi";

interface IProps {
    children: React.ReactNode
}

const Notify: FC<IProps> = ({children}) => {
    return(
        <div className={styles.notify}>
            <PiSmileySadThin/>
            <h1>{children}</h1>
        </div>
    )
}

export default Notify;