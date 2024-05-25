import { useOrderContext } from '@/context/OrderContext'
import { Item } from '@/model/item'
import Connector from '@/components/Connector/Connector'
import RemoveButton from '@/components/RemoveButton/RemoveButton'
import OrderMenuSection from '../OrderMenuSection/OrderMenuSection'
import OrderAddedSection from '../OrderAddedSection/OrderAddedSection'
import Quantity from '../Quantity/Quantity'

import styles from './OrderSummary.module.css'

type OrderSummaryProps = {
    cardIdx: number
    setCardIdx: React.Dispatch<React.SetStateAction<number>>
    sideDishes: Item[]
    sauces: Item[]
}

const MAX_QUANTITY = 10
const MIN_QUANTITY = 1

export default function OrderSummary({
    cardIdx,
    setCardIdx,
    sideDishes,
    sauces
}: OrderSummaryProps) {
    const { orderItems, setOrderItems } = useOrderContext()

    const handleRemoveButtonClick = () => {
        setOrderItems(prevOrderItems =>
            prevOrderItems.filter(
                item => item.id_stavka !== orderItems[cardIdx].id_stavka
            )
        )
        if (cardIdx + 1 === orderItems.length) {
            setCardIdx(cardIdx - 1)
        }
    }

    const handlePlusButtonClick = () => {
        setOrderItems(prevOrderItems =>
            prevOrderItems.map(item => {
                if (item.id_stavka === orderItems[cardIdx].id_stavka) {
                    return {
                        ...item,
                        kolicina:
                            item.kolicina === MAX_QUANTITY
                                ? item.kolicina
                                : item.kolicina + 1,
                        ukupnaCijena:
                            item.kolicina === MAX_QUANTITY
                                ? item.ukupnaCijena
                                : Number(item.ukupnaCijena) +
                                  Number(item.cijena)
                    }
                }
                return item
            })
        )
    }

    const handleMinusButtonClick = () => {
        setOrderItems(prevOrderItems =>
            prevOrderItems.map(item => {
                if (item.id_stavka === orderItems[cardIdx].id_stavka) {
                    return {
                        ...item,
                        kolicina:
                            item.kolicina === MIN_QUANTITY
                                ? item.kolicina
                                : item.kolicina - 1,
                        ukupnaCijena:
                            item.kolicina === MIN_QUANTITY
                                ? item.cijena
                                : Number(item.ukupnaCijena) -
                                  Number(item.cijena)
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
                        <h2>{orderItems[cardIdx].naziv_stavka}</h2>
                        <div>
                            {Number(orderItems[cardIdx].ukupnaCijena).toFixed(
                                2
                            )}
                            €
                        </div>
                    </div>
                    <Connector />
                    <RemoveButton handleButtonClick={handleRemoveButtonClick} />
                </div>

                <Quantity
                    quantity={orderItems[cardIdx].kolicina}
                    handlePlusButtonClick={handlePlusButtonClick}
                    handleMinusButtonClick={handleMinusButtonClick}
                />

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
