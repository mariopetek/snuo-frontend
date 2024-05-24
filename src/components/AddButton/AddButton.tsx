import styles from './AddButton.module.css'

type ButtonProps = {
    handleButtonClick: () => void
}

export default function AddButton({ handleButtonClick }: ButtonProps) {
    return (
        <button
            onClick={handleButtonClick}
            className={`${styles.button} ${styles.addButton}`}
            title="Dodaj stavku u narudžbu">
            Dodaj
        </button>
    )
}
