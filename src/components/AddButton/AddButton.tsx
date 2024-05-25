import styles from './AddButton.module.css'

type ButtonProps = {
    handleButtonClick: () => void
}

export default function AddButton({ handleButtonClick }: ButtonProps) {
    return (
        <button
            type="button"
            onClick={handleButtonClick}
            className={styles.button}
            title="Dodaj stavku u narudžbu">
            Dodaj
        </button>
    )
}
