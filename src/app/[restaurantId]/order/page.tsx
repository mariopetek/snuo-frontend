import { getRestaurantSideDishesAndSauces } from '@/api/items'
import { getRestaurantTables } from '@/api/tables'
import OrderContainer from '@/components/Order/OrderContainer/OrderContainer'

type RestaurantOrderPageProps = {
    params: {
        restaurantId: string
    }
}

export default async function RestaurantOrderPage({
    params
}: RestaurantOrderPageProps) {
    const { restaurantId } = params
    const { sideDishes, sauces } = await getRestaurantSideDishesAndSauces(
        restaurantId
    )
    const tables = await getRestaurantTables(restaurantId)
    return (
        <>
            <h1>Pregled narudžbe</h1>
            <OrderContainer
                sideDishes={sideDishes}
                sauces={sauces}
                tables={tables}
            />
        </>
    )
}
