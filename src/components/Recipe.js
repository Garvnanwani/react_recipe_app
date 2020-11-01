import React from "react"
import { RecipeContext } from './App'
import IngredientsList from "./IngredientsList"

const Recipe = (props) => {

    const { name, cookTime, servings, instructions, ingredients } = props

    const { handleRecipeDelete } = useContext(RecipeContext);

    return (
        <div className="recipe">
            <div className="recipe__header">
                <h3 className="recipe__title">{name}</h3>
                <div>
                    <button className="btn btn--primary mr-1">Edit</button>
                    <button className="btn btn--danger" onCLick={handleRecipeDelete}>Delete</button>
                </div>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Cook Time</span>
                <span className="recipe__value">{cookTime}</span>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Servings</span>
                <span className="recipe__value">{servings}</span>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Instruction</span>
                <div className="recipe__value recipe__instructions recipe__value--indented">{instructions}</div>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Ingredients</span>
                <div className="recipe__value recipe__value--indented">
                    <IngredientsList ingredients={ingredients} />
                </div>
            </div>
        </div>
    )
}

export default Recipe
