import { Outlet } from "react-router-dom";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa"; // example icons
import { HomeTopBar } from "./HomeTopBar";

const navItems = [
  { name: "Home", link: "#home", icon: <FaHome /> },
  { name: "About", link: "#about", icon: <FaInfoCircle /> },
  { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
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
