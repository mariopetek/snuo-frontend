import { Category } from '@/model/category'
import { Item } from '@/model/item'

const ITEMS_URL = '/api/items'

export async function getRestaurantMainDishesAndAppetizers(
    restaurantId: string
) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${ITEMS_URL}/${restaurantId}/main-and-appetizers`
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

export async function getRestaurantSideDishesAndSauces(restaurantId: string) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${ITEMS_URL}/${restaurantId}/side-dishes-and-sauces`
    )
    const items = (await response.json()) as Item[]

    const sideDishes = items.filter(
        item => item.kategorija.toString() === Category[Category.PRILOZI]
    )

    const sauces = items.filter(
        item => item.kategorija.toString() === Category[Category.UMACI]
    )
    return {
        sideDishes,
        sauces
    }
}
