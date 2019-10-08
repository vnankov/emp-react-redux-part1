import React from 'react';
import './App.css';

import PaintingCategoriesList from './components/PaintingCategoriesList';
import PaintingFurnituresList from './components/PaintingFurnituresList';
import CustomCategoriesList from './components/CustomCategoriesList';

function App() {
    return (
        <div className="app">
            <div className="category">
                <h1>Painting Category List</h1>
                <PaintingCategoriesList />
            </div>
            <div className="category">
                <h1>Furniture Category List</h1>
                <PaintingFurnituresList />
            </div>
            <div className="category">
                <h1>Custom Category List</h1>
                <CustomCategoriesList />
            </div>
        </div>
    );
}

export default App;
