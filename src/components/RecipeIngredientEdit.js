import React from "react"

const RecipeIngredientEdit = ({ ingredient, handleIngredientChange }) => {
  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
  }

  return (
    <>
      <input
        value={ingredient.name}
        onInput={(e) => handleChange({ name: e.target.value })}
        className="recipe-edit__input"
        type="text"
      />
      <input
        value={ingredient.amount}
        className="recipe-edit__input"
        type="text"
        onInput={(e) => handleChange({ amount: e.target.value })}
      />
      <button className="btn btn--danger"> &times;</button>
    </>
  )
}

export default RecipeIngredientEdit
