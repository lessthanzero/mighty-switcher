import React from 'react';
import Link from 'gatsby-link';

import classNames from 'classnames';
import styles from './Switcher.module.scss';


class Switcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };

  }

  render() {

    const sizingProp = this.props.sizing;
    const themeProp = this.props.theme;
    let sizing = styles.standard;
    let theme = styles.default;

    if (sizingProp == 'small' ) {
      sizing = styles.small;
    } 
    else if (sizingProp == 'large') {
      sizing = styles.large;
    }
    else {
      sizing = styles.standard;
    }

    if (themeProp == 'auto' ) {
      theme = styles.auto;
    }
    else if (themeProp == 'services') {
      theme = styles.services;
    }
    else if (themeProp == 'real-estate') {
      theme = styles.real__estate;
    }
    else if (themeProp == 'jobs') {
      theme = styles.jobs;
    }
    else {
      theme = styles.default;
    }

    let switcherBodyClasses = classNames(
      sizing,
      theme,
      {
        [styles.switcher__body]: true,
        [styles.is__active]: this.state.active,
        [styles.is__disabled]: this.props.disabled
      }
    );

    return (

      <fieldset className={styles.switcher}>
        <div className={styles.inner}>
          <label className={styles.text__label}>
            {this.props.labelText}
          </label>

          <div className={styles.switcher__holder}>
            
            <label>
              <input className={styles.shadow__switcher} type={'checkbox'} name={'allow_something'} value={'1'} />
              <span className={switcherBodyClasses} onClick={this.toggleActivity.bind(this)}></span>
            </label>

          </div>

        </div>
      </fieldset>    

    )
  }

  toggleActivity() {
    // if (!this.state.disabled) {
      const currentState = this.state.active;
      this.setState({ active: !currentState });
    // }
  };

}

export default Switcher;
