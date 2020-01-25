import React from 'react'
import Logo from '../../Logo/Logo'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import NavigationItems from '../NavigationItems/NavigationItems'
import css from './Toolbar.css'
const Toolbar=(props)=>(
	<header className={css.Toolbar}>
		<DrawerToggle clicked={props.clicked}/>
		<div className={css.Logo}>
			<Logo/>
		</div>
		<nav className={css.DesktopOnly}>
		<NavigationItems/>
		</nav>

	</header>

	);
export default Toolbar