import React, { createRef, useEffect, useRef, useState } from 'react';
import styles from "./sectiontwo.module.css";
import Image from 'next/image';

let data = [
    {
        id: 1,
        title: 'Which allergy do you suffer from?',
        desp: 'Can’t breathe easy?',
        image: '/images/body-adults.png'
    },
    {
        id: 2,
        title: 'Which allergy do you suffer from?',
        desp: 'Can’t breathe easy?',
        image: '/images/mother.png'
    },
    {
        id: 3,
        title: 'Which allergy do you suffer from?',
        desp: 'Can’t breathe easy?',
        image: "/images/medical.png"
    }
]

const SectionTwo = () => {

    const [activeData, setActiveData] = useState(null);
    const [fadeActive, setFadeActive] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveData(data[0])
    }, []);

    const handleActive = (event, item, index) => {
        if (item.id === activeData.id) return
        setActiveData(item)
        setFadeActive(1)
        setActiveIndex(index)
    }

    return (
        <div className={`${styles.sectionCardContainer}`}>
            <div className={`${styles.secCardContainerActive}`}>
                {
                    activeData?.image &&
                    <Image
                        className={styles.image}
                        src={activeData?.image}
                        alt={activeData.title}
                        fadehere={fadeActive}
                        onAnimationEnd={() => setFadeActive(0)}
                        fill />
                }
            </div>
            <div className={`${styles.secCard}`}>
                {
                    data &&
                    data.length > 0 &&
                    data.map((item, index) => (
                        <div
                            className={`${styles.card} ${activeIndex === index && styles.activeCardBorder}`}
                            key={item.id}
                            onClick={(event) => handleActive(event, item, index)}
                        >
                            <div className={`${styles.cardQues} ${activeIndex === index && styles.cardQuesActive}`}>
                                {item.title}
                            </div>
                            <div className={`${styles.cardpara} ${activeIndex === index && styles.cardparaActive}`}>
                                {item.desp}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SectionTwo