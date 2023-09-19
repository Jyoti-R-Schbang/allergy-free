import React, { useState } from 'react'
import styles from './footer.module.css';
import Image from 'next/image';
import { FaInstagramSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import useWindowWidth from '@/utils/useWindowWidth';
import AccordionComp from '@/components/AccodionComp/AccordionComp';
import { FiPlus, FiMinus } from 'react-icons/fi'

let footerData = [
    {
        id: 0,
        title: 'Outdoor Allergies',
        content: ['Pollution Allergy', 'Pollen Allergy', 'Mold Allergy']
    },
    {
        id: 1,
        title: 'Food Allergies',
        content: []
    },
    {
        id: 2,
        title: 'Allergies vs COVID 19',
        content: []
    },
    {
        id: 3,
        title: 'About Allergies',
        content: ['Allergic Reaction Symtoms', 'Allergy Diagnosis', 'Allergy Management', 'Allergy Myhts', 'Tips for Allergies', 'Downloads', 'Take the Test']
    },
    {
        id: 4,
        title: 'Kids Allergies',
        content: ['Questions to Ask to Doctor', 'Common Child Allergies', 'Children`s Allergy Relief']
    },
    {
        id: 5,
        title: 'Indoor Allergies',
        content: ['Pets Allergy', 'Paint Allergy', 'House Dust Allergy', 'Other Indoor Allergies']
    },
    {
        id: 6,
        title: 'Communication',
        content: ['How to use a nasal spray', 'Doctor’s Corner', 'Understanding Allergies', 'Media']
    },
    {
        id: 7,
        title: 'Other Links',
        content: ['Allergy FAQs', 'Contact', 'T&C', 'Privacy Policy', 'Cookie Policy', 'Sitemap']
    }
]

const Footer = () => {

    const isMobile = useWindowWidth() < 768;

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => setExpanded(expanded === panel ? false : panel);

    const footerChild = (data, id) => {
        if (data && data.length > 0) {
            return data.map((item, index) => (
                index !== data.length - 1 ?
                    <div className={`${styles.simple}`} key={`${id}_simple_${index}`}>{item}</div> :
                    <div className={`${styles.simple} ${styles.simpleLastEle}`} key={`${id}_simple_${index}`}>{item}</div>
            ))
        }
        else {
            return <div className={`${styles.simple} ${styles.simpleLastEle}`}></div>
        }
    }

    const footerChildMobile = (data, id) => {
        if (data && data.length > 0) {
            return data.map((item, index) => <li key={`${id}_accordion_${index}`}>{item}</li>)
        }
    }

    const expandIconHandler = (id, expanVal, arr) => {
        if (!arr || !arr.length) return

        return (id === expanded ?
            <span style={{ height: "10px", display: 'grid', placeContent: 'center' }} onClick={handleChange(id)}><FiMinus color='white' size={'20px'} /> </span> :
            <span onClick={handleChange(id)}><FiPlus color='white' size={'20px'} /></span>)
    }

    return (
        <>
            {/* mobile view / accordion */}
            <div className={styles.accordionFooter}>
                {
                    footerData && footerData.length > 0 &&
                    footerData.map((item, index) =>
                        <React.Fragment key={item.id}>
                            <AccordionComp
                                title={item.title}
                                // handleChange={handleChange}
                                activeId={item.id}
                                expanded={expanded}
                                mainClass={styles.accordionMainClass}
                                // expandIcon={item.id === expanded ? <FiMinus color='white' size={'20px'} /> : <FiPlus color='white' size={'20px'} />}
                                expandIcon={expandIconHandler(item.id, expanded, item.content)}
                                headerClass={`${styles.accordionHeaderClass} ${item.id === expanded
                                    ? styles.accordionHeaderClassActive
                                    : ""
                                    }`}
                                bodyClass={styles.accordionBodyClass}
                            >
                                <ul>
                                    {footerChildMobile(item.content, item.id)}
                                </ul>
                            </AccordionComp>
                        </React.Fragment>
                    )
                }
            </div>
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    {/* footer links  */}
                    <div className={`${styles.footerContentWrapper}`}>
                        {
                            footerData && footerData.length > 0 &&
                            footerData.map((item, index) =>
                                <React.Fragment key={item.id}>
                                    <div className={`${styles.title} ${item?.content && item.content.length === 0 && styles.titleNoPaddingBottom}`}>{item.title}</div>
                                    {footerChild(item.content, item.id)}
                                </React.Fragment>
                            )
                        }
                    </div>

                    {/* company logo / social icons / address */}
                    <div className={styles.footerRightContainer}>
                        <div className={styles.footerImage}>
                            <Image src={!isMobile ? "/images/logo_footer.png" : "/images/white_logo_allergy_free.png"} alt='footer-logo' fill />
                        </div>
                        <div className={styles.socialIconsContainer}>
                            <div><FaInstagramSquare color='white' size={"40px"} /></div>
                            <div><ImFacebook2 color='white' size={"35px"} /></div>
                        </div>
                        <div className={styles.addressContainer}>
                            Sanofi India Ltd.
                            Address - Sanofi House, C.T.S No : 117-B, L&T Business Park, Saki Vihar Road, Powai, Mumbai - 400 072.
                            SAIN.FEX.20.04.0764
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer