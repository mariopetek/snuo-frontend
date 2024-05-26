import { Order, OrderResponse } from '@/model/order'

const ORDERS_URL = '/api/orders'

export async function createOrder(restaurantId: string, order: Order) {
    const orderToSend = {
        br_stol: order.table.br_stol,
        items: [] as { id_stavka: string; kolicina: number }[]
    }

    order.items.forEach(item => {
        orderToSend.items.push({
            id_stavka: item.id_stavka,
            kolicina: item.kolicina
        })

        item.prilozi.forEach(prilog => {
            if (orderToSend.items.find(i => i.id_stavka === prilog.id_stavka)) {
                orderToSend.items.find(
                    i => i.id_stavka === prilog.id_stavka
                )!.kolicina += prilog.kolicina
                return
            } else {
                orderToSend.items.push({
                    id_stavka: prilog.id_stavka,
                    kolicina: prilog.kolicina
                })
            }
        })

        item.umaci.forEach(umak => {
            if (orderToSend.items.find(i => i.id_stavka === umak.id_stavka)) {
                orderToSend.items.find(
                    i => i.id_stavka === umak.id_stavka
                )!.kolicina += umak.kolicina
                return
            } else {
                orderToSend.items.push({
                    id_stavka: umak.id_stavka,
                    kolicina: umak.kolicina
                })
            }
        })
    })

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${ORDERS_URL}/${restaurantId}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderToSend)
        }
    )
    if (!response.ok) {
        throw new Error('Error creating order')
    }
    const createdOrderId = (await response.json()) as string
    return createdOrderId
}

export async function getCreatedOrderById(
    restaurantId: string,
    orderId: string
) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${ORDERS_URL}/${restaurantId}/${orderId}`
    )
    const createdOrder = (await response.json()) as OrderResponse
    return createdOrder
}
