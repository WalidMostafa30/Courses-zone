import React, { useState } from "react";
import DropDown from "../../common/DropDown/DropDown";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropleft } from "react-icons/io";

const NavBar = () => {
  const [linkDropDown, setLinkDropDown] = useState(false);

  const handleOpenLinkDropDown = (e) => {
    e.preventDefault();
    setLinkDropDown((prev) => !prev);
  };

  return (
    <nav className="flex flex-col xl:flex-row items-center justify-center gap-4">
      <NavLink to="/" className="navLink">
        <p className="text-xl xl:text-base 2xl:text-xl font-semibold duration-200 flex items-center gap-2">
          الرئيسية
        </p>
      </NavLink>

      <NavLink to="/about-trainer" className="navLink">
        <p className="text-xl xl:text-base 2xl:text-xl font-semibold duration-200 flex items-center gap-2">
          عن المدرب
        </p>
      </NavLink>

      <div className="relative">
        <NavLink
          to="/courses"
          className="navLink"
          onClick={handleOpenLinkDropDown}
        >
          <p className="text-xl xl:text-base 2xl:text-xl font-semibold duration-200 flex items-center gap-2">
            الدورات التدريبية
            <span>
              <IoMdArrowDropdown />
            </span>
          </p>
        </NavLink>

        <DropDown isOpen={linkDropDown} onClose={() => setLinkDropDown(false)}>
          <Link
            to="/courses/training"
            onClick={() => setLinkDropDown(false)}
            className="flex items-center text-black justify-between gap-2 text-xl p-2 not-last:border-b"
          >
            دورات تدريبية
            <IoMdArrowDropleft />
          </Link>
          <Link
            to="/courses/workshops"
            onClick={() => setLinkDropDown(false)}
            className="flex items-center text-black justify-between gap-2 text-xl p-2 not-last:border-b"
          >
            فعاليات وورش العمل
            <IoMdArrowDropleft />
          </Link>
        </DropDown>
      </div>

      <NavLink to="/blog" className="navLink">
        <p className="text-xl xl:text-base 2xl:text-xl font-semibold duration-200 flex items-center gap-2">
          المدونة
        </p>
      </NavLink>

      <NavLink to="/consulting" className="navLink">
        <p className="text-xl xl:text-base 2xl:text-xl font-semibold duration-200 flex items-center gap-2">
          الاستشارات
        </p>
      </NavLink>

      <NavLink to="/podcast" className="navLink">
        <p className="text-xl xl:text-base 2xl:text-xl font-semibold duration-200 flex items-center gap-2">
          بودكاست
        </p>
      </NavLink>

      <NavLink to="/contact" className="navLink">
        <p className="text-xl xl:text-base 2xl:text-xl font-semibold duration-200 flex items-center gap-2">
          تواصل معنا
        </p>
      </NavLink>
    </nav>
  );
};

export default NavBar;
