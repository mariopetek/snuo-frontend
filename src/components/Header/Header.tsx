'use client'

import { RestaurantDetails } from '@/model/restaurant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHome } from 'react-icons/fa'

import styles from './Header.module.css'
import { useEffect, useState } from 'react'

type HeaderProps = {
    restaurant: RestaurantDetails
}

export default function Header({ restaurant }: HeaderProps) {
    const pathname = usePathname()
    const [lastScrollTop, setLastScrollTop] = useState(0)
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        function handleScroll() {
            let scrollTop = window.scrollY || document.documentElement.scrollTop
            if (scrollTop > lastScrollTop) {
                setIsSticky(false)
            } else {
                setIsSticky(true)
            }
            setLastScrollTop(scrollTop)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollTop])

    return (
        <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
            <div className={styles.restaurantInfo}>
                <h1 className={styles.name}>{restaurant.naziv_objekt}</h1>
                <span className={styles.address}>
                    {restaurant.adresa}, {restaurant.mjesto.pbr},{' '}
                    {restaurant.mjesto.naziv_mjesto}
                </span>
                <span className={styles.contact}>
                    Kontakt: {restaurant.br_mobitel_objekt}
                </span>
            </div>
            <div className={styles.navLinks}>
                <span className={styles.homeLink}>
                    <Link href="/" title="Početna">
                        <FaHome />
                    </Link>
                </span>

                <span className={styles.linkWrapper}>
                    <Link href={`/${restaurant.id_objekt}`} title="Ponuda">
                        Ponuda
                    </Link>
                    {pathname === `/${restaurant.id_objekt}` ? (
                        <span className={styles.activeIndicator}></span>
                    ) : null}
                </span>
                <span className={styles.linkWrapper}>
                    <Link
                        href={`/${restaurant.id_objekt}/order`}
                        title="Narudžba">
                        Narudžba
                    </Link>
                    {pathname.includes(`/${restaurant.id_objekt}/order`) ? (
                        <span className={styles.activeIndicator}></span>
                    ) : null}
                </span>
            </div>
        </header>
    )
}
