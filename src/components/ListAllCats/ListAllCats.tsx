/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import styles from "./style.module.scss";
import { useActions, useAppSelector } from "../../store/hooks";
import Cat from "../Cat/Cat";

const ListAllCats = () => {
    const {cats, isLoading} = useAppSelector(state => state.catsReducer);
    const {fetchCats} = useActions()

    useEffect(() => {
        if(cats.length === 0) {
            fetchCats();
        }
    }, [])

    return(
        <div className={styles.inner}>
            {isLoading 
                ? 
                <h1>Загрузка котиков...</h1>
                :
                cats.map(item =>
                    <Cat cat={item} key={item.id}/> 
                )
            }
            
        </div>
    )
}

export default ListAllCats;