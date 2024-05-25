import styles from './NavigationButton.module.css'

type NavigationButtonProps = {
    navLabel: string
    handleButtonClick: () => void
}

export default function NavigationButton({
    navLabel,
    handleButtonClick
}: NavigationButtonProps) {
    return (
        <button
            title="Promijeni stranicu"
            type="button"
            className={styles.navigationArrow}
            onClick={handleButtonClick}>
            {navLabel}
        </button>
    )
}
