import { IoIosCloseCircle } from "react-icons/io";
import { cartItems } from "../../../data/data";

const CartList = () => {
  return (
    <section className="xl:col-span-2 border border-gray-400 rounded-xl p-4">
      <h2 className="font-bold text-xl mb-4 text-center">
        سلة الشراء <span className="text-gray-400">( 4 دورة )</span>
      </h2>

      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-4 border border-gray-400 rounded-lg p-4 shadow-lg hover:shadow-xl duration-300"
          >
            <span className="w-full h-44 md:w-32 xl:h-32 rounded-md overflow-hidden">
              <img
                src={item.image}
                alt="course"
                className="w-full h-full object-cover"
              />
            </span>

            <div className="flex-1 flex flex-col justify-between gap-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-xl">{item.title}</h3>

                <button className="text-red-700 text-3xl">
                  <IoIosCloseCircle />
                </button>
              </div>

              <p className="text-lg text-gray-600 line-clamp-2">
                {item.description}
              </p>

              <span className="font-bold text-main-clr-1 text-xl ms-auto">
                {item.price} ريال
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CartList;
