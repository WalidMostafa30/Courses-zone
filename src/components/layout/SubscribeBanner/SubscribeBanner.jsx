import { MdEmail } from "react-icons/md";
import MiniForm from "../../form/MiniForm";
import "./SubscribeBanner.css";

const SubscribeBanner = () => {
  return (
    <section className="py-20 px-4">
      <div className="banner bg-main-clr-1 py-18 px-4 rounded-2xl text-center max-w-6xl mx-auto">
        <h3 className="text-xl lg:text-3xl font-bold text-main-clr-2 mb-2">
          اشترك فى النشره الاخبارية لدينا
        </h3>
        <p className="text-sm lg:text-lg text-white mb-14 max-w-2xl mx-auto">
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
