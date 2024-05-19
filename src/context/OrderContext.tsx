import { createContext, PropsWithChildren, useContext, useState } from 'react'

type OrderItem = {
    id_stavka: string
    kolicina: number
}
type OrderContextType = {
    orderItems: OrderItem[]
    setOrderItems: React.Dispatch<React.SetStateAction<OrderItem[]>>
}

const OrderContext = createContext<OrderContextType | null>(null)

export default function OrderContextProvider({ children }: PropsWithChildren) {
    const [orderItems, setOrderItems] = useState<OrderItem[]>([])

    return (
        <OrderContext.Provider value={{ orderItems, setOrderItems }}>
            {children}
        </OrderContext.Provider>
    )
}

export function useOrderContext() {
    const orderContext = useContext(OrderContext)
    if (orderContext === null) {
        throw new Error(
            'useOrderContext must be used within a OrderContextProvider'
        )
    }
    return orderContext
}
