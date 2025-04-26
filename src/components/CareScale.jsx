import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

function CareScale({ waterQuantity, lightQuantity }) {
  const renderScale = (quantity, type) => {
    const icon = type === "light" ? Sun : Water;
    return (
      <div className="care-section">
        {[...Array(quantity)].map((_, i) => ( //itero sobre array
          <img key={i} src={icon} alt={`${type}-icon`} className="care-icon" />
        ))}
      </div>
    );
  };

  return (
    <div className="care-scale">
      {renderScale(lightQuantity, "light")}
      {renderScale(waterQuantity, "water")}
    </div>
  );
}

export default CareScale;
