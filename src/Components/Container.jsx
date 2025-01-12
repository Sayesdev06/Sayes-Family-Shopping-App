import SelectShop from "../Components/containerComponents/SelectShop"
import AddProducts from "./containerComponents/AddProducts"
import { useState , useEffect } from "react";
import ProductList from "./containerComponents/ProductList";






function Container() {
  const [selectedShop, setSelectedShop] = useState({});
  const [shoppingList, setShoppingList] = useState(() => {
    const getData = localStorage.getItem("ourShoppingList");
    return getData ? JSON.parse(getData) : []
      
    
  });
  const [inputIsDisabled, setInputIsDisabled] = useState(true)
  

  const handleDeleteBtn = (index) => {
    setShoppingList((currentFruits) =>
      currentFruits.filter((_, i) => i !== index)
    );
  };




  useEffect(() => {
    if (shoppingList.length >= 0) {
      const dataToString = JSON.stringify(shoppingList);
      localStorage.setItem("ourShoppingList", dataToString);
    }
  }, [shoppingList]);

  
  return (
    <div className=" flex flex-col  flex-grow p-4 m-auto text-xs md:text-sm ">
      <SelectShop
        selectedShop={selectedShop}
        setSelectedShop={setSelectedShop}
        setInputIsDisabled={setInputIsDisabled}
      />
      <AddProducts
        selectedShop={selectedShop}
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
        inputIsDisabled={inputIsDisabled}
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
