import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/Context";
import sublinks from "../data";

const Sidebar = () => {
  const { isSidebar, closeSidebar } = useGlobalContext();
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <button className="close-btn">
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => {
            console.log(item);
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
