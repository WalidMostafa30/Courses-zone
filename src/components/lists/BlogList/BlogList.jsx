import MainCard from "../../common/MainCard/MainCard";

const BlogList = ({ dataList }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {dataList.map((data) => (
        <MainCard
          key={data.id}
          image={data.image}
          date={data.date}
          user={data.user}
          title={data.title}
          description={data.description}
          link={data.link}
          linkTitle={data.linkTitle}
        />
      ))}
    </section>
  );
};

export default BlogList;
