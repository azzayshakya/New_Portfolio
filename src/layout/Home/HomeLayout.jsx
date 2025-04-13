import { Outlet } from "react-router-dom";
import { HomeTopBar } from "./HomeTopBar";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Work", link: "#work" },
  { name: "Projects", link: "#projects" },
  { name: "Contact ", link: "#contact" },
];

const HomeUILayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <HomeTopBar navItems={navItems} />
      <div className="fade-in-up flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeUILayout;
