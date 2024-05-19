import { Item } from '@/model/item'

import styles from './MenuSection.module.css'
import MenuItem from './Item/MenuItem'

type MenuSectionProps = {
    sectionName: string
    items: Item[]
}

export default function MenuSection({ sectionName, items }: MenuSectionProps) {
    return (
        <div className={styles.menuSection}>
            <h2>{sectionName}</h2>
            <div className={styles.separator}></div>
            <div className={styles.itemList}>
                {items.map(item => (
                    <MenuItem key={item.id_stavka} item={item} />
                ))}
            </div>
        </div>
    )
}
