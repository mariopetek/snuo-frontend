import { Restaurant, RestaurantDetails } from '@/model/restaurant'

const RESTAURANTS_URL = '/api/restaurants'

export async function getRestaurants() {
    const response = await fetch(`${process.env.API_URL}${RESTAURANTS_URL}`)
    const restaurants = (await response.json()) as Restaurant[]
    return restaurants
}

export async function getRestaurantById(restaurantId: string) {
    const response = await fetch(
        `${process.env.API_URL}${RESTAURANTS_URL}/${restaurantId}`
    )
    const restaurant = (await response.json()) as RestaurantDetails
    return restaurant
}
