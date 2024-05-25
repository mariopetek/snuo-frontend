import { useFormStatus } from 'react-dom'

import styles from './OrderButton.module.css'

export default function OrderButton() {
    const { pending } = useFormStatus()
    return (
        <button
            className={styles.orderButton}
            title="Naruči"
            disabled={pending ? true : false}>
            {pending ? 'Naručivanje...' : 'Naruči'}
        </button>
    )
}
