'use client'

import OrderContextProvider from '@/context/OrderContext'

export function Providers({ children }: { children: React.ReactNode }) {
    return <OrderContextProvider>{children}</OrderContextProvider>
}
