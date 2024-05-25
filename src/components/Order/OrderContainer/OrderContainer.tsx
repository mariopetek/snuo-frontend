'use client'

import { useOrderContext } from '@/context/OrderContext'
import { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import { Item } from '@/model/item'
import OrderSummary from '../OrderSummary/OrderSummary'
import { Table } from '@/model/table'
import TableSelection from '../TableSelection/TableSelection'

import styles from './OrderContainer.module.css'

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

    return (
        <div className={styles.orderContainer}>
            {cardsNum === 0 ? (
                <p className={styles.noItemsText}>Nema stavki u narudžbi</p>
            ) : (
                <>
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
                </>
            )}
        </div>
    )
}
