import React from "react";
import styles from "./MenuItem.module.css";
import CounterButton from "../CounterButton/CounterButton";

const MenuItem = ({
	item,
	index,
	addToCartButtonActive,
	setAddToCartButtonActive,
	setCartContent,
	itemQuantity,
}) => {

	console.log("MenuItem rendered");
	

	const addItemToCart = () => {
		setCartContent((prev) => {
			// Find existing item
			const itemIndex = prev.findIndex(
				(cartItem) => cartItem.menuItemNum === item.id
			);

			// Add if non exists
			if (itemIndex === -1) {
				return [...prev, { menuItemNum: item.id, qty: 1 }];
			}

			// Add if exist
			const updatedCart = [...prev];
			updatedCart[itemIndex] = {
				...updatedCart[itemIndex],
				qty: updatedCart[itemIndex].qty + 1,
			};
			return updatedCart;
		});
	};

	const subtractItemFromCart = () => {
		setCartContent((prev) => {
			const itemIndex = prev.findIndex(
				(cartItem) => cartItem.menuItemNum === item.id
			);
			// If non existing return same reference
			if (itemIndex === -1) return prev;

			// Clone the specific item safely
			const updatedItem = { ...prev[itemIndex], qty: prev[itemIndex].qty - 1 };

			// Create a new cart array (Instead of spread, so React detects the "deep" changes)			
			const updatedCart = prev.map((item, i) =>
				i === itemIndex ? updatedItem : item
			);
	
			// Filter out items where qty reaches 0
			return updatedItem.qty === 0
				? updatedCart.filter((_, i) => i !== itemIndex)
				: updatedCart;
		});
	};

	return (
		<div className={styles.menuItem}>
			<img src={item.imageUrl} alt={item.name} />
			{
				// Render counter buttons when add to cart clicked, or if item is in cart
				itemQuantity || addToCartButtonActive === item.id ? (
					<CounterButton subtractItemFromCart={subtractItemFromCart} addItemToCart={addItemToCart} itemQuantity={itemQuantity}/>
				) : (
					// Else render Add to cart button
					<button onClick={() => setAddToCartButtonActive(item.id)}>
						Add to Cart
					</button>
				)
			}

			<div className={styles.itemCategory}>{item.category}</div>
			<div className={styles.itemName}>{item.name}</div>
			<div className={styles.itemPrice}>{item.price.toFixed(2)}</div>
		</div>
	);
};

export default MenuItem;
