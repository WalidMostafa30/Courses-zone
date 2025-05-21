import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import MyButton from "../../components/common/MyButton/MyButton";

const ErrorPage = () => {
  return (
    <div className="myContainer flex flex-col items-center justify-center">
      <h1 className="text-9xl font-bold text-gray-400">404</h1>
      <h3 className="text-4xl font-bold">Page Not Found</h3>
      <p className="text-xl">The page you are looking for does not exist.</p>
      <p className="text-xl">Please check the URL and try again.</p>
      <Link to="/" replace className="mt-4">
        <MyButton title="الى الرئيسية" icon={<FaHome />} />
      </Link>
    </div>
  );
};

export default ErrorPage;
