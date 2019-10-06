import React from 'react';
import './App.css';

import PaintingCategoriesList from './components/PaintingCategoriesList';
import PaintingFurnituresList from './components/PaintingFurnituresList';

function App() {
    return (
        <div className="app">
            <div className="category">
                <h1>Painting Categorie List</h1>
                <PaintingCategoriesList />
            </div>
            <div className="category">
            <h1>Furniture Categorie List</h1>
                <PaintingFurnituresList />
            </div>
        </div>
    );
}

export default App;
