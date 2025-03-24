import React, { useEffect, useState } from "react";
import styles from "./ShoppingCart.module.css";
import menuArray from "../../assets/data";

/** Shopping-cart component */
const ShoppingCart = ({ cartContent, setCartContent, setConfirmModalOpen }) => {
	const [orderSumTotal, setOrderSumTotal] = useState(0);

	/** Calc total items in cart */
	const getTotalNumOfCartItems = () => {
		return cartContent.reduce((acc, currentItem) => {
			return acc + currentItem.qty;
		}, 0);
	};

	/** Calc ordersum */
	useEffect(() => {
		const newOrderSumTotal = cartContent?.reduce((sum, cartItem) => {
			const menuItem = menuArray.find(
				(item) => item.id === cartItem.menuItemNum
			);
			return menuItem ? (sum += cartItem.qty * menuItem.price) : sum;
		}, 0);

		setOrderSumTotal(newOrderSumTotal);
	}, [cartContent, menuArray]);

	const handleRemoveCartItem = (indexOfItem) => {
		setCartContent((prev) => prev.filter((_, i) => i !== indexOfItem));
	};
	
	return (
		<>
			<div className={styles.cart}>
				<h1>Your Cart ({getTotalNumOfCartItems()})</h1>

				<ul>
					{/* Dynamically rendered: */}
					{menuArray.map((item, index) => {
						for (const cartItem of cartContent) {
							if (cartItem.menuItemNum === item.id) {
								return (
									<li className={styles.cartItem} key={index}>
										<div
											className={
												styles.cartItemNamePriceWrapper
											}
										>
											<p className={styles.cartItemName}>
												{item.name}
											</p>
											<div
												className={
													styles.cartItemPriceWrapper
												}
											>
												<span
													className={
														styles.cartItemQty
													}
												>
													{cartItem.qty}
												</span>
												<span
													className={
														styles.cartItemAt
													}
												>
													@
												</span>
												<span
													className={
														styles.cartItemPrice
													}
												>
													{item.price.toFixed(2)}
												</span>
												<span
													className={
														styles.cartItemPartSum
													}
												>
													{(
														item.price *
														cartItem.qty
													).toFixed(2)}
												</span>
											</div>
										</div>
										<button
											onClick={() =>
												handleRemoveCartItem(
													cartContent.indexOf(
														cartItem
													)
												)
											}
											className={
												styles.removeCartItemButton
											}
										>
											<img src="/images/icon-remove-item.svg" alt="x" />
										</button>
									</li>
								);
							}
						}
					})}

					<li className={styles.orderTotalLi}>
						<span>Sum</span>
						<span className={styles.orderTotalSum}>
							{orderSumTotal.toFixed(2)}
						</span>
					</li>
				</ul>

				<button
					onClick={() => setConfirmModalOpen(true)}
					className={styles.confirmOrderButton}					
				>
					Confirm Order
				</button>
			</div>
		</>
	);
};

export default ShoppingCart;
