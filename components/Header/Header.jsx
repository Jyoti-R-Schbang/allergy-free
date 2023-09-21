import React, { useEffect, useRef, useState } from 'react';
import styles from "./header.module.css";
import Image from 'next/image';
import MobileHamburger from './MobileHamburger';
import HeaderOffsetMenu from './HeaderOffsetMenu/HeaderOffsetMenu';
import LangComp from './LangComp/LangComp';
// import Logo from '@/components/Svg/Logo';

const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState(false)

    const handleBurgerMenuClick = () => setBurgerOpen(!burgerOpen)

    return (
        <div style={{ position: 'relative' }}>
            <header className={`${styles.header} ${burgerOpen ? styles.headernoboxshadow : undefined}`}>
                <div className={styles.logo}>
                    <Image src="/images/logo.svg" alt="logo" fill />
                    {/* <Logo /> */}
                </div>
                <div className={styles.navMainContainer}>
                    <a href="#"><div className={styles.innerNav}>Know Your Allergy</div></a>
                    <a href="#"> <div className={styles.innerNav}>Allergies Decoded</div></a>
                    <a href="#"><div className={styles.innerNav}>Childhood Allergies</div></a>
                    <a href="#"><div className={styles.innerNav}>Take The Test</div></a>
                    <a href="#"> <div className={styles.innerNav}>FAQs</div></a>
                    <a href="#"><div className={styles.innerNav}>Communication</div></a>
                </div>
                <div className={styles.langContainer}>
                    <LangComp />
                </div>

                <div className={styles.mobileBurgerMenu} onClick={handleBurgerMenuClick}>
                    <MobileHamburger isOpen={burgerOpen} />
                </div>
            </header>
            <div className={styles.offSetMenu}>
                <HeaderOffsetMenu isOpen={burgerOpen} />
            </div>
        </div>
    )
}

export default Header