import { useEffect, useState } from "react";

const options = [
  "Cryptocurrency",
  "Forex",
  "Romance",
  "Market Place",
  "Taxation",
  "Trading",
  "Others",
];

const amount = [
  "Less than $5,000",
  "$5,000 - $10,000",
  "$10,000 - $20,000",
  "$20,000 - $40,000",
  "$40,000 - $80,000",
  "$80,000 - $100,000",
  "$100,000 - $150,000",
  "$150,000 - and above",
]

const Form = () => {
  const [countries, setCountries] = useState([]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showScamDropdown, setShowScamDropdown] = useState(false);
  const [showAmountDropdown, setShowAmountDropdown] = useState(false);
  const [selectedScamType, setSelectedScamType] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");

  // Fetch country data from an API
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const countryNames = data.map((country) => country.name.common);
        const sortedCountries = countryNames.sort(); // Sort alphabetically
        setCountries(sortedCountries);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  // Handle country selection from the dropdown
  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
  };

  // Handle scam type selection from the dropdown
  const handleSelectScamType = (scamType) => {
    setSelectedScamType(scamType);
    setShowScamDropdown(false);
  };

  // Show dropdown when the input is focused
  const handleCountryInputFocus = () => {
    setShowCountryDropdown(true);
  };

  const handleScamTypeInputFocus = () => {
    setShowScamDropdown(true);
  };

  // Handle amount type selection from the dropdown
  const handleSelectAmount = (amount) => {
    setSelectedAmount(amount);
    setShowAmountDropdown(false);
  }
  const handleAmountInputFocus = () => {
    setShowAmountDropdown(true);
  }
 
  return (
    <div>
      <form className="flex flex-col  max-w-md mx-auto border bg-green-900 border-gray-500 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-[#ffdb8a]">
          Reclaim Your Scammed Money
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-3 w-full h-full py-4">
          {/* First Name Input */}
          <div className="flex flex-col gap-1">
            <label className="text-white font-semibold text-xl" htmlFor="firstName">
              First Name
            </label>
            <input className="p-1 rounded" type="text" required />
          </div>

          {/* Last Name Input */}
          <div className="flex flex-col gap-1">
            <label className="text-white font-semibold text-xl" htmlFor="lastName">
              Last Name
            </label>
            <input className="p-1 rounded" type="text" required />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-1">
            <label className="text-white font-semibold text-xl" htmlFor="email">
              Email
            </label>
            <input className="p-1 rounded" type="email" required />
          </div>

          {/* Mobile Number Input */}
          <div className="flex flex-col gap-1">
            <label className="text-white font-semibold text-xl" htmlFor="number">
              Mobile Number
            </label>
            <input className="p-1 rounded" type="number" required />
          </div>

          {/* Country Dropdown */}
          <div className="flex flex-col gap-1 relative">
            <label className="text-white font-semibold text-xl" htmlFor="country">
              Select Country
            </label>
            <input
              className="p-1 rounded bg-white border border-gray-300 cursor-pointer"
              value={selectedCountry || "-"}
              readOnly
              onClick={handleCountryInputFocus}
              onFocus={handleCountryInputFocus}
            />
            {showCountryDropdown && (
              <div className="absolute top-full left-0 right-0 max-h-40 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-10">
                {countries.map((country, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelectCountry(country)}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {country}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Scam Type Dropdown */}
          <div className="flex flex-col gap-1 relative">
            <label className="text-white font-semibold text-xl" htmlFor="scamType">
              Scam Type
            </label>
            <input
              className="p-1 rounded bg-white border border-gray-300 cursor-pointer"
              value={selectedScamType || "-"}
              readOnly
              onClick={handleScamTypeInputFocus}
              onFocus={handleScamTypeInputFocus}
            />
            {showScamDropdown && (
              <div className="absolute top-full left-0 right-0 max-h-40 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-10">
                {options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelectScamType(option)}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>


        <div>
          <div className="flex flex-col gap-1">
            <label className="text-white font-semibold text-lg" htmlFor="amount">
              The amount you invested
            </label>
            <input className="p-1 rounded" type="text" required />
          </div>

          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="message" className="text-white font-semibold text-lg">
              Brief us about your case*
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#ffdb8a] text-black py-2 px-4 rounded hover:bg-[#ffdb8a]/30"
        >
          Get Free Case Evaluation
        </button>
      </form>
    </div>
  );
};

export default Form;
