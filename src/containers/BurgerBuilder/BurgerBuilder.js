import React,{Component} from 'react'
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Auxo/Auxo'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-orders'
import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
const INGREDIENT_PRICES = {
	salad:10,
	bacon:40,
	cheese:30,
	meat:50,
	mayonaise:20,
	tomato:10
}

class BurgerBuilder extends Component{
	state={
		ingredients:null,
		purchasable:false,
		totalPrice:20,
		purchasing:false,
		loading:false,
		error:false
	}
	componentDidMount(){
		console.log(this.props);
		axios.get('https://burger-b2b46.firebaseio.com/ingredients.json').then(response=>{
			this.setState({
				ingredients:response.data
			});
			})
		.catch(error=>{
			this.setState({
				error:true
			});
		})
	}
	updatePurchaseState(ingredients) {
		
		const sum=Object.keys(ingredients)
			.map(igKey=>{
				return ingredients[igKey];
			})
			.reduce((sum,el)=>{
				return sum+el
			},0);
			this.setState({
				purchasable:sum>0
			});
	}
	addIngredientHandler=(type)=>{
		const oldCount=this.state.ingredients[type];

		const updatedCount=oldCount+1;
		const updatedIngredients={
			...this.state.ingredients
		};
		updatedIngredients[type]=updatedCount;

		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice=this.state.totalPrice;
		const newPrice=oldPrice+priceAddition;

		this.setState({
			ingredients:updatedIngredients,
			totalPrice:newPrice
			});
		this.updatePurchaseState(updatedIngredients);
	}
	purchaseHandler=()=>{
		this.setState({purchasing:true});
	}

	removeIngredientHandler=(type)=>{
		const oldCount=this.state.ingredients[type];
		if(oldCount<=0){
			return;
		}
		const updatedCount=oldCount-1;
		const updatedIngredients={
			...this.state.ingredients
		};
		updatedIngredients[type]=updatedCount;

		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice=this.state.totalPrice;
		const newPrice=oldPrice-priceAddition;

		this.setState({
			ingredients:updatedIngredients,
			totalPrice:newPrice
			});
		this.updatePurchaseState(updatedIngredients);
	}
	purchaseCancelHandler=()=>{
		this.setState({

			purchasing:false
		});
	}
	purchaseContinueHandler=()=>{
		
		const queryParams=[];
		for(let i in this.state.ingredients){
			queryParams.push(encodeURIComponent(i)+ '=' + encodeURIComponent(this.state.ingredients[i]))
		}
		queryParams.push('price='+this.state.totalPrice);
		const queryString=queryParams.join('&');
		this.props.history.push({
			pathname:'/checkout',
			search:'?'+queryString
		});

	}
	render(){
		const disabledInfo={...this.state.ingredients};
		for (let key in disabledInfo){
			disabledInfo[key]=disabledInfo[key]<=0
		}
		let orderSummary=null
		
				
		let burger=this.state.error ? <p> Couldn't load ingredients </p> : <Spinner/>;
		if(this.state.ingredients){
			burger=(
				<Aux>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls added={this.addIngredientHandler}
								removed={this.removeIngredientHandler}
								disabled={disabledInfo}
								ordered={this.purchaseHandler}
								purchasable={this.state.purchasable}
								price={this.state.totalPrice}
								/>
				</Aux>
				);
				orderSummary=<OrderSummary ingredients={this.state.ingredients}
						totalPrice={this.state.totalPrice}
						purchaseCancelled={this.purchaseCancelHandler}
						purchaseContinued={this.purchaseContinueHandler}
						/>;
		}
		if(this.state.loading){
			orderSummary=<Spinner/>
		}
		return(
			<Aux>
				<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
				{burger}

			</Aux>


			)
	}
} 
export default withErrorHandler(BurgerBuilder,axios)