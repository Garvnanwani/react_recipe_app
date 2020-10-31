import React from "react"
import IngredientsList from "./IngredientsList"

const Recipe = (props) => {

    const { name, cookTime, servings, instructions, ingredients } = props

    return (
        <>
            <div>
                <h3>{name}</h3>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div>
                <span>Cook Time</span>
                <span>{cookTime}</span>
            </div>
            <div>
                <span>Servings</span>
                <span>{servings}</span>
            </div>
            <div>
                <span>Instruction</span>
                <div>{instructions}</div>
            </div>
            <div>
                <span>Ingredients</span>
                <div>
                    <IngredientsList ingredients={ingredients} />
                </div>
            </div>
        </>
    )
}

export default Recipe
