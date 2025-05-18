import { useRef, useEffect } from "react";

const DropDown = ({ isOpen, onClose, children }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div
      ref={dropdownRef}
      className={`absolute z-50 w-62 flex flex-col gap-1 p-2 top-[calc(100%+15px)] end-0
        bg-bg-clr bg-white shadow-lg shadow-main-clr/50 rounded-lg overflow-hidden
        transform transition-all duration-200
        ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }
      `}
    >
      {children}
    </div>
  );
};

export default DropDown;
