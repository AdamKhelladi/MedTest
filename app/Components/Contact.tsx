"use client";

import { useState } from "react";

export default function Page() {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    setInputValue("");
  };

  return (
    <div className="px-4 md:px-8 py-6 mb-14 text-white rounded-xl bg-gradient-to-r from-cyan-900 to-purple-500 lg:flex lg:justify-between lg:items-center">
      <div className="mb-8 lg:mb-0">
        <h1 className="font-bold text-4xl mb-4 w-80">
          Ready to Get Our New Stuff?
        </h1>
        <div className="bg-gray-50 p-2 rounded-4xl w-80">
          <input
            type="email"
            placeholder="Your Email"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-50 mr-2 outline-none text-sky-900 p-2"
          />
          <button
            type="button"
            className="rounded-4xl px-7 py-2 cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 duration-400 hover:bg-gradient-to-bl font-medium"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>

      <div className="lg:mt-auto">
        <h3 className="font-bold text-xl mb-2">Need Help or Support?</h3>

        <p className="text-gray-200 text-sm leading-relaxed max-w-sm">
          We’re here to help with any questions about our products and services.
          Contact us anytime.
        </p>
      </div>
    </div>
  );
}
