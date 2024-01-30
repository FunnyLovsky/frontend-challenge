import { FC, useState } from "react";
import styles from "./style.module.scss";
import LikeBtn from "../LikeBtn/LikeBtn";

interface IProps {
    url: string;
}

const Item: FC<IProps> = ({url}) => {
    const [isLoad, setIsLoad] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const setActiveHandler = () => {
        if(isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    }

    return(
        <div className={styles.item} style={{background: isLoad ? '' : 'grey'}}>
            <div className={styles.favorite_block} onClick={setActiveHandler}>
                <LikeBtn active={isActive}/>
            </div>
            <img src={url} alt={url} onLoad={() => setIsLoad(true)}/>
        </div>
    )
}

export default Item;