import { Table } from '@/model/table'

const TABLES_URL = '/api/tables'

export async function getRestaurantTables(restaurantId: string) {
    const response = await fetch(
        `${process.env.API_URL}${TABLES_URL}/${restaurantId}`
    )
    const tables = (await response.json()) as Table[]
    return tables
}
