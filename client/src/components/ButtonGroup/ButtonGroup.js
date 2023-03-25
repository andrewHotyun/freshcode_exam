import React, { useState } from 'react';
import styles from './ButtonGroup.module.sass';
import classNames from 'classnames/bind';

const buttons = [
    {
      agreement: 'Yes',
      body: 'The Domain should exactly match the name',
    },
    {
      agreement: 'Yes',
      body: 'But minor variations are allowed (Recommended)',
    },
    {
      agreement: 'No',
      body: 'I am only looking for a name, not a Domain',
    },
  ];
  
  function ButtonGroup () {
    const [active, setActive] = useState(buttons[0].body);
  
    const cs = classNames.bind(styles);
  
    const mapButtons = (button, i) => {
      const btnClass = cs({
        buttonNotActive: true,
        buttonActive: active === button.body,
      });
      return (
        <button
          className={btnClass}
          key={i}
          // active={active === button.body}
          onClick={() => setActive(button.body)}
        >
          <div> {button.agreement}</div>
          <p> {button.body} </p>
        </button>
      );
    };
  
    return (
        <>
      <section className={styles.sectionContainer}>
        <div className={styles.buttonsContainer}>
          {buttons.map(mapButtons)}
        </div>
      </section>
      </>
    );
  }
  
  export default ButtonGroup;