import { useEffect, useState } from "react";
import { IItem } from "../../models/IItem";
import ListItem from "../ListItem/ListItem";
import styles from "./style.module.scss";

const ListAllCats = () => {
    const [items, setItems] = useState<IItem[]>([])

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?page=0&limit=15&api_key=live_iTqDEeNZDYAPRiNju0P3rF2EWQ0qup77PmzHfIpMvpOPfmvic2fNSt9pu4ztaJFqE')
            .then(res => res.json())
            .then(json => setItems(json))
    }, [])

    return(
        <div className={styles.inner}>
            <ListItem items={items}/>
        </div>
    )
}

export default ListAllCats;