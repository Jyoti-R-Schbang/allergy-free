import React from "react";
import styles from "./simplecard.module.css";
import Image from 'next/image';

const SimpleCard = () => {
    return (
        <>
            <div className={`${styles.simpleCard}`}>
                <h2 className={`${styles.title}`}>Allergy Myths & Facts</h2>
                <div className={`${styles.cardImageSec3}`}>
                    <Image alt="" src="/images/body-adults.png" fill />
                </div>
                <p className={`${styles.simpleCardPara}`}>
                    You can be allergic to pets only if you own one. Now that doesnt make much sense, does it? These so-called popular facts or beliefs are far from the actual truth and were here to get the facts straight. Know your allergy facts.
                    
                </p>
                <a href="#">
                    <button className={`${styles.buttonKnowMore}`}>Know More</button>
                </a>
            </div>
            <div className={`${styles.simpleCard}`}>
                <h2 className={`${styles.title}`}>How to Treat Allergies</h2>
                <div className={`${styles.cardImageSec3}`}>
                    <Image alt="" src="/images/mother.png" fill />
                </div>
                <p className={`${styles.simpleCardPara}`}>
                    It is true that there is no cure for an allergy, but you can manage its symptoms. With proper precaution and right lifestyle changes, you can succeed in treating allergy side effects and avoiding allergic reactions altogether.
                </p>
                <a href="#">
                    <button className={`${styles.buttonKnowMore}`}>Know More</button>
                </a>
            </div>
            <div className={`${styles.simpleCard}`}>
                <h2 className={`${styles.title}`}>Pollution Allergies</h2>
                <div className={`${styles.cardImageSec3}`}>
                    <Image alt="" src="/images/medical.png" fill />
                </div>
                <p className={`${styles.simpleCardPara}`}>
                    India is among the most highly polluted countries in the world and the risk of allergies due to pollution is higher than ever. In fact, over 8 million kids in India, exposed to pollution.
                    India is among the most highly polluted countries in the world and the risk of allergies due to pollution is higher than ever.India is among the most highly polluted countries in the world and the risk of allergies due to pollution is higher than ever.
                </p>
                <a href="#">
                    <button className={`${styles.buttonKnowMore}`}>Know More</button>
                </a>
            </div>
        </>
    )
}

export default SimpleCard