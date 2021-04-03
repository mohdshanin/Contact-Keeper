import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  // SET_CONTACT,
  FILTER_TYPE,
} from '../types';

const contactReducer = (state, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === payload.id ? payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
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
    case FILTER_CONTACT: {
      const { contactTypeSearch, searchText } = payload || {};
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const { name, email, phone, type } = contact || {};
          return (
            (name.includes(searchText) ||
              email.includes(searchText) ||
              phone.includes(searchText)) &&
            type.includes(contactTypeSearch)
          );
        }),
      };
    }

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
