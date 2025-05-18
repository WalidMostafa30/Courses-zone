import { useState } from "react";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import DropDown from "../../common/DropDown/DropDown";
import { FaCartShopping } from "react-icons/fa6";
import arFlag from "../../../assets/images/ar.png";
import engFlag from "../../../assets/images/eng.png";
import { toggleLogin, toggleRegister } from "../../../store/modalsSlice";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../store/userSlice";

const HeaderRight = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [countryDropdown, setCountryDropdown] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ar");

  const languages = [
    { code: "ar", label: "العربية", flag: arFlag },
    { code: "en", label: "English", flag: engFlag },
  ];

  const handleLanguageSelect = (code) => {
    setSelectedLang(code);
    setCountryDropdown(false);
  };

  const handleLogout = () => {
    setUserDropdown(false);
    dispatch(logoutAction());
  };

  const currentLang = languages.find((lang) => lang.code === selectedLang);

  const toggleCountryDropdown = () => {
    setCountryDropdown((prev) => !prev);
    setUserDropdown(false);
  };

  const toggleUserDropdown = () => {
    setUserDropdown((prev) => !prev);
    setCountryDropdown(false);
  };

  return (
    <div className="flex flex-col-reverse xl:flex-row items-center gap-4 xl:gap-2">
      <div className="flex items-center gap-4">
        <Link to="/cart">
          <span className="text-3xl">
            <FaCartShopping />
          </span>
        </Link>

        {/* Language Selector */}
        <div className="relative">
          <button
            className="flex items-center gap-1 cursor-pointer"
            onClick={toggleCountryDropdown}
          >
            <div className="flex items-center gap-1 w-max">
              <img
                src={currentLang.flag}
                className="w-8"
                alt={currentLang.label}
              />
              <p>{currentLang.label}</p>
            </div>
            <span className="text-3xl">
              <IoMdArrowDropdown />
            </span>
          </button>

          <DropDown
            isOpen={countryDropdown}
            onClose={() => setCountryDropdown(false)}
          >
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className="flex items-center gap-1 p-2 cursor-pointer hover:bg-gray-100"
              >
                <img src={lang.flag} className="w-8" alt={lang.label} />
                <p>{lang.label}</p>
              </div>
            ))}
          </DropDown>
        </div>
      </div>

      {/* User Section */}
      <div className="flex items-center gap-2">
        {user ? (
          <div className="relative">
            <h3
              onClick={toggleUserDropdown}
              className="flex items-center gap-1 text-xl font-bold cursor-pointer"
            >
              احمد عطيه <IoMdArrowDropdown className="text-3xl" />
            </h3>

            <DropDown
              isOpen={userDropdown}
              onClose={() => setUserDropdown(false)}
            >
              <Link
                to="/profile"
                className="flex items-center gap-2"
                onClick={() => setUserDropdown(false)}
              >
                <span className="text-2xl p-2 bg-main-clr-1/30 text-main-clr-1 rounded-md">
                  <FaUser />
                </span>
                الملف الشخصى
              </Link>
              <Link
                to="/my-courses"
                className="flex items-center gap-2"
                onClick={() => setUserDropdown(false)}
              >
                <span className="text-2xl p-2 bg-main-clr-1/30 text-main-clr-1 rounded-md">
                  <FaUser />
                </span>
                دوراتى
              </Link>
              <button
                className="flex items-center gap-2 cursor-pointer text-red-700"
                onClick={handleLogout}
              >
                <span className="text-2xl p-2 bg-red-700/30 rounded-md">
                  <IoLogOutOutline />
                </span>
                تسجيل الخروج
              </button>
            </DropDown>
          </div>
        ) : (
          <>
            <button className="myBtn" onClick={() => dispatch(toggleLogin())}>
              <span>
                <FaUser />
              </span>
              الدخول
            </button>
            <button
              className="myBtn"
              onClick={() => dispatch(toggleRegister())}
            >
              <span>
                <FaUserPlus />
              </span>
              انشاء حساب
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderRight;
