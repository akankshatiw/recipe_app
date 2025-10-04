const serachbox = document.querySelector('.searchbox');
const searchbutton = document.querySelector('.searchbutton');
const recipescontainer = document.querySelector('.recipescontainer');
//function to get recipies 
const fetchrecipes=  async(querry)=>{
 const data= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${querry}`);
 const response =  await data.json;
 console.log(response);
}
searchbutton.addEventListener(click , (e)=>{
      e.preventdefault();
      const searchinput =serachbox.ariaValueMax.trim();
      fetchrecipes(searchinput);
     // console.log("button clicked");
})