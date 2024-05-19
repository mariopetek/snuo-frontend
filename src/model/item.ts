import { Category } from './category'

export type Item = {
    id_stavka: string
    naziv_stavka: string
    cijena: number
    kategorija: Category
    id_objekt: string
}
