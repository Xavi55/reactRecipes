import React from 'react';
//functional 
const Form = (props) =>
{
    return(
    <form onSubmit={props.getRecipe} style={{marginBottom:'2rem'}}>
        <input className='form__input' placeholder='Food' type='text' name='recipeName'/>
        <br/>
        <button className='form__button'>Search</button>
    </form>
    );
}
export default Form;