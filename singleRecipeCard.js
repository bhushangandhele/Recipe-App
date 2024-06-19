
    const singleRecipe=JSON.parse(localStorage.getItem("Recipe"));
    console.log(singleRecipe);
    const recipe =singleRecipe;

    const parentElement = document.querySelector(".main");

    const createElement = (element) => document.createElement(element);


    // Parent Container
     const cardContainer = createElement("div");
     cardContainer.classList.add("container");

     //Image Container
     const image = createElement("img");
     image.classList.add("img");
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


     containerText.appendChild(recipeName);
     containerText.appendChild(timingContainer);


     cardContainer.appendChild(image);
     cardContainer.appendChild(containerText);

     parentElement.appendChild(cardContainer);


     //Ingredients
     const detail_container = createElement("div");
     detail_container.classList.add("detail_container");

    const ing_element = createElement("div");
    ing_element.classList.add("ing_element");
    const ing =createElement("p");
    ing.classList.add("ing-title");
    ing.innerText="Ingredients : ";

    ing_element.appendChild(ing);

    for(let str of recipe.ingredients){
    const ingredients = createElement("p");
    ingredients.classList.add("ingredients");
    ingredients.innerText ="-" + str;
    ing_element.appendChild(ingredients);
    }

    // Instruction
    const inst_element = createElement("Div");
    inst_element.classList.add("inst_element");
    const inst = createElement("p");
    inst.classList.add("ing-title");
    inst.innerText="Instructions : ";

    inst_element.appendChild(inst);

    for(let inn of recipe.instructions){
    const instruction = createElement("p");
    instruction.classList.add("instrunctions");
    instruction.innerText =" - " + inn;
    inst_element.appendChild(instruction);
    }


    detail_container.appendChild(ing_element);
    detail_container.appendChild(inst_element);

    parentElement.appendChild(detail_container);
