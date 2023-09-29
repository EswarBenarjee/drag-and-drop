import { create } from "zustand";

const useStore = create((set) => ({
  boxes: [
    {
      name: "All Products",
      icon: "AiOutlineShoppingCart",
      products: [
        {
          name: "Apple",
        },
        {
          name: "Grape",
        },
        {
          name: "Tomato",
        },
        {
          name: "Pumpkin",
        },
      ],
    },
    {
      name: "Fruits",
      icon: "GiFruitBowl",
      products: [],
    },
    {
      name: "Vegetables",
      icon: "PiBowlFood",
      products: [],
    },
  ],
  handleDragStart: (e, name) => {
    e.dataTransfer.setData("name", name);
  },
  handleDragOver: (e) => {
    e.preventDefault();
  },
  handleDrop: (e) =>
    set((state) => {
      const newProduct = e.dataTransfer.getData("name");
      const targetBox = e.target.getAttribute("name");
      const currentBox = state.boxes.filter((box) => box.name === targetBox)[0];
      if (
        currentBox.products.filter((product) => {
          return product.name === newProduct;
        }).length === 0
      ) {
        return {
          boxes: state.boxes.map((box) => {
            if (box.name === targetBox) {
              box.products.push({ name: newProduct });
            }
            return box;
          }),
        };
      }
      return state.boxes;
    }),
}));

export default useStore;
