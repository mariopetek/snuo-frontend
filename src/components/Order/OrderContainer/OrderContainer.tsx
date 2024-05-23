'use client'
import { useOrderContext } from '@/context/OrderContext'
import ItemCard from '../ItemCard/ItemCard'
import { useState } from 'react'
import Navigation from '../Navigation/Navigation'

import styles from './OrderContainer.module.css'

export default function OrderContainer() {
    const { orderItems } = useOrderContext()
    const [cardIdx, setCardIdx] = useState(0)
    const cardsNum = orderItems.length

    return (
        <div className={styles.orderContainer}>
            {cardsNum === 0 ? (
                <span>Nema stavki u narudžbi</span>
            ) : (
                <>
                    <Navigation
                        cardsNum={cardsNum}
                        cardIdx={cardIdx}
                        setCardIdx={setCardIdx}
                    />
                    <ItemCard orderItem={orderItems[cardIdx]} />
                </>
            )}
        </div>
    )
}
