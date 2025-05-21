import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropleft } from "react-icons/io";
import { navLinks } from "../../../data/data";

const SmallNavBar = ({ setMobileNav }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleOpenLinkDropDown = (e, path) => {
    e.preventDefault();
    setOpenDropdown((prev) => (prev === path ? null : path));
  };

  return (
    <nav className="flex flex-col gap-4">
      {navLinks.map((link) =>
        link.list.length === 0 ? (
          <NavLink
            key={link.path}
            to={link.path}
            className="smallNavLink"
            onClick={() => setMobileNav?.(false)}
          >
            <p>{link.title}</p>
          </NavLink>
        ) : (
          <div className="relative" key={link.path}>
            <NavLink
              to={link.path}
              className="smallNavLink"
              onClick={(e) => handleOpenLinkDropDown(e, link.path)}
            >
              <p>
                {link.title}
                <span className="text-2xl">
                  <IoMdArrowDropdown />
                </span>
              </p>
            </NavLink>

            <div
              className={`max-h-0 overflow-hidden duration-300 ${
                openDropdown === link.path ? "max-h-80" : ""
              }`}
            >
              {link.list.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    setOpenDropdown(null);
                    setMobileNav?.(false);
                  }}
                  className="flex items-center gap-2 text-xl p-2 not-last:border-b border-gray-300"
                >
                  {item.title}
                  <IoMdArrowDropleft />
                </Link>
              ))}
            </div>
          </div>
        )
      )}
    </nav>
  );
};

export default SmallNavBar;
