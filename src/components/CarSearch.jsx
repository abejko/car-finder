import CarCard from "./CarCard";
import ShowMore from "../ui/ShowMore";
import SearchBar from "./SearchBar";
import { useCarContext } from "../context/carContext";
import { carsData } from "../utils/constants";

function CarSearch() {
  const {
    isLoading,
    displayedCars,
    totalCars,
    handleShowMore,
    filter,
    filteredCars,
  } = useCarContext();

  const isDataEmpty =
    !Array.isArray(displayedCars) || displayedCars.length < 1 || !displayedCars;

  const filteredDisplayedCars = displayedCars.filter((car) => {
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

  const isFilterApplied = filter.make || filter.model || filter.price;

  return (
    <div className="mt-12  padding-y container" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore our cars you might like</p>
      </div>

      <div className="home__filters">
        <SearchBar />
      </div>

      {/* Loading Cars */}
      {isLoading ? (
        <div>Loading...</div>
      ) : !isDataEmpty ? (
        <section>
          {/* Car card */}
          <div className="home__cars-wrapper">
            {filteredDisplayedCars.length > 0
              ? filteredDisplayedCars.map((car) => (
                  <CarCard
                    car={car}
                    key={car.id}
                    id={car.id}
                    make={car.make}
                    model={car.model}
                    image={car.image}
                    gearbox={car.gearbox}
                    price={car.price}
                    mileage={car.mileage}
                    firstRegistration={car.firstRegistration}
                    fuelType={car.fuelType}
                  />
                ))
              : filteredCars.map((car) => (
                  <CarCard
                    car={car}
                    key={car.id}
                    id={car.id}
                    make={car.make}
                    model={car.model}
                    image={car.image}
                    gearbox={car.gearbox}
                    price={car.price}
                    mileage={car.mileage}
                    firstRegistration={car.firstRegistration}
                    fuelType={car.fuelType}
                  />
                ))}
          </div>

          {/* ShowMore logic for initially displayed cars */}
          {!isFilterApplied && (
            <ShowMore
              handleShowMore={handleShowMore}
              totalCars={totalCars}
              displayedCars={displayedCars}
            />
          )}
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>No matching cars found.</p>
        </div>
      )}
    </div>
  );
}

export default CarSearch;
