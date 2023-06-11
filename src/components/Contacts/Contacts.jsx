import React, { Component } from 'react';
import css from './Contacts.module.css';
import Section from 'components/Section';

class Contacts extends Component {
  render() {
    const { inputName, inputNumber } = this.props;

    if (inputName === '') {
      return null;
    }

    return (
      <Section title="Contacts">
        <ul className={css.contacts}>
          <li>
            {inputName} : {inputNumber}
          </li>
        </ul>
      </Section>
    );
  }
}

export default Contacts;
