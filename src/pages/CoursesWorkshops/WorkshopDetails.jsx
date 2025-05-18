import Breadcrumbs from "../../components/layout/Breadcrumbs/Breadcrumbs";
import img from "../../assets/images/courses-img.jpg";
import { MdOutlineDateRange, MdTimer } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import FormBtn from "../../components/form/FormBtn";

const WorkshopDetails = () => {
  return (
    <section>
      <Breadcrumbs
        links={[
          { title: "الرئيسية", path: "/" },
          { title: "الفاعليات وورش العمل", path: "/courses/workshops" },
          { title: "تفاصيل الورشه", path: "/courses/workshops/details/1" },
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

          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-3xl font-bold">
              ورشه عمل تصميم موقع الكتروني لبيع وايجار الاجهزه الالكترونيه
            </h2>

            <p className="text-lg text-gray-500">
              انضم الينا فى ورشه عمل مميزه حول تصميم موقع الكتروني انضم الينا فى
              ورشه عمل مميزه حول تصميم موقع الكتروني انضم الينا فى ورشه عمل
              مميزه حول تصميم موقع الكتروني انضم الينا فى ورشه عمل مميزه حول
              مميزه حول تصميم موقع الكتروني انضم الينا فى ورشه عمل مميزه حول
              تصميم موقع الكتروني
            </p>

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

            <FormBtn title={"اضافه الى السله"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;
