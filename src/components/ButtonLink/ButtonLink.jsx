import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import tobaco from './tobaco.jpg';
import hookahs from './hookahs.jpg';
import coal from './coal.jpg';
import './ButtonLink.scss';

const imageTypeMap = {
  tobaco,
  hookahs,
  coal,
};

// eslint-disable-next-line arrow-body-style
const ButtonLink = ({ href, imageType }) => {
  return (
    <Link to={href}>
      <div className='image' style={{ backgroundImage: `url(${imageTypeMap[imageType]})` }}>
        <div className='filter' />
      </div>
    </Link>
  );
};

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
};

export default ButtonLink;
