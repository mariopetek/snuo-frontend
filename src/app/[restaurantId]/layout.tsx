import Header from '@/components/Header/Header'
import { PropsWithChildren } from 'react'
import { getRestaurantById } from '@/api/restaurants'

import styles from './layout.module.css'

type RestaurantLayoutProps = PropsWithChildren<Params>

type Params = {
    params: {
        restaurantId: string
    }
}

export async function generateMetadata({ params }: Params) {
    const { restaurantId } = params
    const restaurant = await getRestaurantById(restaurantId)
    return {
        title: `${restaurant.naziv_objekt}`
    }
}

export default async function RestaurantLayout({
    children,
    params
}: RestaurantLayoutProps) {
    const { restaurantId } = params
    const restaurant = await getRestaurantById(restaurantId)
    return (
        <>
            <Header restaurant={restaurant} />
            <main className={styles.main}>
                <div className={styles.container}>{children}</div>
            </main>
        </>
    )
}
