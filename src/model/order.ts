import { Item } from './item'

type OrderAddon = Item & {
    kolicina: number
}

export type OrderItem = Item & {
    kolicina: number
    prilozi?: OrderAddon[]
    umaci?: OrderAddon[]
}
