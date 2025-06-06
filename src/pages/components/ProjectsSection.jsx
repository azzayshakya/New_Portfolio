import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiRedux,
  SiTypescript,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiGraphql,
  SiBootstrap,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaCloud, FaRobot } from "react-icons/fa";
import { MdUploadFile } from "react-icons/md";
import { TbBrandSocketIo } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";

const RecentProjectsSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  const projects = [
    {
      id: 1,
      title: "WeChat - Team Collaboration with AI Assistant",
      description:
        "WeChat is a real-time team collaboration tool where users can create projects, invite teammates, and chat instantly. It includes an AI assistant that helps generate messages, manage tasks, and boost productivity. It’s a fully responsive app with smooth UI, secure login, and built for seamless teamwork.",
      image: "/WeChat.png",
      technologies: ["react", "node", "socketio", "tailwind", "gemini"],
      liveLink: "https://wechat-teal.vercel.app",
    },
    {
      id: 2,
      title: "Foodii - The Future of Online Food Delivery",
      description:
        "Foodii is a modern cloud kitchen platform that bridges the gap between local chefs and food lovers. It enables users to discover, order, and track delicious meals from a variety of kitchens. Built with a sleek UI, real-time updates, and robust authentication, it's designed to scale and serve at high volume.",
      image: "/Foodiii.png",
      technologies: ["cloudinary", "node", "react", "mongodb", "multer"],
      liveLink: "https://foodiii.vercel.app/",
    },
    {
      id: 3,
      title: "Zobs - Your Gateway to Career Success",
      description:
        "Zobs is a smart job portal that uses AI-based matching to connect job seekers with the right employers. With features like role-based dashboards, resume parsing, and personalized recommendations, it's built to streamline the hiring process. Fully responsive with clean UI and secure authentication.",
      image: "/Zobs.png",
      technologies: ["react", "node", "multer", "mongodb", "redux"],
      liveLink: "https://zobs.vercel.app",
    },
    {
      id: 4,
      title: "AppointMate - Book Appointments with Ease",
      description:
        "AppointMate is an intuitive appointment booking system where students can easily schedule meetings with teachers based on subject and availability. It features dynamic scheduling, role-based access, and real-time status updates. The UI is sleek, mobile-responsive, and backed with strong form validation and authentication.",
      image: "/Appointmate.png",
      technologies: ["tailwind", "node", "mongodb", "express", "redux"],
      liveLink: "https://appointmate-mern.vercel.app/",
    },

    {
      id: 5,
      title: "Zomato UI Clone - Pixel Perfect Food Delivery Interface",
      description:
        "A high-fidelity frontend clone of Zomato's food delivery platform created purely with HTML and CSS. This responsive and visually rich interface showcases restaurant cards, menu layouts, and a clean user flow—all crafted to mimic the real-world app experience. Developed to strengthen UI design skills and frontend layout techniques.",
      image: "/ZomatoClone.png",
      technologies: ["html", "css", "javascript"],
      liveLink: "https://azzay-zomato-clone.vercel.app/",
    },
    {
      id: 6,
      title: "Modern Login UI - Sleek & Interactive Landing Page",
      description:
        "A stylish and fully responsive login landing page designed with a modern aesthetic. Built using HTML, CSS, JavaScript, and Tailwind CSS, the interface includes interactive elements, smooth animations, and strong visual hierarchy. This project demonstrates advanced form UI/UX patterns and frontend polish.",
      image: "/loginpage.png",
      technologies: ["html", "css", "javascript"],
      liveLink: "https://github.com/azzayshakya",
    },
  ];

  const techIcons = {
    react: (
      <SiReact className="h-10 w-10 rounded-full border bg-primary p-2 text-cyan-500" />
    ),
    next: (
      <SiNextdotjs className="h-10 w-10 rounded-full border bg-primary p-2 text-black" />
    ),
    node: (
      <SiNodedotjs className="h-10 w-10 rounded-full border bg-primary p-2 text-green-600" />
    ),
    express: (
      <SiExpress className="h-10 w-10 rounded-full border bg-primary p-2 text-white" />
    ),
    redux: (
      <SiRedux className="h-10 w-10 rounded-full border bg-primary p-2 text-purple-600" />
    ),
    typescript: (
      <SiTypescript className="h-10 w-10 rounded-full border bg-primary p-2 text-blue-500" />
    ),
    firebase: (
      <SiFirebase className="h-10 w-10 rounded-full border bg-primary p-2 text-yellow-500" />
    ),
    mongodb: (
      <SiMongodb className="h-10 w-10 rounded-full border bg-primary p-2 text-green-500" />
    ),
    tailwind: (
      <SiTailwindcss className="h-10 w-10 rounded-full border bg-primary p-2 text-cyan-400" />
    ),
    graphql: (
      <SiGraphql className="h-10 w-10 rounded-full border bg-primary p-2 text-pink-600" />
    ),
    bootstrap: (
      <SiBootstrap className="h-10 w-10 rounded-full border bg-primary p-2 text-purple-600" />
    ),
    socketio: (
      <TbBrandSocketIo className="h-10 w-10 rounded-full border bg-primary p-2 text-white" />
    ),
    gemini: (
      <FaRobot className="h-10 w-10 rounded-full border bg-primary p-2 text-indigo-500" />
    ),

    zustand: (
      <div className="h-10 w-10 rounded-full border bg-orange-400 bg-primary p-2">
        <span role="img" aria-label="Zustand">
          🐻
        </span>
      </div>
    ),
    cloudinary: (
      <FaCloud className="h-10 w-10 rounded-full border bg-primary p-2 text-blue-400" />
    ),
    multer: (
      <MdUploadFile className="h-10 w-10 rounded-full border bg-primary p-2 text-red-500" />
    ),
    javascript: (
      <SiJavascript className="h-10 w-10 rounded-full border bg-primary p-2 text-yellow-400" />
    ),
    html: (
      <SiHtml5 className="h-10 w-10 rounded-full border bg-primary p-2 text-orange-500" />
    ),
    css: (
      <SiCss3 className="h-10 w-10 rounded-full border bg-primary p-2 text-blue-500" />
    ),
  };

  return (
    <div id="projects"ref={sectionRef} className="container min-h-screen px-4 py-16 text-white">
    <div className="mx-auto mb-16 max-w-6xl text-center">
      <h2 className={`text-4xl font-bold md:text-5xl         transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay:"100ms" }}
          >
        A small selection of{" "}
        <span className="text-purple-400">recent projects</span>
      </h2>
    </div>

    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project,index) => (
        <div
          key={project.id}
          className={`flex flex-col overflow-hidden rounded-3xl bg-gray-800 bg-opacity-30  hover:scale-[1.02] hover:shadow-lg"
        transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${(index + 1) * 150}ms` }}
          >
          <div className="relative h-56 overflow-hidden bg-gray-700">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          <div className="flex-grow p-6">
            <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
            <p className="mb-6 line-clamp-3 text-gray-300">
              {project.description}
            </p>
          </div>

          <div className="p-6 pt-0">
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {project.technologies.slice(0, 5).map((tech, index) => (
                  <div
                    key={index}
                    className="transition-transform hover:z-10 hover:scale-110 hover:transform"
                  >
                    {techIcons[tech]}
                  </div>
                ))}
              </div>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-1 text-purple-400"
              >
                <span>Check Live Site</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default RecentProjectsSection;
