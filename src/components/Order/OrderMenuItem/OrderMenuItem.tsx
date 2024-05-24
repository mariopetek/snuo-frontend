import AddButton from '@/components/AddButton/AddButton'
import { Item } from '@/model/item'
import Connector from '@/components/Connector/Connector'
import { useOrderContext } from '@/context/OrderContext'
import { Category } from '@/model/category'

import styles from './OrderMenuItem.module.css'

type OrderMenuItemProps = {
    item: Item
    cardIdx: number
}

export default function OrderMenuItem({ item, cardIdx }: OrderMenuItemProps) {
    const { setOrderItems } = useOrderContext()

    const handleButtonClick = () => {
        setOrderItems(prevItems => {
            return prevItems.map((orderItem, idx) => {
                if (idx === cardIdx) {
                    if (
                        item.kategorija.toString() ===
                        Category[Category.PRILOZI]
                    ) {
                        return {
                            ...orderItem,
                            prilozi: [
                                ...orderItem.prilozi,
                                {
                                    ...item,
                                    kolicina: 1
                                }
                            ]
                        }
                    } else if (
                        item.kategorija.toString() === Category[Category.UMACI]
                    ) {
                        return {
                            ...orderItem,
                            umaci: [
                                ...orderItem.umaci,
                                {
                                    ...item,
                                    kolicina: 1
                                }
                            ]
                        }
                    } else {
                        return orderItem
                    }
                } else {
                    return orderItem
                }
            })
        })
    }
    return (
        <div className={styles.itemContainer}>
            <div className={styles.itemInfo}>
                <span className={styles.itemName}>{item.naziv_stavka}</span>
                <span className={styles.itemPrice}>{item.cijena}€</span>
            </div>
            <Connector />
            <AddButton handleButtonClick={handleButtonClick} />
        </div>
    )
}
