'use client'
import { Item } from '@/model/item'

import styles from './MenuItem.module.css'
import { useOrderContext } from '@/context/OrderContext'

type MenuItemProps = {
    item: Item
}

export default function MenuItem({ item }: MenuItemProps) {
    const { orderItems, setOrderItems } = useOrderContext()

    const handleButtonClick = () => {
        if (isAdded()) {
            setOrderItems(
                orderItems.filter(
                    orderItem => orderItem.id_stavka !== item.id_stavka
                )
            )
        } else {
            setOrderItems([
                ...orderItems,
                { id_stavka: item.id_stavka, kolicina: 1 }
            ])
        }
    }

    const isAdded = () => {
        return orderItems.some(
            orderItem => orderItem.id_stavka === item.id_stavka
        )
    }

    return (
        <div key={item.id_stavka} className={styles.itemContainer}>
            <div className={styles.itemInfo}>
                <span className={styles.itemName}>{item.naziv_stavka}</span>
                <span className={styles.itemPrice}>{item.cijena}€</span>
            </div>
            <button onClick={handleButtonClick}>
                {isAdded() ? 'Ukloni' : 'Dodaj'}
            </button>
        </div>
    )
}
