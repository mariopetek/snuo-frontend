import styles from './PlusButton.module.css'

type PlusButtonProps = {
    handleButtonClick: () => void
}

export default function PlusButton({ handleButtonClick }: PlusButtonProps) {
    return (
        <button className={styles.plusButton} onClick={handleButtonClick}>
            +
        </button>
    )
}
