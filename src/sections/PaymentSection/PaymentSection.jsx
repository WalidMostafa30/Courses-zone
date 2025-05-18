import { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import FormBtn from "../../components/form/FormBtn";

const PaymentSection = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const total = 1600;
  const discount = 600;
  const finalTotal = total - discount;

  return (
    <section className="xl:col-span-1 sticky top-4 h-fit border border-gray-400 rounded-xl p-4 space-y-4">
      {/* coupon code */}
      <div>
        <h3 className="font-semibold text-2xl mb-2">كود الخصم</h3>
        <div className="flex items-center gap-2 border border-gray-400 rounded-md p-2">
          <input
            type="text"
            placeholder="أدخل كود الخصم"
            className="flex-grow px-3 py-2 text-xl"
          />
          <button className="bg-main-clr-2 px-6 py-3 rounded-full">
            تطبيق
          </button>
        </div>
      </div>

      {/* payment method */}
      <div className="border border-gray-400 rounded-xl">
        <h3 className="font-semibold text-2xl p-2 border-b border-gray-400">
          طريقة الدفع
        </h3>

        <div className="flex flex-col gap-2 p-2">
          <label
            className={`flex items-center justify-between gap-2 p-2 rounded-md text-2xl text-gray-400 ${
              paymentMethod === "card" && "bg-main-clr-1/20 text-main-clr-1"
            }`}
          >
            <div className="flex items-center gap-2">
              <span>
                <FaCreditCard />
              </span>
              <input
                type="radio"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="hidden"
              />
              <p>دفع الكتروني</p>
            </div>

            {paymentMethod === "card" && (
              <span>
                <MdOutlineDone />
              </span>
            )}
          </label>

          <label
            className={`flex items-center justify-between gap-2 p-2 rounded-md text-2xl text-gray-400 ${
              paymentMethod === "card2" && "bg-main-clr-1/20 text-main-clr-1"
            }`}
          >
            <div className="flex items-center gap-2">
              <span>
                <FaCreditCard />
              </span>
              <input
                type="radio"
                checked={paymentMethod === "card2"}
                onChange={() => setPaymentMethod("card2")}
                className="hidden"
              />
              <p>المحفظه</p>
            </div>

            {paymentMethod === "card2" && (
              <span>
                <MdOutlineDone />
              </span>
            )}
          </label>

          <label
            className={`flex items-center justify-between gap-2 p-2 rounded-md text-2xl text-gray-400 ${
              paymentMethod === "card3" && "bg-main-clr-1/20 text-main-clr-1"
            }`}
          >
            <div className="flex items-center gap-2">
              <span>
                <FaCreditCard />
              </span>
              <input
                type="radio"
                checked={paymentMethod === "card3"}
                onChange={() => setPaymentMethod("card3")}
                className="hidden"
              />
              <p>حواله بنكيه</p>
            </div>

            {paymentMethod === "card3" && (
              <span>
                <MdOutlineDone />
              </span>
            )}
          </label>
        </div>
      </div>

      {/* cart details */}
      <div className="border border-gray-400 rounded-xl">
        <h3 className="font-semibold text-2xl p-2 border-b border-gray-400">
          تفاصيل الدفع
        </h3>

        <div className="text-xl space-y-2 p-2">
          <div className="flex justify-between">
            <span>سعر السلة</span>
            <span>{total} ريال</span>
          </div>

          <div className="flex justify-between text-red-700">
            <span>خصم الكوبون</span>
            <span>-{discount} ريال</span>
          </div>

          <div className="flex justify-between font-bold border-t border-gray-400">
            <span>الإجمالي</span>
            <span>{finalTotal} ريال</span>
          </div>
        </div>
      </div>

      <FormBtn title="دفع" />
    </section>
  );
};

export default PaymentSection;
