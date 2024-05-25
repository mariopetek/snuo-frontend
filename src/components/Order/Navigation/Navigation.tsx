import NavigationButton from './NavigationButton/NavigationButton'

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
    const handleLeftButtonClick = () => {
        setCardIdx(cardIdx === 0 ? cardsNum - 1 : cardIdx - 1)
    }

    const handleRightButtonClick = () => {
        setCardIdx(cardIdx === cardsNum - 1 ? 0 : cardIdx + 1)
    }

    return (
        cardsNum > 1 && (
            <div className={styles.navigationContainer}>
                <NavigationButton
                    navLabel="<"
                    handleButtonClick={handleLeftButtonClick}
                />
                {new Array(cardsNum).fill(null).map((_, idx) => (
                    <div
                        key={idx}
                        className={
                            idx === cardIdx ? styles.activeDot : styles.dot
                        }
                        onClick={() => setCardIdx(idx)}></div>
                ))}
                <NavigationButton
                    navLabel=">"
                    handleButtonClick={handleRightButtonClick}
                />
            </div>
        )
    )
}
