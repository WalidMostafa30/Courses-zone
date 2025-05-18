import { TbGridDots } from "react-icons/tb";
import coursesImg from "../../assets/images/courses-img.jpg";
import Breadcrumbs from "../../components/layout/Breadcrumbs/Breadcrumbs";

const Consulting = () => {
  return (
    <section>
      <Breadcrumbs
        links={[
          { title: "الرئيسية", path: "/" },
          { title: "الاستشارات", path: "/consulting" },
        ]}
      />

      <article className="myContainer SectionPadding flex items-center justify-between gap-10 bg-white">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            إستشارات تعاقدية
          </h2>

          <p className="text-gray-700 text-xl mb-4">
            هي نوع من الخدمات التي يتم الاتفاق عليها ضمن عقد محدد المدة
            والتفاصيل، حيث يلتزم المستشار بتقديم دعم واستشارات متخصصة تغطي
            احتياجات العميل طوال مدة العقد. يتميز هذا النوع من الاستشارات
            بالاستمرارية والمرونة في التعامل مع متطلبات العميل، مما يضمن تحقيق
            أهداف طويلة الأجل وفق استراتيجية محددة.
          </p>

          <button className="px-8 py-4 bg-main-clr-1 text-white rounded-full font-semibold shadow">
            طلب إستشارة
          </button>
        </div>

        {/* Image section */}
        <div className="hidden lg:flex lg:w-1/2 gap-6">
          <div className="flex flex-col">
            <span className="w-full h-96">
              <img
                loading="lazy"
                src={coursesImg}
                alt="consulting1"
                className="w-full h-full object-cover rounded-3xl shadow-md"
              />
            </span>

            <span className="text-9xl text-main-clr-1">
              <TbGridDots />
            </span>
          </div>

          <div className="flex flex-col-reverse">
            <span className="w-full h-96">
              <img
                loading="lazy"
                src={coursesImg}
                alt="consulting1"
                className="w-full h-full object-cover rounded-3xl shadow-md"
              />
            </span>

            <span className="text-9xl text-main-clr-2 mr-auto">
              <TbGridDots />
            </span>
          </div>
        </div>
      </article>

      <article className="myContainer SectionPadding flex flex-row-reverse items-center justify-between gap-10 bg-white">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            إستشارات تعاقدية
          </h2>

          <p className="text-gray-700 text-xl mb-4">
            هي نوع من الخدمات التي يتم الاتفاق عليها ضمن عقد محدد المدة
            والتفاصيل، حيث يلتزم المستشار بتقديم دعم واستشارات متخصصة تغطي
            احتياجات العميل طوال مدة العقد. يتميز هذا النوع من الاستشارات
            بالاستمرارية والمرونة في التعامل مع متطلبات العميل، مما يضمن تحقيق
            أهداف طويلة الأجل وفق استراتيجية محددة.
          </p>

          <button className="px-8 py-4 bg-main-clr-1 text-white rounded-full font-semibold shadow">
            طلب إستشارة
          </button>
        </div>

        {/* Image section */}
        <div className="hidden lg:flex lg:w-1/2 gap-6">
          <div className="flex flex-col">
            <span className="w-full h-96">
              <img
                loading="lazy"
                src={coursesImg}
                alt="consulting1"
                className="w-full h-full object-cover rounded-3xl shadow-md"
              />
            </span>

            <span className="text-9xl text-main-clr-1">
              <TbGridDots />
            </span>
          </div>

          <div className="flex flex-col-reverse">
            <span className="w-full h-96">
              <img
                loading="lazy"
                src={coursesImg}
                alt="consulting1"
                className="w-full h-full object-cover rounded-3xl shadow-md"
              />
            </span>

            <span className="text-9xl text-main-clr-2 mr-auto">
              <TbGridDots />
            </span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Consulting;
