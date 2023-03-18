import React from "react";
import styles from "./Questions.module.sass";
import CONSTANTS from "../../../constants";

const Questions = () => {
    return(
<section className={styles.containerPadding}>

    <section className={styles.contactsBlock}>

    <div className={styles.leftSection}>
        <article className={styles.questionText}>
            <span><i class="fas fa-angle-right btn-icon__inner"/></span>
            <div>
                <h4>Pay a Fraction of cost vs hiring an agency</h4>
                <p className={styles.content}>For as low as $199, our naming contests and marketplace allow you to get an amazing brand quickly and affordably.</p>
            </div>
        </article>

        <article className={styles.questionText}>
            <span><i class="fas fa-angle-right btn-icon__inner"/></span>
            <div>
                <h4>Satisfaction Guarantee</h4>
                <p className={styles.content}>Of course! We have policies in place to ensure that you are satisfied with your experience. <a href='#'>Learn more</a></p>
            </div>
        </article>
    </div>

    <div className={styles.rightSection}>
        <h2 className={styles.headerContacts}>Questions?</h2>
        <p className={styles.content}>Speak with a Squadhelp platform expert to learn more and get your questions answered.</p>
        <button href='#'>Schedule Consultation</button>
        <a href='tel:8773553585' className={styles.tel}>
        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phoneIcon.png`} alt='phoneIcon'/>
            (877) 355-3585</a>
        <p className={styles.content}>Call us for assistance</p>
    </div>
    </section>

</section>
    )
}

export default Questions;