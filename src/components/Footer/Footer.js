import React from 'react';
import Link from 'gatsby-link';

import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.inner}>
      <div className={'columns'}>
      	<div className={'column has-background-grey-darker has-text-centered'}>
      		<p><a href='' className={'has-text-white'}>← Поля ввода</a></p>
      	</div>
      	<div className={'column has-background-grey-darker has-text-centered'}>
	      	<p><a href='' className={'has-text-white'}>Выпадайка →</a></p>
      	</div>
      </div>
    </div>
  </div>
);

export default Footer;