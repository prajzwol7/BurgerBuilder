import React from 'react'
import {NavLink} from 'react-router-dom'
import css from './NavigationItem.css'
const NavigationItem=(props)=>(
	<li className={css.NavigationItem}>
				<NavLink 
					to={props.link}
					activeClassName={css.active}
					exact
					>{props.children}</NavLink></li>

	);
export default NavigationItem