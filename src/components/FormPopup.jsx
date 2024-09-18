import { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const scamOptions = [
  "Cryptocurrency",
  "Forex",
  "Romance",
  "Market Place",
  "Taxation",
  "Trading",
  "Others",
];

const investmentAmounts = [
  "Less than $5,000",
  "$5,000 - $10,000",
  "$10,000 - $20,000",
  "$20,000 - $40,000",
  "$40,000 - $80,000",
  "$80,000 - $100,000",
  "$100,000 - $150,000",
  "$150,000 - and above",
];

const FormPopup = ({ close }) => {
  const [countries, setCountries] = useState([]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showScamDropdown, setShowScamDropdown] = useState(false);
  const [selectedScam, setSelectedScam] = useState("");
  const [showAmountDropdown, setShowAmountDropdown] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState("");

  // Fetch country data from an API
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
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
  const handleSelectScam = (scam) => {
    setSelectedScam(scam);
    setShowScamDropdown(false);
  };

  // Handle investment amount selection from the dropdown
  const handleSelectAmount = (amount) => {
    setSelectedAmount(amount);
    setShowAmountDropdown(false);
  };

  // Show dropdown when the input is focused
  const handleCountryInputFocus = () => {
    setShowCountryDropdown(true);
  };

  const handleScamInputFocus = () => {
    setShowScamDropdown(true);
  };

  const handleAmountInputFocus = () => {
    setShowAmountDropdown(true);
  };

  return (
    <div className="hidden lg:flex flex-col fixed py-[6rem] h-screen w-screen top-0 left-0 bg-black/80 justify-center items-center z-[60]">
      <form className="flex flex-col max-w-md mx-auto border bg-green-900 border-gray-500 p-4 rounded-lg shadow-md">
        <div onClick={close} className="flex justify-end">
          <IoMdCloseCircle className="text-[#ffdb8a] text-3xl" />
        </div>
        <h2 className="text-2xl font-bold text-[#ffdb8a]">
          Reclaim Your Scammed Money
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full h-full py-4">
          {/* First Name Input */}
          <div className="flex flex-col gap-1">
            <label
              className="text-white font-semibold text-xl"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input className="p-1 rounded" type="text" required />
          </div>

          {/* Last Name Input */}
          <div className="flex flex-col gap-1">
            <label
              className="text-white font-semibold text-xl"
              htmlFor="lastName"
            >
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
            <label
              className="text-white font-semibold text-xl"
              htmlFor="number"
            >
              Mobile Number
            </label>
            <input className="p-1 rounded" type="number" required />
          </div>

          {/* Country Dropdown */}
          <div className="flex flex-col gap-1 relative">
            <label
              className="text-white font-semibold text-xl"
              htmlFor="country"
            >
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
            <label
              className="text-white font-semibold text-xl"
              htmlFor="scamType"
            >
              Scam Type
            </label>
            <input
              className="p-1 rounded bg-white border border-gray-300 cursor-pointer"
              value={selectedScam || "-"}
              readOnly
              onClick={handleScamInputFocus}
              onFocus={handleScamInputFocus}
            />
            {showScamDropdown && (
              <div className="absolute top-full left-0 right-0 max-h-40 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-10">
                {scamOptions.map((scam, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelectScam(scam)}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {scam}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Investment Amount Dropdown */}
          <div className="flex flex-col gap-1 relative">
            <label
              className="text-white font-semibold text-sm"
              htmlFor="amount"
            >
              The amount you invested
            </label>
            <input
              className="p-1 rounded bg-white border border-gray-300 cursor-pointer"
              value={selectedAmount || "-"}
              readOnly
              onClick={handleAmountInputFocus}
              onFocus={handleAmountInputFocus}
            />
            {showAmountDropdown && (
              <div className="absolute top-full left-0 right-0 max-h-40 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-10">
                {investmentAmounts.map((amount, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelectAmount(amount)}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {amount}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Case Details */}
        <div>
          <div className="flex flex-col gap-1 mb-4">
            <label
              htmlFor="message"
              className="text-white font-semibold text-lg"
            >
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
          className="bg-[#ffdb8a] text-green-900 py-2 px-4 rounded hover:bg-[#ffdb8a]/30 font-bold"
        >
          File Your Complaint
        </button>
      </form>
    </div>
  );
};

export default FormPopup;
