import React from 'react'
import Button from '../../UI/Button/Button'
import Aux from '../../../hoc/Auxo/Auxo'
const OrderSummary=(props)=>{
	const ingredientSummary = Object.keys(props.ingredients)
		.map(igkey =>{
			return <li key={igkey}>
			<span style={{textTransform:'capatilize'}}>{igkey}</span>
			:{props.ingredients[igkey]}
			</li>
		});
	return(
	<Aux>
				<h3>Your Order </h3>
				<p>A delicious burger with following ingredients</p>
				<ul>
					{ingredientSummary}
				</ul>
				<p><strong>Total Price : {props.totalPrice}</strong></p>
				<p>Do you want to continue ??</p>
				<Button btnType='Danger'
						clicked={props.purchaseCancelled}>Cancel</Button>
				<Button btnType='Success'
						clicked={props.purchaseContinued}>Continue</Button>
			</Aux>
		);
}
export default OrderSummary