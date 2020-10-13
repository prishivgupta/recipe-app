import React  from 'react';

const recipe = (props) => {

    return (

        <div>

            <p>Title: {props.name}</p>

            <p>Calories: {props.calories}</p>

            <img src={props.image} alt=""></img>

        </div>

    );

}

export default recipe;