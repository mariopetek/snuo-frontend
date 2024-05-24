import AddButton from '@/components/AddButton/AddButton'
import { Item } from '@/model/item'
import Connector from '@/components/Connector/Connector'

import styles from './OrderMenuItem.module.css'

type MenuItemProps = {
    item: Item
}

export default function OrderMenuItem({ item }: MenuItemProps) {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.itemInfo}>
                <span className={styles.itemName}>{item.naziv_stavka}</span>
                <span className={styles.itemPrice}>{item.cijena}€</span>
            </div>
            <Connector />
            <AddButton handleButtonClick={() => {}} />
        </div>
    )
}
