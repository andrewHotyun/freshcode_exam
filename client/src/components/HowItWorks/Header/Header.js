import React from "react";
import styles from "./Header.module.sass";
import Logo from '../../Logo';
import CONSTANTS from '../../../constants';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
      <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo" />
        <input className={styles.input} 
        type="text"
        placeholder="Search over 100,000 names" 
        />
      </div>
    </>
    );
};

export default Header;