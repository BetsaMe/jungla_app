import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import "../styles/Layout.css";
import { useState } from "react";

function App() {


  const [cart, updateCart] = useState(() => {
    // Intentamos recuperar el carrito de localStorage al cargar la página
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : []; // Si no hay nada en localStorage, inicializamos como un array vacío
});
  return (
    <div>
      <Banner />
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart= {updateCart} />
				<ShoppingList cart={cart} updateCart= {updateCart} />
			</div>
      <Footer />
    </div>
  );
}

export default App;
