import React from 'react'
import css from './Order.css'
const Order=(props)=>{
	const ingredients=[];
	for(let ingredientsName in props.ingredients){
		ingredients.push({
			name:ingredientsName,
			amount:props.ingredients[ingredientsName]
			
		})
		
	}
	const ingredientsOutput=ingredients.map(ig=>{
		return <span
			style={{
				textTransform:'capitalize',
				display:'inline-block',
				margin:'0 8px',
				border:'1px solid #ccc',
				padding:'5px'
			}}
		 key={ig.name}>{ig.name}({ig.amount})</span>
	})
	return(
		<div className={css.Order}>
			<p>Ingredients:</p>
			<p className={css.bacon}>Bacon : {props.ingredients.bacon}</p>
			<p className={css.bacon}>Salad : {props.ingredients.salad}</p>
			<p className={css.bacon}>Cheese : {props.ingredients.cheese}</p>
			<p className={css.bacon}>Tomato : {props.ingredients.tomato}</p>
			<p className={css.bacon}>Mayonaise : {props.ingredients.mayonaise}</p>
			<p>price :<strong> Rs {props.price}</strong>	</p>
		</div>
		);
}
export default Order