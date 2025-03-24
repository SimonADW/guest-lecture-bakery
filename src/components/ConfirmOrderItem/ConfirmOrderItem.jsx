import React from "react";
import styles from "./ConfirmOrderItem.module.css";

/** Item in confirm order modal */
const ConfirmOrderItem = ({ menuItem, cartItem }) => {	

	return (
		<li key={menuItem.id} className={styles.summaryItemLi}>
			<img src={menuItem.imageUrl} alt="thumbnail" />
			<div className={styles.listItem__namePriceWrapper}>
				<span>{menuItem.name}</span>
				<div>
					<span className={styles.itemQty}>{cartItem.qty}</span>
					<span className={styles.itemPrice}>{menuItem.price}</span>
				</div>
			</div>
			<div className={styles.itemTotal}>
				{(cartItem.qty * menuItem.price).toFixed(2)}
			</div>
		</li>
	);
};

export default ConfirmOrderItem;
