import { combineReducers } from 'redux';

import paintingsCategoriesList from './paintingsCategoriesList';
import furnituresCategoriesList from './furnituresCategoriesList'
import customCategoriesList from './customCategoriesList'

const rootReducer = combineReducers({
    paintingsCategoriesList,
    furnituresCategoriesList,
    customCategoriesList
});

export default rootReducer;
