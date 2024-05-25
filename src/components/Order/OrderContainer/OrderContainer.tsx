'use client'

import { useOrderContext } from '@/context/OrderContext'
import { useMemo, useState } from 'react'
import Navigation from '../Navigation/Navigation'
import { Item } from '@/model/item'
import OrderSummary from '../OrderSummary/OrderSummary'
import { Table } from '@/model/table'
import TableSelection from '../TableSelection/TableSelection'
import OrderButton from '../OrderButton/OrderButton'
import { createOrder } from '@/api/orders'
import { toast } from 'react-toastify'

import styles from './OrderContainer.module.css'
import { useRouter } from 'next/navigation'

type OrderContainerProps = {
    restaurantId: string
    tables: Table[]
    sideDishes: Item[]
    sauces: Item[]
}

export default function OrderContainer({
    restaurantId,
    tables,
    sideDishes,
    sauces
}: OrderContainerProps) {
    const { orderItems, setOrderItems, selectedTable, setSelectedTable } =
        useOrderContext()
    const [cardIdx, setCardIdx] = useState(0)
    const cardsNum = orderItems.length
    const router = useRouter()

    const totalPrice = useMemo(() => {
        return orderItems.reduce((acc, orderItem) => {
            orderItem.prilozi.forEach(prilog => {
                acc += Number(prilog.ukupnaCijena)
            })
            orderItem.umaci.forEach(umak => {
                acc += Number(umak.ukupnaCijena)
            })
            return acc + Number(orderItem.ukupnaCijena)
        }, 0)
    }, [orderItems])

    async function createOrderAction() {
        try {
            if (selectedTable === null) {
                throw new Error('Table not selected')
            }
            const orderId = await createOrder(restaurantId, {
                items: orderItems,
                table: selectedTable
            })
            toast.success('Narudžba zaprimljena', {
                className: styles.toastSuccess,
                progressClassName: styles.toastSuccessProgress
            })
            router.push(`/${restaurantId}/order/${orderId}`)
            setOrderItems([])
            setSelectedTable(null)
        } catch (error) {
            toast.error('Greška prilikom slanja narudžbe', {
                className: styles.toastError,
                progressClassName: styles.toastErrorProgress
            })
        }
    }

    return (
        <div className={styles.orderContainer}>
            {cardsNum === 0 ? (
                <p className={styles.noItemsText}>Nema stavki u narudžbi</p>
            ) : (
                <form action={createOrderAction}>
                    <div className={styles.orderHeadingContainer}>
                        <OrderButton />
                        <div className={styles.totalPriceContainer}>
                            <h3 className={styles.totalPrice}>
                                Ukupna cijena:
                            </h3>
                            <h3 className={styles.totalPrice}>
                                {totalPrice.toFixed(2)}€
                            </h3>
                        </div>
                    </div>

                    <TableSelection tables={tables} />
                    <Navigation
                        cardsNum={cardsNum}
                        cardIdx={cardIdx}
                        setCardIdx={setCardIdx}
                    />
                    <OrderSummary
                        cardIdx={cardIdx}
                        setCardIdx={setCardIdx}
                        sideDishes={sideDishes}
                        sauces={sauces}
                    />
                </form>
            )}
        </div>
    )
}
