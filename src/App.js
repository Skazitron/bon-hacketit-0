import React, { useEffect, useState } from "react"
import { Button, FormGroup, FormControl } from "react-bootstrap"
import './App.css'
import Recipe from "./Recipe"

const App = () => {

    const APP_ID = "06c6e0f7"
    const APP_KEY = "8a5da21d8872761f4fc638148b64f4f3"

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("chicken")

    useEffect(() => {
        getRecipes()
        console.log(recipes)
    }, [query])

    const updateSearch = e => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault()
        setQuery(search)
    }

    const getRecipes = async () => {

        fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            .then(response => response.json())
            .then(data => setRecipes(data.hits))
    }
    return (

        <div className="App">
            <form onSubmit={getSearch} onChange={updateSearch} className="search-form">
                <input value={search} placeholder="E.g. chicken" type="text" className="search-bar"></input>
                <button className='search-button' type="submit">
                    Search
                </button>
            </form>
            <div className="Recipes">
                {recipes.map(recipe => (
                    <Recipe key={recipe.recipe.title} title={recipe.recipe.label} calories={Math.floor(recipe.recipe.calories)}
                        image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
                ))}
            </div>
        </div>
    )
}

export default App