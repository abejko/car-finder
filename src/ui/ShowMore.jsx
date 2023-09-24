import Button from "./Button";

function ShowMore({ displayedCars, totalCars, handleShowMore }) {
  // Show button if logic is true
  const showButton = displayedCars.length < totalCars;

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {showButton && (
        <Button
          btnType="button"
          title="+ More cars"
          containerStyles="bg-grey-0 shadow-md shadow-gray-150 w-full rounded-md text-grey-9 font-bold  "
          handleClick={handleShowMore}
        />
      )}
    </div>
  );
}

export default ShowMore;
