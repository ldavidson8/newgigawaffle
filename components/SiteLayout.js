import Footer from "./Footer";
import NavBlue from "./NavBlue";

const SiteLayout = ({ children }) => {
  return (
    <div>
      <NavBlue />
      {children}
      <Footer />
    </div>
  );
};

export default SiteLayout;
