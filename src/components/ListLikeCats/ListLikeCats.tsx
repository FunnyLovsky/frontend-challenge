/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./style.module.scss";
import { useActions, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import Cat from "../Cat/Cat";

const ListLikeCats = () => {
    const { likeCats } = useAppSelector(state => state.likeCatsReducer);
    const { fetchLikeCats } = useActions()

    useEffect(() => {
        if(likeCats.length === 0) {
            fetchLikeCats();
        }
    }, [])
    
    return(
        <div className={styles.inner}>
            {likeCats.length === 0 
                ? 
                <h1>У вас пока нет любимых котиков =(</h1>
                :
                likeCats.map(item =>
                    <Cat cat={item} key={item.id}/> 
                )
            } 
            
        </div>
    )
}

export default ListLikeCats;