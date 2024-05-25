import { Item } from '@/model/item'
import MenuItem from '../MenuItem/MenuItem'
import Separator from '@/components/Separator/Separator'

import styles from './MenuSection.module.css'

type MenuSectionProps = {
    sectionName: string
    items: Item[]
}

export default function MenuSection({ sectionName, items }: MenuSectionProps) {
    return (
        <div>
            <h2>{sectionName}</h2>
            <Separator />
            <div className={styles.itemsContainer}>
                {items.map(item => (
                    <MenuItem key={item.id_stavka} item={item} />
                ))}
            </div>
        </div>
    )
}
