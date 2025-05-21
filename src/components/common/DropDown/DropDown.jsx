const DropDown = ({ isOpen, children }) => {
  return (
    <div
      className={`absolute z-50 w-62 flex flex-col gap-1 p-2 top-full mt-3 left-1/2 -translate-x-1/2
        bg-bg-clr bg-white shadow-xl shadow-main-clr/50 rounded-lg overflow-hidden duration-200
        ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-75 pointer-events-none"
        }
      `}
    >
      {children}
    </div>
  );
};

export default DropDown;
