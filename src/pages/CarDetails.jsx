import { Link, useParams } from "react-router-dom";
import { carsData } from "../utils/constants";
import { useEffect } from "react";
import { HiChevronLeft } from "react-icons/hi";

function CarDetails() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the single product based on id
  const car = carsData.find((item) => item.id === parseInt(id));

  return (
    <div className="h-[100vh]">
      <div className="navigation__link container ">
        <div className="backButton__container">
          <Link to="/" className="inline-flex items-center">
            <HiChevronLeft className="text-lg text-secondary" />
            <span className="backButton_link font-medium">Back</span>
          </Link>
        </div>
      </div>
      <div className="car-details container">
        <div className="lg:flex-auto flex flex-col gap-3 ">
          <div className="car-details__image  ">
            <img
              src={car.image}
              alt="car model"
              className="object-contain flex-1 mix-blend-darken"
              width={280}
            />
          </div>
        </div>
        {/* Car title */}
        <div className="car-details__content">
          <h2 className="font-semibold text-3xl capitalize pb-6">
            {car.make} {car.model}
          </h2>
          <hr />{" "}
          <span className="text-2xl font-medium pt-4">€ {car.price}</span>
          {/* Car properties */}
          <div className="mt-3 flex flex-wrap gap-4">
            {Object.entries(car)
              .slice(2) // Start from the 3rd property (index 2)
              .map(([key, value]) => (
                <div
                  className="flex justify-between gap-5 w-full text-right"
                  key={key}
                >
                  <h4 className="text-grey capitalize">
                    {key.split("_").join(" ")}
                  </h4>
                  <p className="text-black-100 font-semibold">{value}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
