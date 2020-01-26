import React from 'react'
import css from './BuildControl.css'
const BuildControl=(props)=> {
	
	
	return(
		<div className={css.BuildControl}>
			<div className={css.Label}>{props.label}</div>
			<button className={css.Less} onClick={props.removed} disabled={props.disabled}>-</button>
			<span>
 				{props.items[props.type]}
			</span>
			<button className={css.More} onClick={props.added}>+</button>
		</div>

	)
}
export default BuildControl