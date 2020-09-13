import React from "react"
import style from './recipe.module.css'
import {Image} from "react-bootstrap"

function Recipe({ title, calories, image, ingredients}) {
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <div className={style.darkGreen}>
            <p className={style.calories}>Calories: {calories}</p>
            <ul><span className={style.ingredients}>Ingredients:</span>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul></div>
            <Image className={style.image} src={image} alt="" thumbnail/>
            
        </div>
    )
}

export default Recipe