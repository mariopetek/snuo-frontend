import { useOrderContext } from '@/context/OrderContext'
import { OrderItem } from '@/model/order'

import styles from './ItemCard.module.css'
import { Item } from '@/model/item'
import Connector from '@/components/Connector/Connector'
import RemoveButton from '@/components/RemoveButton/RemoveButton'
import OrderMenuSection from '../OrderMenuSection/OrderMenuSection'

type ItemCardProps = {
    cardsNum: number
    cardIdx: number
    setCardIdx: React.Dispatch<React.SetStateAction<number>>
    orderItem: OrderItem
    sideDishes: Item[]
    sauces: Item[]
}

const MAX_QUANTITY = 10
const MIN_QUANTITY = 1

export default function ItemCard({
    cardsNum,
    cardIdx,
    setCardIdx,
    orderItem,
    sideDishes,
    sauces
}: ItemCardProps) {
    const { orderItems, setOrderItems } = useOrderContext()
    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.itemInfoContainer}>
                    <div className={styles.itemInfo}>
                        <h2>{orderItem.naziv_stavka}</h2>
                        <div>{orderItem.cijena}€</div>
                    </div>
                    <Connector />
                    <RemoveButton
                        handleButtonClick={() => {
                            setOrderItems(
                                orderItems.filter(
                                    item =>
                                        item.id_stavka !== orderItem.id_stavka
                                )
                            )
                            if (cardIdx + 1 === cardsNum) {
                                setCardIdx(cardIdx - 1)
                            }
                        }}
                    />
                </div>

                <div className={styles.quantityContainer}>
                    <span>Količina:</span>
                    <button
                        className={styles.quantityButton}
                        onClick={() => {
                            setOrderItems(
                                orderItems.map(item => {
                                    if (
                                        item.id_stavka === orderItem.id_stavka
                                    ) {
                                        return {
                                            ...item,
                                            kolicina:
                                                item.kolicina === MAX_QUANTITY
                                                    ? item.kolicina
                                                    : item.kolicina + 1
                                        }
                                    }
                                    return item
                                })
                            )
                        }}>
                        +
                    </button>
                    <span className={styles.quantity}>
                        {orderItem.kolicina}
                    </span>
                    <button
                        className={styles.quantityButton}
                        onClick={() => {
                            setOrderItems(
                                orderItems.map(item => {
                                    if (
                                        item.id_stavka === orderItem.id_stavka
                                    ) {
                                        return {
                                            ...item,
                                            kolicina:
                                                item.kolicina === MIN_QUANTITY
                                                    ? item.kolicina
                                                    : item.kolicina - 1
                                        }
                                    }
                                    return item
                                })
                            )
                        }}>
                        -
                    </button>
                </div>
            </div>
            <div className={styles.cardContainer}>
                <OrderMenuSection sectionName="Prilozi" items={sideDishes} />
                <OrderMenuSection sectionName="Umaci" items={sauces} />
            </div>
        </>
    )
}
