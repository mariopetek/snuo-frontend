import { useOrderContext } from '@/context/OrderContext'
import { OrderItem } from '@/model/order'

import styles from './ItemCard.module.css'
import { Item } from '@/model/item'
import Connector from '@/components/Connector/Connector'
import RemoveButton from '@/components/RemoveButton/RemoveButton'
import OrderMenuSection from '../OrderMenuSection/OrderMenuSection'
import OrderAddedSection from '../OrderAddedSection/OrderAddedSection'
import PlusButton from '../PlusButton/PlusButton'
import MinusButton from '../MinusButton/MinusButton'

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

    const handlePlusButtonClick = () => {
        setOrderItems(
            orderItems.map(item => {
                if (item.id_stavka === orderItem.id_stavka) {
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
    }

    const handleMinusButtonClick = () => {
        setOrderItems(
            orderItems.map(item => {
                if (item.id_stavka === orderItem.id_stavka) {
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
    }

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
                    <PlusButton handleButtonClick={handlePlusButtonClick} />
                    <span className={styles.quantity}>
                        {orderItem.kolicina}
                    </span>
                    <MinusButton handleButtonClick={handleMinusButtonClick} />
                </div>
                {orderItems[cardIdx].prilozi.length === 0 ? null : (
                    <OrderAddedSection
                        sectionName="Dodani prilozi"
                        items={orderItems[cardIdx].prilozi}
                        cardIdx={cardIdx}
                    />
                )}

                {orderItems[cardIdx].umaci.length === 0 ? null : (
                    <OrderAddedSection
                        sectionName="Dodani umaci"
                        items={orderItems[cardIdx].umaci}
                        cardIdx={cardIdx}
                    />
                )}
            </div>
            <div
                className={`${styles.cardContainer} ${styles.addonsContainer}`}>
                <OrderMenuSection
                    sectionName="Prilozi"
                    items={sideDishes}
                    cardIdx={cardIdx}
                />
                <OrderMenuSection
                    sectionName="Umaci"
                    items={sauces}
                    cardIdx={cardIdx}
                />
            </div>
        </>
    )
}
