const MyButton = ({ icon, title, onClick }) => {
  return (
    <button className="myBtn" onClick={onClick}>
      <span>{icon}</span>
      {title}
    </button>
  );
};

export default MyButton;
