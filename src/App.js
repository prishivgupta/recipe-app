import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './Recipes/Recipes';

const App = () => {

  const API_KEY = '01e4b5c869f38ef08ad3409b54369c87';
  const ID = '0b1995ed';

  const [recipes, setRecipes] = useState([]);

  useEffect( () => {

    getRecipes();

  }, [] );

  const getRecipes = async () => {

    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${ID}&app_key=${API_KEY}`);

    const data = await response.json();

    console.log(data.hits);

    setRecipes(data.hits);

  }

  const recipe = (

    recipes.map((recipe) => (

      <Recipe name={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} key={recipe.recipe.label}/>

    ))

  )

  


  return (

    <div className="App">
      
      <form>

        <input type="text"/>

        <button type="submit"> Search </button>

      </form>

      {recipe}
      
    </div>

  );

}

export default App;
