import { Item } from '@/model/item'
import ItemButton from '../ItemButton/ItemButton'
import Connector from '@/components/Connector/Connector'

import styles from './MenuItem.module.css'

type MenuItemProps = {
    item: Item
}

export default function MenuItem({ item }: MenuItemProps) {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.itemInfo}>
                <span className={styles.itemName}>{item.naziv_stavka}</span>
                <span className={styles.itemPrice}>
                    {Number(item.cijena).toFixed(2)}€
                </span>
            </div>
            <Connector />
            <ItemButton item={item} />
        </div>
    )
}
