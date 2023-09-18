import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from './lang.module.css';

const LangComp = () => {

    const router = useRouter();
    const enRef = useRef();
    const hiRef = useRef();

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

    const handleClick = (e, lang) => {
        e.preventDefault()
        router.push(router.asPath, undefined, { locale: lang })
    }

    return (
        <div className={styles.lang}>
            <div className={`${styles.langSelector}`} ref={hiRef} onClick={(event) => handleClick(event, "hi")}>HI-IN</div>
            <div className={`${styles.langSelector}`} ref={enRef} onClick={(event) => handleClick(event, "en")}>EN-GB</div>
        </div>
    )
}

export default LangComp