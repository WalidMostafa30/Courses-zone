import { Link } from "react-router-dom";
import Bg from "../../../assets/images/courses-img.jpg";

const Breadcrumbs = ({ links }) => {
  return (
    <nav
      style={{ backgroundImage: `url(${Bg})` }}
      className="bg-main-clr-1 bg-cover bg-center bg-no-repeat text-lg font-semibold"
    >
      <div className="bg-main-clr-1/70 py-8">
        <div className="myContainer flex flex-wrap items-center gap-1">
          {links.map((link, index) => (
            <span key={index} className="flex items-center gap-1 text-white">
              <Link
                to={link.path}
                className="last:text-main-clr-2 hover:underline"
              >
                {link.title}
              </Link>

              {index < links.length - 1 && <span className="mx-1">{">"}</span>}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
