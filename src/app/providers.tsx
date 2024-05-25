'use client'

import ToastProvider from '@/components/ToastProvider/ToastProvider'
import OrderContextProvider from '@/context/OrderContext'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <OrderContextProvider>
            {children}
            <ToastProvider />
        </OrderContextProvider>
    )
}
