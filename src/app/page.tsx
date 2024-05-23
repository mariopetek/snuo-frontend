import { getRestaurants } from '@/api/restaurants'
import { Metadata } from 'next'
import Link from 'next/link'
import Separator from '@/components/Separator/Separator'
import { GiForkKnifeSpoon } from 'react-icons/gi'

import styles from './page.module.css'

export const metadata: Metadata = {
    title: 'SNUO | Ugostiteljski objekti'
}

export default async function HomePage() {
    const restaurants = await getRestaurants()

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1>Sustav za naručivanje u ugostiteljskim objektima</h1>
                <div className={styles.foodIconContainer}>
                    <GiForkKnifeSpoon className={styles.foodIcon} />
                </div>
                <h2>Odaberi ugostiteljski objekt</h2>
                {restaurants.map(restaurant => (
                    <Link
                        href={`/${restaurant.id_objekt}`}
                        key={restaurant.id_objekt}
                        className={styles.restaurantLink}>
                        {restaurant.naziv_objekt}
                        <Separator />
                        <div className={styles.restaurantInfo}>
                            <span>Adresa:</span> {restaurant.adresa}
                        </div>
                        <div className={styles.restaurantInfo}>
                            <span>Kontakt:</span> {restaurant.br_mobitel_objekt}
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}
