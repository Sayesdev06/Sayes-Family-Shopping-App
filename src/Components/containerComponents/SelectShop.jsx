// eslint-disable-next-line react/prop-types
function SelectShop({ selectedShop, setSelectedShop }) {
  const shops = [
    {
      name: "Lidl",
      logo: "src/assets/images/lidl.jpg",
      id: 1,
      color: "bg-cyan-500",
    },
    {
      name: "Kaufland",
      logo: "src/assets/images/kaufland.jpg",
      id: 2,
      color: "bg-red-300",
    },
    {
      name: "Auchan",
      logo: "src/assets/images/auchan.jpg",
      id: 3,
      color: "bg-red-400",
    },
    {
      name: "Penny",
      logo: "src/assets/images/penny.jpg",
      id: 4,
      color: "bg-red-500",
    },
    {
      name: "Halal",
      logo: "src/assets/images/halal.jpg",
      id: 5,
      color: "bg-green-500",
    },
  ];


  return (
    <div className="text-center space-y-2 mb-10">
      <h2 className="title">Select Shop:</h2>
      <div className=" md:flex space-x-20">
        {shops.map((shop, index) => (
          <label key={index}>
            <div className="flex space-x-5 border-2 border-gray-800 p-2  hover:bg-gray-800 text-zinc-100 rounded-full justify-center">
              <input
                type="checkbox"
                checked={selectedShop.id === shop.id ? shop : !shop}
                onChange={() => setSelectedShop(shop)}
                className="mx-2 w-4 accent-gray-800  bg-gray-100 border-gray-300   "
              />
              {shop.name}
              <img className="imgStyle" src={`${shop.logo}`} alt="" />
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default SelectShop;
