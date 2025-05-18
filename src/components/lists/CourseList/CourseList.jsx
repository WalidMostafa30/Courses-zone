import MainCard from "../../common/MainCard/MainCard";

const CourseList = ({ dataList }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
      {dataList.map((data) => (
        <MainCard
          key={data.id}
          image={data.image}
          title={data.title}
          link={data.link}
          linkTitle={data.linkTitle}
          price={data.price}
          rating={data.rating}
        />
      ))}
    </section>
  );
};

export default CourseList;
