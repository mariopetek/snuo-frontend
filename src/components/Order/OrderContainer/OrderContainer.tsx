'use client'
import { useOrderContext } from '@/context/OrderContext'
import ItemCard from '../ItemCard/ItemCard'
import { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import { Item } from '@/model/item'

type OrderContainerProps = {
    sideDishes: Item[]
    sauces: Item[]
}

export default function OrderContainer({
    sideDishes,
    sauces
}: OrderContainerProps) {
    const { orderItems } = useOrderContext()
    const [cardIdx, setCardIdx] = useState(0)
    const cardsNum = orderItems.length

    return (
        <div>
            {cardsNum === 0 ? (
                <span>Nema stavki u narudžbi</span>
            ) : (
                <>
                    <Navigation
                        cardsNum={cardsNum}
                        cardIdx={cardIdx}
                        setCardIdx={setCardIdx}
                    />
                    <ItemCard
                        cardsNum={cardsNum}
                        cardIdx={cardIdx}
                        setCardIdx={setCardIdx}
                        orderItem={orderItems[cardIdx]}
                        sideDishes={sideDishes}
                        sauces={sauces}
                    />
                </>
            )}
        </div>
    )
}
