import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import Recipes from './components/Recipes';

const key ='4f65b23325ddf386f9574a2d21452116';
class App extends Component {
state=
{
  recipes:[]
};
//no more constructor after React 16+

getRecipe = async(e) =>
{
  let food = e.target.elements.recipeName.value;
  e.preventDefault();
  const apiCall = await fetch(`https://www.food2fork.com/api/search?key=${key}&q=${food}&count=10`);
  const data = await apiCall.json();
  this.setState({recipes:data.recipes});
  console.log(this.state.recipes);
}

componentDidUpdate=()=>//after changing state is touched
{
  const recipes = JSON.stringify(this.state.recipes);
  localStorage.setItem('recipes',recipes);
}

componentDidMount=()=>//called if page is refreshed ... loaded again
{
  this.setState({recipes:JSON.parse(localStorage.getItem('recipes'))});
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;