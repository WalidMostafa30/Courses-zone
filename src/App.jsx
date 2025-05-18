import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin, toggleRegister } from "./store/modalsSlice";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { register, login } = useSelector((state) => state.modals);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <Header />
      <Outlet />
      <Footer />

      {register && <Register onClose={() => dispatch(toggleRegister())} />}
      {login && <Login onClose={() => dispatch(toggleLogin())} />}
    </main>
  );
}

export default App;
