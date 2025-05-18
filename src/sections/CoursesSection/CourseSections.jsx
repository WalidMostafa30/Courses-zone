import { useState } from "react";
import { FaLock, FaVideo } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CourseSections = () => {
  const [openSection, setOpenSection] = useState(0);

  const sections = [
    {
      title: "سيكشن رقم 1",
      lessons: [
        {
          title: "تعرف على الأساسيات الجزء الأول.",
          duration: "02:16:20",
          locked: true,
        },
        {
          title: "تعرف على الأساسيات الجزء الثاني.",
          duration: "02:16:20",
          locked: true,
        },
        {
          title: "تعرف على الأساسيات الجزء الثالث.",
          duration: "02:16:20",
          locked: true,
        },
        {
          title: "تعرف على الأساسيات الجزء الثالث.",
          duration: "02:16:20",
          locked: true,
        },
        {
          title: "تعرف على الأساسيات الجزء الثالث.",
          duration: "02:16:20",
          locked: true,
        },
      ],
    },
    {
      title: "سيكشن رقم 2",
      lessons: [
        {
          title: "تعرف على الأساسيات الجزء الأول.",
          duration: "02:16:20",
          locked: true,
        },
        {
          title: "تعرف على الأساسيات الجزء الثاني.",
          duration: "02:16:20",
          locked: true,
        },
        {
          title: "تعرف على الأساسيات الجزء الثالث.",
          duration: "02:16:20",
          locked: true,
        },
      ],
    },
    {
      title: "سيكشن رقم 3",
      lessons: [
        {
          title: "تعرف على الأساسيات الجزء الأول.",
          duration: "02:16:20",
          locked: true,
        },
        {
          title: "تعرف على الأساسيات الجزء الثاني.",
          duration: "02:16:20",
          locked: true,
        },
        {
          title: "تعرف على الأساسيات الجزء الثالث.",
          duration: "02:16:20",
          locked: true,
        },
      ],
    },
    {
      title: "سيكشن رقم 4",
      lessons: [
        {
          title: "تعرف على الأساسيات الجزء الأول.",
          duration: "02:16:20",
          locked: true,
        },
        {
          title: "تعرف على الأساسيات الجزء الثاني.",
          duration: "02:16:20",
          locked: true,
        },
        {
          title: "تعرف على الأساسيات الجزء الثالث.",
          duration: "02:16:20",
          locked: true,
        },
      ],
    },
  ];

  return (
    <article className="max-w-3xl mx-auto border border-gray-200 rounded-xl overflow-hidden">
      {sections.map((section, idx) => (
        <div key={idx} className="border-b border-gray-200 shadow-sm">
          <button
            onClick={() => setOpenSection(openSection === idx ? -1 : idx)}
            className="w-full flex justify-between items-center p-4 bg-main-clr-1/10 text-xl font-bold"
          >
            {section.title}
            {openSection === idx ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>

          {openSection === idx && section.lessons.length > 0 && (
            <div>
              {section.lessons.map((lesson, lIdx) => (
                <div
                  key={lIdx}
                  className="flex justify-between items-center p-4 text-sm not-last:border-b border-gray-300"
                >
                  <div className="flex items-center gap-2">
                    <span className="bg-main-clr-1/20 text-main-clr-1 text-2xl flex items-center justify-center w-10 h-10 rounded-full">
                      <FaCirclePlay />
                    </span>

                    <div>
                      <p className="font-medium text-xl">{lesson.title}</p>
                      <div className="text-xs text-gray-500 flex gap-1 items-center">
                        <span className="text-main-clr-1 text-2xl">
                          <FaVideo />
                        </span>
                        <p className="text-lg">{lesson.duration}</p>
                      </div>
                    </div>
                  </div>

                  {lesson.locked && (
                    <button className="text-2xl">
                      <FaLock />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </article>
  );
};

export default CourseSections;
