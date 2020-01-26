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
	
	
	
	return(
	    <>
			<div className={css.Order}>
			    <div>
					<p>Ingredients:</p>
					<p className={css.bacon}>Bacon : {props.ingredients.bacon}</p>
					<p className={css.bacon}>Salad : {props.ingredients.salad}</p>
					<p className={css.bacon}>Cheese : {props.ingredients.cheese}</p>
					<p className={css.bacon}>Tomato : {props.ingredients.tomato}</p>
					<p className={css.bacon}>Mayonaise : {props.ingredients.mayonaise}</p>
					<p>Price :<strong> Rs {props.price}</strong>	</p>
				</div>
				 <div>
					<p>Information:</p>
					<p className={css.bacon}>Name : {props.orderData.name}</p>

					<p className={css.bacon}>Email: {props.orderData.email}</p>
					<p className={css.bacon}>Country : {props.orderData.country}</p>
					<p className={css.bacon}>Contact : {props.orderData.Contact}</p>
					
					
				</div>
			</div>
		</>
		);
}
export default Order

/*



*/