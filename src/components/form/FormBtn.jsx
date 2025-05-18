const FormBtn = ({ title }) => {
  return (
    <button
      type="submit"
      className="w-full cursor-pointer rounded-full bg-main-clr-1 
        px-6 py-3 text-center text-xl font-bold text-white 
        duration-300 hover:bg-main-clr-2"
    >
      {title}
    </button>
  );
};

export default FormBtn;
