// import { one } from "maath/dist/declarations/src/vector2";
// import { three } from "maath";
import {
  cloud,
  devops,
  integration,
  react,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  interior,
  docker,
  threejs,
  ltimindtree,
  vyorius,
  weatherapp,
  searchandrescue,
  workinprogress,
  aigenie,
  article,
  ImageGenerator,
  comingsoon,
  python,
  theano,
  matlab,
  flask,
  asp,
  scala,
  tensorflow,
  caffe2,
  bun,
  one,
  two,
  three,
  openai,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "Tools",
  },
  {
    id: "#work",
    title: "Features",
  },
  {
    id: "#projects",
    title: "Docs",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id: workinprogress,
    title: "PPT",
  },
];

const services = [
  {
    title: " Home Interior Design",
    icon: interior,
    buttonText: "Explore",
    link: "https://interior-designer-ai.vercel.app/",
  },
  {
    title: "Under Progress..",
    icon: article,
    buttonText: "Upcoming...",
    // link: "https://summise.netlify.app/",
  },
  {
    title: "Under Progress..",
    icon: ImageGenerator,
    buttonText: "Upcoming..."
  },
  {
    title: "More In Progress",
    icon: comingsoon,
    buttonText: "In Progress.."
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Open AI",
    icon: openai,
  },
  {
    name: "matlab",
    icon: matlab,
  },
  {
    name: "flask",
    icon: flask,
  },
  {
    name: "bun",
    icon: bun,
  },
  {
    name: "asp.net core",
    icon: asp,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "scala",
    icon: scala,
  },
  {
    name: "tensorflow",
    icon: tensorflow,
  },
  {
    name: "caffe2",
    icon: caffe2,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Home Interior Design",
    company_name: "Expected Completion Date - Jan 30",
    icon: interior,
    iconBg: "#383E56",
    // date: "Expected Date - Jan 30",
    points: [
      "Our Interior Design AI Tool leverages advanced algorithms to analyze user preferences, lifestyle, and existing space characteristics.",
      "Based on this analysis, it provides personalized style recommendations, suggesting color palettes,furniture styles, and decor elements that align with the user's taste and the latest design trends",
      "It offers curated suggestions for flooring, wall coverings, furniture upholstery, and more. Users can visualize how different materials and colors interact in their space, facilitating confident and informed decision-making. ",
      "Adapt and refine your design over time. The Interior Design AI Tool continuously learns from user preferences and design choices, offering evolving suggestions and refinements to keep spaces fresh and aligned with changing tastes.",
      "Make confident design decisions backed by AI insights and visualizations, minimizing uncertainty",
      "Streamline the design process with quick AI-driven suggestions, reducing the time required for decision-making and planning.",
    ],
  },
  {
    title: "Coming Soon...",
    // company_name: "Link",
    icon: article,
    iconBg: "#E6DEDD",
    // date: "Delhi, Apr 2020 - July 2020",
    points: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing.",
      " when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley.",
      "Tools : JavaScript, React, Leaflet.js, OpenStreetMaps, Python, Github, ElasticSearch,Django",
    ],
  },
  {
    title: "Coming Soon...",
    // company_name: "Link",
    icon: ImageGenerator,
    iconBg: "#E6DEDD",
    // date: "Delhi, Apr 2020 - July 2020",
    points: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing.",
      " when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley.",
      "Tools : JavaScript, React, Leaflet.js, OpenStreetMaps, Python, Github, ElasticSearch,Django",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He has done a great job in customizing existing order booking platform for our site. Indeed, He is very supportive.",
    name: "Dheeraj Prajapati",
    designation: "Founder",
    company: "Kruds",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their client's success like this guy does.",
    name: "Chris Evans",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Computer Vision and Image Processing",
    description:
      "Generally speaking, image processing is all about transforming (processing) the input image file. Typically, it’s done with the usage of specific software, to name just Adobe Photoshop or GIMP. On the other hand, computer vision works entirely differently. Here, nothing happens to the file itself. This is due to the goal, which is to interpret the image and its contents. ",
    // tags: [
    //   {
    //     name: "nextjs",
    //     color: "blue-text-gradient",
    //   },
    //   {
    //     name: "javascript",
    //     color: "green-text-gradient",
    //   },
    //   {
    //     name: "tailwind.css",
    //     color: "blue-text-gradient",
    //   },
    //   {
    //     name: "Clerk Authentication",
    //     color: "pink-text-gradient",
    //   },
    //   {
    //     name: "ShadCN UI",
    //     color: "green-text-gradient",
    //   },
    //   {
    //     name: "Stripe",
    //     color: "pink-text-gradient",
    //   },
    //   {
    //     name: "Prisma",
    //     color: "blue-text-gradient",
    //   },
    // ],
    image: one,
    // source_code_link: "https://github.com/nikhilnagargit/genius-ai-saas",
    live_demo: "https://addepto.com/blog/the-use-of-opencv-in-image-processing-5-examples/",
  },
  {
    name: "The Automation of Human Decisions",
    description:
      "The fascinating world of AI involves programming computer-controlled machines to independently make decisions and perform tasks usually conducted by humans. As an AI student, you will acquire the expert knowledge required to build AI systems initially in foundation topics such as mathematics, programming, algorithms and data structures, operating systems, networks and databases",
    // tags: [
    //   {
    //     name: "react",
    //     color: "blue-text-gradient",
    //   },
    //   {
    //     name: "redux",
    //     color: "pink-text-gradient",
    //   },
    //   {
    //     name: "mongodb",
    //     color: "green-text-gradient",
    //   },
    //   {
    //     name: "node.js",
    //     color: "pink-text-gradient",
    //   },
    //   {
    //     name: "leafleat.js",
    //     color: "green-text-gradient",
    //   },
    //   {
    //     name: "openStreetMaps",
    //     color: "blue-text-gradient",
    //   },
    // ],
    image: three,
    // source_code_link: "https://github.com/nikhilnagargit/Search-And-Rescue",
    live_demo: "https://www.th-deg.de/ain-b-en",
  },
  {
    name: "Open CV",
    description:
      "OpenCV is the huge open-source library for the computer vision, machine learning, and image processing and now it plays a major role in real-time operation which is very important in today’s systems. By using it, one can process images and videos to identify objects, faces, or even handwriting of a human. ",
    // tags: [
    //   {
    //     name: "react",
    //     color: "blue-text-gradient",
    //   },
    //   {
    //     name: "restapi",
    //     color: "green-text-gradient",
    //   },
    //   {
    //     name: "scss",
    //     color: "pink-text-gradient",
    //   },
    //   {
    //     name: "redux",
    //     color: "green-text-gradient",
    //   },
    // ],
    image: two,
    // source_code_link: "https://github.com/nikhilnagargit/weatherapp",
    live_demo: "https://nimble-melba-ecc87f.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
