'use client'
import { getCreatedOrderById } from '@/api/orders'

import styles from './page.module.css'
import Separator from '@/components/Separator/Separator'
import { useEffect, useState } from 'react'
import { OrderResponse } from '@/model/order'

type CreatedOrderPageProps = {
    params: {
        restaurantId: string
        orderId: string
    }
}

export default function CreatedOrderPage({ params }: CreatedOrderPageProps) {
    const { restaurantId, orderId } = params
    const [createdOrder, setCreatedOrder] = useState<OrderResponse | null>(null)

    useEffect(() => {
        async function getCreatedOrder() {
            const order = await getCreatedOrderById(restaurantId, orderId)
            setCreatedOrder(order)
        }

        getCreatedOrder()
    }, [restaurantId, orderId])

    if (createdOrder === null) return null

    return (
        <>
            <h1>Stvorena narudžba</h1>
            <div className={styles.orderDetailsContainer}>
                <div className={styles.orderSection}>
                    <h3 className={styles.orderLabel}>Vrijeme:</h3>
                    <p>
                        {new Date(createdOrder.vrijeme).toLocaleString(
                            'hr-HR',
                            {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric'
                            }
                        )}
                    </p>
                </div>
                <div className={styles.orderSection}>
                    <h3 className={styles.orderLabel}>Status:</h3>
                    <p>{createdOrder.status}</p>
                </div>
                <div className={styles.orderSection}>
                    <h3 className={styles.orderLabel}>Stol:</h3>
                    <p>{createdOrder.br_stol}</p>
                </div>
                <Separator />
                <div className={styles.orderSection}>
                    <h3 className={styles.orderLabel}>Stavke:</h3>
                    <ul className={styles.orderItemsList}>
                        {createdOrder.stavke.map(item => (
                            <li key={item.id_stavka}>
                                {item.naziv_stavka} (kol: {item.kolicina})
                            </li>
                        ))}
                    </ul>
                </div>
                <Separator />
                <div className={styles.orderSection}>
                    <h3 className={styles.orderLabel}>Ukupna cijena:</h3>
                    <p>{createdOrder.ukupna_cijena.toFixed(2)}€</p>
                </div>
            </div>
        </>
    )
}
