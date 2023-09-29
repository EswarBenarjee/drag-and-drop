import React from "react";

import useStore from "../store/Datastore";

import Product from "./Product";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiFruitBowl } from "react-icons/gi";
import { PiBowlFood } from "react-icons/pi";

const Box = ({ box }) => {
  const { name, icon, products } = box;

  const [handleDrop, handleDragOver] = useStore((state) => [
    state.handleDrop,
    state.handleDragOver,
  ]);

  const currentIcon = (icon) => {
    if (icon === "AiOutlineShoppingCart")
      return <AiOutlineShoppingCart className="inline" />;
    if (icon === "GiFruitBowl") return <GiFruitBowl className="inline" />;
    return <PiBowlFood className="inline" />;
  };

  return (
    <div
      className="md:h-full p-3 border-2 m-5"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      name={name}
    >
      <h4 className="text-xl text-center font-bold p-2 border-b-2 mb-2">
        {name} {currentIcon(icon)}
      </h4>
      <div className="grid grid-cols-2 place-items-center">
        {products.map((product, index) => (
          <Product key={index} name={product.name} boxName={name} />
        ))}
      </div>
    </div>
  );
};

export default Box;
