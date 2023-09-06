import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';
import { FaInstagramSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                {/* footer links  */}
                <div className={`${styles.content}`}>
                    <div>
                        <div className={`${styles.title}`}>Outdoor Allergies</div>
                        <div className={`${styles.simple}`}>Pollution Allergy</div>
                        <div className={`${styles.simple}`}>Pollen Allergy</div>
                        <div className={`${styles.simple} ${styles.simpleLastEle}`}>Mold Allergy</div>
                    </div>
                    <div>
                        <div className={`${styles.title}`}>Food Allergies</div>
                        <div className={`${styles.simple} ${styles.simpleLastEle}`}></div>
                    </div>
                    <div>
                        <div className={`${styles.title}`}>Food Allergies</div>
                        <div className={`${styles.simple} ${styles.simpleLastEle}`}></div>
                    </div>
                    <div>
                        <div className={`${styles.title}`}>Food Allergies</div>
                        <div className={`${styles.simple}`}>Allergy Reaction</div>
                        <div className={`${styles.simple}`}>Symtoms</div>
                        <div className={`${styles.simple}`}>Allergy Diagnosis</div>
                        <div className={`${styles.simple}`}>Allergy Management</div>
                        <div className={`${styles.simple}`}>Allergy Myhts</div>
                        <div className={`${styles.simple}`}>Tips for Allergies</div>
                        <div className={`${styles.simple}`}>Downloads</div>
                        <div className={`${styles.simple} ${styles.simpleLastEle}`}>Take the Test</div>
                    </div>
                    <div>
                        <div className={`${styles.title}`}>Food Allergies</div>
                        <div className={`${styles.simple}`}>Allergy Reaction</div>
                        <div className={`${styles.simple}`}>Symtoms</div>
                        <div className={`${styles.simple} ${styles.simpleLastEle}`}>Allergy Diagnosis</div>
                    </div>
                    <div>
                        <div className={`${styles.title}`}>Food Allergies</div>
                        <div className={`${styles.simple}`}>Allergy Reaction</div>
                        <div className={`${styles.simple}`}>Symtoms</div>
                        <div className={`${styles.simple}`}>Symtoms</div>
                        <div className={`${styles.simple} ${styles.simpleLastEle}`}>Allergy Diagnosis</div>
                    </div>
                    <div>
                        <div className={`${styles.title}`}>Food Allergies</div>
                        <div className={`${styles.simple}`}>Allergy Reaction</div>
                        <div className={`${styles.simple}`}>Symtoms</div>
                        <div className={`${styles.simple}`}>Symtoms</div>
                        <div className={`${styles.simple} ${styles.simpleLastEle}`}>Allergy Diagnosis</div>
                    </div>
                    <div>
                        <div className={`${styles.title}`}>Other Links</div>
                        <div className={`${styles.simple}`}>Allergy FAQs</div>
                        <div className={`${styles.simple}`}>Contact</div>
                        <div className={`${styles.simple}`}>T&C</div>
                        <div className={`${styles.simple}`}>Privacy Policy</div>
                        <div className={`${styles.simple}`}>Cookie Policy</div>
                        <div className={`${styles.simple} ${styles.simpleLastEle}`}>Sitemap</div>

                    </div>
                </div>

                {/* company logo / social icons / address */}
                <div className={styles.footerRightContainer}>
                    <div className={styles.footerImage}>
                        <Image src={"/images/logo_footer.png"} alt='footer-logo' fill />
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
    )
}

export default Footer