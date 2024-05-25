import { getRestaurantMainDishesAndAppetizers } from '@/api/items'

import styles from './page.module.css'
import MenuSection from '@/components/Menu/MenuSection/MenuSection'

type RestaurantMenuPageProps = {
    params: {
        restaurantId: string
    }
}

export default async function RestaurantMenuPage({
    params
}: RestaurantMenuPageProps) {
    const { restaurantId } = params
    const { appetizers, mainDishes } =
        await getRestaurantMainDishesAndAppetizers(restaurantId)
    return (
        <>
            <h1 className={styles.heading}>U ponudi</h1>
            <div className={styles.menuContainer}>
                <MenuSection sectionName="Predjela" items={appetizers} />
                <MenuSection sectionName="Glavna jela" items={mainDishes} />
            </div>
        </>
    )
}
