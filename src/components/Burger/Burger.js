import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient' ;

const burger = (props) => {
    //take the object ingredients and return it as an array
    let transformIngredients = 
        Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
                return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
            });  
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if(transformIngredients.length === 0){
        transformIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
                {transformIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;