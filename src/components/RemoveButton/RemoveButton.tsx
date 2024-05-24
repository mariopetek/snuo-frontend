import styles from './RemoveButton.module.css'

type ButtonProps = {
    handleButtonClick: () => void
}

export default function RemoveButton({ handleButtonClick }: ButtonProps) {
    return (
        <button
            onClick={handleButtonClick}
            className={`${styles.button} ${styles.removeButton}`}
            title="Ukloni stavku iz narudžbe">
            Ukloni
        </button>
    )
}
