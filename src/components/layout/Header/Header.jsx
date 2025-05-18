import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import MobileHeader from "./MobileHeader/MobileHeader";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className="bg-bg-clr shadow-md">
      <div className="myContainer content-center h-[var(--header-height)] flex items-center justify-between">
        <div className="text-left">
          <p className="text-2xl font-bold text-main-clr-1">Courses</p>
          <p className="text-2xl font-bold text-main-clr-2">Zone</p>
        </div>

        <span
          className="text-3xl cursor-pointer xl:hidden"
          onClick={() => setMobileNav(true)}
        >
          <HiMenuAlt2 />
        </span>

        <DesktopHeader />

        <MobileHeader mobileNav={mobileNav} setMobileNav={setMobileNav} />
      </div>
    </header>
  );
};

export default Header;
