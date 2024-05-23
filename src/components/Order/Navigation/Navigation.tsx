import styles from './Navigation.module.css'

type NavigationProps = {
    cardsNum: number
    cardIdx: number
    setCardIdx: React.Dispatch<React.SetStateAction<number>>
}

export default function Navigation({
    cardsNum,
    cardIdx,
    setCardIdx
}: NavigationProps) {
    return (
        cardsNum > 1 && (
            <div className={styles.navigationContainer}>
                <button
                    className={styles.navigationArrow}
                    onClick={() => {
                        setCardIdx(cardIdx === 0 ? cardsNum - 1 : cardIdx - 1)
                    }}>
                    {'<'}
                </button>
                {new Array(cardsNum).fill(null).map((_, idx) => (
                    <div
                        key={idx}
                        className={
                            idx === cardIdx ? styles.activeDot : styles.dot
                        }
                        onClick={() => setCardIdx(idx)}></div>
                ))}
                <button
                    className={styles.navigationArrow}
                    onClick={() => {
                        setCardIdx(cardIdx === cardsNum - 1 ? 0 : cardIdx + 1)
                    }}>
                    {'>'}
                </button>
            </div>
        )
    )
}
