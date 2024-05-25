import styles from './RemoveButton.module.css'

type ButtonProps = {
    handleButtonClick: () => void
}

export default function RemoveButton({ handleButtonClick }: ButtonProps) {
    return (
        <button
            type="button"
            onClick={handleButtonClick}
            className={styles.button}
            title="Ukloni stavku iz narudžbe">
            Ukloni
        </button>
    )
}
