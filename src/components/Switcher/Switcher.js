import React from 'react';
import Link from 'gatsby-link';

import classNames from 'classnames';
import styles from './Switcher.module.scss';


class Switcher extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      active: false
    };

  }

  render() {

    let sizingProp = this.props.sizing;
    let sizing = styles.standard;

    if (sizingProp == 'small' ) {
      sizing = styles.small;
    } 
    else if (sizingProp == 'large') {
      sizing = styles.large;
    }
    else {
      sizing = styles.standard;
    }


    let switcherBodyClasses = classNames(
      sizing,
      this.props.theme,
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
    if (!this.props.disabled) {
      const currentState = this.state.active;
      this.setState({ active: !currentState });
    }
  };

}

export default Switcher;
