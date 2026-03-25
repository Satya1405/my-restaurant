import mk from "./assets/menu1.jpg";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  const menu = [
    {
      title: "Coffee",
      items: [
        { name: "Espresso", price: "₹120" },
        { name: "Cappuccino", price: "₹180" },
        { name: "Latte", price: "₹200" },
        { name: "Americano", price: "₹150" },
        { name: "Mocha", price: "₹210" },
        { name: "Flat White", price: "₹190" },
        { name: "Caramel Macchiato", price: "₹230" },
        { name: "Filter Coffee", price: "₹140" }
      ]
    },
    {
      title: "Desserts",
      items: [
        { name: "Chocolate Cake", price: "₹220" },
        { name: "Brownie", price: "₹180" },
        { name: "Cheesecake", price: "₹250" },
        { name: "Croissant", price: "₹160" },
        { name: "Tiramisu", price: "₹270" },
        { name: "Cupcake", price: "₹150" },
        { name: "Waffles", price: "₹240" },
        { name: "Ice Cream Sundae", price: "₹210" }
      ]
    },
    {
      title: "Drinks",
      items: [
        { name: "Cold Coffee", price: "₹190" },
        { name: "Lemon Tea", price: "₹120" },
        { name: "Hot Chocolate", price: "₹210" },
        { name: "Fresh Juice", price: "₹170" },
        { name: "Iced Latte", price: "₹200" },
        { name: "Green Tea", price: "₹130" },
        { name: "Milkshake", price: "₹220" },
        { name: "Mocktail", price: "₹240" }
      ]
    },
    {
      title: "Meals",
      items: [
        { name: "Veg Sandwich", price: "₹200" },
        { name: "Pasta", price: "₹260" },
        { name: "Veg Burger", price: "₹230" },
        { name: "Paneer Wrap", price: "₹240" },
        { name: "Margherita Pizza", price: "₹320" },
        { name: "Paneer Pizza", price: "₹360" },
        { name: "Veg Fried Rice", price: "₹250" },
        { name: "Hakka Noodles", price: "₹240" }
      ]
    }
  ];

  return (
    <div
      className="bg-cover bg-no-repeat bg-center min-h-screen p-4 sm:p-6 md:p-10"
      style={{ backgroundImage: `url(${mk})` }}
    >
      <button
        onClick={() => navigate("/")}
        className="bg-[#b99272] px-4 py-2 rounded text-white mb-6 sm:mb-8 hover:bg-[#a67f5f] transition-colors"
      >
        Back Home
      </button>

      <h2 className="text-white text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10">
        Our Menu
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {menu.map((category, index) => (
          <div
            key={index}
            className="bg-black/70 text-white p-5 sm:p-6 rounded-xl shadow-lg backdrop-blur-sm"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 border-b border-white/30 pb-2">
              {category.title}
            </h3>
            {category.items.map((item, i) => (
              <div
                key={i}
                className="flex justify-between py-2 text-sm sm:text-base"
              >
                <span className="pr-4">{item.name}</span>
                <span className="font-medium whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;