
import styles from "./ConfirmOrderModal.module.css";
import ConfirmOrderItem from "../ConfirmOrderItem/ConfirmOrderItem";
import bakeryItems from "../../assets/data";

/** Component to display order-confirmation with items */
const ConfirmOrderModal = ({ setCartContent, setConfirmModalOpen, cartContent, setAddToCartButtonActive, addToCartButtonActive }) => {

	const handleStartNewOrder = () => {
		console.log("Before reset:", addToCartButtonActive);
		setCartContent([]);
		setConfirmModalOpen(false);
		setAddToCartButtonActive(null)
	};


	return (
		<div className={styles.confirmOrderModalBackdrop}>
			<div className={styles.confirmOrderModal}>
				<img src="/images/icon-order-confirmed.svg" alt="check" />
				<div>
					<h1>Order Confirmed</h1>
					<p>We hope you enjoy your food</p>
				</div>
				<ul>
					{/* Dymically rendered cart items */}
					{bakeryItems.map((menuItem, index) => {
						for (const cartItem of cartContent) {
							if (cartItem.menuItemNum === menuItem.id) {
								return (
									<ConfirmOrderItem
										menuItem={menuItem}
										cartItem={cartItem}
										key={index}
									/>
								);
							}
						}
					})}
				</ul>
				<button onClick={handleStartNewOrder}>Start New Order</button>
			</div>
		</div>
	);
};

export default ConfirmOrderModal;
