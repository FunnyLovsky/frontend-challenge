/* eslint-disable react-hooks/exhaustive-deps */
// import styles from "./style.module.scss";
import { useActions, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import Cat from "../Cat/Cat";
import Container from "../Container/Container";
import Loader from "../Loader/Loader";
import Notify from "../Notify/Notify";

const ListLikeCats = () => {
    const { likeCats, isLikeLoading, fetched } = useAppSelector(state => state.likeCatsReducer);
    const { fetchLikeCats } = useActions()

    useEffect(() => {
        if(!fetched) {
            fetchLikeCats();
        }
    }, [])

    if(isLikeLoading) {
        return(
            <Loader>Подгружаем ваших любимых пушистиков... </Loader>
        )
    }

    if(likeCats.length === 0) {
        return(
            <Notify type="alert">Пока тишина! Добавьте котиков и сделайте это место мур-мур!</Notify>
        )
    }
    
    return(
        <Container>
            {likeCats.map(item =>
                <Cat cat={item} key={item.id}/> 
            )}
        </Container>
    )
}

export default ListLikeCats;