import { useState } from "react";
import ModalContainer from "../../components/modals/ModalContainer";
import FormInput from "../../components/form/FormInput";
import FormBtn from "../../components/form/FormBtn";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/userSlice";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const Register = ({ onClose }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(loginAction());
    onClose();
  };

  return (
    <ModalContainer onClose={onClose}>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full lg:w-2/3 mx-auto"
      >
        <FormInput
          label="الاسم"
          name="username"
          value={form.username}
          inputIcon={<FaUser />}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <FormInput
          label="البريد الالكتروني"
          type="email"
          name="email"
          inputIcon={<FaEnvelope />}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <FormInput
          label="كلمه المرور"
          type="password"
          name="password"
          inputIcon={<FaLock />}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <FormInput
          label="تأكيد كلمه المرور"
          type="password"
          name="confirmPassword"
          inputIcon={<FaLock />}
          value={form.confirmPassword}
          onChange={(e) =>
            setForm({ ...form, confirmPassword: e.target.value })
          }
        />

        <FormBtn title="انشاء حساب" />
      </form>
    </ModalContainer>
  );
};

export default Register;
