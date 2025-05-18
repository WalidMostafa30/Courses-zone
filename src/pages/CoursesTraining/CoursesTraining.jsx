import { IoMdSearch } from "react-icons/io";
import MiniForm from "../../components/form/MiniForm";
import Breadcrumbs from "../../components/layout/Breadcrumbs/Breadcrumbs";
import GlobalTitle from "../../components/layout/GlobalTitle/GlobalTitle";
import Pagination from "../../components/common/Pagination/Pagination";
import { useState } from "react";
import CourseList from "../../components/lists/CourseList/CourseList";
import { courses } from "../../data/data";

const CoursesTraining = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 5;
  return (
    <section>
      <Breadcrumbs
        links={[
          { title: "الرئيسية", path: "/" },
          { title: "الدورات التدريبية", path: "/courses/training" },
        ]}
      />

      <div className="myContainer SectionPadding">
        <GlobalTitle
          title="احدث الدورات التدريبية"
          description="اكتشف اجدث الدورات التدريبية المتنوعة لتطوير مهاراتك وتحقيق اهدافك المستقبلية"
        />

        <MiniForm
          icon={<IoMdSearch />}
          placeholder="ابحث عن دوره.."
          btnTitle="بحث"
        />

        <div className="SectionPadding">
          <CourseList dataList={courses} />
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

export default CoursesTraining;
