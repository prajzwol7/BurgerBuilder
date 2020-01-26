import React from 'react'
import css from './Logo.css'
import logo from '../../assets/images/logo.png'
const Logo=()=>(
	<a href="/">
	<div className={css.Logo}>
		<img src={logo} alt='logo'/>
	</div>
	</a>
	);
export default Logo