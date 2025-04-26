import { useEffect } from "react";
import "../styles/Cart.css";
import deleteIcon from "../assets/delete-icon.svg";

function Cart({ cart, updateCart }) {
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  // solo actualizamos el carro cuando el monto cambie
  useEffect(() => {
    let string = JSON.stringify(cart);
    localStorage.setItem("cart", string);
  }, [cart]);

  useEffect(() => {
    document.title = `LMJ: ${total}€ en el carrito`;
  }, [total]);

  //Funcion para eliminar planta del carrito
  function deletePlant(name) {
    const cartWithoutPlant = cart.filter((plant) => plant.name !== name);
    updateCart([...cartWithoutPlant]);
  }

  return (
    <div className="lmj-cart">
      {cart.length > 0 ? (
        <div>
          <h2>Carrito</h2>
          <div>
            {cart.map(
              (
                { name, price, amount },
                index // Iteramos con map en la tabla de objetos creada
              ) => (
                //en el state de cart en app
                <div key={index} className="lmj-detailProduct">
                  <span>
                    {" "}
                    {name} {price}€ x {amount}{" "}
                  </span>
                  <img
                    src={deleteIcon}
                    onClick={() => deletePlant(name)}
                    className="lmj-deleteBtn"
                  />
                </div>
              )
            )}
          </div>
          <h3>
            Total : <span>{total}</span> €
          </h3>
          <button className="lmj-delete-all" onClick={() => updateCart([])}>
            Vaciar carrito
          </button>
        </div>
      ) : (
        <div>
          <h2>Carrito</h2>
          <p className="text-panier">Tu carrito esta vacio,</p>
          <p className="text-panier">Selecciona tus plantas !</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
