
import {getRecipeCard} from "./getRecipeCard.js";

const parentElement = document.querySelector(".main");
const searchElement = document.querySelector(".input");

const URL = 'https://raw.githubusercontent.com/bhushangandhele/Recipe-App/main/recipe_data.json';

const createElement = (element) => document.createElement(element);

const getRecipes = async (URL) => {
    try{
        const {data} = await axios.get(URL);
        return data.recipes;
    }catch(err){
        console.log(err);
    }
}

const recipes = await getRecipes(URL);


//Search Container

const recipe_name = [];
for(let recipe of recipes){
    recipe_name.push(recipe.name.toLowerCase());
}

function check(event){
    const search_value = (event.target.value).toLowerCase();
    const rec = recipes.filter((element)=>{
        return element.name.toLowerCase().includes(search_value);
    });
    parentElement.innerHTML = "";
    getRecipeCard(rec, parentElement , createElement);
    recipeButton();
}
searchElement.addEventListener("keyup",check);





//Get Recipe Card
getRecipeCard(recipes,parentElement,createElement);


//Adding EventListener to all buttons

recipeButton();


//Create Function for adding eventListener to buttons because of after reloading the page
function recipeButton(){
const viewRecipeBtn= document.querySelectorAll(".btn");

function test(event){
    for(let recipe of recipes){
        if(recipe.id==event.target.id){
            localStorage.setItem("Recipe",JSON.stringify(recipe));
            console.log(recipe);
            window.location.href= "./singleRecipe.html";
        }
    }
}

viewRecipeBtn.forEach(function ( button ) {
    button.addEventListener("click",test);
});
}