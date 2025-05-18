import { FaEnvelope, FaUser } from "react-icons/fa";
import FormBtn from "../../components/form/FormBtn";
import FormInput from "../../components/form/FormInput";
import Breadcrumbs from "../../components/layout/Breadcrumbs/Breadcrumbs";

const Profile = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <Breadcrumbs
        links={[
          { title: "حسابي", path: "/" },
          { title: "الملف الشخصي", path: "/profile" },
        ]}
      />

      <div className="myContainer SectionPadding">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 py-10 px-4 shadow-lg rounded-xl w-full max-w-xl mx-auto mt-10"
        >
          <FormInput
            label="الاسم"
            value="احمد عطيه"
            inputIcon={<FaUser />}
            disabled={true}
          />
          <FormInput
            label="البريد الالكتروني"
            value="ahmed@email.com"
            inputIcon={<FaEnvelope />}
            disabled={true}
          />

          <div className="flex items-center gap-2 flex-wrap">
            <FormBtn title={"تغيير كلمه المرور"} />
            <button className="text-xl text-red-700 font-bold text-center px-6 py-3 rounded-full w-full cursor-pointer border border-red-700">
              حذف الحساب
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
