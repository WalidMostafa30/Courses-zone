import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Breadcrumbs from "../../components/layout/Breadcrumbs/Breadcrumbs";
import bgImg from "../../assets/images/courses-img.jpg";
import FormInput from "../../components/form/FormInput";
import FormBtn from "../../components/form/FormBtn";

const ContactUs = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <Breadcrumbs
        links={[
          { title: "الرئيسية", path: "/" },
          { title: "تواصل معنا", path: "/contact" },
        ]}
      />

      <div className="myContainer SectionPadding">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <div className="flex items-center gap-6 p-4 text-2xl font-bold text-main-clr-1 shadow-lg rounded-lg hover:shadow-xl hover:bg-main-clr-2/20 duration-300">
            <div className="relative after:absolute after:-z-10 after:bottom-0 after:left-0 after:w-10 after:h-10 after:rounded-lg after:bg-main-clr-2/50">
              <span className="text-5xl block -translate-x-3 -translate-y-3">
                <FaWhatsapp />
              </span>
            </div>

            <div>
              <p>واتساب</p>
              <p>+966 05 723 293</p>
            </div>
          </div>

          <div className="flex items-center gap-6 p-4 text-2xl font-bold text-main-clr-1 shadow-lg rounded-lg hover:shadow-xl hover:bg-main-clr-2/20 duration-300">
            <div className="relative after:absolute after:-z-10 after:bottom-0 after:left-0 after:w-10 after:h-10 after:rounded-lg after:bg-main-clr-2/50">
              <span className="text-5xl block -translate-x-3 -translate-y-3">
                <FaWhatsapp />
              </span>
            </div>

            <div>
              <p>واتساب</p>
              <p>+966 05 723 293</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-4 p-4 shadow-lg rounded-lg">
          <div
            style={{ backgroundImage: `url(${bgImg})` }}
            className="w-full lg:w-1/3 bg-no-repeat bg-center bg-cover bg-main-clr-1 rounded-lg"
          >
            <div className="w-full lg:h-[600px] flex flex-col justify-between gap-4 p-4 bg-main-clr-1/80 rounded-lg">
              <div>
                <h3 className="text-3xl font-bold text-white">
                  معلومات التواصل
                </h3>
                <p className="text-xl text-white">
                  يمكنك التواصل معنا على مدار الساعه
                </p>
              </div>

              <div className="mx-auto">
                <p className="text-4xl font-bold text-white">Courses</p>
                <p className="text-4xl font-bold text-main-clr-2">Zone</p>
              </div>

              <ul className="flex items-center gap-4 ms-auto">
                <a href="/" className="text-5xl text-main-clr-2">
                  <FaFacebook />
                </a>
                <a href="/" className="text-5xl text-main-clr-2">
                  <FaLinkedin />
                </a>
                <a href="/" className="text-5xl text-main-clr-2">
                  <FaFacebook />
                </a>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex-grow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="col-span-1">
                <FormInput label={"الاسم الأول"} name={"name1"} type="text" />
              </div>
              <div className="col-span-1">
                <FormInput label={"الاسم الاخير"} name={"name2"} type="text" />
              </div>
              <div className="col-span-1">
                <FormInput label={"رقم الجوال"} name={"name3"} type="text" />
              </div>
              <div className="col-span-1">
                <FormInput
                  label={"البريد الالكترونى"}
                  name={"name4"}
                  type="text"
                />
              </div>

              <div className="col-span-1 lg:col-span-2">
                <FormInput label={"الرسالة"} name={"message"} type="textarea" />
              </div>
            </div>

            <div className="lg:w-1/2 block mx-auto mt-6">
              <FormBtn
                title={"ارسال"}
                className="lg:w-1/2 block mx-auto mt-6"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
