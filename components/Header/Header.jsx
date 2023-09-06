import React, { useEffect, useRef } from 'react';
import styles from "./header.module.css";
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    const enRef = useRef()
    const hiRef = useRef()

    useEffect(() => {
        if (router && router.locale && router.locale === "hi") {
            hiRef.current.classList.add(styles.langActive);
            enRef.current.classList.remove(styles.langActive)
        }
        else {
            hiRef.current.classList.remove(styles.langActive);
            enRef.current.classList.add(styles.langActive)
        }
    }, [router])

    const hanldeClick = (e, lang) => {
        e.preventDefault()
        router.push(router.asPath, undefined, { locale: lang })
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image src="/images/logo.png" alt="logo" fill />
            </div>
            <div className={styles.navMainContainer}>
                <a href="#"><div className={styles.innerNav}>Know Your Allergy</div></a>
                <a href="#"> <div className={styles.innerNav}>Allergies Decoded</div></a>
                <a href="#"><div className={styles.innerNav}>Childhood Allergies</div></a>
                <a href="#"><div className={styles.innerNav}>Take The Test</div></a>
                <a href="#"> <div className={styles.innerNav}>FAQs</div></a>
                <a href="#"><div className={styles.innerNav}>Communication</div></a>
            </div>
            <div className={styles.lang}>
                <div className={`${styles.langSelector}`} ref={hiRef} onClick={(event) => hanldeClick(event, "hi")}>HI-IN</div>
                <div className={`${styles.langSelector}`} ref={enRef} onClick={(event) => hanldeClick(event, "en")}>EN-GB</div>
            </div>
        </header>
    )
}

export default Header