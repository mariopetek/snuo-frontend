import Separator from '@/components/Separator/Separator'
import { OrderAddon } from '@/model/order'
import OrderAddedItem from '../OrderAddedItem/OrderAddedItem'

import styles from './OrderAddedSection.module.css'

type OrderAddedSectionProps = {
    sectionName: string
    items: OrderAddon[]
    cardIdx: number
}

export default function OrderAddedSection({
    sectionName,
    items,
    cardIdx
}: OrderAddedSectionProps) {
    return items.length === 0 ? null : (
        <div>
            <h3>{sectionName}</h3>
            <Separator />
            <div className={styles.addonsContainer}>
                {items.map(item => (
                    <OrderAddedItem
                        key={item.id_stavka}
                        item={item}
                        cardIdx={cardIdx}
                    />
                ))}
            </div>
        </div>
    )
}
