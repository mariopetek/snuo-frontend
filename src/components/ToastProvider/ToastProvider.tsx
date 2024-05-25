'use client'

import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import styles from './ToastProvider.module.css'

export default function ToastProvider() {
    return (
        <ToastContainer
            className={styles.toastContainer}
            position="bottom-right"
            autoClose={5000}
            theme="colored"
            transition={Slide}
        />
    )
}
