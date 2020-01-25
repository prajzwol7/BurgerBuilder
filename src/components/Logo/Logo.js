import React from 'react'
import css from './Logo.css'
import logo from '../../assets/images/logo.png'
const Logo=()=>(
	<div className={css.Logo}>
		<img src={logo} alt='logo'/>
	</div>

	);
export default Logo