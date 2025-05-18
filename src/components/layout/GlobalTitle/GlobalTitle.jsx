const GlobalTitle = ({ title, description }) => {
  return (
    <div className="text-center px-4 max-w-lg mx-auto mb-6">
      <h3 className="text-4xl font-bold mb-2">{title}</h3>
      <p className="text-lg font-medium text-gray-500">{description}</p>
    </div>
  );
};

export default GlobalTitle;
