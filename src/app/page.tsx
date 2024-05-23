import { getRestaurants } from '@/api/restaurants'
import { Metadata } from 'next'
import Link from 'next/link'

import styles from './page.module.css'
import Separator from '@/components/Separator/Separator'

export const metadata: Metadata = {
    title: 'SNUO | Ugostiteljski objekti'
}

export default async function HomePage() {
    const restaurants = await getRestaurants()

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.mainHeading}>
                    Sustav za naručivanje u ugostiteljskim objektima
                </h1>
                <h2 className={styles.secondaryHeading}>
                    Odaberite ugostiteljski objekt
                </h2>
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
