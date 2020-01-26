import React from 'react'
import css from './Burger.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const Burger =(props)=>{
	
	let sum = 0;
	for (let [key, value] of Object.entries(props.ingredients)) {
       sum += value
	
	}

	let transformedIngredients=Object.keys(props.ingredients)
	.map(igKey=>{
		
		return [...Array(props.ingredients[igKey])].map((_,i)=>{
			
			return <BurgerIngredient  totalCount={sum} key={igKey + i} type={igKey}/>
		});
	})
	.reduce((arr,el)=>{
		return arr.concat(el)
	},[]);


	if(transformedIngredients.length===0){
		transformedIngredients=<p>Enter the ingredients !!</p>
	}
		return(
		<div className={css.Burger}>
			<BurgerIngredient type='bread-top'/>
			{transformedIngredients}
			<BurgerIngredient type='bread-bottom'/>

		</div>

		)
}
export default Burger