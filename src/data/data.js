import coursesImg from "../assets/images/courses-img.jpg";
import personImg from "../assets/images/person.png";

// nav links
export const navLinks = [
  {
    title: "الرئيسية",
    path: "/",
    list: [],
  },
  {
    title: "عن المدرب",
    path: "/about-trainer",
    list: [],
  },
  {
    title: "الدورات التدريبية",
    path: "/courses",
    list: [
      { title: "دورات تدريبية", path: "/courses/training" },
      { title: "فعاليات وورش العمل", path: "/courses/workshops" },
    ],
  },
  {
    title: "المدونة",
    path: "/blog",
    list: [],
  },
  {
    title: "الاستشارات",
    path: "/consulting",
    list: [],
  },
  {
    title: "بودكاست",
    path: "/podcast",
    list: [],
  },
  {
    title: "تواصل معنا",
    path: "/contact",
    list: [],
  },
];

// blog data
const blogPost = {
  image: coursesImg,
  date: "23 ديسمبر 2025",
  user: "احمد عطيه",
  title: "10 نصائح لتحسين تجربه المستخدم وزياده التفاعل",
  description:
    "اكتشف افضل الممارسات لتحسين تجربه المستخدم فى تصميماتك , من تحسين تدفق التفاعل",
  link: "/blog/details/1",
  linkTitle: "تفاصيل التدوينه",
};

export const blogPosts = Array.from({ length: 20 }, (_, index) => ({
  ...blogPost,
  id: index + 1,
  link: `/blog/details/${index + 1}`,
}));

// courses data
const course = {
  image: coursesImg,
  title: "دورة تعلم اساسيات UI/UX للمستوى المبتداء",
  linkTitle: "تفاصيل الدوره",
  price: "250 رس",
  rating: "4.5",
};

export const courses = Array.from({ length: 20 }, (_, index) => ({
  ...course,
  id: index + 1,
  link: `/courses/training/details/${index + 1}`,
}));

// workshops data
const workshop = {
  image: coursesImg,
  title: "ورشه عمل تصميم موقع الكترونى لبيع وايجار الاجهزه الالكترونيه",
  linkTitle: "التفاصيل",
  time: "03:30 مساءا",
  date: "23 ديسمبر 2025",
  user: "احمد عطيه",
};

export const workshops = Array.from({ length: 20 }, (_, index) => ({
  ...workshop,
  id: index + 1,
  link: `/courses/workshops/details/${index + 1}`,
}));

// cart items
const cart = {
  title: "دورة تعلم أساسيات UI/UX للمبتدئين.",
  description:
    "دورة شاملة لتعليم تصميم واجهات المستخدم وتجارب الاستخدام. تشمل التعرف على أدوات التصميم مبادئ التفاعل وتحليل الاحتياجات ...",
  price: 400,
  image: coursesImg,
};

export const cartItems = Array.from({ length: 4 }, (_, index) => ({
  ...cart,
  id: index + 1,
  link: `/courses/workshops/details/${index + 1}`,
}));

// podcast data
const podcast = {
  title: "فن تصميم واجهات وتجارب المستخدم",
  image: coursesImg,
  user: "احمد عطيه",
};

export const podcastItems = Array.from({ length: 8 }, (_, index) => ({
  ...podcast,
  id: index + 1,
}));

// testimonials
export const testimonials = [
  {
    name: "أحمد عطية",
    image: personImg,
    rating: 5,
    review:
      "أحمد عطية يتمتع بمهارات استثنائية في تصميم واجهة وتجربة المستخدم. يجمع بين الإبداع والدقة في عمله.",
  },
  {
    name: "أحمد عطية",
    image: personImg,
    rating: 5,
    review:
      "أحمد عطية يتمتع بمهارات استثنائية في تصميم واجهة وتجربة المستخدم. يجمع بين الإبداع والدقة في عمله.",
  },
  {
    name: "أحمد عطية",
    image: personImg,
    rating: 5,
    review:
      "أحمد عطية يتمتع بمهارات استثنائية في تصميم واجهة وتجربة المستخدم. يجمع بين الإبداع والدقة في عمله.",
  },
];

// rate data
export const rateList = [
  {
    name: "احمد عطيه",
    img: personImg,
    rate: 4.5,
    review:
      "دوره UI/Ux للمبتدئين كانت رائعه! قدمت لى اساسيات قويه فى التصميم ,كما تعلمت كيفيه استخدام الادوات الاساسيه بشكل فعالز",
  },
  {
    name: "احمد عطيه",
    img: personImg,
    rate: 4.5,
    review:
      "دوره UI/Ux للمبتدئين كانت رائعه! قدمت لى اساسيات قويه فى التصميم ,كما تعلمت كيفيه استخدام الادوات الاساسيه بشكل فعالز",
  },
  {
    name: "احمد عطيه",
    img: personImg,
    rate: 4.5,
    review:
      "دوره UI/Ux للمبتدئين كانت رائعه! قدمت لى اساسيات قويه فى التصميم ,كما تعلمت كيفيه استخدام الادوات الاساسيه بشكل فعالز",
  },
];

// timeline
export const timelineData = [
  {
    date: "2019 - 2020",
    title: "بكالوريوس نظم ومعلومات إدارية",
    place: "اكاديميه الزرقا",
    description:
      "منحه ITI فى مجال UI/UX وتصميم واجهات المستخدم وتجربة المستخدم.",
    side: "right",
  },
  {
    date: "2020 - 2021",
    title: "تصميم واجهة وتجربة المستخدم",
    place: "معهد تكنولجيا المعلومات ITI",
    description: "دورة تدريبية من Udacity أو أي مصدر آخر.",
    side: "left",
  },
  {
    date: "2021 - 2022",
    title: "UI/UX Designer",
    place: "TDP Solution",
    description: "اشتغلت على تصميم منتجات UX/UI لشركة XYZ.",
    side: "right",
  },
  {
    date: "2022 - 2023",
    title: "UI/UX Designer",
    place: "TechnoMasr for software solutions",
    description:
      "Tech company for software solutions - تصميم واجهات متنوعة وتحسين تجربة المستخدم.",
    side: "left",
  },
];
