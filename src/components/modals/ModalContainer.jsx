import { IoIosCloseCircle } from "react-icons/io";

const ModalContainer = ({ onClose, children }) => {
  return (
    <div
      onClick={() => onClose()}
      className="fixed inset-0 w-screen z-50 bg-black/90 p-4 flex items-center justify-center transition-opacity duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-xl w-full max-w-2xl py-10 px-4"
      >
        <button
          className="text-red-700 text-3xl absolute top-2 right-2 cursor-pointer"
          onClick={() => onClose()}
        >
          <IoIosCloseCircle />
        </button>

        <div className="text-left w-fit mx-auto">
          <p className="text-5xl font-bold text-main-clr-1">Courses</p>
          <p className="text-5xl font-bold text-main-clr-2">Zone</p>
        </div>

        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
