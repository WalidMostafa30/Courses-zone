import { FaMicrophoneAlt } from "react-icons/fa";
import AudioPlayer from "../../common/AudioPlayer/AudioPlayer";

const PodcastList = ({ dataList }) => {
  return (
    <div className="grid xl:grid-cols-2 gap-6">
      {dataList.map((data) => (
        <div
          key={data.id}
          className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl duration-200 flex flex-col lg:flex-row gap-4"
        >
          <div className="w-full lg:w-60 h-60 rounded-2xl overflow-hidden relative">
            <img
              loading="lazy"
              src={data.image}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-2 justify-between flex-grow">
            <p className="flex items-center gap-2 text-2xl text-main-clr-2 font-semibold">
              <span className="text-main-clr-1">
                <FaMicrophoneAlt />
              </span>
              {data.user}
            </p>

            <h3 className="text-3xl font-bold">{data.title}</h3>

            <AudioPlayer />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PodcastList;
