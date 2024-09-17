import { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const FormPopup = ({close}) => {
  const [countries, setCountries] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

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
    setShowDropdown(false);
  };

  // Show dropdown when the input is focused
  const handleInputFocus = () => {
    setShowDropdown(true);
  };

  return (
    <div className="hidden lg:flex flex-col fixed h-screen w-screen top-0 left-0 bg-black/80 justify-center items-center z-[60]">
      <form className="flex flex-col  max-w-md mx-auto border bg-green-900 border-gray-500 p-4 rounded-lg shadow-md">
        <div   onClick={close} className="flex justify-end">
          <IoMdCloseCircle className="text-[#ffdb8a] text-3xl"/>
        </div>
        <h2 className="text-2xl font-bold text-[#ffdb8a]">
          Reclaim Your Scammed Money
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-3 w-full h-full py-4">
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
              readOnly //THis is to make the input just read only
              onClick={handleInputFocus}
              onFocus={handleInputFocus} // Show dropdown on focus
            />
            {showDropdown && (
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

          {/* Scam Type Input */}
          <div className="flex flex-col gap-1">
            <label
              className="text-white font-semibold text-xl"
              htmlFor="scamType"
            >
              Scam Type
            </label>
            <input className="p-1 rounded" type="text" required />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <label className="text-white font-semibold text-lg" htmlFor="text">
              The amount you invested
            </label>
            <input className="p-1 rounded" type="text" name="" id="" required />
          </div>
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
