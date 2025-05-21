import { MdEmail } from "react-icons/md";
import MiniForm from "../../form/MiniForm";
import "./SubscribeBanner.css";

const SubscribeBanner = () => {
  return (
    <section className="py-20 p-4">
      <div className="banner bg-main-clr-1 p-6 lg:py-18 rounded-2xl text-center max-w-6xl mx-auto">
        <h3 className="text-2xl lg:text-4xl font-bold text-main-clr-2 mb-2">
          اشترك فى النشره الاخبارية لدينا
        </h3>
        <p className="text-sm lg:text-lg text-white mb-8 lg:mb-14 max-w-2xl mx-auto">
          يمكن ان تساعدك النشره الاخبارية على البقاء على اطلاع بأحدث الاخبار و
          الاحداث فى مجال اهتمامك
        </p>

        <MiniForm
          icon={<MdEmail />}
          placeholder="ادخل البريد الالكترونى"
          btnTitle="اشترك"
        />
      </div>
    </section>
  );
};

export default SubscribeBanner;
