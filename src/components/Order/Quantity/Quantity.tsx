import MinusButton from '../MinusButton/MinusButton'
import PlusButton from '../PlusButton/PlusButton'

import styles from './Quantity.module.css'

type QuantityProps = {
    quantity: number
    handlePlusButtonClick: () => void
    handleMinusButtonClick: () => void
}

export default function Quantity({
    quantity,
    handlePlusButtonClick,
    handleMinusButtonClick
}: QuantityProps) {
    return (
        <div className={styles.quantityContainer}>
            <span>Količina:</span>
            <PlusButton handleButtonClick={handlePlusButtonClick} />
            <span className={styles.quantity}>{quantity}</span>
            <MinusButton handleButtonClick={handleMinusButtonClick} />
        </div>
    )
}
