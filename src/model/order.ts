import { Item } from './item'
import { Status } from './status'
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

type OrderResponseItem = {
    id_stavka: string
    naziv_stavka: string
    cijena: number
    kolicina: number
}

export type OrderResponse = {
    id_narudzba: string
    br_stol: string
    stavke: OrderResponseItem[]
    vrijeme: string
    ukupna_cijena: number
    status: Status
}
