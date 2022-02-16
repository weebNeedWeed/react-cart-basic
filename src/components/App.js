import React, { Component } from "react";
import Shop from "./Shop";
import Cart from "./Cart";
import shopData from "./../data.json";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			shopItems: [],
			cartItems: [],
		};
	}

	componentDidMount() {
		this.setState({ shopItems: shopData });
	}

	handleAddItemToCart = (item) => {
		const { name, price } = item;

		const cartItemsClone = [...this.state.cartItems];

		cartItemsClone.push({
			id: uuidv4(),
			defaultPrice: price,
			quantity: 1,
			name,
		});

		this.setState({ cartItems: cartItemsClone });
	};

	handleChangeQuantity = (itemId, number) => {
		const { cartItems } = this.state;
		const cartItemsClone = [...cartItems];

		const cartItemIndex = cartItemsClone.findIndex((elm) => elm.id === itemId);
		const cartItem = cartItemsClone[cartItemIndex];

		const { quantity } = cartItem;

		if (number === -1 && quantity === 1) {
			return;
		}

		const newQuantity = quantity + number;

		cartItem.quantity = newQuantity;

		this.setState({ cartItem: cartItemsClone });
	};

	handleDeleteCartItem = (itemId) => {
		const { cartItems } = this.state;
		let cartItemsClone = [...cartItems];

		cartItemsClone = cartItemsClone.filter((elm) => elm.id !== itemId);

		this.setState({ cartItems: cartItemsClone });
	};

	render() {
		const { shopItems, cartItems } = this.state;

		return (
			<div>
				<Shop
					shopItems={shopItems}
					handleAddItemToCart={this.handleAddItemToCart}
				/>

				<hr />

				<Cart
					cartItems={cartItems}
					handleChangeQuantity={this.handleChangeQuantity}
					handleDeleteCartItem={this.handleDeleteCartItem}
				/>
			</div>
		);
	}
}

export default App;
