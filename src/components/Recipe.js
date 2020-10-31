import React from 'react'

const Recipe = () => {
    return (
        <>
            <div>
                <h3>Plain Chicken</h3>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div>
                <span>Cook Time</span>
                <span>1:45</span>
            </div>
            <div>
                <span>Servings</span>
                <span>4</span>
            </div>
            <div>
                <span>Instructions</span>
                <div>1.Put Salt on Chicken</div>
                <div>2.Put Chicken in oven</div>
                <div>3.Eat Chicken</div>
            </div>
        </>
    )
}

export default Recipe
