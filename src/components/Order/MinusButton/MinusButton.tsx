import styles from './MinusButton.module.css'

type MinusButtonProps = {
    handleButtonClick: () => void
}

export default function MinusButton({ handleButtonClick }: MinusButtonProps) {
    return (
        <button className={styles.minusButton} onClick={handleButtonClick}>
            -
        </button>
    )
}
