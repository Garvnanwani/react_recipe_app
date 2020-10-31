import React from 'react'
import Ingredient from './Ingredient'

const IngredientsList = ({ ingredients }) => {

    const ingredientsElement = ingredients.map(ingredient => {
        return <Ingredient key={ingredient.id} {...ingredient} />
    })

    return (
        <div>
            {ingredientsElement}
        </div>
    )
}

export default IngredientsList
