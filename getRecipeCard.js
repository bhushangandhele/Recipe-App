export const getRecipeCard = (recipes,parentElement,createElement) =>{
    for(let recipe of recipes){

        // Parent Container
        const cardContainer = createElement("div");
        cardContainer.classList.add("container");

        //Image Container
        const image = createElement("img");
        image.setAttribute( "src" , recipe.image);
        image.setAttribute( "alt" , recipe.name);

        
        //Container Text
        const containerText = createElement("div");
        containerText.classList.add("container__text");

        //Recipe Name
        const recipeName = createElement("h1");
        recipeName.innerText=recipe.name;

        //Timing Container
        const timingContainer = createElement("div");
        timingContainer.classList.add("container__text__timing");


        //Preparing Time 
        const textContainer1 = createElement("div");
        textContainer1.classList.add("container__text__timing_time");

        const timeText1 = createElement("h2");
        timeText1.innerText="Prepare Time";

        const time1 = createElement("p");
        time1.innerText= recipe.prepTimeMinutes + " min";

        timeText1.appendChild(time1);
        textContainer1.appendChild(timeText1);


        //Cooking Time 
        const textContainer2 = createElement("div");
        textContainer2.classList.add("container__text__timing_time");

        const timeText2 = createElement("h2");
        timeText2.innerText="Cooking Time";

        const time2 = createElement("p");
        time2.innerText=recipe.prepTimeMinutes + " min";

        timeText2.appendChild(time2);
        textContainer2.appendChild(timeText2);

        timingContainer.appendChild(textContainer1);
        timingContainer.appendChild(textContainer2);


        //Button Container
        const button = createElement("button");
        button.classList.add("btn");
        button.id=recipe.id;
        button.innerText = "View Recipe";

        const arrow = createElement("i");
        arrow.classList.add("fa","fa-arrow-right");

        button.appendChild(arrow);

        containerText.appendChild(recipeName);
        containerText.appendChild(timingContainer);
        containerText.appendChild(button);


        cardContainer.appendChild(image);
        cardContainer.appendChild(containerText);

        parentElement.appendChild(cardContainer);
    }
};