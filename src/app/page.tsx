import { getRestaurants } from '@/api/restaurants'
import { Metadata } from 'next'
import Link from 'next/link'

import styles from './page.module.css'

export const metadata: Metadata = {
    title: 'SNUO | Ugostiteljski objekti'
}

export default async function HomePage() {
    const restaurants = await getRestaurants()
    return (
        <main className={styles.main}>
            <h1>Sustav za naručivanje u ugostiteljskim objektima</h1>
            <h2>Odaberite ugostiteljski objekt:</h2>
            {restaurants.map(restaurant => (
                <Link
                    key={restaurant.id_objekt}
                    href={`/${restaurant.id_objekt}`}>
                    {restaurant.naziv_objekt}
                </Link>
            ))}
        </main>
    )
}
