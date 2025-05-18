import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AboutTrainer from "../pages/AboutTrainer/AboutTrainer";
import CoursesTraining from "../pages/CoursesTraining/CoursesTraining";
import CoursesWorkshops from "../pages/CoursesWorkshops/CoursesWorkshops";
import Blog from "../pages/Blog/Blog";
import Consulting from "../pages/Consulting/Consulting";
import Podcast from "../pages/Podcast/Podcast";
import ContactUs from "../pages/ContactUs/ContactUs";
import Cart from "../pages/Cart/Cart";
import WorkshopDetails from "../pages/CoursesWorkshops/WorkshopDetails";
import TrainingDetails from "../pages/CoursesTraining/TrainingDetails";
import BlogDetails from "../pages/Blog/BlogDetails";
import Profile from "../pages/Profile/Profile";
import MyCourses from "../pages/MyCourses/MyCourses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about-trainer", element: <AboutTrainer /> },
      {
        path: "/courses",
        children: [
          {
            path: "training",
            element: <CoursesTraining />,
          },
          { path: "training/details/:id", element: <TrainingDetails /> },
          {
            path: "workshops",
            element: <CoursesWorkshops />,
          },
          { path: "workshops/details/:id", element: <WorkshopDetails /> },
        ],
      },
      { path: "/blog", element: <Blog /> },
      { path: "blog/details/:id", element: <BlogDetails /> },
      { path: "/consulting", element: <Consulting /> },
      { path: "/podcast", element: <Podcast /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/cart", element: <Cart /> },
      { path: "/profile", element: <Profile /> },
      { path: "/my-courses", element: <MyCourses /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
