import { FaStar, FaUser } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";
import { MdOutlineDateRange, MdTimer } from "react-icons/md";
import { Link } from "react-router-dom";

const MainCard = ({
  image,
  title,
  description,
  link,
  linkTitle,
  price,
  rating,
  date,
  time,
  user,
}) => {
  const ratingBadge = rating && (
    <span className="absolute left-2 top-2 flex items-center gap-1 bg-main-clr px-2 py-1 text-xl text-white">
      {rating}
      <span className="text-main-clr-2">
        <FaStar />
      </span>
    </span>
  );

  const dateSection = date && (
    <div className="flex items-center justify-between">
      <p className="flex items-center gap-2 font-semibold">
        <MdOutlineDateRange />
        {date}
      </p>

      {time ? (
        <p className="flex items-center gap-2 font-semibold">
          <MdTimer />
          {time}
        </p>
      ) : (
        user && (
          <p className="flex items-center gap-2 font-semibold">
            <FaUser />
            {user}
          </p>
        )
      )}
    </div>
  );

  const bottomRightSection = time
    ? user && (
        <p className="flex items-center gap-2 font-semibold">
          <FaUser />
          {user}
        </p>
      )
    : price && <p className="text-lg font-semibold text-main-clr-1">{price}</p>;

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-lg duration-200 hover:shadow-xl">
      <div className="relative h-40 w-full overflow-hidden rounded-2xl">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        {ratingBadge}
      </div>

      {dateSection}

      <h3 className="line-clamp-2 text-2xl font-bold">{title}</h3>

      {description && (
        <p className="line-clamp-2 text-lg text-gray-500">{description}</p>
      )}

      <div className="flex items-center justify-between">
        <Link to={link} className="myBtn">
          <span>
            <LuArrowRight />
          </span>
          {linkTitle}
        </Link>

        {bottomRightSection}
      </div>
    </div>
  );
};

export default MainCard;
