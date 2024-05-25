import styles from './PlusButton.module.css'

type PlusButtonProps = {
    handleButtonClick: () => void
}

export default function PlusButton({ handleButtonClick }: PlusButtonProps) {
    return (
        <button
            type="button"
            className={styles.plusButton}
            onClick={handleButtonClick}>
            +
        </button>
    )
}
