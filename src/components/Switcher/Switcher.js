import React from 'react';
import Link from 'gatsby-link';

import classNames from 'classnames';
import styles from './Switcher.module.scss';


class Switcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelText: 'Show me what you got!', 
      active: false
    };
  }

  render() {

    let switcherBodyClasses = classNames({
      [styles.switcher__body]: true,
      [styles.is__active]: this.state.active
    });

    return (


      <fieldset className={styles.switcher}>
        <div className={styles.inner}>
          <label className={styles.text__label}>
            {this.state.labelText}
          </label>

          <div className={styles.switcher__holder}>
            
            <label>
              <input className={styles.shadow__switcher} type={'checkbox'} name={'allow_something'} value={'1'} />
              <span className={switcherBodyClasses} onClick={this.toggleClass.bind(this)}></span>
            </label>

          </div>

        </div>
      </fieldset>    

    )
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

}

export default Switcher;
