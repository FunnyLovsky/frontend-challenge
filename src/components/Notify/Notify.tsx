import { FC  } from "react";
import styles from "./style.module.scss";
import PETS from '../../assets/pets.svg'
import { useActions } from "../../store/hooks";

interface IProps {
    children: string,
    type: 'alert' | 'error'
}


const Notify: FC<IProps> = ({children, type}) => {
    const {fetchCats} = useActions()

    return(
        <div className={styles.notify}>
            {type === 'alert' 
                ? 
                <div className={styles.item}>
                    
                    <img src={PETS} alt="" width={90} height={90}/>
                    <h1>{children}</h1>
                </div>
                :
                <div className={styles.item}>
                    <h1>{children}</h1>
                    <button onClick={fetchCats}>Попробовать еще раз</button>
                </div>
            }
        </div>
    )
}

export default Notify;