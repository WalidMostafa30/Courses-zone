import dotsBg from "../../assets/images/dots-bg.jpg";
import personImg from "../../assets/images/person.png";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${dotsBg})`,
      }}
      className={`h-[calc(100dvh-var(--header-height))] bg-no-repeat bg-cover bg-center relative flex items-center justify-center px-4 overflow-hidden`}
    >
      <h1 className="relative mb-[300px] xl:mb-0 text-4xl lg:text-5xl xl:text-7xl text-center font-bold text-main-clr-1">
        مصمم
        <span className="relative z-20 text-shadow-sm text-shadow-main-clr-2">
          {" "}
          واجهة وتجربة{" "}
        </span>
        المستخدم
      </h1>

      <img
        loading="lazy"
        src={personImg}
        alt="Person"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] xl:w-[40%] z-10"
      />
    </section>
  );
};

export default HeroSection;
