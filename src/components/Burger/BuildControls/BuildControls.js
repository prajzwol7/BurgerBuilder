import React from 'react'
import css from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
const controls=[
	{label:'Salad', type:'salad'},
	{label:'Bacon', type:'bacon'},
	{label:'Cheese', type:'cheese'},
	{label:'Tomato', type:'tomato'},
	{label:'Meat', type:'meat'},
	{label:'Mayonaise', type:'mayonaise'},
];
const BuildControls=(props)=>(
		<div className={css.BuildControls}>
		<p>Current price :{props.price} /Rs</p>
		{controls.map(ctrl=>(
			<BuildControl key={ctrl.label}
				label={ctrl.label}
				added={()=>props.added(ctrl.type)}
				removed={()=>props.removed(ctrl.type)}
				disabled={props.disabled[ctrl.type]}
				/>
			))
		}
		<button onClick={props.ordered} className={css.OrderButton} disabled={!props.purchasable}>ORDER</button>
		</div>

	)
export default BuildControls