import MainCard from "../../common/MainCard/MainCard";

const WorkshopsList = ({ dataList }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {dataList.map((data) => (
        <MainCard
          key={data.id}
          image={data.image}
          title={data.title}
          link={data.link}
          linkTitle={data.linkTitle}
          time={"03:30 مساءا"}
          date={"23 ديسمبر 2025"}
          user={"احمد عطيه"}
        />
      ))}
    </section>
  );
};

export default WorkshopsList;
