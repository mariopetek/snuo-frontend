import Separator from '@/components/Separator/Separator'
import { Item } from '@/model/item'
import OrderMenuItem from '../OrderMenuItem/OrderMenuItem'

import styles from './OrderMenuSection.module.css'

type MenuSectionProps = {
    sectionName: string
    items: Item[]
}

export default function OrderMenuSection({
    sectionName,
    items
}: MenuSectionProps) {
    return (
        <div className={styles.menuSection}>
            <h2>{sectionName}</h2>
            <Separator />
            <div className={styles.itemList}>
                {items.map(item => (
                    <OrderMenuItem key={item.id_stavka} item={item} />
                ))}
            </div>
        </div>
    )
}
