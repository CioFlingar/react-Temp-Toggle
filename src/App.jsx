import { useState } from "react";

import "./input.css";

// Fahrenheit to Celsius: C = (F - 32) * 5/9
const toCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

// Celsius to Fahrenheit: F = (C * 9/5) + 32
const toFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

function App() {
  const [temperature, setTemperature] = useState("");

  const [unit, setUnit] = useState("Celsius");

  const handleTemperatureChange = (event) => {
    setTemperature(event.target.value);
  };

  let convertedTemp = "";

  // Convert state string to a number for math operations
  const inputNum = parseFloat(temperature);

  // Conditional check for empty or invalid input before calculation
  if (!isNaN(inputNum)) {
    if (unit === "Celsius") {
      convertedTemp = toFahrenheit(inputNum).toFixed(2);
    } else {
      convertedTemp = toCelsius(inputNum).toFixed(2);
    }
  }

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
          <h1 className="text-center text-3xl font-bold mb-6">
            Temperature Converter 🌡️
          </h1>

          {/* Unit Selector (New element for Step 4) */}
          <div className="flex justify-center space-x-6 mb-4">
            <button
              onClick={() => setUnit("Celsius")}
              className={`py-1 px-3 rounded-full text-sm font-medium transition-colors ${
                unit === "Celsius"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Input: °C
            </button>
            <button
              onClick={() => setUnit("Fahrenheit")}
              className={`py-1 px-3 rounded-full text-sm font-medium transition-colors ${
                unit === "Fahrenheit"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Input: °F
            </button>
          </div>

          <input
            type="number"
            value={temperature}
            placeholder={`Enter temperature in ${unit}...`}
            onChange={handleTemperatureChange}
            className="w-full p-3 mb-6 text-center border-2 border-gray-300 text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Display results */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Conversion Result</h2>
            <p className="text-lg">
              {unit === "Celsius" ? "Fahrenheit" : "Celsius"}:
              <span className="font-bold ml-2 text-blue-600">
                {convertedTemp} {unit === "Celsius" ? "°F" : "°C"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
