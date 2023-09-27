import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/Context";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    setPageId(null);
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-canter">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
