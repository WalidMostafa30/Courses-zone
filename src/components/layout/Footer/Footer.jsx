import { FaFacebook, FaLinkedin } from "react-icons/fa";
import NavBar from "../Header/NavBar";
import SmallNavBar from "../Header/SmallNavBar";

const Footer = () => {
  return (
    <footer className="bg-main-clr-1 py-8">
      <div className="myContainer flex flex-col items-center justify-center gap-5">
        <div className="text-left">
          <p className="text-4xl font-bold text-white">Courses</p>
          <p className="text-4xl font-bold text-main-clr-2">Zone</p>
        </div>

        <div className="hidden lg:block text-white">
          <NavBar />
        </div>
        <div className="lg:hidden me-auto text-white">
          <SmallNavBar />
        </div>

        <ul className="flex items-center gap-4">
          <a href="/" className="text-main-clr-2 text-5xl">
            <FaFacebook />
          </a>
          <a href="/" className="text-main-clr-2 text-5xl">
            <FaLinkedin />
          </a>
          <a href="/" className="text-main-clr-2 text-5xl">
            <FaFacebook />
          </a>
        </ul>

        <p className="w-full border-t pt-4 text-center text-lg text-white">
          جميع الجقوق محفوظة &copy;{" "}
          <span className="text-main-clr-2">2023</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
