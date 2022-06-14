import { useRef } from "react";



const NewRecipe = ({handleButtonClick}) => {
    
    return (
        <>
        {/* <form>
            <label>Cake name: </label>
            <input type="text" placeholder="Recipe Name" ref={inputValueRef}></input>
            <br/>
            <label>Cake ingredients: </label>
            <input type="text" placeholder="Recipe ingredients"></input>
            <br/>
            <label>Cake rating: </label>
            <input type="text" placeholder="Recipe rating"></input>
            <br/>
        </form> */}
        <button id="addRecipeButton" onClick={handleButtonClick}>Submit a new recipe</button>
        </>
    );
}

export default NewRecipe;