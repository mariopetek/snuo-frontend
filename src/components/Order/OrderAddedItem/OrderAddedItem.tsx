import Connector from '@/components/Connector/Connector'
import RemoveButton from '@/components/RemoveButton/RemoveButton'
import { OrderAddon } from '@/model/order'
import { useOrderContext } from '@/context/OrderContext'
import Quantity from '../Quantity/Quantity'

import styles from './OrderAddedItem.module.css'

type OrderAddedItemProps = {
    item: OrderAddon
    cardIdx: number
}

export default function OrderAddedItem({ item, cardIdx }: OrderAddedItemProps) {
    const { setOrderItems } = useOrderContext()

    const handleRemoveButtonClick = () => {
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

    const handlePlusButtonClick = () => {
        setOrderItems(prevItems => {
            return prevItems.map((orderItem, idx) => {
                if (idx === cardIdx) {
                    return {
                        ...orderItem,
                        prilozi: orderItem.prilozi.map(orderAddon => {
                            if (orderAddon.id_stavka === item.id_stavka) {
                                return {
                                    ...orderAddon,
                                    kolicina:
                                        item.kolicina === 10
                                            ? item.kolicina
                                            : item.kolicina + 1
                                }
                            } else {
                                return orderAddon
                            }
                        }),
                        umaci: orderItem.umaci.map(orderAddon => {
                            if (orderAddon.id_stavka === item.id_stavka) {
                                return {
                                    ...orderAddon,
                                    kolicina:
                                        item.kolicina === 10
                                            ? item.kolicina
                                            : item.kolicina + 1
                                }
                            } else {
                                return orderAddon
                            }
                        })
                    }
                } else {
                    return orderItem
                }
            })
        })
    }

    const handleMinusButtonClick = () => {
        setOrderItems(prevItems => {
            return prevItems.map((orderItem, idx) => {
                if (idx === cardIdx) {
                    return {
                        ...orderItem,
                        prilozi: orderItem.prilozi.map(orderAddon => {
                            if (orderAddon.id_stavka === item.id_stavka) {
                                return {
                                    ...orderAddon,
                                    kolicina:
                                        item.kolicina === 1
                                            ? item.kolicina
                                            : item.kolicina - 1
                                }
                            } else {
                                return orderAddon
                            }
                        }),
                        umaci: orderItem.umaci.map(orderAddon => {
                            if (orderAddon.id_stavka === item.id_stavka) {
                                return {
                                    ...orderAddon,
                                    kolicina:
                                        item.kolicina === 1
                                            ? item.kolicina
                                            : item.kolicina - 1
                                }
                            } else {
                                return orderAddon
                            }
                        })
                    }
                } else {
                    return orderItem
                }
            })
        })
    }

    return (
        <div className={styles.itemContainer}>
            <div className={styles.quantityItemConnector}></div>
            <div className={styles.itemInfoContainerWrapper}>
                <div className={styles.itemInfoContainer}>
                    <div className={styles.itemInfo}>
                        <span className={styles.itemName}>
                            {item.naziv_stavka}
                        </span>
                        <span className={styles.itemPrice}>{item.cijena}€</span>
                    </div>
                    <Connector />
                    <RemoveButton handleButtonClick={handleRemoveButtonClick} />
                </div>
                <Quantity
                    quantity={item.kolicina}
                    handlePlusButtonClick={handlePlusButtonClick}
                    handleMinusButtonClick={handleMinusButtonClick}
                />
            </div>
        </div>
    )
}
