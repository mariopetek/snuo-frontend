import { Place } from './place'

export type Restaurant = {
    id_objekt: string
    naziv_objekt: string
    adresa: string
    pbr: number
    br_mobitel_objekt: string
}

export type RestaurantDetails = Omit<Restaurant, 'pbr'> & {
    mjesto: Place
}
