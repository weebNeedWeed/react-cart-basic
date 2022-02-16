import React, { Component } from "react";

class CartItem extends Component {
	handleIncreaseQuantity = () => {
		const { id } = this.props.cartItem;

		this.props.handleChangeQuantity(id, 1);
	};

	handleDecreaseQuantity = () => {
		const { id } = this.props.cartItem;

		this.props.handleChangeQuantity(id, -1);
	};

	handleClickDelete = () => {
		const { id } = this.props.cartItem;

		this.props.handleDeleteCartItem(id);
	};

	render() {
		const {
			cartItem: { name, quantity },
		} = this.props;

		return (
			<tr>
				<td>{name}</td>
				<td style={{ display: "flex", gap: "10px" }}>
					<button onClick={this.handleIncreaseQuantity}>+</button>
					<span>{quantity}</span>
					<button onClick={this.handleDecreaseQuantity}>-</button>

					<button onClick={this.handleClickDelete}>x</button>
				</td>
			</tr>
		);
	}
}

export default CartItem;
