import { IoMdSearch } from "react-icons/io";
import MiniForm from "../../components/form/MiniForm";
import Breadcrumbs from "../../components/layout/Breadcrumbs/Breadcrumbs";
import GlobalTitle from "../../components/layout/GlobalTitle/GlobalTitle";
import Pagination from "../../components/common/Pagination/Pagination";
import { useState } from "react";
import WorkshopsList from "../../components/lists/WorkshopsList/WorkshopsList";
import { workshops } from "../../data/data";

const CoursesWorkshops = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 5;

  return (
    <section>
      <Breadcrumbs
        links={[
          { title: "الرئيسية", path: "/" },
          { title: "الفاعليات وورش العمل", path: "/courses/workshops" },
        ]}
      />

      <div className="myContainer SectionPadding">
        <GlobalTitle
          title="الفعاليات وورش العمل"
          description="اطلع على احدث الفعاليات وورش العمل المتنوعة لتطوير مهاراتك وتحقيق اهدافك المستقبلية"
        />

        <MiniForm
          icon={<IoMdSearch />}
          placeholder="ابحث عن دوره.."
          btnTitle="بحث"
        />

        <div className="SectionPadding">
          <WorkshopsList dataList={workshops} />
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

export default CoursesWorkshops;
