import React from 'react';
import PropTypes from 'prop-types';

const CustomCategory = ({category}) => {
    return <li>
        <a href="/#">{category.name}</a>
        {/* <button onClick={() => removeCategory(category.id) }>Remove</button> */}
    </li>;
};

CustomCategory.propTypes = {
    category: PropTypes.shape({
        // id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        name: PropTypes.string
    }),
    removeCategory: PropTypes.func
};

export default CustomCategory;
