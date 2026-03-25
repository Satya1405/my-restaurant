import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import bk from "./assets/coffee_mug.jpg";

function Booking() {
    const navigate = useNavigate(); 

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        people: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for empty fields
        for (let key in form) {
            if (!form[key]) {
                alert(`${key} is required`);
                return;
            }
        }

        // 1️⃣ Get existing bookings from localStorage
        const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

        // 2️⃣ Add new booking
        const newBooking = { ...form, id: Date.now() }; 
        existingBookings.push(newBooking);

        // 3️⃣ Save back to localStorage
        localStorage.setItem("bookings", JSON.stringify(existingBookings));

        // 4️⃣ Show confirmation and reset form
        alert("Table booked successfully!");
        setForm({
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            people: ""
        });
    };

    return (
        <div
            className="bg-no-repeat bg-cover min-h-screen flex items-center justify-center py-12 px-4"
            style={{ backgroundImage: `url(${bk})` }}
        >
            <div className="max-w-md w-full mx-auto p-6 md:p-8 bg-[#100200] rounded-2xl shadow-2xl">
                <h2 className="text-3xl md:text-4xl mb-8 text-white text-center font-bold tracking-wide">
                    Book Your Table
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full p-3.5 border border-gray-600 rounded-xl text-white placeholder-gray-400 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full p-3.5 border border-gray-600 rounded-xl text-white placeholder-gray-400 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full p-3.5 border border-gray-600 rounded-xl text-white placeholder-gray-400 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base"
                    />
                    <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className="w-full p-3.5 border border-gray-600 rounded-xl text-white placeholder-gray-400 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base"
                    />
                    <input
                        type="time"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        className="w-full p-3.5 border border-gray-600 rounded-xl text-white placeholder-gray-400 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base"
                    />
                    <input
                        type="number"
                        name="people"
                        placeholder="Number of People"
                        value={form.people}
                        onChange={handleChange}
                        className="w-full p-3.5 border border-gray-600 rounded-xl text-white placeholder-gray-400 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base"
                    />

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <button
                            type="button"
                            onClick={() => navigate("/")}
                            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 transition-colors duration-200 rounded-xl px-8 py-3.5 text-white font-semibold text-base"
                        >
                            Back to Home
                        </button>
                        <button
                            type="submit"
                            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 transition-colors duration-200 px-8 py-3.5 rounded-xl text-white font-semibold text-base"
                        >
                            Book Table
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Booking;