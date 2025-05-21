import { MdDone } from "react-icons/md";
import personImg from "../../assets/images/person.png";
import squaresImg from "../../assets/images/squares.jpg";

const AboutMeSection = () => {
  return (
    <article className="xl:h-[100dvh] py-10 xl:py-0 bg-main-clr-1 text-white">
      <div className="h-full myContainer flex justify-between">
        <div className="h-full w-full xl:w-1/2 flex flex-col gap-10 justify-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold">
              <span className="text-main-clr-2 block">مرحبا</span> انا احمد عطيه
            </h2>

            <p className="text-2xl mt-2">
              مصمم واجهة المستخدم وتطبيقات الويب متخصص في تصميم وتطوير واجهات
              المستخدم وتطبيقات الويب متخصص في تصميم وتطوير واجهات المستخدم
              وتطبيقات الويب
            </p>
          </div>

          <ul>
            <li className="flex items-center gap-2 text-2xl lg:text-5xl py-4 border-b w-fit">
              <span className="bg-main-clr-2 flex items-center justify-center w-10 h-10 rounded-full">
                <MdDone />
              </span>
              +6 سنين من الخبرة
            </li>
            <li className="flex items-center gap-2 text-2xl lg:text-5xl py-4 border-b w-fit">
              <span className="bg-main-clr-2 flex items-center justify-center w-10 h-10 rounded-full">
                <MdDone />
              </span>
              +150 مشروع مكتمل
            </li>
            <li className="flex items-center gap-2 text-2xl lg:text-5xl py-4 border-b w-fit">
              <span className="bg-main-clr-2 flex items-center justify-center w-10 h-10 rounded-full">
                <MdDone />
              </span>
              +130 عملاء سعداء
            </li>
          </ul>
        </div>

        <div className="hidden xl:flex h-full items-end w-1/2 relative">
          <img
            loading="lazy"
            src={squaresImg}
            alt="squares"
            className="absolute top-22 left-22 w-96 h-96 opacity-10"
          />
          <img
            loading="lazy"
            src={personImg}
            alt="person"
            className="w-[700px] relative"
          ></img>
        </div>
      </div>
    </article>
  );
};

export default AboutMeSection;
