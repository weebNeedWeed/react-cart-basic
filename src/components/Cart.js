import React, { Component } from "react";
import CartItem from "./CartItem";

class Cart extends Component {
	render() {
		const { cartItems, handleChangeQuantity, handleDeleteCartItem } =
			this.props;

		let summary = 0;

		cartItems.forEach((elm) => {
			summary = summary + elm.quantity * elm.defaultPrice;
		});

		return (
			<div>
				<h1 className="h1">Cart</h1>

				<div style={{ display: "flex", padding: "20px", gap: "10px" }}>
					<table className="cart-item-list">
						<thead>
							<tr>
								<th>Name</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{cartItems.map((elm) => (
								<CartItem
									key={elm.id}
									cartItem={elm}
									handleChangeQuantity={handleChangeQuantity}
									handleDeleteCartItem={handleDeleteCartItem}
								/>
							))}
						</tbody>
					</table>

					<div>Summary: {summary}</div>
				</div>
			</div>
		);
	}
}

export default Cart;
