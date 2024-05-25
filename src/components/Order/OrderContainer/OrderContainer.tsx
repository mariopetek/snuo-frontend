'use client'

import { useOrderContext } from '@/context/OrderContext'
import { useMemo, useState } from 'react'
import Navigation from '../Navigation/Navigation'
import { Item } from '@/model/item'
import OrderSummary from '../OrderSummary/OrderSummary'
import { Table } from '@/model/table'
import TableSelection from '../TableSelection/TableSelection'

import styles from './OrderContainer.module.css'
import OrderButton from '../OrderButton/OrderButton'

type OrderContainerProps = {
    tables: Table[]
    sideDishes: Item[]
    sauces: Item[]
}

export default function OrderContainer({
    tables,
    sideDishes,
    sauces
}: OrderContainerProps) {
    const { orderItems } = useOrderContext()
    const [cardIdx, setCardIdx] = useState(0)
    const cardsNum = orderItems.length

    const totalPrice = useMemo(() => {
        return orderItems.reduce((acc, orderItem) => {
            orderItem.prilozi.forEach(prilog => {
                acc += Number(prilog.ukupnaCijena)
            })
            orderItem.umaci.forEach(umak => {
                acc += Number(umak.ukupnaCijena)
            })
            return acc + Number(orderItem.ukupnaCijena)
        }, 0)
    }, [orderItems])

    return (
        <div className={styles.orderContainer}>
            {cardsNum === 0 ? (
                <p className={styles.noItemsText}>Nema stavki u narudžbi</p>
            ) : (
                <form>
                    <div className={styles.orderHeadingContainer}>
                        <OrderButton />
                        <div className={styles.totalPriceContainer}>
                            <h3 className={styles.totalPrice}>
                                Ukupna cijena:
                            </h3>
                            <h3 className={styles.totalPrice}>
                                {totalPrice.toFixed(2)}€
                            </h3>
                        </div>
                    </div>

                    <TableSelection tables={tables} />
                    <Navigation
                        cardsNum={cardsNum}
                        cardIdx={cardIdx}
                        setCardIdx={setCardIdx}
                    />
                    <OrderSummary
                        cardIdx={cardIdx}
                        setCardIdx={setCardIdx}
                        sideDishes={sideDishes}
                        sauces={sauces}
                    />
                </form>
            )}
        </div>
    )
}
