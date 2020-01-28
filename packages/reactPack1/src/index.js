import React from 'react';
import PropTypes from 'prop-types';

const reactPack1 = ({firstName, lastName, age}) => {
   return (<div>{firstName} : {lastName} : {age}</div>);
};

const defaultProps = {
    lastName: ""
};

const propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string,
    age: PropTypes.number.isRequired
};

reactPack1.defaultProps = defaultProps;

reactPack1.propTypes = propTypes;

export {reactPack1, defaultProps, propTypes};
