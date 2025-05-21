import AboutMeSection from "../../sections/AboutMeSection/AboutMeSection";
import GlobalTitle from "../../components/common/GlobalTitle/GlobalTitle";
import HeroSection from "../../sections/HeroSection/HeroSection";
import wavesLinesBg from "../../assets/images/dots-bg.jpg";
import TestimonialsSection from "../../sections/TestimonialsSection/TestimonialsSection";
import SubscribeBanner from "../../components/layout/SubscribeBanner/SubscribeBanner";
import CourseList from "../../components/lists/CourseList/CourseList";
import BlogList from "../../components/lists/BlogList/BlogList";
import { blogPosts, courses } from "../../data/data";

const Home = () => {
  return (
    <section>
      <HeroSection />

      <AboutMeSection />

      <section
        style={{ backgroundImage: `url(${wavesLinesBg})` }}
        className="SectionPadding bg-no-repeat bg-cover bg-center"
      >
        <GlobalTitle
          title="احدث الدورات التدريبية"
          description="اكتشف اجدث الدورات التدريبية المتنوعة لتطوير مهاراتك وتحقيق اهدافك المستقبلية"
        />

        <div className="myContainer">
          <CourseList dataList={courses.slice(0, 8)} />
        </div>
      </section>

      <TestimonialsSection />

      <section className="SectionPadding">
        <GlobalTitle
          title="احدث التدوينات"
          description="اطلع على احسن التدوينات الملهمه التى تقدم نصائح وافكار مبتكره لتطوير حياتك"
        />

        <div className="myContainer">
          <BlogList dataList={blogPosts.slice(0, 3)} />
        </div>
      </section>

      <SubscribeBanner />
    </section>
  );
};

export default Home;
