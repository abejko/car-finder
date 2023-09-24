import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCarContext } from "../context/carContext";
import { useEffect } from "react";

function FavoriteCarList({ favorites }) {
  const { setFavorites } = useCarContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRemoveCar = (event, idToRemove) => {
    event.preventDefault(); // Prevent the default link behavior

    // Use the idToRemove to filter out the car you want to remove
    const updatedCar = favorites.filter((favCar) => favCar.id !== idToRemove);
    setFavorites(updatedCar);
  };
  return (
    <div>
      {favorites.map((favoriteCar) => (
        <Link to={`/${favoriteCar.id}`} key={favoriteCar.id}>
          <div>
            {/* Render the car details for each favorite car */}
            <div className="car-favorites container">
              <div className=" flex flex-col gap-3 ">
                <div className="car-favorites__image" to={`/${favoriteCar.id}`}>
                  <img
                    src={favoriteCar.image}
                    alt="car model"
                    className="object-contain flex-1  mix-blend-darken"
                    width={280}
                  />
                </div>
              </div>
              {/* Car title */}
              <div className="car-favorites__content ">
                <div className="flex items-center justify-between gap-4 ">
                  <h2 className="font-semibold text-3xl capitalize ">
                    {favoriteCar.make} {favoriteCar.model}
                  </h2>
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={(event) => handleRemoveCar(event, favoriteCar.id)}
                  >
                    <RiDeleteBin6Line className="text-secondary text-lg" />
                    <span className="text-secondary ">Delete</span>
                  </div>
                </div>

                <span className="text-2xl font-medium py-4  ">
                  € {favoriteCar.price}
                </span>
                {/* Car properties */}

                <div className="flex flex-row text-sm gap-x-10 flex-wrap ">
                  {Object.entries(favoriteCar)
                    .slice(3) // Start from the 3rd property (index 2)
                    .map(([key, value]) => (
                      <div
                        className=" justify-between border-b-[1px] p-2 border-grey-4  w-[25%]  grow"
                        key={key}
                      >
                        <div>
                          <h4 className="text-grey capitalize text-thin text-grey-8">
                            {key.split("_").join(" ")}
                          </h4>
                        </div>
                        <div>
                          <p className="text-black-100 font-semibold">
                            {value}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default FavoriteCarList;
