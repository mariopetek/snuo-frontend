import { Item } from '@/model/item'

import styles from './MenuSection.module.css'

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
                    <div key={item.id_stavka} className={styles.item}>
                        <h3>{item.naziv_stavka}</h3>
                        <span>{item.cijena}€</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
