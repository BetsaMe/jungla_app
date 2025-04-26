import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import "../styles/ShoppingList.css";
import { useState } from "react";

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState([]);

  //Funcion para agregar articulo al carro
  function addToCart(name, price) {
    // verifico si la planta existe en el carro
    const currentPlant = cart.find( plant => plant.name === name) // esto devuelve o no un objeto

    if(currentPlant){
      const cartWithoutNewPlant = cart.filter( plant => plant.name !== name)
      updateCart([
        ...cartWithoutNewPlant,
        {name, price, amount: currentPlant.amount + 1}
      ])
    }else{
      updateCart([
        ...cart,
        {name, price, amount: 1}
      ])
    }
  }



  return (
    <div className="lmj-shopping-list">
      <Categories
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className="lmj-plant-list">
        {plantList.map((plant) =>
          activeCategory.length === 0 ||
          activeCategory.find((data) => data === plant.category) ? (
            <div key={plant.id}>
              <PlantItem {...plant} addToCart={addToCart} />
          
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
