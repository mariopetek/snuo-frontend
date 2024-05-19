import { Category } from '@/model/category'
import { Item } from '@/model/item'

const ITEMS_URL = '/api/items'

export async function getRestaurantMainDishesAndAppetizers(
    restaurantId: string
) {
    const response = await fetch(
        `${process.env.API_URL}${ITEMS_URL}/${restaurantId}/main-and-appetizers`
    )
    const items = (await response.json()) as Item[]

    const appetizers = items.filter(
        item => item.kategorija.toString() === Category[Category.PREDJELA]
    )

    const mainDishes = items.filter(
        item => item.kategorija.toString() === Category[Category.GLAVNA_JELA]
    )
    return {
        appetizers,
        mainDishes
    }
}
