import React from 'react';
import Link from 'gatsby-link';

import styles from './Switcher.module.scss';

const Switcher = (props) => (
  <fieldset className={styles.switcher}>
    <div className={styles.inner}>
      <label className={styles.text__label}>
        {props.labelText}
      </label>

      <div className={styles.switcher__holder}>
        
        <label>
          <input className={styles.shadow__switcher} type={'checkbox'} name={'allow_something'} value={'1'} />
          <span className={styles.switcher__body}></span>
        </label>

      </div>

    </div>
  </fieldset>
);

export default Switcher;