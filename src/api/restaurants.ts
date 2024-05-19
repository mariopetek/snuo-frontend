import { Restaurant } from '@/model/restaurant'

const RESTAURANTS_URL = '/api/restaurants'

export async function getRestaurants() {
    const response = await fetch(`${process.env.API_URL}${RESTAURANTS_URL}`)
    const restaurants = (await response.json()) as Restaurant[]
    return restaurants
}
