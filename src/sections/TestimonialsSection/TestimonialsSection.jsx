import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TestimonialsSection.css";
import { testimonials } from "../../data/data";

const TestimonialsSection = () => {
  return (
    <section className="text-center SectionPadding px-4">
      <h2 className="text-2xl font-bold mb-4">شهادات عملائنا</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="max-w-5xl py-10 mx-auto swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="mb-10">
            <div className="flex flex-col items-center gap-4">
              <div className="text-main-clr-2 text-2xl">
                {"★".repeat(testimonial.rating)}
              </div>

              <p className="text-gray-800 text-xl font-semibold max-w-md">
                {testimonial.review}
              </p>

              <span className="w-24 h-24 rounded-full border-2 border-main-clr-2 overflow-hidden">
                <img
                  loading="lazy"
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </span>

              <p className="font-semibold text-xl">{testimonial.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;
