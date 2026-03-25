import bg from "./assets/kaffen-home.jpg";
import bg1 from "./assets/coffee-main2.png";
import bg2 from "./assets/chef.png";
import c1 from "./assets/home1.jpg";
import c2 from "./assets/home2.jpg";
import c3 from "./assets/home3.jpg";
import m1 from "./assets/coffee_beans.jpg";
import m2 from "./assets/menus.jpg";
import m3 from "./assets/menus1.jpg";
import m4 from "./assets/menus2.jpg";
import m5 from "./assets/menus3.jpg";
import m6 from "./assets/menus4.jpg";
import m7 from "./assets/menus5.jpg";
import b1 from "./assets/booking_bg.jpg";

import { useNavigate, Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/*HERO SECTION */}
      <section id="home">
        <div
          className="relative h-screen bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/* Navbar - Improved for mobile */}
          <div className="fixed top-0 left-0 w-full z-50 text-white bg-black/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">
              <h1 className="text-3xl font-bold">Kaffen</h1>

              <ul className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 md:gap-x-12 text-sm md:text-base">
                <li><a href="#home" className="hover:text-[#b99272] transition">Home</a></li>
                <li><a href="#about" className="hover:text-[#b99272] transition">About</a></li>
                <li><Link to="/menu" className="hover:text-[#b99272] transition">Menu</Link></li>
                <li><a href="#contact" className="hover:text-[#b99272] transition">Contact</a></li>
              </ul>

              <button
                onClick={() => navigate("/booking")}
                className="border border-[#c7a17a] px-6 py-2.5 hover:bg-[#c7a17a] hover:text-black transition rounded text-sm md:text-base whitespace-nowrap w-full md:w-auto"
              >
                Book Table
              </button>
            </div>
          </div>

          {/* Hero Content - Better responsive text */}
          <div className="max-w-7xl mx-auto px-5 sm:px-6 md:pl-12 lg:pl-40 text-white text-center md:text-left pt-16 md:pt-0">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Welcome to the Kaffen</h3>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 leading-tight">
              The London <br className="hidden sm:block" /> Coffee House
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
              <button
                onClick={() => navigate("/menu")}
                className="bg-[#b99272] text-white px-8 py-3.5 rounded-sm text-base font-medium hover:bg-[#a67f5f] transition"
              >
                Explore More
              </button>

              <button
                onClick={() => navigate("/delivery")}
                className="bg-[#0e1317] text-white px-8 py-3.5 rounded-sm text-base font-medium hover:bg-[#1a2128] transition"
              >
                Get Delivery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/*  ABOUT SECTION  */}
      <section id="about" className="bg-black py-16 md:py-20">
        <div className="flex flex-col gap-16 md:gap-20 px-5 sm:px-6 md:px-10">
          {/* Top text + chef image */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-[#b99272] font-semibold text-2xl">About Us</h2>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-white leading-tight">
                Organic & Fresh Coffee <br className="hidden md:block" /> Provider Center
              </h1>

              <p className="mt-6 text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Organic & Fresh Coffee Provider Center is dedicated to delivering
                high-quality coffee made from carefully selected organic beans.
                We focus on freshness, sustainability, and rich flavor to create
                a perfect cup for every lover.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-5 mt-10 bg-[#b99272] p-6 rounded-xl max-w-md mx-auto lg:mx-0">
                <div
                  className="w-16 h-16 bg-cover bg-center flex-shrink-0 rounded"
                  style={{ backgroundImage: `url(${bg2})` }}
                ></div>
                <h3 className="text-white text-lg text-center sm:text-left">
                  Every cup we serve carries a little piece of our heart.
                </h3>
              </div>
            </div>

            {/* Coffee image */}
            <div
              className="lg:w-1/2 w-full h-[380px] sm:h-[450px] md:h-[500px] bg-contain bg-no-repeat bg-center lg:bg-left"
              style={{ backgroundImage: `url(${bg1})` }}
            ></div>
          </div>

          {/* Three service cards - Fully responsive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden group">
              <img src={c1} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Coffee Menu" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition"></div>
              <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white font-semibold text-2xl text-center px-4">
                Coffee Menu
              </p>
            </div>

            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden group">
              <img src={c2} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Restaurant Menu" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition"></div>
              <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white font-semibold text-2xl text-center px-4">
                Restaurant Menu
              </p>
            </div>

            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden group">
              <img src={c3} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Food Services" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition"></div>
              <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white font-semibold text-2xl text-center px-4">
                Food Services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR MENU SECTION  */}
      <section id="menu">
        <div className="bg-cover bg-no-repeat py-12 md:py-16" style={{ backgroundImage: `url(${m1})` }}>
          <h3 className="text-center text-2xl text-[#b99272] font-semibold">CHOOSE BEST COFFEE</h3>
          <h1 className="text-center text-3xl sm:text-4xl text-white font-bold mt-3 mb-12 px-4">
            Kaffen Popular Coffee Menu
          </h1>

          <div className="bg-black grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16 px-5 sm:px-8 md:px-20 lg:px-40 py-12 md:py-16">
            {/* Menu Item 1 */}
            <div className="flex gap-5 sm:gap-6 items-start">
              <img src={m2} className="h-28 w-28 sm:h-[130px] sm:w-[130px] md:h-[140px] md:w-[140px] object-cover rounded-md flex-shrink-0" alt="Americano" />
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">Americano Coffee</h3>
                <p className="text-gray-400 text-sm">2/3 espresso, 1/3 steamed milk</p>
                <div className="flex items-center gap-4 pt-2">
                  <div className="border-b border-dashed border-[#b99272] flex-1"></div>
                  <span className="text-[#b99272] text-xl font-medium">$4.9</span>
                </div>
              </div>
            </div>

            {/* Menu Item 2 to 6 - Same pattern (I shortened description for consistency) */}
            {[ 
              { img: m3, name: "Espresso Coffee", price: "$4.9" },
              { img: m4, name: "Barista Pouring Syrup", price: "$3.5" },
              { img: m5, name: "Cold Coffee", price: "$6.0" },
              { img: m6, name: "Cappuccino Arabica", price: "$2.8" },
              { img: m7, name: "Milk Cream Coffee", price: "$7.5" }
            ].map((item, index) => (
              <div key={index} className="flex gap-5 sm:gap-6 items-start">
                <img 
                  src={item.img} 
                  className="h-28 w-28 sm:h-[130px] sm:w-[130px] md:h-[140px] md:w-[140px] object-cover rounded-md flex-shrink-0" 
                  alt={item.name} 
                />
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">{item.name}</h3>
                  <p className="text-gray-400 text-sm">2/3 espresso, 1/3 steamed milk</p>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="border-b border-dashed border-[#b99272] flex-1"></div>
                    <span className="text-[#b99272] text-xl font-medium">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA SECTION  */}
      <section id="table-booking">
        <div
          className="bg-cover bg-center bg-no-repeat min-h-[420px] flex flex-col justify-center items-center text-white px-5 text-center"
          style={{ backgroundImage: `url(${b1})` }}
        >
          <h2 className="text-[#b99272] text-xl font-semibold mb-4">NEED A TABLE IN COFFEE HOUSE</h2>

          <h1 className="text-3xl sm:text-4xl font-bold max-w-xl leading-tight">
            Booking Table for you &amp; Family Members
          </h1>

          <button
            onClick={() => navigate("/booking")}
            className="mt-10 bg-[#b99272] px-8 py-3.5 rounded-md text-lg font-medium hover:bg-[#a07d5f] hover:scale-105 transition duration-300"
          >
            Booking Table
          </button>
        </div>
      </section>

      {/* CONTACT SECTION*/}
      <section id="contact">
        <div className="bg-black text-white px-5 sm:px-10 md:px-20 lg:px-40 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            <div>
              <h1 className="text-[#b99272] font-bold text-4xl mb-6">Kaffen</h1>
              <p className="text-gray-400 text-sm leading-6 max-w-xs mx-auto md:mx-0">
                Enjoy the best coffee experience with premium beans and relaxing atmosphere. 
                Perfect place for friends and family.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-6">Working Hours</h2>
              <div className="space-y-4 text-gray-400">
                <p>Sunday - Thursday <br />08:00 am - 09:00 pm</p>
                <p>Friday - Saturday <br />03:00 pm - 09:00 pm</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-6">Contact Us</h2>
              <div className="space-y-3 text-gray-400">
                <p><span className="text-white">Location:</span><br />55 Main Street, New York</p>
                <p><span className="text-white">Email:</span><br />kaffendev@gmail.com</p>
                <p><span className="text-white">Phone:</span><br />+012 (345) 67899</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;