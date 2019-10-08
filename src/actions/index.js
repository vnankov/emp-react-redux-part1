import * as categoryConst from '../constants/actionTypes';

/**
 * Add a new paintings category.
 *
 * @param { {id: string|number, name: string} } category
 * @returns {{type, payload: {category: {}}}}
 */
export const addNewPaintingCategory = category => {
    return {
        type: categoryConst.ADD_PAINTING_CATEGORY,
        payload: {
            category
        }
    }
};

/**
 * Remove an existing painting category by a given id.
 *
 * @param { number } categoryId
 * @returns {{type, payload: {categoryId: number}}}
 */
export const removePaintingCategory = categoryId => {
    return {
        type: categoryConst.REMOVE_PAINTING_CATEGORY,
        payload: {
            categoryId
        }
    }
};

/**
 * Add new furniture category.
 * 
 * @param { {id: string|number, name: string} } category
 * @returns {{type, payload: {category: {}}}}
 */
export const addNewFurnitureCategory = category => {
    return {
        type: categoryConst.ADD_FURNITURE_CATEGORY,
        payload: {
            category
        }
    }
};

/**
 * Remove existing furniture category by given id.
 * 
 * @param { number } categoryId
 * @returns {{type, payload: {categoryId: number}}}
 */
export const removeFurnitureCategory = categoryId => {
    return {
        type: categoryConst.REMOVE_FURNITURE_CATEGORY,
        payload: {
            categoryId
        }
    }
};

/**
 * Add new custom category.
 * 
 * @param { name: string } name
 * @returns {{type, payload: {name: {}}}}
 */
export const addNewCustomCategory = name => {
    return {
        type: categoryConst.ADD_CUSTOM_CATEGORY,
        payload: {
            name
        }
    }
}