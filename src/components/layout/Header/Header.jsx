import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import MobileHeader from "./MobileHeader";
import UserSection from "../../common/UserSection/UserSection";
import NavBar from "./NavBar";
import LanguageSelector from "../../common/LanguageSelector/LanguageSelector";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className="bg-bg-clr shadow-md">
      <div className="myContainer content-center h-[var(--header-height)] flex items-center justify-between">
        <div className="text-left">
          <p className="text-3xl font-bold text-main-clr-1">Courses</p>
          <p className="text-3xl font-bold text-main-clr-2">Zone</p>
        </div>
        <span
          className="text-4xl cursor-pointer xl:hidden"
          onClick={() => setMobileNav(true)}
        >
          <HiMenuAlt2 />
        </span>

        <div className="hidden xl:block">
          <NavBar />
        </div>

        <div className="hidden xl:flex items-center gap-4">
          <Link to="/cart">
            <span className="text-3xl">
              <FaCartShopping />
            </span>
          </Link>
          <LanguageSelector />
          <UserSection hideRegister={true} />
        </div>

        <MobileHeader mobileNav={mobileNav} setMobileNav={setMobileNav} />
      </div>
    </header>
  );
};

export default Header;
