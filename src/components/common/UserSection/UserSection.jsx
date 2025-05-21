import { useState } from "react";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import DropDown from "../../common/DropDown/DropDown";
import { toggleLogin, toggleRegister } from "../../../store/modalsSlice";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../store/userSlice";
import { Link } from "react-router-dom";
import MyButton from "../MyButton/MyButton";

const UserSection = ({ hideRegister = false }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [userDropdown, setUserDropdown] = useState(false);

  const handleLogout = () => {
    setUserDropdown(false);
    dispatch(logoutAction());
  };

  return (
    <div className="flex items-center gap-2">
      {user ? (
        <div className="relative">
          <h3
            onClick={() => setUserDropdown((prev) => !prev)}
            className="flex items-center gap-1 text-xl font-bold cursor-pointer"
          >
            احمد عطيه <IoMdArrowDropdown className="text-3xl" />
          </h3>

          <DropDown isOpen={userDropdown}>
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
          <MyButton
            title="الدخول"
            onClick={() => dispatch(toggleLogin())}
            icon={<FaUser />}
          />

          <div className={`${hideRegister ? "hidden 2xl:block" : ""}`}>
            <MyButton
              title="انشاء حساب"
              onClick={() => dispatch(toggleRegister())}
              icon={<FaUserPlus />}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default UserSection;
