import React from 'react';
import { Link } from 'react-router-dom';
class Recipe extends React.Component
{
    state={
        currRecipe:[]
    }
componentDidMount=()=>
{
    //console.log(this.props);
    this.setState({currRecipe:this.props.location.state.recipe});
}

    render(){
        const recipe = this.state.currRecipe;
    return (
    
    
    <div className='container'>
    {
        this.state.currRecipe.length!==0
        ?
        <div className='active-recipe'>
            <img className='active-recipe__img' src={recipe.image_url} alt={recipe.title}/>
            <h3 className='active-recipe__title'>{recipe.title}</h3>
            <h4 className='active-recipe__publisher'>
            Author:<span> {recipe.publisher}</span>
            </h4>
            <p className='active-recipe__website'>
            Source:<span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
            </p>
            <button className='recipe_buttons'>
                <Link to=''>&laquo; Go Back</Link>
            </button>
        </div>
        :
        <h1>Loading</h1>
    }    
    </div>
    );}
}
export default Recipe;