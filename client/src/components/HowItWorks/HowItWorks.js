import React from "react";
import styles from "./HowItWorks.module.sass"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Link } from 'react-router-dom';
import CONSTANTS from '../../constants';
import WaysToUse from './WaysToUse/WaysToUse';
import FAQItem from './FAQItem/FAQItem';
import categories from './FAQCategories.json';

const HowItWorksComponent = () => {
  const mapFAQ = (category, i) => (
    <div id={category.shortCategoryTitle} key={i}>
      <h3 className={styles.categoryTitle}>{category.categoryTitle}</h3>
      <div>
        {category.faqs.map(faq => (
          <FAQItem faq={faq} />
        ))}
      </div>
    </div>
  );
  return (
    <div>
        <Header/>
        <div className={styles.contentContainer}>
        <section className={styles.howWorkSection}>
          <div className={styles.howWorkInfo}>
            <span className={styles.miniSpan}>World's #1 Naming Platform</span>
            <h1>How Does Squadhelp Work?</h1>
            <p>
              Squadhelp helps you come up with a great name for your business by
              combining the power of crowdsourcing with sophisticated technology
              and Agency-level validation services.
            </p>
            <a href='https://vimeo.com/368584367'>
              <i className='fas fa-play'></i>
                <span className={styles.btnName}></span>Play video
            </a>
          </div>
          <div className={styles.imageContainer}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}/phone2.png`}></img>
          </div>
        </section>
        <section className={styles.servicesSection}>
          <span className={styles.miniSpan}>Our Services</span>
          <h2 className={styles.sectionHeader}>3 Ways To Use Squadhelp</h2>
          <p>
            Squadhelp offers 3 ways to get you a perfect name for your business.
          </p>
          <WaysToUse />
        </section>
        <hr className={styles.line}></hr>
        <section className={styles.namingStepsSection}>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}/naming-steps-icon.png`}
            style={{ width: '4em', height: '4em', marginTop: '4em' }}
          ></img>
          <h3 className={styles.sectionHeader}>How Do Naming Contests Work?</h3>
          <div className={styles.namingStepsContainer}>
            <img
              style={{ width: '40em', height: '40em', marginTop: '4em'}}
              src={`${CONSTANTS.STATIC_IMAGES_PATH}/naming-steps-image.png`}
            ></img>
            <ul className={styles.namingStepsList}>
              <li>
                <span className={styles.numbers}>1.</span><p>Fill out your Naming Brief and begin receiving name ideas in
                minutes.</p>
              </li>
              <li className={styles.phrase}>
                <span className={styles.numbers}>2.</span><p>Rate the submissions and provide feedback to creatives.
                Creatives submit even more names based on your feedback.</p>
              </li>
              <li className={styles.phrase}>
                <span className={styles.numbers}>3.</span><p>Our team helps you test your favorite names with your target
                audience. We also assist with Trademark screening.</p>
              </li>
              <li>
                <span className={styles.numbers}>4.</span><p>Pick a Winner. The winner gets paid for their submission.</p></li>
            </ul>
          </div>
        </section>
        <section className={styles.FAQSection}>
          <ul className={styles.FAQCategories}>
            {categories.map((category, i) => (
              <li key={i}>
                <a href={`#${category.shortCategoryTitle}`}>
                  {category.categoryTitle}{' '}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.FAQContent}> {categories.map(mapFAQ)} </div>
        </section>
        <section className={styles.getStartedSection}>
          <h3>Ready to get started?</h3>
          <p>
            Fill out your contest brief and begin receiving custom name
            suggestions within minutes.
          </p>
          <Link to='/startContest'>
            <span>Start A Contest</span>
          </Link>
          <img
            className={styles.getStartedTop}
            src={`${CONSTANTS.STATIC_IMAGES_PATH}/get-started-top.png`}
          ></img>
          <img
            className={styles.getStartedBottom}
            src={`${CONSTANTS.STATIC_IMAGES_PATH}/get-started-bottom.png`}
          ></img>
        </section>
        <section>Stats section</section>
        <section>Pricing section</section>
      </div>
        <Footer/>
      </div>
  );
};

export default HowItWorksComponent;