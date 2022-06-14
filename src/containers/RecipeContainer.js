import { useState, useRef } from "react";
import NewRecipe from "../components/NewRecipe";
import RecipeList from "../components/RecipeList";



const RecipeContainer = () => {

    const [recipes, setRecipes] = useState([
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
      ])
      const inputValueRefCakeName = useRef();
      const inputValueRefCakeIngredients = useRef();
      const inputValueRefCakeRating = useRef();
      


      const addNewRecipe = () => {
        console.log("Added new recipe");
        // const newRecipe = {
        //     cakeName: "Chocolate Cake",
        //     ingredients: ["chocolate", "flour", "eggs"],
        //     rating: 9
        // }
        const newCakeName = inputValueRefCakeName.current.value;
        const newIngredients = inputValueRefCakeIngredients.current.value.split(',');
        const newRating = inputValueRefCakeRating.current.value;
        // const updatedRecipes = [...recipes, newRecipe];
        setRecipes(prevRecipes => [...prevRecipes, {cakeName: newCakeName, ingredients: newIngredients, rating: newRating}]);
      }

    return (
        <>
        <h1>Recipes</h1>
        <RecipeList recipes = {recipes}/>
        <form>
            <label>Cake name: </label>
            <input type="text" placeholder="Recipe Name" ref={inputValueRefCakeName}></input>
            <br/>
            <label>Cake ingredients: </label>
            <input type="text" placeholder="Recipe ingredients" ref={inputValueRefCakeIngredients}></input>
            <br/>
            <label>Cake rating: </label>
            <input type="text" placeholder="Recipe rating" ref={inputValueRefCakeRating}></input>
            <br/>
        </form>
        <NewRecipe handleButtonClick={addNewRecipe} />
       
        </>
    )
}

export default RecipeContainer;