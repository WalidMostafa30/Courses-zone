import Breadcrumbs from "../../components/layout/Breadcrumbs/Breadcrumbs";
import img from "../../assets/images/courses-img.jpg";
import { MdOutlineDateRange, MdTimer } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import CourseRate from "../../sections/CoursesSection/CourseRate";
import CourseSections from "../../sections/CoursesSection/CourseSections";
import AboutCourse from "../../sections/CoursesSection/AboutCourse";
import FormBtn from "../../components/form/FormBtn";
const TrainingDetails = () => {
  const [section, setSection] = useState("عن الدوره");
  const sections = ["عن الدوره", "سكاشن الدوره", "تقييم الدوره"];

  return (
    <section>
      <Breadcrumbs
        links={[
          { title: "الرئيسية", path: "/" },
          { title: "الدورات التدريبية", path: "/courses/training" },
          { title: "تفاصيل الدوره", path: "/courses/training/details/1" },
        ]}
      />

      <div className="myContainer SectionPadding">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 shadow-lg rounded-lg p-4">
          <div className="w-full h-52 lg:w-1/2 lg:h-96 rounded-lg overflow-hidden">
            <img
              loading="lazy"
              src={img}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-3xl font-bold">
              دوره تعلم اساسيات ال UI/UX للمستوى المبتداء
            </h2>
            <div className="grid grid-cols-2 gap-2 text-xl">
              <p className="flex items-center gap-2 font-semibold">
                <span>
                  <MdOutlineDateRange />
                </span>
                23 ديسمبر 2025
              </p>
              <p className="flex items-center gap-2 font-semibold">
                <span>
                  <MdTimer />
                </span>
                03:30 مساءا
              </p>
              <p className="flex items-center gap-2 font-semibold">
                <span>
                  <FaUser />
                </span>
                احمد عطيه
              </p>
            </div>

            <div className="lg:w-1/2 block mx-auto">
              <FormBtn title={"اشترك الان"} />
            </div>
          </div>
        </div>

        <article className="mt-10">
          <h2 className="text-3xl font-bold mb-4 text-center">تفاصيل الدورة</h2>

          <div className="flex items-center justify-center flex-wrap gap-4 mb-10">
            {sections.map((sec, index) => (
              <button
                key={index}
                className={`${
                  section === sec ? "bg-main-clr-1 text-white" : ""
                } text-xl font-semibold px-6 py-3 lg:px-6 lg:py-3 border rounded-full cursor-pointer`}
                onClick={() => setSection(sec)}
              >
                {sec}
              </button>
            ))}
          </div>

          {section === "عن الدوره" && <AboutCourse />}
          {section === "سكاشن الدوره" && <CourseSections />}
          {section === "تقييم الدوره" && <CourseRate />}
        </article>
      </div>
    </section>
  );
};

export default TrainingDetails;
