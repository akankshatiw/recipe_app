const searchbox = document.querySelector(".searchbox");
const searchbutton = document.querySelector(".searchbutton");
const recipescontainer = document.querySelector(".recipescontainer");

// function to get recipes 
const fetchrecipes = async (query) => {
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  const response = await data.json();

  recipescontainer.innerHTML = ""; // clear previous results

  if (!response.meals) {
    recipescontainer.innerHTML = "<h2>No recipes found</h2>";
    return;
  }

  response.meals.forEach(element => {
    const recipediv = document.createElement("div");
    recipediv.classList.add("recipe");
    recipediv.innerHTML = ` 
      <img src="${element.strMealThumb}" alt="${element.strMeal}">
      <h3>${element.strMeal}</h3>
       <p><span>${element.strArea}</span> Dish</p>
       <p>Belongs to <span>${element.strCategory}</span> Category</p>
       `
       const button = document.createElement('button');
       button.textContent="view Recipe";
       recipediv.appendChild(button); 

       button.addEventListener("click",()=>{
            openRecipepopup();
       })

    recipescontainer.appendChild(recipediv);
  });
};

// search button click
searchbutton.addEventListener("click", (e) => {
  e.preventDefault();
  const searchinput = searchbox.value.trim();
  if (searchinput) {
    fetchrecipes(searchinput);
  }
});
