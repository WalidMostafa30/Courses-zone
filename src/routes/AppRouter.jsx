import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "../App";
import Loading from "../components/layout/Loading/Loading";

// Lazy loaded pages
const Home = lazy(() => import("../pages/Home/Home"));
const AboutTrainer = lazy(() => import("../pages/AboutTrainer/AboutTrainer"));
const CoursesTraining = lazy(() =>
  import("../pages/CoursesTraining/CoursesTraining")
);
const TrainingDetails = lazy(() =>
  import("../pages/CoursesTraining/TrainingDetails")
);
const CoursesWorkshops = lazy(() =>
  import("../pages/CoursesWorkshops/CoursesWorkshops")
);
const WorkshopDetails = lazy(() =>
  import("../pages/CoursesWorkshops/WorkshopDetails")
);
const Blog = lazy(() => import("../pages/Blog/Blog"));
const BlogDetails = lazy(() => import("../pages/Blog/BlogDetails"));
const Consulting = lazy(() => import("../pages/Consulting/Consulting"));
const Podcast = lazy(() => import("../pages/Podcast/Podcast"));
const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const MyCourses = lazy(() => import("../pages/MyCourses/MyCourses"));

const withSuspense = (component) => (
  <Suspense fallback={<Loading />}>{component}</Suspense>
);

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: withSuspense(<Home />) },
      { path: "/about-trainer", element: withSuspense(<AboutTrainer />) },
      {
        path: "/courses",
        children: [
          { path: "training", element: withSuspense(<CoursesTraining />) },
          {
            path: "training/details/:id",
            element: withSuspense(<TrainingDetails />),
          },
          { path: "workshops", element: withSuspense(<CoursesWorkshops />) },
          {
            path: "workshops/details/:id",
            element: withSuspense(<WorkshopDetails />),
          },
        ],
      },
      { path: "/blog", element: withSuspense(<Blog />) },
      { path: "blog/details/:id", element: withSuspense(<BlogDetails />) },
      { path: "/consulting", element: withSuspense(<Consulting />) },
      { path: "/podcast", element: withSuspense(<Podcast />) },
      { path: "/contact", element: withSuspense(<ContactUs />) },
      { path: "/cart", element: withSuspense(<Cart />) },
      { path: "/profile", element: withSuspense(<Profile />) },
      { path: "/my-courses", element: withSuspense(<MyCourses />) },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
