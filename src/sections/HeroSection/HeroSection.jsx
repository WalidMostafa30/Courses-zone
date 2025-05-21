import dotsBg from "../../assets/images/dots-bg.jpg";
import personImg from "../../assets/images/person.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${dotsBg})`,
      }}
      className="min-h-[calc(100dvh-var(--header-height))] bg-no-repeat bg-cover bg-center px-4
      relative flex items-center justify-center overflow-hidden"
    >
      <h1 className="relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-44 md:mb-0 text-center font-bold text-main-clr-1 leading-snug">
        مصمم
        <span className="relative z-20 animate-fill-text"> واجهة وتجربة </span>
        المستخدم
      </h1>

      <img
        loading="lazy"
        src={personImg}
        alt="Person"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] md:w-[600px] lg:w-[700px] z-10"
      />
    </section>
  );
};

export default HeroSection;
