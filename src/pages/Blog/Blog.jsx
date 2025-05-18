import { IoMdSearch } from "react-icons/io";
import MiniForm from "../../components/form/MiniForm";
import Breadcrumbs from "../../components/layout/Breadcrumbs/Breadcrumbs";
import GlobalTitle from "../../components/layout/GlobalTitle/GlobalTitle";
import Pagination from "../../components/common/Pagination/Pagination";
import { useState } from "react";
import BlogList from "../../components/lists/BlogList/BlogList";
import { blogPosts } from "../../data/data";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 15;

  return (
    <section>
      <Breadcrumbs
        links={[
          { title: "الرئيسية", path: "/" },
          { title: "المدونة", path: "/blog" },
        ]}
      />

      <div className="myContainer py-10">
        <GlobalTitle
          title="احدث التدوينات"
          description="اطلع على احسن التدوينات الملهمه التى تقدم نصائح وافكار مبتكره لتطوير حياتك"
        />

        <MiniForm
          icon={<IoMdSearch />}
          placeholder="ابحث عن تدوينة.."
          btnTitle="بحث"
        />

        <div className="SectionPadding">
          <BlogList dataList={blogPosts} />
        </div>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </section>
  );
};

export default Blog;
