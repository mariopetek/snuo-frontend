import { useOrderContext } from '@/context/OrderContext'
import { OrderItem } from '@/model/order'

type ItemCardProps = {
    orderItem: OrderItem
}

export default function ItemCard({ orderItem }: ItemCardProps) {
    const { orderItems, setOrderItems } = useOrderContext()
    return (
        <div key={orderItem.id_stavka}>
            <span>{orderItem.naziv_stavka}</span>
            <span>{orderItem.cijena}€</span>
            <span>{orderItem.kolicina}</span>
            <button
                onClick={() => {
                    setOrderItems(
                        orderItems.map(item => {
                            if (item.id_stavka === orderItem.id_stavka) {
                                return {
                                    ...item,
                                    kolicina: item.kolicina + 1
                                }
                            }
                            return item
                        })
                    )
                }}>
                +
            </button>
            <button
                onClick={() => {
                    setOrderItems(
                        orderItems.map(item => {
                            if (item.id_stavka === orderItem.id_stavka) {
                                return {
                                    ...item,
                                    kolicina: item.kolicina - 1
                                }
                            }
                            return item
                        })
                    )
                }}>
                -
            </button>
        </div>
    )
}
