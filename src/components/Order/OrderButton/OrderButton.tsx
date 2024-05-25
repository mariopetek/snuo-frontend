import styles from './OrderButton.module.css'

export default function OrderButton() {
    return (
        <button type="button" className={styles.orderButton} title="Naruči">
            Naruči
        </button>
    )
}
