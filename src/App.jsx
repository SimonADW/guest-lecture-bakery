import { useState } from "react";
import "./App.css";
import "./assets/styles/reset.css";
import "./assets/styles/variables.css";
import MenuList from "./components/MenuList/MenuList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ConfirmOrderModal from "./components/ConfirmOrderModal/ConfirmOrderModal";

function App() {
	const [cartContent, setCartContent] = useState([]);
	const [confirmOrderModalOpen, setConfirmModalOpen] = useState(false); // Bonus
	const [addToCartButtonActive, setAddToCartButtonActive] = useState(null);

	return (
		<>
			<section className="listWrapper">
				<MenuList
					cartContent={cartContent}
					setCartContent={setCartContent}
					addToCartButtonActive={addToCartButtonActive}
					setAddToCartButtonActive={setAddToCartButtonActive}
				/>
			</section>

			<ShoppingCart
				cartContent={cartContent}
				setCartContent={setCartContent}
				setConfirmModalOpen={setConfirmModalOpen} // Bonus
			/>

			{/* Bonus section */}
			{confirmOrderModalOpen && (
				<ConfirmOrderModal
					setCartContent={setCartContent}
					setConfirmModalOpen={setConfirmModalOpen}
					cartContent={cartContent}
					setAddToCartButtonActive={setAddToCartButtonActive}
					addToCartButtonActive={addToCartButtonActive}
				/>
			)}
		</>
	);
}

export default App;
