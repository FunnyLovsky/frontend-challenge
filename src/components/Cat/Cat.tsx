import { FC, useState } from "react";
import styles from "./style.module.scss";
import LikeBtn from "../LikeBtn/LikeBtn";
import { ICat } from "../../models/ICat";
import { useActions } from "../../store/hooks";

interface IProps {
    cat: ICat;
}

const Cat: FC<IProps> = ({ cat }) => {
    const [isLoad, setIsLoad] = useState(false);
    const [isActive, setIsActive] = useState(cat.isLike);
    const {toLikeCat, disLikeCat} = useActions()

    const setActiveHandler = () => {
        if(isActive) {
            setIsActive(false);
            disLikeCat(cat.id)
        } else {
            setIsActive(true);
            toLikeCat(cat)
        }
    }

    return(
        <div className={styles.item} style={{background: isLoad ? '' : '#2196F3'}}>
            <div 
                className={styles.favorite_block} 
                onClick={setActiveHandler}
            >
                <LikeBtn active={isActive}/>
            </div>

            <img src={cat.url} alt={cat.url} onLoad={() => setIsLoad(true)}/>
        </div>
    )
}

export default Cat;