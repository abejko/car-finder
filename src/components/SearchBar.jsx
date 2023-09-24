import { useState } from "react";
import { useCarContext } from "../context/carContext";
import { carsData } from "../utils/constants";
import Button from "../ui/Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

function SearchBar() {
  const [selectedMake, setSelectedMake] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const [searchPrice, setSearchPrice] = useState("");

  const { setFilter } = useCarContext();

  const uniqueMakes = Array.from(new Set(carsData.map((car) => car.make)));

  // Extract unique price values
  const uniquePrices = Array.from(new Set(carsData.map((car) => car.price)));

  // Sort unique prices
  const sortedPrices = uniquePrices.sort((a, b) => a - b);

  const handleSearch = (e) => {
    e.preventDefault();

    // Check if at least one search criteria is filled in
    if (selectedMake === "" && searchModel === "" && searchPrice === "") {
      alert("Please fill in at least one search criteria");
      return;
    }

    // Update the filter state in the context with the selected make, model, and price
    setFilter({ make: selectedMake, model: searchModel, price: searchPrice });
  };

  const [openSearch, setOpenSearch] = useState(false);

  const handleToggleSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div className="searchbar   ">
      <div className="searchbar__open" onClick={handleToggleSearch}>
        <Button
          icon={<BiSearch />}
          title={openSearch ? "Close search" : "Open search"}
          containerStyles=" text-white content w-full "
          rightIcon={
            openSearch ? (
              <IoIosArrowUp className="text-2xl pl-2" />
            ) : (
              <IoIosArrowDown className="text-2xl pl-2" />
            )
          }
        ></Button>
      </div>

      {/* Form */}

      <form
        className={`searchbar ${
          openSearch ? "max-sm:visible" : "max-sm:hidden"
        }  `}
        onSubmit={handleSearch}
      >
        {/* Search by make */}

        <div className="searchbar__item">
          <select
            name="make"
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
            className="searchbar__input   "
          >
            <option value="">Select Make</option>
            {uniqueMakes.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>
        {/* Search by model */}
        <div className="searchbar__item">
          <input
            type="text"
            name="model"
            value={searchModel}
            onChange={(e) => setSearchModel(e.target.value)}
            placeholder="Model"
            className="searchbar__input"
          />
        </div>
        {/* Search by price */}
        <div className="searchbar__item">
          <select
            name="price"
            value={searchPrice}
            onChange={(e) => setSearchPrice(e.target.value)}
            className="searchbar__input"
          >
            <option value="">Select Price</option>
            {sortedPrices.map((price, index) => (
              <option key={index} value={price}>
                {price}
              </option>
            ))}
          </select>
        </div>
        <div className="searchbar__item">
          <button type="submit" className="searchbar__button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
