/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import styles from "./style.module.scss";
import { useActions, useAppSelector } from "../../store/hooks";
import Cat from "../Cat/Cat";
import { useInView } from "react-intersection-observer";
import Container from "../Container/Container";


const ListAllCats = () => {
    const {cats, isLoading} = useAppSelector(state => state.catsReducer);
    const {fetchCats, infFetchCats} = useActions();
    const {ref, inView} = useInView();

    useEffect(() => {
        if(cats.length === 0) {
            fetchCats();
        }
    }, [])

    useEffect(() => {
        if(inView) {
            infFetchCats()
        }
    
    }, [inView])


    if(isLoading) {
        return(
            <Container>
                <h1>Загрузка котиков...</h1>
            </Container>
        )
    }

    return(
        <Container>
            {cats.map(item =>
                <Cat cat={item} key={item.id}/> 
            )}
            <h3 ref={ref} className={styles.child}>... загружаем еще котиков ...</h3>
        </Container>
    )
}

export default ListAllCats;