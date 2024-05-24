import Connector from '@/components/Connector/Connector'
import RemoveButton from '@/components/RemoveButton/RemoveButton'
import { OrderAddon } from '@/model/order'

import styles from './OrderAddedItem.module.css'
import { useOrderContext } from '@/context/OrderContext'

type OrderAddedItemProps = {
    item: OrderAddon
    cardIdx: number
}

export default function OrderAddedItem({ item, cardIdx }: OrderAddedItemProps) {
    const { setOrderItems } = useOrderContext()

    const handleButtonClick = () => {
        setOrderItems(prevItems => {
            return prevItems.map((orderItem, idx) => {
                if (idx === cardIdx) {
                    return {
                        ...orderItem,
                        prilozi: orderItem.prilozi.filter(
                            orderAddon =>
                                orderAddon.id_stavka !== item.id_stavka
                        ),
                        umaci: orderItem.umaci.filter(
                            orderAddon =>
                                orderAddon.id_stavka !== item.id_stavka
                        )
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
            <RemoveButton handleButtonClick={handleButtonClick} />
        </div>
    )
}
