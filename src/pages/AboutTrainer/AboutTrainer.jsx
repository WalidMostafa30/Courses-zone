import Breadcrumbs from "../../components/layout/Breadcrumbs/Breadcrumbs";
import AboutMeSection from "../../sections/AboutMeSection/AboutMeSection";
import TimelineSection from "../../sections/TimelineSection/TimelineSection";

const AboutTrainer = () => {
  return (
    <section>
      <Breadcrumbs
        links={[
          { title: "الرئيسية", path: "/" },
          { title: "عن المدرب", path: "/about-trainer" },
        ]}
      />
      <AboutMeSection />
      <TimelineSection />
    </section>
  );
};

export default AboutTrainer;
