import { Component } from 'react';
import css from './Contacts.module.css';
import Section from 'components/Section';

class Contacts extends Component {
  render() {
    const { inputName } = this.props;

    if (inputName === '') {
      return null;
    }

    return (
      <Section title='Contacts'>
      <ul className={css.contacts}>
        <li>{inputName}</li>
      </ul>
      </Section>
    );
  }
}

export default Contacts;
