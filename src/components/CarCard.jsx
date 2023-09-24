import Button from "../ui/Button";
import { TbSteeringWheel } from "react-icons/tb";
import { GiPriceTag } from "react-icons/gi";
import rightArrow from "../assets/right-arrow.svg";
import { Link } from "react-router-dom";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useCarContext } from "../context/carContext";

function CarCard({
  make,
  model,
  image,
  gearbox,
  id,
  price,
  mileage,
  firstRegistration,
  fuelType,
}) {
  const { favorites, setFavorites } = useCarContext();

  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    if (isFavorite) {
      // If already in favourites, remove it
      const updatedFvourites = favorites.filter((favCar) => favCar.id !== id);
      setFavorites(updatedFvourites);
    } else {
      // If not favorites, add it
      const carToAdd = {
        id,
        image,
        price,
        make,
        model,
        gearbox,
        // Additional properties
        mileage,
        firstRegistration,
        fuelType,
      };
      setFavorites([...favorites, carToAdd]);
    }
  };

  // Persist state
  useEffect(() => {
    // Check if the car is in favorites to determine the initial state
    setIsFavorite(favorites.some((car) => car.id === id));
  }, [favorites, id]);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title ">
          {make} <span className="block text-[18px] font-light">{model}</span>
        </h2>
        <div onClick={handleToggleFavorite}>
          <span className="car-card__favourites-icon-line">
            {isFavorite ? <HiStar /> : <HiOutlineStar />}
          </span>
        </div>
      </div>

      <div className="relative  w-full h-40 my-3 object-contain">
        <img
          src={image}
          alt="car model"
          className="object-contain  w-full h-full mix-blend-darken"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey"></div>

        <div className="car-card__btn-container"></div>
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <TbSteeringWheel className="text-xl text-indigo-400" />
            <p className="car-card__icon-text text-xl font-bold">{gearbox}</p>
          </div>
          <div className="car-card__icon">
            <GiPriceTag className="text-xl text-orange-400 " />
            <p className="car-card__icon-text text-xl font-bold">€ {price}</p>
          </div>
        </div>

        <Link className="car-card__btn-container" to={`/${id}`}>
          <Button
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary"
            textStyles=" text-gray-9 text-[14px] leading-[17px] font-bold"
            rightIcon={rightArrow}
          />
        </Link>
      </div>
    </div>
  );
}

export default CarCard;
