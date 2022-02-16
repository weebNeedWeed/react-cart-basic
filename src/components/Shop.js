import React, { Component } from "react";
import ShopItems from "./ShopItem";

class Shop extends Component {
	render() {
		const { shopItems, handleAddItemToCart } = this.props;

		return (
			<div>
				<h1 className="h1">shop</h1>

				<div className="shop-item-list">
					{shopItems.map((elm) => (
						<ShopItems
							key={elm.id}
							shopItem={elm}
							handleAddItemToCart={handleAddItemToCart}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Shop;
