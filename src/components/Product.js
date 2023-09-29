import React from "react";

import useStore from "../store/Datastore";

import { GiShinyApple, GiGrapes, GiTomato, GiPumpkin } from "react-icons/gi";

const Product = ({ name }) => {
  const handleDragStart = useStore((state) => state.handleDragStart);

  const currentIcon = (icon) => {
    const classes = "h-8 w-8";

    if (icon === "Apple")
      return <GiShinyApple className={classes + " text-red-600"} />;
    if (icon === "Grape")
      return <GiGrapes className={classes + " text-purple-600"} />;
    if (icon === "Tomato")
      return <GiTomato className={classes + " text-red-600"} />;
    return <GiPumpkin className={classes + " text-yellow-400"} />;
  };

  return (
    <div
      className="m-5"
      draggable
      onDragStart={(e) => handleDragStart(e, name)}
    >
      {currentIcon(name)}
    </div>
  );
};

export default Product;
