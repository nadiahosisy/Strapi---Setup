import { useGlobalContext } from "../context/Context";
import sublinks from "../data";

const NavLinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={() => setPageId(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
