import PropTypes from "prop-types";

function SelectShop({ selectedShop, setSelectedShop, setInputIsDisabled }) {
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

  const handleSelectShop = (shop) => {
    setSelectedShop(shop);
    setInputIsDisabled(false);
  };

  return (
    <div className="text-center space-y-2 mb-10">
      <h2 className="title">Select Shop:</h2>
      <div className="flex flex-col justify-center gap-4">
        {shops.map((shop, index) => (
          <label
            key={index}
            className="flex items-center justify-between space-x-2 border-2 border-gray-800 p-2 hover:bg-gray-800 text-zinc-100 rounded-full"
          >
            <input
              type="checkbox"
              checked={selectedShop.id === shop.id}
              onChange={() => handleSelectShop(shop)}
              className="w-4 h-4 accent-gray-800 bg-gray-100 border-gray-300"
            />
            <span>{shop.name}</span>
            <img className="imgStyle" src={shop.logo} alt={shop.name} />
          </label>
        ))}
      </div>
    </div>
  );
}
SelectShop.propTypes = {
  selectedShop: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  setSelectedShop: PropTypes.func.isRequired,
  setInputIsDisabled: PropTypes.func.isRequired,
};

export default SelectShop;
