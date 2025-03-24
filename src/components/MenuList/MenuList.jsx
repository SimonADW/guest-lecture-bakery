import React, { useState } from "react";
import styles from "./MenuList.module.css";
import MenuItem from "../MenuItem/MenuItem";
import bakeryItems from "../../assets/data";

const MenuList = ({
	setCartContent,
	cartContent,
}) => {
	const [addToCartButtonActive, setAddToCartButtonActive] = useState(null)
	
	return (
		<>
			<h1 className={styles.dessertHeader}>High Carb Heaven</h1>
			<div className={styles.menuList}>
				{bakeryItems.map((item, index) => {
					return (
						<MenuItem
							item={item}
							key={item.id}
							index={index}
							addToCartButtonActive={addToCartButtonActive}
							setAddToCartButtonActive={setAddToCartButtonActive}
							setCartContent={setCartContent}
							cartContent={cartContent}
							itemQuantity={cartContent.find((cartItem) => cartItem.menuItemNum === item.id)?.qty || 0}
						/>
					);
				})}
			</div>
		</>
	);
};

export default MenuList;
