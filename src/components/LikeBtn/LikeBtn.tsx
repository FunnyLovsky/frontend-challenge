import { FC, useState } from "react";
import styles from "./style.module.scss";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface IProps {
    active: boolean;
}

const LikeBtn: FC<IProps> = ({active}) => {
    const [hover, setHover] = useState(false);

    return(
        <>
            {!active
                ? 
                <div 
                    className={styles.like} 
                    onMouseEnter={() => setHover(true)} 
                    onMouseLeave={() => setHover(false)}
                >
                    <FaHeart style={{opacity: hover ? 1 : 0}}/>
                    <FaRegHeart/>
                </div>
                :
                <div className={styles.like}>
                   <FaHeart/>
                </div>
            }
        </>

     
    )
}

export default LikeBtn;