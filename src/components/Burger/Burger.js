import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient' ;

const burger = (props) => {
    //take the object ingredients and return it as an array
    const transformIngredients = 
        Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
                return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
            });  
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
                {transformIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;