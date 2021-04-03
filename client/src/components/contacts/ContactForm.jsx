import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });
  const { name, email, phone, type } = contact;
  const Change = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const Submit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else if (!phone && !name) {
      alert('At least, Please Enter Name & Phone Number');
    } else if (!name) {
      alert('Please Enter Name also');
    } else if (!phone) {
      !phone && alert('Please Add a Phone Number also');
    } else {
      updateContact(contact);
    }

    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={Submit}>
      <h2 className="text-primary">
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={Change}
      />
      <input
        type="email"
        name="email"
        placeholder="Email(optional)"
        value={email}
        onChange={Change}
      />
      <input
        type="number"
        name="phone"
        placeholder="Phone"
        value={phone}
        onChange={Change}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === 'personal'}
        onChange={Change}
      />
      Personal{' '}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === 'professional'}
        onChange={Change}
      />
      Professional
      <div>
        <input
          type="submit"
          value={current ? 'Update Contact' : 'Add Contact'}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <button className="btn btn-danger btn-block" onClick={clearAll}>
          Clear/Cancel
        </button>
      )}
    </form>
  );
};

export default ContactForm;
