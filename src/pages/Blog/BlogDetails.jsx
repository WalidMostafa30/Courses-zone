import Breadcrumbs from "../../components/layout/Breadcrumbs/Breadcrumbs";
import img from "../../assets/images/courses-img.jpg";
import { MdOutlineDateRange, MdTimer } from "react-icons/md";
import BlogList from "../../components/lists/BlogList/BlogList";
import { blogPosts } from "../../data/data";

const BlogDetails = () => {
  return (
    <section>
      <Breadcrumbs
        links={[
          { title: "الرئيسية", path: "/" },
          { title: "المدونة", path: "/blog" },
          { title: "تفاصيل التدوينة", path: "/blog/details/1" },
        ]}
      />

      <div className="myContainer SectionPadding space-y-4">
        <div className="w-full h-56 lg:h-96 rounded-lg overflow-hidden">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>

        <h3 className="text-xl lg:text-3xl font-bold text-center">
          اسرار تصميم واجهات المستخدم وتجربه المستخدم: كيف تبدأ فى مجال UI/UX
        </h3>

        <div className="flex items-center justify-evenly gap-2">
          <p className="flex items-center gap-2 font-semibold">
            <MdOutlineDateRange className="text-main-clr-2 text-2xl" />
            23 ديسمبر 2025
          </p>
          <p className="flex items-center gap-2 font-semibold">
            <MdTimer className="text-main-clr-2 text-2xl" />
            03:30 مساءا
          </p>
        </div>

        <p className="text-xl text-center text-gray-600">
          اسرار تصميم واجهات المستخدم وتجربه المستخدم: كيف تبدأ فى مجال UI/UX
          اسرار تصميم واجهات المستخدم وتجربه المستخدم: كيف تبدأ فى مجال UI/UX
          اسرار تصميم واجهات اكيف تبدأ فى مجال UI/UX اسرار تصميم واجهات الربه
          المستخدم: كيف تبدأ فى مجال UI/UX اسرار تصميم واجهات المستخدم وتجربه
          المستخدم: كيف تبدأ فى مجال UI/UX اسرار تصميم واجربه المستخ تبدأ فى
          مجال UI/UX اسرار تصميم واجهات المستخدم وتجربه المستخدم: كيف تبدأ فى
          مجال UI/UX اسرار تصميم واجهات المستخدم وتجربه المستخدم:ربه المستخدم:
          كيف تبدأ فى مجال UI/UX اسرار تصميم واجهات المستخدم وتجربه المستخدم:
          كيف تبدأ فى مجال UI/UX اسرار تصميم واجهات المستخدم وتجربه المستخدم:
          كيف تبدأ فى مجال UI/UX اسرار تصميم واجهات المستخدم وتجربه المستخدم:
          كيف تبدأ فى مجال UI/UX اسرار تصميم واجهات المستخدم وتجربه المستخدم:
          كيف تبدأ فى مجال UI/UX
        </p>

        <div className="mt-10 border-t border-gray-400">
          <h3 className="text-3xl text-center font-bold py-5">
            أحدث التدوينات
          </h3>

          <BlogList dataList={blogPosts.slice(0, 3)} />
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
