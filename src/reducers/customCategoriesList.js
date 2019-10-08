import {
    ADD_CUSTOM_CATEGORY
} from '../constants/actionTypes';

const customCategoriesList = (state = [], action) => {
    switch(action.type) {
        case ADD_CUSTOM_CATEGORY:
            return [
                ...state,
                action.payload.name
            ];
        default:
            return state;
    }
};

export default customCategoriesList;
