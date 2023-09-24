import { createContext, useContext, useState } from "react";
import { carsData } from "../utils/constants";

const CarContext = createContext();

export function CarContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  // ----------------------------------------------------------- //

  // Show more cars
  const [limit, setLimit] = useState(4);
  const [seeMoreClicks, setSeeMoreClicks] = useState(0);

  const totalCars = carsData.length;

  // Calculate based on seeMoreClicks
  const maxCarsToShow = limit === -1 ? totalCars : (seeMoreClicks + 1) * limit;

  // Display a limited number of cars or all cars if limit is disabled (-1)
  const displayedCars =
    limit === -1 ? totalCars : carsData.slice(0, maxCarsToShow);

  const handleShowMore = () => {
    // Calculate the next limit by adding 2 at next click
    const nextLimit = limit + 4;

    // Update the limit state with the next limit
    setLimit(nextLimit);
  };

  // ----------------------------------------------------------- //

  // Favourites
  const [favorites, setFavorites] = useState([]);

  // ----------------------------------------------------------- //

  // Search Filter
  const [filter, setFilter] = useState({ make: "", model: "", price: "" });

  // Filter the cars based on make, model, and price
  const filteredCars = carsData.filter((car) => {
    const makeMatch =
      filter.make === "" ||
      car.make.toLowerCase().includes(filter.make.toLowerCase());
    const modelMatch =
      filter.model === "" ||
      car.model.toLowerCase().includes(filter.model.toLowerCase());
    const priceMatch =
      filter.price === "" || car.price === parseFloat(filter.price);
    return makeMatch && modelMatch && priceMatch;
  });

  // ----------------------------------------------------------- //

  return (
    <CarContext.Provider
      value={{
        isLoading,
        displayedCars,
        totalCars,
        setSeeMoreClicks,
        handleShowMore,
        favorites,
        setFavorites,
        filter,
        setFilter,
        filteredCars,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

export const useCarContext = () => useContext(CarContext);
