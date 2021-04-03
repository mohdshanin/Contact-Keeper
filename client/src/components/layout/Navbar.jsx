import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <Link to="/">
          <i className={icon} />
          {title}
        </Link>
      </h1>

      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
export default Navbar;
