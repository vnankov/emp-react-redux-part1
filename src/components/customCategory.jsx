import React from 'react';
import PropTypes from 'prop-types';

const CustomCategory = ({category, removeCategory}) => {
    return <li>
        <a href="/#">{category}</a>
        <button onClick={() => removeCategory(category.id) }>Remove</button>
    </li>;
};

CustomCategory.propTypes = {
    category: PropTypes.string,
    removeCategory: PropTypes.func
};

export default CustomCategory;
