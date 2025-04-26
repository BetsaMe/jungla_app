import "../styles/Categories.css";

import { plantList } from "../datas/plantList";

function Categories({ setActiveCategory, activeCategory }) {

const categories = [...new Set(plantList.map(plant => plant.category))];

  function addCategory(value, target) {
    setActiveCategory((prevValue) => {
      
      if (prevValue.includes(value)) {
        target.classList.remove("lmj-btn-active");
        const newArray = prevValue.filter((item) => item !== value);
        return newArray;
      } else {
        target.classList.add("lmj-btn-active");
        return [...prevValue, value];
      }
    });
  }

  function cleanFilters() {
    setActiveCategory([]);
    const buttons = document.querySelectorAll(".lmj-categories-button");
    buttons.forEach((element) => {
      element.classList.remove("lmj-btn-active");
    });
  }

  return (
    <div className="lmj-categories">
      {categories.map((category, index) => (
        <button
          className="lmj-categories-button"
          key={index}
          data-value={category}
          onClick={(e) => addCategory(e.target.textContent, e.target)}
        >
          {category}
        </button> // Renderizamos la lista de categorías únicas
      ))}

      <button className="lmj-btn-clear" onClick={() => cleanFilters()}>
        Borrar filtros
      </button>
    </div>
  );
}

export default Categories;
