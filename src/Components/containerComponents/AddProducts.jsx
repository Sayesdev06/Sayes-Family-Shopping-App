import { useState } from "react";
import Button from "../usefulComponents/Button";

/* eslint-disable react/prop-types */
function AddProducts({
  selectedShop,
  shoppingList,
  setShoppingList,
  children,
  inputIsDisabled,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setShoppingList([
        ...shoppingList,
        inputValue + ` [${selectedShop.name}]`,
      ]);
      setInputValue("");
    }
  };
  

  return (
    <div className="flex flex-col text-center mb-10">
      <div>
        <h2 className="title">Add {selectedShop.name} Products:</h2>
      </div>
      <form onSubmit={handleSubmit} className="">
        <input
          disabled={inputIsDisabled}
          type="text"
          placeholder="write your product"
          value={inputValue}
          onChange={handleInputChange}
          className="mr-1 border border-gray-800 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-950"
        />
        <Button style="btn w-fit" type={"submit"} children={"Add"} />
      </form>
    </div>
  );
}

export default AddProducts
