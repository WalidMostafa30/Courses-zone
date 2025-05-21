import { VscChromeClose } from "react-icons/vsc";
import SmallNavBar from "./SmallNavBar";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import LanguageSelector from "../../common/LanguageSelector/LanguageSelector";
import UserSection from "../../common/UserSection/UserSection";

const MobileHeader = ({ mobileNav, setMobileNav }) => {
  return (
    <div
      className={`xl:hidden fixed z-50 w-80 h-[100dvh] top-0 duration-300 shadow-lg ${
        mobileNav ? "end-0" : "-end-full"
      } bg-white p-4 space-y-4 overflow-hidden`}
    >
      <span
        className="text-2xl cursor-pointer bg-main-clr-1 text-white 
        flex items-center justify-center w-10 h-10 rounded-full"
        onClick={() => setMobileNav(false)}
      >
        <VscChromeClose />
      </span>

      <div className="border-b border-gray-400 pb-4">
        <div className="flex items-center justify-center flex-wrap gap-4">
          <UserSection />
          <Link to="/cart">
            <span className="text-3xl">
              <FaCartShopping />
            </span>
          </Link>
          <LanguageSelector />
        </div>
      </div>

      <SmallNavBar setMobileNav={setMobileNav} />
    </div>
  );
};

export default MobileHeader;
