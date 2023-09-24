import Button from "../ui/Button";
import hero from "../assets/hero.png";

function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero  ">
      <div className="container flex lg:flex-row flex-col  pb-[3rem]">
        <div className="flex-1 mt-[3rem] bg-grey-1 ">
          <h1 className="hero__title">Swift Car Rentals for Your Journey.</h1>
          <p className="hero__subtitle">
            AutoGateSeven is your one-stop destination for all your car-related
            needs, offering a quick and super easy way to find, book, and rent a
            car.
          </p>
          <Button
            title="Explore cars"
            containerStyles="bg-primary text-gray-9 rounded-full sm:ml-16 m-8"
            handleClick={handleScroll}
          />
        </div>

        <div className="hero__image-container ">
          <div className="hero__image ">
            <img src={hero} alt="hero" className="object-contain " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
