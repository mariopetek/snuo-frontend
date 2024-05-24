import Separator from '@/components/Separator/Separator'
import { Item } from '@/model/item'
import OrderMenuItem from '../OrderMenuItem/OrderMenuItem'
import { useOrderContext } from '@/context/OrderContext'

import styles from './OrderMenuSection.module.css'

type OrderMenuSectionProps = {
    sectionName: string
    items: Item[]
    cardIdx: number
}

export default function OrderMenuSection({
    sectionName,
    items,
    cardIdx
}: OrderMenuSectionProps) {
    const { orderItems } = useOrderContext()

    const notAddedItems = items.filter(item => {
        return (
            orderItems[cardIdx].prilozi.every(
                ({ id_stavka }) => id_stavka !== item.id_stavka
            ) &&
            orderItems[cardIdx].umaci.every(
                ({ id_stavka }) => id_stavka !== item.id_stavka
            )
        )
    })

    return notAddedItems.length === 0 ? null : (
        <div>
            <h2>{sectionName}</h2>
            <Separator />
            <div className={styles.addonsContainer}>
                {notAddedItems.map(item => (
                    <OrderMenuItem
                        key={item.id_stavka}
                        item={item}
                        cardIdx={cardIdx}
                    />
                ))}
            </div>
        </div>
    )
}
