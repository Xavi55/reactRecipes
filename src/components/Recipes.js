import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = (props)=>
(
    <div className='container'>
        <div className='row'>
        {
            props.recipes.map((recipe,i)=>
            {
            return(
            <div className='col-md-6 col-lg-4' key={i} style={{marginBottom:'2rem'}}>
                <div className='recipes__box'>
                    <img className='recipe__box-img' 
                        src={recipe.image_url} 
                        alt={recipe.title}
                    />
                    <div className='recipes__text'>
                        <h5 className='recipes__title'>
                            {recipe.title.length<20
                            ? `${recipe.title}`
                            : `${recipe.title.substring(0,24)}...`
                        }
                        </h5>
                        <p className='recipes__subtitle'>Author:
                            <span>{recipe.publisher}</span>
                        </p>
                    </div>
                    <button className='recipe_buttons'>
                        <Link 
                            to={{pathname:`/recipe/${recipe.recipe_id}`,
                            state:{recipe:recipe}
                            }}>View recipe</Link>
                    </button>
                </div>
            </div>);
            })
        }
        </div>
    </div>
)

export default Recipes;

/* 

 {
         
        }*/