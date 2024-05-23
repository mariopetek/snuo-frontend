'use client'
import { Item } from '@/model/item'

import styles from './MenuItem.module.css'
import ItemButton from '../../ItemButton/ItemButton'

type MenuItemProps = {
    item: Item
}

export default function MenuItem({ item }: MenuItemProps) {
    return (
        <div key={item.id_stavka} className={styles.itemContainer}>
            <div className={styles.itemInfo}>
                <span className={styles.itemName}>{item.naziv_stavka}</span>
                <span className={styles.itemPrice}>{item.cijena}€</span>
            </div>
            <div className={styles.connector}></div>
            <ItemButton item={item} />
        </div>
    )
}
