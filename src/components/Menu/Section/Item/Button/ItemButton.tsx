import { useOrderContext } from '@/context/OrderContext'
import { Item } from '@/model/item'

import styles from './ItemButton.module.css'

type ButtonProps = {
    handleButtonClick: () => void
}

function AddButton({ handleButtonClick }: ButtonProps) {
    return (
        <button
            onClick={handleButtonClick}
            className={`${styles.button} ${styles.addButton}`}>
            Dodaj
        </button>
    )
}

function RemoveButton({ handleButtonClick }: ButtonProps) {
    return (
        <button
            onClick={handleButtonClick}
            className={`${styles.button} ${styles.removeButton}`}>
            Ukloni
        </button>
    )
}

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
                    kolicina: 1
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
