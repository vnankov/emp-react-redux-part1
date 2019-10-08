import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputField from './InputField';
import CustomCategory from './customCategory';

// import { addNewFurnitureCategory, removeFurnitureCategory } from '../actions';

const CustomCategoriesList = ({customCategories, addCategory, removeCategory}) => {
    // const addNewCategory = () => {
    //     const dummyCategories = ['chair', 'table', 'puzzle', 'mobile', 'teddy bear', 'block', 'baby doll', 'keyboard'];
    //     const rand = dummyCategories[Math.floor(Math.random() * dummyCategories.length)];

    //     const newCategory = {
    //         id: furnitureCategories.length + 1,
    //         name: rand
    //     };

    //     addCategory(newCategory);
    // };

    // const removeExistingCategory = categoryId => removeCategory(categoryId);
    return <React.Fragment>
        <ul>
            {
                customCategories.map((category, index) =>
                    <CustomCategory key={index}
                                      category={category}
                    />

                )
            }
        </ul>
        <InputField />
        {/* <button className="add-btn" onClick={addNewCategory}>Add category</button> */}
    </React.Fragment>;
};

CustomCategoriesList.defaultProps = {
    customCategories: []
};

CustomCategoriesList.propTypes = {
    customCategories: PropTypes.array,
    addCategory: PropTypes.func,
    removeCategory: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        customCategories: state.customCategoriesList
    }
};

// const mapDispatchToProps = dispatch => {
//     return {
//         addCategory: category => dispatch(addNewFurnitureCategory(category)),
//         removeCategory: categoryId => dispatch(removeFurnitureCategory(categoryId))
//     }
// };

export default connect(mapStateToProps, null)(CustomCategoriesList);
