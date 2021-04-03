import React, { useRef, useContext, useEffect, useState } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const [contactTypeSearch, setContactTypeSearch] = useState('');
  const [searchText, setSearchText] = useState('');
  const radio = useRef('');

  const { filterContacts, filtered } = contactContext;
  console.log(filtered);

  useEffect(() => {
    filterContacts({ contactTypeSearch, searchText });
  }, [contactTypeSearch, filterContacts, searchText]);

  const onContactTypeChange = (e) => {
    setContactTypeSearch(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Filter contacts..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <h5>Search Type</h5>
      <input
        type="radio"
        ref={radio}
        value=""
        checked={contactTypeSearch === ''}
        onChange={onContactTypeChange}
      />
      All{' '}
      <input
        type="radio"
        value="personal"
        ref={radio}
        checked={contactTypeSearch === 'personal'}
        onChange={onContactTypeChange}
      />
      Personal{' '}
      <input
        type="radio"
        ref={radio}
        value="professional"
        checked={contactTypeSearch === 'professional'}
        onChange={onContactTypeChange}
      />
      Professional
    </form>
  );
};

export default ContactFilter;
