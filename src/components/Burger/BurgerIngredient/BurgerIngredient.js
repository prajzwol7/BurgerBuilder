import React,{Component} from 'react'
import css from './BurgerIngredient.css'
import PropTypes from 'prop-types'

class BurgerIngredient extends Component{

		render(){
			const {totalCount,type} = this.props;
		let ingredient=null
		switch(type){
			case('bread-bottom'):
				ingredient=<div className={css.BreadBottom}></div>;
				break;
			case('bread-top'):
			ingredient=(<div className={css.BreadTop}>
				<div className={css.Seeds1}></div>
				<div className={css.Seeds2}></div>
			</div>
			);
			break;
			case('meat'):
			ingredient=<div className={css.Meat} style={{
					height: totalCount >= 6 ? "4% ": "7%",
					fontSize: totalCount >= 6  ? "10px": "auto"
				}}>meat</div>;
			break;

			case('cheese'):
			ingredient=<div className={css.Cheese} style={{
					height: totalCount >= 6 ? "4% ": "7%",
					fontSize: totalCount >= 6  ? "10px": "auto"
				}}>cheese</div>;
			break;

			case('bacon'):
			ingredient=<div className={css.Bacon} style={{
					height: totalCount >= 6 ? "4% ": "7%",
					fontSize: totalCount >= 6  ? "10px": "auto"
				}}>bacon</div>;
			break;

			case('salad'):
			ingredient=<div className={css.Salad} style={{
					height: totalCount >= 6 ? "4% ": "7%",
					fontSize: totalCount >= 6  ? "10px": "auto"
				}}>salad</div>;
			break;

			case('mayonaise'):
			ingredient=<div className={css.mayonaise} style={{
					height: totalCount >= 6 ? "4% ": "7%",
					fontSize: totalCount >= 6  ? "10px": "auto"
				}}>mayonaise</div>;
			break;

			case('tomato'):
			ingredient=<div className={css.tomato} style={{
					height: totalCount >= 6 ? "4% ": "7%",
					fontSize: totalCount >= 6  ? "10px": "auto"
				}}>tomato</div>;
			break;

			default:
				ingredient=null
		}
	return ingredient;
	
	}
}
BurgerIngredient.propTypes={
	type:PropTypes.string.isRequired
};
export default BurgerIngredient