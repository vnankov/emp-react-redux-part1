/**
 *
 *
 * @type {{paintingsCategoriesList: [{},{},{},{},{}],
 *         furnituresCategoriesList: [{},{}]}}
 */
const defaultState = {
    paintingsCategoriesList: [
        {id: 1, name: 'landscapes'},
        {id: 2, name: 'portraits'},
        {id: 3, name: 'rivers'},
        {id: 4, name: 'oceans'},
        {id: 5, name: 'mountains'},
    ],
    furnituresCategoriesList: [
        {id: 1, name: 'shelf'},
        {id: 2, name: 'bottle'},
    ],
    customCategoriesList: [

    ]
};

export default defaultState;
