import { useState } from "react";
import DropDown from "../../common/DropDown/DropDown";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropleft } from "react-icons/io";
import { navLinks } from "../../../data/data";

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (e, path) => {
    e.preventDefault();
    setOpenDropdown((prev) => (prev === path ? null : path));
  };

  return (
    <nav className="flex items-center gap-4">
      {navLinks.map((link) =>
        link.list.length === 0 ? (
          <NavLink key={link.path} to={link.path} className="navLink">
            <p>{link.title}</p>
          </NavLink>
        ) : (
          <div className="relative" key={link.path}>
            <NavLink
              to={link.path}
              className="navLink"
              onClick={(e) => toggleDropdown(e, link.path)}
            >
              <p>
                {link.title}
                <span>
                  <IoMdArrowDropdown />
                </span>
              </p>
            </NavLink>

            <DropDown isOpen={openDropdown === link.path}>
              {link.list.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpenDropdown(null)}
                  className="flex items-center text-black justify-between gap-2 text-xl p-2 not-last:border-b"
                >
                  {item.title} <IoMdArrowDropleft />
                </Link>
              ))}
            </DropDown>
          </div>
        )
      )}
    </nav>
  );
};

export default NavBar;
