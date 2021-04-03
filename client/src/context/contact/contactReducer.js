import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  // SET_CONTACT,
} from '../types';

const contactReducer = (state, action) => {
  const { type, payload } = action || {};
  const { contacts } = state || {};

  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...contacts, payload],
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: contacts.map((contact) =>
          contact.id === payload.id ? payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: contacts.filter((contact) => contact.id !== payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_CONTACT:
      return {
        ...state,
        filtered: contacts.filter((contact) => {
          const { name, email, phone, type } = contact || {};
          const regex = new RegExp(`${action.payload}`, 'gi');
          return (
            name.match(regex) ||
            email.match(regex) ||
            phone.match(regex) ||
            type.match(regex)
          );
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};

export default contactReducer;
