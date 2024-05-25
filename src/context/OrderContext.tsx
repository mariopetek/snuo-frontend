import { OrderItem } from '@/model/order'
import { Table } from '@/model/table'
import { createContext, PropsWithChildren, useContext, useState } from 'react'

type OrderContextType = {
    orderItems: OrderItem[]
    setOrderItems: React.Dispatch<React.SetStateAction<OrderItem[]>>
    selectedTable: Table | null
    setSelectedTable: React.Dispatch<React.SetStateAction<Table | null>>
}

const OrderContext = createContext<OrderContextType | null>(null)

export default function OrderContextProvider({ children }: PropsWithChildren) {
    const [orderItems, setOrderItems] = useState<OrderItem[]>([])
    const [selectedTable, setSelectedTable] = useState<Table | null>(null)

    return (
        <OrderContext.Provider
            value={{
                orderItems,
                setOrderItems,
                selectedTable,
                setSelectedTable
            }}>
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
