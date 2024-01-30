import { FC } from "react";
import { IItem } from "../../models/IItem";
import styles from "./style.module.scss";
import Item from "../Item/Item";

interface IProps {
    items: IItem[];
}

const ListItem: FC<IProps> = ({items}) => {

    return(
        <div className={styles.inner}>
            {items.map(item =>
                <Item url={item.url} key={item.id}/> 
            )}
        </div>
    )
}

export default ListItem;