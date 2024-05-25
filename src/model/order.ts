import { Item } from './item'

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
