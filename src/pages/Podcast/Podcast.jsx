import GlobalTitle from "../../components/common/GlobalTitle/GlobalTitle";
import Pagination from "../../components/common/Pagination/Pagination";
import Breadcrumbs from "../../components/layout/Breadcrumbs/Breadcrumbs";
import { useState } from "react";
import PodcastList from "../../components/lists/PodcastList/PodcastList";
import { podcastItems } from "../../data/data";

const Podcast = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 5;

  return (
    <section>
      <Breadcrumbs
        links={[
          { title: "الرئيسية", path: "/" },
          { title: "بودكاست", path: "/podcast" },
        ]}
      />

      <section className="myContainer SectionPadding">
        <GlobalTitle
          title="بودكاست عالم التصميم"
          description="بودكاست يتركز على كل ما يخص عالم التصميم الواجهات وتجارب المستخدم, من اساسيات التصميم الى استراجيات تحسين التفاعل"
        />

        <PodcastList dataList={podcastItems} />

        <div className="mt-10">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </section>
    </section>
  );
};

export default Podcast;
