import React from "react";
import styles from "./CounterButton.module.css";

const CounterButton = ({subtractItemFromCart, addItemToCart, itemQuantity}) => {
	return (
		<div className={styles.addToCartButtonActive}>
			<button
				onClick={subtractItemFromCart}
				className={styles.addToCartDecrement}
			>
				-
			</button>
			<span>{itemQuantity}</span>
			<button
				onClick={addItemToCart}
				className={styles.addToCartIncrement}
			>
				+
			</button>
		</div>
	);
};

export default CounterButton;
