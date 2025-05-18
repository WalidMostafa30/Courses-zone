import { useState } from "react";
import Breadcrumbs from "../../components/layout/Breadcrumbs/Breadcrumbs";
import Pagination from "../../components/common/Pagination/Pagination";
import CourseList from "../../components/lists/CourseList/CourseList";
import { courses } from "../../data/data";

const MyCourses = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 5;

  return (
    <section>
      <Breadcrumbs
        links={[
          { title: "الرئيسية", path: "/" },
          { title: "دوراتي", path: "/my-courses" },
        ]}
      />

      <div className="myContainer py-10">
        <CourseList dataList={courses} />

        <div className="mt-10">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </section>
  );
};

export default MyCourses;
