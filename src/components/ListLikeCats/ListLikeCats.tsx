/* eslint-disable react-hooks/exhaustive-deps */
// import styles from "./style.module.scss";
import { useActions, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import Cat from "../Cat/Cat";
import Container from "../Container/Container";

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
            <Container>
                <h1>Загрузка котиков...</h1>
            </Container>
        )
    }
    
    return(
        <Container>
            {likeCats.length === 0 
                ? 
                <h1>У вас пока нет любимых котиков =(</h1>
                :
                likeCats.map(item =>
                    <Cat cat={item} key={item.id}/> 
                )
            } 
            
        </Container>
    )
}

export default ListLikeCats;