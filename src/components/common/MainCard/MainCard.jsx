import { FaStar, FaUser } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";
import { MdOutlineDateRange, MdTimer } from "react-icons/md";
import { Link } from "react-router-dom";
import MyButton from "../MyButton/MyButton";

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
    <div className="space-y-4 rounded-2xl bg-white p-4 shadow-lg duration-200 hover:shadow-xl">
      <div className="relative h-52 w-full overflow-hidden rounded-2xl">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
        {rating && (
          <div className="absolute inset-0 bg-main-clr-1/30 text-white text-xl p-2">
            <p className="flex items-center justify-end gap-1">
              {rating}
              <FaStar className="text-main-clr-2" />
            </p>
          </div>
        )}
      </div>

      {dateSection}

      <h3 className="line-clamp-2 text-2xl font-bold">{title}</h3>

      {description && (
        <p className="line-clamp-2 text-lg text-gray-500">{description}</p>
      )}

      <div className="flex items-center justify-between">
        <Link to={link}>
          <MyButton title={linkTitle} icon={<LuArrowRight />} />
        </Link>

        {bottomRightSection}
      </div>
    </div>
  );
};

export default MainCard;
