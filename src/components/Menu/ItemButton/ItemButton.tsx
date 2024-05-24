import AddButton from '@/components/AddButton/AddButton'
import RemoveButton from '@/components/RemoveButton/RemoveButton'
import { useOrderContext } from '@/context/OrderContext'
import { Item } from '@/model/item'

type ItemButtonProps = {
    item: Item
}

export default function ItemButton({ item }: ItemButtonProps) {
    const { orderItems, setOrderItems } = useOrderContext()

    const handleButtonClick = () => {
        if (isAdded()) {
            setOrderItems(
                orderItems.filter(
                    orderItem => orderItem.id_stavka !== item.id_stavka
                )
            )
        } else {
            setOrderItems([
                ...orderItems,
                {
                    id_stavka: item.id_stavka,
                    naziv_stavka: item.naziv_stavka,
                    cijena: item.cijena,
                    kategorija: item.kategorija,
                    id_objekt: item.id_objekt,
                    kolicina: 1,
                    prilozi: [],
                    umaci: []
                }
            ])
        }
    }

    const isAdded = () => {
        return orderItems.some(
            orderItem => orderItem.id_stavka === item.id_stavka
        )
    }
    return isAdded() ? (
        <RemoveButton handleButtonClick={handleButtonClick} />
    ) : (
        <AddButton handleButtonClick={handleButtonClick} />
    )
}
