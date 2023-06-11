import React, { Component } from 'react';
import css from './Contacts.module.css';
import Section from 'components/Section';

class Contacts extends Component {
  render() {
    const { contacts } = this.props;

    if (contacts.length === 0) {
      return null;
    }

    return (
      <Section title="Contacts">
        <ul className={css.contacts}>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} : {contact.number}
            </li>
          ))}
        </ul>
      </Section>
    );
  }
}

export default Contacts;
