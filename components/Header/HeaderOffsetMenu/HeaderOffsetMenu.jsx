import React, { useEffect, useRef } from 'react';
import styles from "./HeaderOffsetMenu.module.css";
import LangComp from '../LangComp/LangComp';

const HeaderOffsetMenu = ({ isOpen = false }) => {
    

    return (
        <div className={`${styles.offsetMenuContainer} ${isOpen ? styles.open : undefined}`}>
            <a href="#"><div className={styles.innerNav}>Know Your Allergy</div></a>
            <a href="#"> <div className={styles.innerNav}>Allergies Decoded</div></a>
            <a href="#"><div className={styles.innerNav}>Childhood Allergies</div></a>
            <a href="#"><div className={styles.innerNav}>Take The Test</div></a>
            <a href="#"> <div className={styles.innerNav}>FAQs</div></a>
            <a href="#"><div className={styles.innerNav}>Communication</div></a>
            <LangComp />
        </div>
    )
}

export default HeaderOffsetMenu