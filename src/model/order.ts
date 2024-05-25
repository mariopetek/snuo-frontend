import { Item } from './item'
import { Table } from './table'

export type OrderAddon = Item & {
    kolicina: number
    ukupnaCijena: number
}

export type OrderItem = Item & {
    kolicina: number
    ukupnaCijena: number
    prilozi: OrderAddon[]
    umaci: OrderAddon[]
}

export type Order = {
    items: OrderItem[]
    table: Table
}
