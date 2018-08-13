import React from 'react';
import Link from 'gatsby-link';

import styles from './Switcher.module.scss';

class Switcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {labelText: 'Show me what you\'ve got!', isOn: false}
  }

  render() {
    return (

      <fieldset className={styles.switcher} isOn={this.state.isOn} onClick={this.handleClick.bind(this)}>
        <div className={styles.inner}>
          <label className={styles.text__label}>
            {this.state.labelText}
          </label>

          <div className={styles.switcher__holder}>
            
            <label>
              <input className={styles.shadow__switcher} type={'checkbox'} name={'allow_something'} value={'1'} />
              <span className={styles.switcher__body}></span>
            </label>

          </div>

        </div>
      </fieldset>    

    )
  }

  handleClick() {
    this.setState = {
      isOn: true
    }
  }

}

export default Switcher;
