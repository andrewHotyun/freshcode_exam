import React from "react";
import styles from "./StatInformation.module.sass";
import CONSTANTS from "../../../constants";

const StatInformation = () => {
  return (
    <section className={styles.containerPadding}>
    <div className={styles.containerDignity}>  
        <div className={styles.boxDignity}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}stars.png`}  alt='stars'/>
            <p className={styles.content}><span>4.9 out of 5 stars</span> from 25,000+ customers.</p>
        </div>
        <div className={styles.boxDignity}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}peoplesInfo.png`} alt='people'/>
            <p className={styles.content}>Our branding community stands<span> 200,000+</span> strong.</p>
        </div>
        <div className={styles.boxDignity}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}sharingFiles.png`} alt='sharing-files'/>
            <p className={styles.content}> <span>140+ Industries</span> supported across more than<span> 85 countries</span> - and counting.</p>
        </div>       
    </div>       
    </section>
    
  );
};

export default StatInformation;