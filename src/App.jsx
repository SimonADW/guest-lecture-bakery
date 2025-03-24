import { useState } from "react";
import "./App.css";
import "./assets/styles/reset.css";
import "./assets/styles/variables.css";
import MenuList from "./components/MenuList/MenuList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
	const [cartContent, setCartContent] = useState([]);	

	return (
		<>
			<section className="listWrapper">
				<MenuList
					cartContent={cartContent}
					setCartContent={setCartContent}
				/>
			</section>
      
			<ShoppingCart
				cartContent={cartContent}
				setCartContent={setCartContent}
			/>
		</>
	);
}

export default App;
