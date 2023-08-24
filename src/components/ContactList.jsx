import React, { useState, useEffect } from 'react';
import ContactCard from './ContactCard';
import { cards } from './Card.module.css';
import styles from './ContactList.module.css';

function ContactList({ numbers }) {
  const URL = `https://randomuser.me/api/?results=${numbers}`;
  const [contacts, setContacts] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setContacts(data.results);
    } catch (error) {
      console.error(error);
    }
  }

  const filteredContacts = contacts.filter((contact) =>
    contact.name.first.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  return (
    <div>
      <input
        className={styles.inputSearch}
        type="text"
        placeholder="Filtrar por nombre..."
        value={filterText}
        onChange={handleFilterChange}
      />
      <ul className={cards}>
        {filteredContacts.map((contact, index) => {
          const { picture, name, phone, email } = contact;
          return (
            <ContactCard
              key={index}
              src={picture.large}
              name={name.first}
              phone={phone}
              email={email}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
