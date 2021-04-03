import React, { useContext, useState } from 'react';
import ContactContext from '../../context/contact/contactContext';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  const [show, setShow] = useState(true);

  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };

  return (
    <div
      className="card bg-light"
      onMouseOver={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <h3 className="text-primary text-left">
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={`badge ${
            type === 'professional' ? 'bg-primary' : 'bg-light'
          }`}
        >
          {type.toUpperCase(0)}
        </span>
      </h3>
      {phone ? (
        <>
          <div className="list">
            <i className="fas fa-phone"></i> {phone}
          </div>
        </>
      ) : null}
      <div>
        {show ? (
          <>
            {email && (
              <div className="list">
                <i className="fas fa-envelope-open"></i> {email}
              </div>
            )}
            <div className="cent">
              <button
                className="right btn btn-dark btn-sm"
                onClick={() => setCurrent(contact)}
              >
                Edit
              </button>
              <button
                className="right btn btn-danger btn-sm"
                onClick={onDelete}
              >
                Delete
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default ContactItem;
