import logo from "../assets/car-finder-logo-bg-white.svg";
import { footerLinks } from "../utils/constants";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightHolder = "Andi Bejko";
  const copyrightNotice = `Copyright © ${copyrightHolder} ${currentYear}. All rights reserved.`;

  return (
    <footer className="footer flex flex-col text-black-100  mt-5 border-t border-gray-100">
      <div className="container flex max-md:flex-col flex-wrap justify-between gap-5  py-10  ">
        <div className="cursor-pointer flex flex-col justify-start items-start gap-6">
          <img src={logo} alt="logo" width={150} className="object-contain" />
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link ">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url}>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>{copyrightNotice}</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
