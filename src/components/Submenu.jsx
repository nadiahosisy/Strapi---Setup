import { useGlobalContext } from "../context/Context";
import sublinks from "../data";
const Submenu = () => {
  const { pageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  console.log(currentPage);
  return <h2>Submenu</h2>;
};

export default Submenu;
