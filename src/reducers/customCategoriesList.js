import {
    ADD_CUSTOM_CATEGORY, REMOVE_CUSTOM_CATEGORY
} from '../constants/actionTypes';

const customCategoriesList = (state = [], action) => {
    switch(action.type) {
        case ADD_CUSTOM_CATEGORY:
            return [
                ...state,
                action.payload.name
            ];
        case REMOVE_CUSTOM_CATEGORY:
            return state.filter((category, index) => category.id !== action.payload.categoryId);
        default:
            return state;
    }
};

export default customCategoriesList;
