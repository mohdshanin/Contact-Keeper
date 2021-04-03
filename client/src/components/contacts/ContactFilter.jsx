import React, { useRef, useContext, useEffect, useState } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const [check, setCheck] = useState('');
  const contactContext = useContext(ContactContext);
  const text = useRef('');
  const radio = useRef('');

  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
      filterContacts({ check });
    }
  }, [filterContacts, filtered, check]);

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
      setCheck(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter contacts..."
        onChange={onChange}
      />
      <h5>Search Type</h5>
      <input
        type="radio"
        ref={radio}
        value=""
        checked={check === ''}
        onChange={onChange}
      />
      All{' '}
      <input
        type="radio"
        value="personal"
        ref={radio}
        checked={check === 'personal'}
        onChange={onChange}
      />
      Personal{' '}
      <input
        type="radio"
        ref={radio}
        value="professional"
        checked={check === 'professional'}
        onChange={onChange}
      />
      Professional
    </form>
  );
};

export default ContactFilter;
