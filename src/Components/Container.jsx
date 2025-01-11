import SelectShop from "../Components/containerComponents/SelectShop"
import AddProducts from "./containerComponents/AddProducts"
import { useState } from "react";
import ProductList from "./containerComponents/ProductList";





function Container() {
  const [selectedShop, setSelectedShop] = useState({});
  const [shoppingList, setShoppingList] = useState([]);

  const handleDeleteBtn = (index) => {
    setShoppingList((currentFruits) =>
      currentFruits.filter((_, i) => i !== index)
    );
  };

  console.log(selectedShop.color);
  return (
    <div className=" flex flex-col  flex-grow p-4 m-auto text-xs md:text-sm ">
      <SelectShop
        selectedShop={selectedShop}
        setSelectedShop={setSelectedShop}
      />
      <AddProducts
        selectedShop={selectedShop}
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />
      <ProductList
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
        handleDeleteBtn={handleDeleteBtn}
      />
    </div>
  );
}

export default Container
