import React from 'react';
import RecipeList from './RecipeList';

function App() {
  return (
    <RecipeList recipes={sampleRecipes} />
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1.Put Salt on Chicken \n 2.Put Chicken in oven \n 3.Eat Chicken'
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1.Put parprika on Pork \n 2.Put Pork in oven \n 3.Eat Pork'
  },
]

export default App;
