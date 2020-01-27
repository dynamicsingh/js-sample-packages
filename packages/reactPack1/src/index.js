import React from 'react';
import PropTypes from 'prop-types';

const reactPack1 = ({firstName, lastName, age}) => {
   return (<div>{firstName} : {lastName} : {age}</div>);
};

reactPack1.defaultProps = {
    lastName: ""
};

reactPack1.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string,
    age: PropTypes.number.isRequired
};

export default reactPack1;
