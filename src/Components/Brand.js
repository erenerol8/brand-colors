import React, { useContext } from "react";
import { getContrastYIQ } from "../helpers";
import MainContext from "../MainContext";

const Brand = ({ brand }) => {
  const { selectedBrands, setSelectedBrands } = useContext(MainContext);

  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((b) => b.slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };
  return (
    <div className={`brand ${selectedBrands.includes() ? "selected" : ""}`}>
      <h5 onClick={toggleSelected}>{brand.title}</h5>
      <div className="brand-colors">
        {brand.colors.map((color) => (
          <span
            style={{
              "--bgColor": `#${color}`,
              "--textColor": `${getContrastYIQ(color)}`,
            }}
          >
            {color}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Brand;
