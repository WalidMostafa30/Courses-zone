import { FaPlus } from "react-icons/fa";
import GlobalTitle from "../../components/layout/GlobalTitle/GlobalTitle";
import { timelineData } from "../../data/data";

const TimelineSection = () => {
  return (
    <section className="SectionPadding">
      <GlobalTitle
        title="مؤهلاتى وخبراتى"
        description="خبراتى ومهؤلاتى تمثل مزيجا متكاملا من المعرفه العمليه والمهارات التخصيصيه."
      />

      <div className="relative px-4 max-w-6xl mx-auto flex flex-col gap-6">
        {/* line */}
        <span className="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 h-[calc(100%)] top-0 w-0 border border-dashed border-main-clr-2"></span>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center w-full relative lg:flex-row ${
              item.side === "left" ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* dot */}
            <span className="absolute left-[-0.5rem] lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 bg-main-clr-2 rounded-full z-10 flex items-center justify-center text-xl font-bold text-white">
              <FaPlus />
            </span>

            {/* content */}
            <div
              className={`ml-10 lg:ml-0 lg:w-1/2 ${
                item.side === "left" ? "lg:ps-8" : "lg:pe-8"
              } w-full`}
            >
              <div className="bg-main-clr-1 text-white space-y-2 p-5 rounded-xl shadow">
                <p className="text-lg text-main-clr-2">{item.date}</p>
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p className="text-lg text-main-clr-2">{item.place}</p>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
