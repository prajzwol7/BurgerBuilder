import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import css from './CheckoutSummary.css'
const CheckoutSummary=(props)=>{
	return(
		<div className={css.CheckoutSummary}>
			<h1>We hope your Burger tests Better !!</h1>
			<div style={{width:'300px',margin:'auto'}}>
			<Burger ingredients={props.ingredients}/>
			</div>
			
			<Button 
				btnType='Danger'
				clicked={props.CancelClicked}
				>
				Cancel
			</Button>

			<Button 
				btnType='Success'
				clicked={props.ContinueClicked}
				>
				Continue
			</Button>
		</div>

		);

}
export default CheckoutSummary