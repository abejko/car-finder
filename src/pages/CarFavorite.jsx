import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCarContext } from "../context/carContext";
import FavoriteCarList from "../components/FavoriteCarList";
import { HiChevronLeft } from "react-icons/hi";

function CarFavorite() {
  const { id } = useParams();
  const { favorites } = useCarContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Ensure the ID is a valid integer
  const carId = parseInt(id);

  // Debug logging
  console.log("Requested Car ID:", carId);
  console.log("Favorites Array:", favorites);

  // Find the single favorite car based on carId
  const favoriteCar = favorites.find((car) => car.id === carId);
  console.log("favoriteCar:", favoriteCar);

  // Debug logging
  console.log("Favorite Car:", favoriteCar);

  let content;
  if (favorites.length === 0)
    // Handle the case where the car is not found in favorites
    content = (
      <div className="p-4 text-center bg-grey-0">
        <Link to="/">
          Go back to the home page Car not found in favorites.{" "}
          <strong>Go back to the home page</strong>
        </Link>
      </div>
    );

  // const pageContentRef = useRef(null);

  return (
    <div className="page-container">
      <div className="favorites__navigation-link container ">
        <div className="backButton__container">
          <Link to="/" className="inline-flex items-center">
            <HiChevronLeft className="text-lg text-secondary" />
            <span className="backButton_link font-medium">Back</span>
          </Link>
        </div>
      </div>
      <div className="container pt-3">
        <h1 className="car-favorites__title">
          My favorites (<span>{favorites.length}</span>)
        </h1>
        {content}
      </div>
      {/* Render the list of favorite cars */}
      <div>
        <FavoriteCarList favorites={favorites} />
      </div>
    </div>
  );
}

export default CarFavorite;
