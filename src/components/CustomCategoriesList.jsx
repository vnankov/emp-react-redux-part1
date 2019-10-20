import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputField from './InputField';
import CustomCategory from './customCategory';
import { removeCustomCategory } from '../actions';


const CustomCategoriesList = ({customCategories, removeCategory}) => {
    // const addNewCategory = () => {
    //     const dummyCategories = ['chair', 'table', 'puzzle', 'mobile', 'teddy bear', 'block', 'baby doll', 'keyboard'];
    //     const rand = dummyCategories[Math.floor(Math.random() * dummyCategories.length)];

    //     const newCategory = {
    //         id: furnitureCategories.length + 1,
    //         name: rand
    //     };

    //     addCategory(newCategory);
    // };

    return <React.Fragment>
        <ul>
            {
                customCategories.map((category, index) =>
                    <CustomCategory key={index}
                                    category={category}
                                    id={index}
                                    removeCategory={removeCategory}
                    />

                )
            }
        </ul>
        <InputField />
    </React.Fragment>;
};

CustomCategoriesList.defaultProps = {
    customCategories: []
};

CustomCategoriesList.propTypes = {
    customCategories: PropTypes.array,
    removeCategory: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        customCategories: state.customCategoriesList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removeCategory: categoryId => dispatch(removeCustomCategory(categoryId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomCategoriesList);
