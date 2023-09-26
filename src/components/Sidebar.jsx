import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/Context";
import sublinks from "../data";

const Sidebar = () => {
  const { isSidebar, closeSidebar } = useGlobalContext();
  return <h2>Sidebar</h2>;
};

export default Sidebar;
