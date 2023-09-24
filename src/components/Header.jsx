import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { FaStar } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useEffect } from "react";
import { useCarContext } from "../context/carContext";
import logo from "../assets/car-finder-logo-bg-dark.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { favorites } = useCarContext();

  const firstFavoriteCar = favorites.length > 0 ? favorites[0] : null;

  // Extract the id of the first favorite car
  const id = firstFavoriteCar ? firstFavoriteCar.id : null;

  const handelMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // disable scrollbar when mobile menu isOpen
  useEffect(() => {
    if (isOpen) document.body.classList.add("noscroll");

    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [isOpen]);

  return (
    <header className="header" id="top">
      <div className="container flex items-center justify-between">
        <div
          className={`open__icon icon ${isOpen ? "hidden " : ""}`}
          onClick={handelMobileMenu}
        >
          <Link>
            <RxHamburgerMenu />
          </Link>
        </div>
        <div
          className={`close__icon icon  ${isOpen ? "" : "hidden"}`}
          onClick={handelMobileMenu}
        >
          <Link>
            <IoCloseSharp />
          </Link>
        </div>
        <div className="logo ">
          <Link to="/">
            <img src={logo} alt="" width={150} />
          </Link>
        </div>

        <nav className={`nav ${isOpen ? "left-0 " : "-left-full "}`}>
          <ul className="nav__left">
            <li className="border-b border-grey-1 lg:border-transparent">
              <Button
                title="Used and New Cars"
                btnType="button"
                containerStyles="nav__btn "
              />
            </li>
            <li className="border-b border-grey-1 lg:border-transparent">
              <Button
                title="Motorbikes"
                btnType="button"
                containerStyles="nav__btn"
              />
            </li>
            <li>
              <Button
                title="Trucks"
                btnType="button"
                containerStyles="nav__btn"
              />
            </li>
          </ul>
          <ul className="nav__right">
            <li>
              <Button
                title="English"
                btnType="button"
                containerStyles="nav__btn"
              />
            </li>
          </ul>
        </nav>

        <Link to={`/favorite/${id}`}>
          <span className="favourites__icon icon">
            <FaStar />
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
