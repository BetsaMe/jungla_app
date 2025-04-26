import CareScale from "./CareScale";
import "../styles/PlantItem.css";
import Modal from "./Modal";
import { useState } from "react";
import infoIcon from "../assets/info-icon.svg";

function PlantItem(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const quantityLabel = {
    1: "poca",
    2: "moderada",
    3: "mucha",
  };

  return (
    <li className="lmj-plant-item">
      <span className="lmj-plant-item-price">{props.price}€</span>
      <img
        className="lmj-plant-item-cover"
        src={props.cover}
        alt={`${props.name} cover`}
      />
      {props.name}
      <div>
        <div className="info-plant">
          <CareScale waterQuantity={props.water} lightQuantity={props.light} />

          <img
            src={infoIcon}
            alt="Info icon"
            onClick={() => setIsModalOpen(true)}
            className="info-icon"
          />
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>{props.name}</h2>
          <p>
            Esta planta necesita {quantityLabel[props.water]} cantidad de agua y{" "}
            {quantityLabel[props.light]} cantidad de luz.
          </p>
        </Modal>
      </div>

      <button
        className="lmj-plant-button"
        onClick={() => props.addToCart(props.name, props.price)}
      >
        Agregar
      </button>
    </li>
  );
}

export default PlantItem;
