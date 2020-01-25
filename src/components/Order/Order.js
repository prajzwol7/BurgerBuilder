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
			<p>Ingredients:{ingredientsOutput}</p>
			<p>price :<strong> Rs {props.price}</strong>	</p>
		</div>
		);
}
export default Order