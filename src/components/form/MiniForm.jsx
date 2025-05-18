const MiniForm = ({ icon, placeholder, btnTitle }) => {
  return (
    <form className="mx-auto flex max-w-xl items-center gap-2 rounded-xl bg-white p-2 shadow-lg">
      <div className="flex flex-grow items-center">
        <span className="text-3xl text-main-clr-2">{icon}</span>
        <input
          type="email"
          placeholder={placeholder}
          className="w-full px-4 py-2 text-xl outline-none"
        />
      </div>
      <button type="submit" className="myBtn rounded-md! px-6!">
        {btnTitle}
      </button>
    </form>
  );
};

export default MiniForm;
