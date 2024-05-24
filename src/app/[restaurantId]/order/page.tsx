import { getRestaurantSideDishesAndSauces } from '@/api/items'
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
    return (
        <>
            <h1>Pregled narudžbe</h1>
            <OrderContainer sideDishes={sideDishes} sauces={sauces} />
        </>
    )
}
