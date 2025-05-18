import { FaStar } from "react-icons/fa";
import { rateList } from "../../data/data";
const CourseRate = () => {


  return (
    <article className="max-w-4xl mx-auto border border-gray-300 rounded-xl overflow-hidden">
      {rateList.map((rate, index) => (
        <div key={index} className="flex gap-4 p-4 not-last:border-b border-gray-300">
          <span className="w-20 h-20 rounded-full overflow-hidden">
            <img src={rate.img} alt="" className="w-full h-full object-cover" />
          </span>

          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="font-semibold text-2xl">{rate.name}</h3>
              <p className="flex items-center gap-1">
                {rate.rate} <FaStar className="text-main-clr-2"/>
              </p>
            </div>

            <p>{rate.review}</p>
          </div>
        </div>
      ))}
    </article>
  );
};

export default CourseRate;
