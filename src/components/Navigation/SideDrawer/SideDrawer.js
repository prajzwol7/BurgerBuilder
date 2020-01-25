import React from 'react'
import css from './SideDrawer.css'
import Logo from '../../Logo/Logo'
import Aux from '../../../hoc/Auxo/Auxo'
import Backdrop from '../../UI/Backdrop/Backdrop'
import NavigationItems from '../NavigationItems/NavigationItems'
const SideDrawer=(props)=>{
	let attachedClasses=[css.SideDrawer,css.Close];
	if(props.open){
		attachedClasses=[css.SideDrawer,css.Open];
	}

	return(
		<Aux>
		<Backdrop show={props.open} clicked={props.closed}/>
		<div className={attachedClasses.join(' ')}>
			<div className={css.Logo}>
				<Logo/>
			</div>
			<nav>
				<NavigationItems/>
				</nav>



		</div>
		</Aux>

		);
}
export default SideDrawer