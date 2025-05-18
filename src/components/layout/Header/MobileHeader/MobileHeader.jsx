import { VscChromeClose } from "react-icons/vsc";
import HeaderRight from "../HeaderRight";
import NavBar from "../NavBar";

const MobileHeader = ({ mobileNav, setMobileNav }) => {
  return (
    <div
      className={`2xl:hidden fixed z-50 w-96 h-[100dvh] left-0 top-0 duration-300 shadow-lg ${
        mobileNav ? "translate-x-0" : "translate-x-[-100%]"
      } bg-white p-4 flex flex-col gap-10 overflow-hidden`}
    >
      <span
        className="2xl:hidden text-2xl cursor-pointer bg-main-clr-1 text-white flex items-center justify-center w-10 h-10 rounded-full"
        onClick={() => setMobileNav(false)}
      >
        <VscChromeClose />
      </span>

      <div className="border-b py-4">
        <HeaderRight />
      </div>

      <NavBar setMobileNav={setMobileNav} />
    </div>
  );
};

export default MobileHeader;
