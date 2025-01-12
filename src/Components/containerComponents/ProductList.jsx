import Button from "../usefulComponents/Button";






function ProductList({
  shoppingList,
  setShoppingList,
  handler,
  handleDeleteBtn,
}) {

  
  
  const handleClearBtn = () => {
    setShoppingList([]);
  };

  

  return (
    <div className="flex items-center flex-col align-center mb-10">
      <h2 className="title">Products List:</h2>
      <ul className="border-4 border-double border-gray-800 w-56  mb-2 divide-y divide-gray-300">
        {shoppingList.length >= 0 &&
          shoppingList.map((product, index) => (
            <li className="flex justify-between p-2" key={index}>
              {product}{" "}
              <button
                className="btn text-xs text-center"
                onClick={() => handleDeleteBtn(index)}
              >
                x
              </button>{" "}
            </li>
          ))}
      </ul>
      <Button style={"btn"} handler={handleClearBtn} children={"Clear List"} />
    </div>
  );
}

export default ProductList

