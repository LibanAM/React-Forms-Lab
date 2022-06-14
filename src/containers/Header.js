import { useRef } from "react";





const Header = () => {

    // document.getElementById("button").addEventListener('click', filterBySearch);

    // let input = document.getElementById("search")
    // console.log(input); 

    // document.querySelector("#search").addEventListener('submit', filterBySearch);

    // const filterBySearch = () => {
    //     // let input = document.getElementById("search").value;
    //     console.log("Hello");
    // }

    const inputValueRefSearch = useRef();


    const filterBySearch = () => {
        const searchValue = inputValueRefSearch.current.value;
        console.log(searchValue);
    }

    return (
        <div className="header" id="home">
            <a href="#home"><h1>RECIPES!!</h1></a>
            <nav id="nav-bar">
                <ul>
                    <li><a href="#recipes">RECIPES</a></li>
                    <li><a href="#form">ADD A NEW RECIPE</a></li>
                </ul>
                <input placeholder="SEARCH" type="text" ref={inputValueRefSearch}></input>
                <button id="button" onClick={filterBySearch}>SEARCH</button>
            </nav>
        </div>

    )
}

export default Header;